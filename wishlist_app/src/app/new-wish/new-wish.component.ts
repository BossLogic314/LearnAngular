import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-wish',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-wish.component.html',
  styleUrl: './new-wish.component.css'
})
export class NewWishComponent {

  newWishText : string = '';

  @Output() newWishAdded : EventEmitter<string> = new EventEmitter<string>();

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

    this.newWishAdded.emit(this.newWishText);

    this.newWishText = '';
  }
}
