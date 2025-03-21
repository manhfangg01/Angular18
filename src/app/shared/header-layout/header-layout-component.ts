import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'header-layout',
  imports: [RouterLink],
  standalone: true, // Đánh dấu 1 component hoạt động độc lập
  templateUrl: './header-layout-component.html',
  styleUrl: './header-layout-component.css',
})
export class HeaderLayoutComponent {}
