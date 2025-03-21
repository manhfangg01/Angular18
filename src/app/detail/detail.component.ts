import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { BlogService } from '../../service/BlogService';
import { ProductItems } from '../types/productItem';
import { currencyPipe } from '../shared/pipes/CurrencyPipe.pipe';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [RouterOutlet, currencyPipe, NgIf],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
})
export class DetailComponent implements OnInit {
  id = '';
  productItem: ProductItems = {
    id: 0,
    image: '',
    name: '',
    price: 0,
  };

  constructor(private route: ActivatedRoute, private blogService: BlogService) {
    this.id = String(route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.blogService.detailBlog(+this.id).subscribe(({ data }: any) => {
      this.productItem.id = data.id;
      this.productItem.name = data.title;
      this.productItem.price = data.body;
      this.productItem.image = 'assets/images/shoe-4.jpg';
    });
  }
}
