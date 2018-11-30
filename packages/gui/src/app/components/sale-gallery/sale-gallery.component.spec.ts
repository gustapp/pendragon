import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MessageService } from 'primeng/api';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleGalleryComponent } from './sale-gallery.component';

describe('SaleGalleryComponent', () => {
  let component: SaleGalleryComponent;
  let fixture: ComponentFixture<SaleGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleGalleryComponent ],
      providers: [ MessageService ],
      schemas: [ NO_ERRORS_SCHEMA ]
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
