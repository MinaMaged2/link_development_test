import { Component, Input } from '@angular/core';
import { ThingsWeDoCard } from '../../../../../../core/models/things-we-do-card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() item!: ThingsWeDoCard;
}
