import { Component, OnInit } from '@angular/core';
import { SelectItem, MessageService } from 'primeng/api';

import { Product } from '../../model/product';

@Component({
  selector: 'app-sale-gallery',
  templateUrl: './sale-gallery.component.html',
  styleUrls: ['./sale-gallery.component.scss']
})
export class SaleGalleryComponent implements OnInit {

  products: Product[];

  selectedProduct: Product;

  displayDialog: boolean;

  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  constructor(private messageService: MessageService) { }

  ngOnInit() {

    this.sortOptions = [
      {label: 'Newest First', value: '!year'},
      {label: 'Oldest First', value: 'year'},
      {label: 'Label', value: 'label'}
    ];

    this.products = [
      {label: 'product 1'},
      {label: 'product 2'},
      {label: 'product 3'},
      {label: 'product 4'},
      {label: 'product 5'},
      {label: 'product 6'},
      {label: 'product 7'}
    ];
  }

  selectProduct(event: any, product: Product) {
    this.messageService.add({severity: 'info', summary: 'Product Selected', detail: 'Label:' + product.label});
    this.selectedProduct = product;
    this.displayDialog = true;
    event.preventDefault();
  }

  onSortChange(event: any) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    } else {
        this.sortOrder = 1;
        this.sortField = value;
    }
  }

  onDialogHide() {
    this.selectedProduct = null;
  }
}
