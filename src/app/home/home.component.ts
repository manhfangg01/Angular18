import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from '../shared/header-layout/header-layout-component';
import { FormsModule } from '@angular/forms';
import { currencyPipe } from '../shared/header-layout/pipes/CurrencyPipe.pipe';
import { uppercasePipe } from '../shared/header-layout/pipes/UpperCasePipe.pipe';
import { NgClass, NgFor, NgIf } from '@angular/common';
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
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
// Những biến được khai báo ở đây có thể dụng ở view tương ứng
export class HomeComponent {
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
  products = [
    { name: 'Nike1', price: 4000000, image: 'assets/images/shoe-1.png' },
    { name: 'Adidas1', price: 5000000, image: 'assets/images/shoe-2.jpg' },
    { name: 'Nike2', price: 40000000, image: 'assets/images/shoe-3.jpg' },
    { name: 'Nike3', price: 10000000000, image: 'assets/images/shoe-4.jpg' },
  ];

  // #Bai12
  // isActive = true;
  isVisible = false;
}

// File chứa các import (Component xử lý các logic, nhúng file)
