import { Component, computed, effect, input, OnDestroy, output, signal } from '@angular/core';
import { Story } from '@models/story.model';
import { StoryService } from '@services/story';

@Component({
  selector: 'app-story-viewer',
  standalone: true,
  imports: [],
  templateUrl: './story-viewer.html',
})
export class StoryViewer implements OnDestroy {
  stories = input.required<Story[]>();
  initialIndex = input<number>(0);
  isOpen = input<boolean>(false);
  closed = output<void>();

  currentIndex = signal(0);
  progress = signal(0); // 0 a 100

  private timer: ReturnType<typeof setInterval> | null = null;
  private readonly DURATION = 5000; // 5s por story
  private readonly INTERVAL = 50;

  currentStory = computed(() => this.stories()[this.currentIndex()] ?? null);

  constructor(public storyService: StoryService) {
    effect(() => {
      if (this.isOpen()) {
        this.currentIndex.set(this.initialIndex());
        this.startTimer();
      } else {
        this.stopTimer();
      }
    });
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }

  getProgressWidth(index: number): string {
    if (index < this.currentIndex()) return '100%';
    if (index > this.currentIndex()) return '0%';
    return `${this.progress()}%`;
  }

  private startTimer(): void {
    this.stopTimer();
    this.progress.set(0);
    this.timer = setInterval(() => {
      const newProgress = this.progress() + (this.INTERVAL / this.DURATION) * 100;
      if (newProgress >= 100) {
        this.next();
      } else {
        this.progress.set(newProgress);
      }
    }, this.INTERVAL);
  }

  private stopTimer(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  next(): void {
    if (this.currentIndex() < this.stories().length - 1) {
      this.currentIndex.update((i) => i + 1);
      this.startTimer();
    } else {
      this.close();
    }
  }

  prev(): void {
    if (this.currentIndex() > 0) {
      this.currentIndex.update((i) => i - 1);
      this.startTimer();
    }
  }

  close(): void {
    this.stopTimer();
    this.closed.emit();
  }

  handleBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('fixed')) {
      this.close();
    }
  }

  deleteCurrentStory(): void {
    const story = this.currentStory();
    if (!story) return;
    this.storyService.removeStory(story.id);
    if (this.stories().length === 0) {
      this.close();
    } else if (this.currentIndex() >= this.stories().length) {
      this.currentIndex.set(this.stories().length - 1);
    }
    this.startTimer();
  }

  private touchStartX = 0;

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX;
  }

  onTouchEnd(event: TouchEvent): void {
    const delta = event.changedTouches[0].clientX - this.touchStartX;
    if (Math.abs(delta) > 50) {
      delta < 0 ? this.next() : this.prev();
    }
  }
}
