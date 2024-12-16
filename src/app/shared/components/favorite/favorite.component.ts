import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss'
})
export class FavoriteComponent {
  @Input() isFav : boolean = false;


  removeFav(){
    this.isFav = false;
  }

  addFav(){
    this.isFav = true;
  }
}
