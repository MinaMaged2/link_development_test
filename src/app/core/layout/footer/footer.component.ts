import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  linksData: { header: string; links: { label: string; url: string }[] }[] = [
    {
      header: 'Company',
      links: [
        { label: 'About', url: '/' },
        { label: 'Careers', url: '/' },
        { label: 'Mobile', url: '/' },
      ],
    },

    {
      header: 'Contact',
      links: [
        { label: 'Help/FAQ', url: '/' },
        { label: 'Press', url: '/' },
        { label: 'Affilates', url: '/' },
      ],
    },

    {
      header: 'Media',
      links: [
        { label: 'News', url: '/' },
        { label: 'Photo', url: '/' },
        { label: 'Video', url: '/' },
      ],
    },
  ];
}
