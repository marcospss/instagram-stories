import { Component, signal } from '@angular/core';
import { StoryList } from '@components/story-list/story-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StoryList],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('instagram-stories');
}
