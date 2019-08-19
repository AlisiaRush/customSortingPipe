import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortSelectMenuComponent } from './sort-select-menu.component';

describe('SortSelectMenuComponent', () => {
  let component: SortSelectMenuComponent;
  let fixture: ComponentFixture<SortSelectMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortSelectMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortSelectMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
