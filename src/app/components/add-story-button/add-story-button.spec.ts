import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStoryButton } from './add-story-button';

describe('AddStoryButton', () => {
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
