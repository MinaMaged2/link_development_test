import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Banner } from '../../../../core/models/banner';

@Component({
  selector: 'app-banner-item',
  standalone: true,
  imports: [],
  templateUrl: './banner-item.component.html',
  styleUrl: './banner-item.component.scss'
})
export class BannerItemComponent implements OnInit{
  @Input() bannerItem!: Banner;
  @Input() totalSlides!: Banner[];
  @Output() dotClick = new EventEmitter<number>();

  paginationDots: number[] = [];
  @Input() currentSlide: number = 0;

  ngOnInit(): void {
    console.log(this.currentSlide)
    this.paginationDots = Array.from({ length: this.totalSlides.length }, (_, i) => i);

  }
  ngAfterViewInit(): void {
  }

  goToSlide(slideIndex: number){
    this.dotClick.emit(slideIndex)
  }
}
