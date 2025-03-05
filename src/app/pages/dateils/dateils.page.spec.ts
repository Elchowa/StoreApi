import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DateilsPage } from './dateils.page';

describe('DateilsPage', () => {
  let component: DateilsPage;
  let fixture: ComponentFixture<DateilsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DateilsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
