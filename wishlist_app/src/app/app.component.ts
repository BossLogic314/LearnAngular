import { Component } from '@angular/core';
import { WishItem } from '../models/WishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemsFilterOptions } from '../models/ItemsFilterOptions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  wishList : WishItem[] = [
    new WishItem("Learn angular", false),
    new WishItem("Watch football", true),
    new WishItem("Start exercising", false),
    new WishItem("Watch movies", false)
  ];

  filteredWishList: WishItem[] = [];

  itemsFilterOptions : string[] = ItemsFilterOptions.options;
  itemsFilterSelected : string = ItemsFilterOptions.options[0];

  newWishText : string = "";

  ngOnInit()
  {
    this.determineFilteredWishList();
  }

  keyPressedOnCreateNewWishItem(event : KeyboardEvent)
  {
    // Enter was not pressed
    if (event.key != "Enter")
    {
      return;
    }

    this.createNewWishItem();
  }

  createNewWishItem()
  {
    // No text was entered
    if (this.newWishText.length == 0)
    {
      return;
    }

    this.wishList.push(new WishItem(this.newWishText, false));
    this.newWishText = "";

    this.determineFilteredWishList();
  }

  toggleWishItem(item : WishItem, items : WishItem[])
  {
    item.isDone = !item.isDone;

    this.determineFilteredWishList();
  }

  determineFilteredWishList()
  {
    switch (this.itemsFilterSelected)
    {
      case "All":
        this.filteredWishList = this.wishList;
        break;
      case "Fulfilled":
        this.filteredWishList = this.wishList.filter(item => item.isDone);
        break;
      case "Unfulfilled":
        this.filteredWishList = this.wishList.filter(item => !item.isDone);
        break;
    }
  }

  filterChanged()
  {
    this.determineFilteredWishList();
  }
}
