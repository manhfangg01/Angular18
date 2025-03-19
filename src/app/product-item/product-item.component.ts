import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { currencyPipe } from '../shared/pipes/CurrencyPipe.pipe';
import { uppercasePipe } from '../shared/pipes/UpperCasePipe.pipe';
import { NgFor, NgIf } from '@angular/common';
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
  products = [
    { id: 1, name: 'Nike1', price: 4000000, image: 'assets/images/shoe-1.png' },
    {
      id: 2,
      name: 'Adidas1',
      price: 5000000,
      image: 'assets/images/shoe-2.jpg',
    },
    {
      id: 3,
      name: 'Nike2',
      price: 40000000,
      image: 'assets/images/shoe-3.jpg',
    },
    {
      id: 4,
      name: 'Nike3',
      price: 10000000000,
      image: 'assets/images/shoe-4.jpg',
    },
  ];
}
