import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './layout/header/header';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone : true,
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  baseUrl = 'https://localhost:7277/api/';
  private http= inject(HttpClient);
  title = 'Skinet';
  products: any = [];

  ngOnInit() {
    this.http.get<any>(this.baseUrl+ 'products').subscribe({
      next: response => this.products = response.data,
      error: error => console.log(error),
      complete: () => console.log('complete'),
    })
  }
}
