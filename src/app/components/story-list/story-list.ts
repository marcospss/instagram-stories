import { Component, signal } from '@angular/core';
import { AddStoryButton } from '@components/add-story-button/add-story-button';
import { StoryItem } from '@components/story-item/story-item';
import { StoryViewer } from '@components/story-viewer/story-viewer';
import { Story } from '@models/story.model';
import { StoryService } from '@services/story';

@Component({
  selector: 'app-story-list',
  standalone: true,
  imports: [AddStoryButton, StoryItem, StoryViewer],
  templateUrl: './story-list.html',
  styleUrl: './story-list.css',
})
export class StoryList {
  viewerOpen = signal(false);
  viewerIndex = signal(0);

  constructor(public storyService: StoryService) {}

  onStoryAdded(base64: string): void {
    this.storyService.addStory(base64);
  }

  openViewer(story: Story): void {
    const index = this.storyService.stories().findIndex((s) => s.id === story.id);
    this.viewerIndex.set(Math.max(index, 0));
    this.viewerOpen.set(true);
  }

  closeViewer(): void {
    this.viewerOpen.set(false);
  }
}
