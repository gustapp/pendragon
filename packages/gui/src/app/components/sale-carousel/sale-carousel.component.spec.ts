import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleCarouselComponent } from './sale-carousel.component';

describe('SaleCarouselComponent', () => {
  let component: SaleCarouselComponent;
  let fixture: ComponentFixture<SaleCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
