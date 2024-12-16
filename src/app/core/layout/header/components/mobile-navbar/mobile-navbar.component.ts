import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mobile-navbar',
  standalone: true,
  imports: [SidebarModule, RouterModule, DropdownModule, FormsModule],
  templateUrl: './mobile-navbar.component.html',
  styleUrl: './mobile-navbar.component.scss'
})
export class MobileNavbarComponent {
  @Input() sidebarVisible : boolean = false;

  @Output() hideSideBar = new EventEmitter();
  
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