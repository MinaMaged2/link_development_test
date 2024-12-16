import { Component, Input } from '@angular/core';
import { News } from '../../../../../../core/models/news';
import { FavoriteComponent } from '../../../../../../shared/components/favorite/favorite.component';

@Component({
  selector: 'app-news-box',
  standalone: true,
  imports: [FavoriteComponent],
  templateUrl: './news-box.component.html',
  styleUrl: './news-box.component.scss'
})
export class NewsBoxComponent {
  @Input() item!: News;
}
