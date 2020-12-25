import { Component, OnInit } from '@angular/core';
interface sortBy {
  sort: string,
  code: string
}

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})


export class ShopComponent implements OnInit {

  activeIndex: number = 0;
  cities: sortBy[];
  selectedCity: sortBy;

  constructor() { 
    this.cities = [
      {sort: 'ราคา: จากน้อยไปมาก', code: 'LowToHigh'},
      {sort: 'ราคา: จากมากไปน้อย', code: 'HighToLow'},
    ];
  }

  ngOnInit() {
    
  }

}
