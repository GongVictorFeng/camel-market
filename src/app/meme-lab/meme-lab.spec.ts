import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeLab } from './meme-lab';

describe('MemeLab', () => {
  let component: MemeLab;
  let fixture: ComponentFixture<MemeLab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemeLab],
    }).compileComponents();

    fixture = TestBed.createComponent(MemeLab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
