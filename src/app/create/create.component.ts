import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { BlogService } from '../../service/BlogService';
import { ProductItems } from '../types/productItem';
import { currencyPipe } from '../shared/pipes/CurrencyPipe.pipe';
import { NgIf } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  product = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
  });

  get name() {
    return this.product.get('name');
  }
  get price() {
    return this.product.get('price');
  }
  constructor(private blogService: BlogService) {}

  handleAddCart() {
    console.log(this.name?.value);
    console.log(this.price?.value);
  }
}
