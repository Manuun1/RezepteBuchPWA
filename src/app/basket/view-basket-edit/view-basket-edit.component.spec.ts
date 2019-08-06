import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBasketEditComponent } from './view-basket-edit.component';

describe('ViewBasketEditComponent', () => {
  let component: ViewBasketEditComponent;
  let fixture: ComponentFixture<ViewBasketEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBasketEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBasketEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
