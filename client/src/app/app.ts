import {Component } from '@angular/core';

import {HeaderComponent} from './layout/header/header';
import {ShopComponent} from './features/shop/shop';



@Component({
  selector: 'app-root',
  standalone : true,
  imports: [ HeaderComponent, ShopComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'Skinet';
}
