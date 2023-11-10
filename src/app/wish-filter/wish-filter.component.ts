import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishItem } from '../../shared/models/wishItem';
import { FormsModule } from '@angular/forms';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isCompleted,
  (item: WishItem) => item.isCompleted,
];

@Component({
  selector: 'wish-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css',
})
export class WishFilterComponent {
  @Output() filter = new EventEmitter<any>();

  ngOnInit(): void {
    this.filter.emit(filters[0]);
  }

  listFilter: any = '0';

  changeFilter(value: any) {
    this.filter.emit(filters[value]);
  }
}
