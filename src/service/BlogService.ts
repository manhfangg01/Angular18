import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductItems } from '../app/types/productItem';
import { ResponseData } from '../app/types/responseData';

@Injectable({ providedIn: 'root' }) // Đánh dấu BlogService là một service có thể được sử dụng trong toàn bộ ứng dụng Angular
export class BlogService {
  constructor(private http: HttpClient) {}

  getBlogs(): Observable<ResponseData<ProductItems[]>> {
    return this.http.get<any>('https://ninedev-api.vercel.app/blogs');
  }
}

// Mục tiêu của service giúp tối ưu code và tránh lặp code
