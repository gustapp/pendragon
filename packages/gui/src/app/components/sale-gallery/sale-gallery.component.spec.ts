import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleGalleryComponent } from './sale-gallery.component';

describe('SaleGalleryComponent', () => {
  let component: SaleGalleryComponent;
  let fixture: ComponentFixture<SaleGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
