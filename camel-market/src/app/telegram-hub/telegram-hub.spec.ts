import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelegramHub } from './telegram-hub';

describe('TelegramHub', () => {
  let component: TelegramHub;
  let fixture: ComponentFixture<TelegramHub>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelegramHub],
    }).compileComponents();

    fixture = TestBed.createComponent(TelegramHub);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
