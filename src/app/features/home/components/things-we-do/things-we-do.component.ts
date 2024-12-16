import { Component, OnInit } from '@angular/core';
import { ThingsWeDoCard } from '../../../../core/models/things-we-do-card';
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'app-things-we-do',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './things-we-do.component.html',
  styleUrl: './things-we-do.component.scss'
})
export class ThingsWeDoComponent implements OnInit{

  cars: ThingsWeDoCard[] = [
    {
      itemTitle: "Crafty Mind",
      image: "assets/imgs/things-we-do-3.png",
      url: "/"
    },
    {
      itemTitle: "Services",
      image: "assets/imgs/things-we-do-4.png",
      url: "/"
    },
    {
      itemTitle: "Envision",
      image: "assets/imgs/things-we-do-1.png",
      url: "/"
    },
    {
      itemTitle: "Envision",
      image: "assets/imgs/things-we-do-2.png",
      url: "/"
    },
    {
      itemTitle: "Transformation",
      image: "assets/imgs/things-we-do-3.png",
      url: "/"
    }
  ]

  groupedItems: Array<any[]> = [];

  ngOnInit() {
    this.groupedItems = this.groupArray(this.cars, 2); // Group into pairs
  }

  groupArray(arr: any[], groupSize: number): Array<any[]> {
    const grouped = [];
    for (let i = 0; i < arr.length; i += groupSize) {
      grouped.push(arr.slice(i, i + groupSize));
    }
    return grouped;
  }
}
