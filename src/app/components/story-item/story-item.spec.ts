import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoryItem } from './story-item';
import { localStorageMock } from '@mocks/localStorage.mock';

describe('StoryItem', () => {
  localStorageMock();
  let component: StoryItem;
  let fixture: ComponentFixture<StoryItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoryItem],
    }).compileComponents();

    fixture = TestBed.createComponent(StoryItem);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('story', {
      id: '1',
      imageBase64: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA',
      createdAt: Date.now(),
      username: 'testuser',
    });

    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
