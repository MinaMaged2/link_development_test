import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, DropdownModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

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
