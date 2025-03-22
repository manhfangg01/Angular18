import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { BlogService } from '../../service/BlogService';
import { BlogItem, ProductItems } from '../types/productItem';
import { currencyPipe } from '../shared/pipes/CurrencyPipe.pipe';
import { NgIf } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  product = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
  });

  get name() {
    return this.product.get('name');
  }
  get price() {
    return this.product.get('price');
  }

  constructor(private blogService: BlogService, private router: Router) {}
  isValid1 = false;
  isValid2 = false;
  handleAddCart() {
    if (this.name?.hasError('required') || this.price?.hasError('required')) {
      if (this.name?.hasError('required')) {
        this.isValid1 = true;
      }
      if (this.price?.hasError('required')) {
        this.isValid2 = true;
      }
      return;
    }
    const blogItem: BlogItem = {
      id: Math.random(),
      title: String(this.name?.value),
      body: String(this.price?.value),
      author: 'Mario',
    };
    this.blogService.postBlog(blogItem).subscribe(({ data }: any) => {
      if (data.id) {
        // Nếu như post thành công nghĩa là API đã có data.id được thêm lên rồi
        this.router.navigate(['/']);
      }
    });
  }
}
