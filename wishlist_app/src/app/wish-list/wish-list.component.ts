import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { WishItem } from '../../models/WishItem';
import { WishItemComponent } from "../wish-item/wish-item.component";
import { ItemsFilterOptions } from '../../models/ItemsFilterOptions';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wish-list',
  standalone: true,
  imports: [CommonModule, FormsModule, WishItemComponent],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {

  @Input() wishList! : WishItem[];

  filteredWishList : WishItem[] = [];

  itemsFilterOptions : string[] = ItemsFilterOptions.options;
  itemsFilterSelected : string = ItemsFilterOptions.options[0];

  newWishText : string = "";

  ngOnInit()
  {
    this.determineFilteredWishList();
  }

  filterChanged()
  {
    this.determineFilteredWishList();
  }

  determineFilteredWishList()
  {
    switch (this.itemsFilterSelected)
    {
      case 'All':
        this.filteredWishList = this.wishList;
        break;
      case 'Fulfilled':
        this.filteredWishList = this.wishList.filter(item => item.isDone);
        break;
      case 'Unfulfilled':
        this.filteredWishList = this.wishList.filter(item => !item.isDone);
        break;
    }
  }
}
