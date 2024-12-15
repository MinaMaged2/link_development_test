import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  OnInit,
} from '@angular/core';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
import { HomeService } from './services/home.service';
import { Banner } from '../../core/models/banner';
import { ThingsWeDoComponent } from './components/things-we-do/things-we-do.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainBannerComponent, ThingsWeDoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent implements OnInit {
  private homeService = inject(HomeService);

  bannersData!: Banner[];

  ngOnInit(): void {
    this.getBannersData();
  }

  getBannersData() {
    this.homeService.getBanners().subscribe({
      next: (res) => {
        this.bannersData = res.slides;
      },
    });
  }
}
