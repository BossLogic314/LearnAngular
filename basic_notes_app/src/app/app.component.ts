import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderNavBarComponent } from './header-nav-bar/header-nav-bar.component';
import { NotesComponent } from './notes/notes.component';
import { FooterNavBarComponent } from './footer-nav-bar/footer-nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderNavBarComponent, FooterNavBarComponent, NotesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basic_notes_app';
}
