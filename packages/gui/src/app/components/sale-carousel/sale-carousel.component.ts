import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Product } from '../../model/product';

@Component({
  selector: 'app-sale-carousel',
  templateUrl: './sale-carousel.component.html',
  styleUrls: ['./sale-carousel.component.scss']
})
export class SaleCarouselComponent implements OnInit {

  products: Product[];
  selectedProduct: Product;
  displayDialog: boolean;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
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

  onDialogHide() {
    this.selectedProduct = null;
  }
}
