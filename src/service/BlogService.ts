import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogItem, ProductItems } from '../app/types/productItem';
import { ResponseData } from '../app/types/responseData';

@Injectable({ providedIn: 'root' }) // Đánh dấu BlogService là một service có thể được sử dụng trong toàn bộ ứng dụng Angular
export class BlogService {
  constructor(private http: HttpClient) {}

  getBlogs(): Observable<ResponseData<ProductItems[]>> {
    return this.http.get<any>('https://ninedev-api.vercel.app/blogs');
  }

  detailBlog(id: number): Observable<ResponseData<ProductItems>> {
    return this.http.get<any>(`https://ninedev-api.vercel.app/blogs/${id}`);
  }

  postBlog(blogItem: BlogItem): Observable<ResponseData<ProductItems>> {
    return this.http.post<any>(
      `https://ninedev-api.vercel.app/blogs`,
      blogItem
    );
  }
  deleteBlog(id: number): Observable<ResponseData<ProductItems>> {
    return this.http.delete<any>(`https://ninedev-api.vercel.app/blogs/${id}`);
  }
}

// Mục tiêu của service giúp tối ưu code và tránh lặp code
