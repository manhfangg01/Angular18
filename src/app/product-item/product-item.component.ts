import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
} from '@angular/core';
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
    NgIf,
  ],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent implements OnChanges, OnDestroy {
  @Input() products: ProductItems[] = [];
  @Output() dataEvent = new EventEmitter<number>(); // -> Truyền lên number chính là id
  handleDelete = (id: number) => {
    // console.log(id);
    this.dataEvent.emit(id);
  };
  get totalPrice(): number {
    const sum = this.products.reduce((total, item) => {
      return total + item.price;
    }, 0);
    return sum;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['products'].previousValue);
    console.log(changes['products'].currentValue);
    console.log(changes['products'].firstChange);
    console.log(changes['products'].isFirstChange);
  }

  ngOnDestroy(): void {
    console.log('Component is removed');
  }
}
