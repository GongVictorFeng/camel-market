import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeArmy } from './meme-army';

describe('MemeArmy', () => {
  let component: MemeArmy;
  let fixture: ComponentFixture<MemeArmy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemeArmy],
    }).compileComponents();

    fixture = TestBed.createComponent(MemeArmy);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
