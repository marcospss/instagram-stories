import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryViewer } from './story-viewer';
import { localStorageMock } from '@mocks/localStorage.mock';

describe('StoryViewer', () => {
  localStorageMock();
  let component: StoryViewer;
  let fixture: ComponentFixture<StoryViewer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoryViewer],
    }).compileComponents();

    fixture = TestBed.createComponent(StoryViewer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
