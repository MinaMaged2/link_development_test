import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { MobileNavbarComponent } from './components/mobile-navbar/mobile-navbar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, DropdownModule, FormsModule, MobileNavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  sidebarVisible: boolean = false;
  links: {label: string, url: string}[] = [
    {label: 'Home', url: '/'},
    {label: 'About us', url: '/'},
    {label: 'News', url: '/'},
    {label: 'Contact us', url: '/'},
  ];
  langs: string[] = [
    "EN",
    "AR"
  ];
  
  selectedLang: string = this.langs[0];
  
}
