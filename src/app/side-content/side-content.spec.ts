import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideContent } from './side-content';

describe('SideContent', () => {
  let component: SideContent;
  let fixture: ComponentFixture<SideContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideContent],
    }).compileComponents();

    fixture = TestBed.createComponent(SideContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
