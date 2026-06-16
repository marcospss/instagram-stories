import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryList } from './story-list';
import { localStorageMock } from '@mocks/localStorage.mock';

describe('StoryList', () => {
  localStorageMock();
  let component: StoryList;
  let fixture: ComponentFixture<StoryList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoryList],
    }).compileComponents();

    fixture = TestBed.createComponent(StoryList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
