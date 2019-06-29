import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRecipiesDetailComponent } from './view-recipies-detail.component';

describe('ViewRecipiesDetailComponent', () => {
  let component: ViewRecipiesDetailComponent;
  let fixture: ComponentFixture<ViewRecipiesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRecipiesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRecipiesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
