import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
  ],
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find Grass that Cuts Itself'),
  ];

  filter: any = () => {};
}
