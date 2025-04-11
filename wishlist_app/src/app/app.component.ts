import { Component } from '@angular/core';
import { WishItem } from '../models/WishItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wishlist_app';

  wishList = [
    new WishItem("Learn angular", false),
    new WishItem("Watch football", true),
    new WishItem("Start exercising", false),
    new WishItem("Watch movies", false)
  ];

  toggleWishItem(item : WishItem)
  {
    item.isDone = !item.isDone;
    console.log(`Toggle the wish item : ${item.wishText} -> ${item.isDone}`);
  }
}
