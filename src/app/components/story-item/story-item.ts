import { Component, input, output } from '@angular/core';
import { StoryService } from '@services/story';
import { Story } from '@models/story.model';

@Component({
  selector: 'app-story-item',
  standalone: true,
  imports: [],
  templateUrl: './story-item.html',
  styleUrl: './story-item.css',
})
export class StoryItem {
  story = input.required<Story>();
  storyClicked = output<Story>();

  constructor(public storyService: StoryService) {}
}
