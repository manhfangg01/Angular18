import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { BlogService } from '../../service/BlogService';
import { ProductItems } from '../types/productItem';
import { currencyPipe } from '../shared/pipes/CurrencyPipe.pipe';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent implements OnInit {
  id = '';
  productItem: ProductItems = {
    id: 0,
    image: '',
    name: '',
    price: 0,
  };

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.detailBlog(+this.id).subscribe(({ data }: any) => {
      this.productItem.id = data.id;
      this.productItem.name = data.title;
      this.productItem.price = data.body;
      this.productItem.image = 'assets/images/shoe-4.jpg';
    });
  }
}
