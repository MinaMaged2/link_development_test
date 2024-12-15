import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  Input,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { BannerItemComponent } from '../banner-item/banner-item.component';
import { Banner } from '../../../../core/models/banner';

@Component({
  selector: 'app-main-banner',
  standalone: true,
  imports: [BannerItemComponent],
  templateUrl: './main-banner.component.html',
  styleUrl: './main-banner.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainBannerComponent implements OnInit, AfterViewInit {
  @ViewChild('swiper', { static: false })
  swiperContainer!: ElementRef<SwiperContainer>;
  @Input() slidesContent!: Banner[];

  totalSlides: number = 3;
  currentSlide: number = 0;

  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    
  }
  ngAfterViewInit() {
    const swiperParams = {
      slidesPerView: 1,
      loop: true,
      on: {
        init: () => {
          const swiperInstance = this.swiperContainer.nativeElement.swiper;
          this.totalSlides = swiperInstance.slides.length;
          console.log(this.totalSlides);
          this.currentSlide = swiperInstance.realIndex;
        }
      },
    };

    Object.assign(this.swiperContainer.nativeElement, swiperParams);

    this.swiperContainer.nativeElement.swiper.on('slideChange', ()=>{
      this.currentSlide = this.swiperContainer.nativeElement.swiper.realIndex;
      this.cdr.detectChanges();
    })
  }


  goToSlide(index: number) {
    this.swiperContainer.nativeElement.swiper.slideToLoop(index);
  }


}
