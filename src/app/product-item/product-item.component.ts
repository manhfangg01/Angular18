import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { currencyPipe } from '../shared/pipes/CurrencyPipe.pipe';
import { uppercasePipe } from '../shared/pipes/UpperCasePipe.pipe';
import { NgFor, NgIf } from '@angular/common';
import { ProductItems } from '../types/productItem';
@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [
    FormsModule,
    currencyPipe,
    uppercasePipe,
    NgFor,
    // NgClass,

    RouterLink,
  ],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  @Input() products: ProductItems[] = [];
  @Output() dataEvent = new EventEmitter<number>(); // -> Truyền lên number chính là id
  handleDelete = (id: number) => {
    // console.log(id);
    this.dataEvent.emit(id);
  };
}
