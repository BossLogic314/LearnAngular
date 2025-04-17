import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WishItem } from '../../models/WishItem';
import { EventService } from '../shared/EventService';

@Component({
  selector: 'app-wish-item',
  standalone: true,
  imports: [],
  templateUrl: './wish-item.component.html',
  styleUrl: './wish-item.component.css'
})
export class WishItemComponent {

  @Input() wishItem! : WishItem;
  @Output() wishItemChanged : EventEmitter<any> = new EventEmitter<any>();

  constructor(private eventService : EventService) {}

  wishItemClicked()
  {
    this.wishItem.isDone = !this.wishItem.isDone;

    this.wishItemChanged.emit();
  }

  removeWishItem(wishText : string)
  {
    this.eventService.emit('removeItem', wishText);
  }
}
