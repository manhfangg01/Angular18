import {
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from '../shared/header-layout/header-layout-component';
import { FormsModule } from '@angular/forms';
import { currencyPipe } from '../shared/pipes/CurrencyPipe.pipe';
import { uppercasePipe } from '../shared/pipes/UpperCasePipe.pipe';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ProductItems } from '../types/productItem';
import { ProductItemComponent } from '../product-item/product-item.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BlogService } from '../../service/BlogService';
import { filter, map, Subscription } from 'rxjs';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderLayoutComponent,
    FormsModule,
    currencyPipe,
    uppercasePipe,
    NgFor,
    // NgClass,
    NgIf,
    RouterLink,
    ProductItemComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
// Những biến được khai báo ở đây có thể dụng ở view tương ứng
export class HomeComponent implements OnInit, OnDestroy {
  // text
  title = 'angular-basic-project';
  obj = { ten: 'Manh', tuoi: 20 };

  // Properties
  isDisable = true;

  // Attributes
  contentImage = 'Hello World';

  // #Bai7: Event
  nameBtn = 'Click Me!';
  clickMessage = '';

  handleClickMe(): void {
    this.clickMessage = 'You click I say hello';
  }
  updateField(): void {
    console.log('Hello Ku');
  }

  // #Bai8: Two-way-Binding
  bindingMessage = '';

  // #Bai11
  products: ProductItems[] = [
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

  // #Bai12
  // isActive = true;
  isVisible = true;

  //#Bai17
  // handleDelete = (id: number) => {
  //   // const productIndex = this.products.findIndex((item) => item.id == id);
  //   // if (productIndex !== -1) {
  //   //   this.products.splice(productIndex, 1);
  //   // }
  //   this.products = this.products.filter((item) => item.id !== id);
  // };

  getBlogApi: Subscription;

  // #20 Creation Session
  constructor(private blogService: BlogService) {
    this.getBlogApi = new Subscription();
  }

  ngOnInit(): void {
    console.log('Initialized Component');

    this.getBlogApi = this.blogService
      .getBlogs()
      .pipe(
        map(({ data }) =>
          data.map((item: any) => {
            return {
              ...item,
              name: item.title,
              price: Number(item.body),
              image: 'assets/images/shoe-3.jpg',
            };
          })
        )
      )
      .subscribe((res) => {
        this.products = res;
      });
  }
  ngOnDestroy(): void {
    if (this.getBlogApi) {
      this.getBlogApi.unsubscribe();
      console.log('getBlogApi unsubscribed');
    }
  }
  handleChangeVisible = () => {
    this.isVisible = false;
  };

  handleDelete = (id: number) => {
    this.blogService.deleteBlog(id).subscribe(({ data }: any) => {
      if (data == 1) {
        // Data==1 tức là xóa thành công
        // Data==0 thì là xóa không thành công
        this.products = this.products.filter((item) => item.id !== id);
      }
    });
  };
}
