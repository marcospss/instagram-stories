import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStoryButton } from './add-story-button';
import { localStorageMock } from '@mocks/localStorage.mock';

describe('AddStoryButton', () => {
  localStorageMock();
  let component: AddStoryButton;
  let fixture: ComponentFixture<AddStoryButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddStoryButton],
    }).compileComponents();

    fixture = TestBed.createComponent(AddStoryButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
