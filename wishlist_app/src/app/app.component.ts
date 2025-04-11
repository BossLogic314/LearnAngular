import { Component } from '@angular/core';
import { WishItem } from '../models/WishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  newWishText : string = "";

  createNewWishItem()
  {
    this.wishList.push(new WishItem(this.newWishText, false));
    this.newWishText = "";
  }

  toggleWishItem(item : WishItem, items : WishItem[])
  {
    // Unselecting
    if (item.isDone)
    {
      return;
    }

    // Selecting a different option
    items.forEach((item) => {
      item.isDone = false;
    });

    item.isDone = true;
  }
}
