import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from './shared/header-layout/header-layout-component';
import { FormsModule } from '@angular/forms';
import { currencyPipe } from './shared/header-layout/pipes/CurrencyPipe.pipe';
import { uppercasePipe } from './shared/header-layout/pipes/UpperCasePipe.pipe';
import { NgClass, NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
// Những biến được khai báo ở đây có thể dụng ở view tương ứng
export class AppComponent {}

// File chứa các import (Component xử lý các logic, nhúng file)
