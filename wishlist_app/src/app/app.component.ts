import { Component } from '@angular/core';
import { WishItem } from '../models/WishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemsFilterOptions } from '../models/ItemsFilterOptions';
import { WishListComponent } from "./wish-list/wish-list.component";
import { NewWishComponent } from "./new-wish/new-wish.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, WishListComponent, NewWishComponent],
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

  addNewWish(wishText : string)
  {
    this.wishList.push(new WishItem(wishText, false));
  }
}
