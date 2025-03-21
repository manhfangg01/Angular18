import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { BlogService } from '../../service/BlogService';
import { ProductItems } from '../types/productItem';
import { currencyPipe } from '../shared/pipes/CurrencyPipe.pipe';
import { NgIf } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  name = new FormControl('');
  price = new FormControl('');
  constructor(private blogService: BlogService) {}

  handleAddCart() {
    console.log(this.name.value);
  }
}
