import { Component, Input, OnInit } from '@angular/core';
import { weatherDatas } from 'src/app/models/interfaces/WeatherDatas';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
})
export class WeatherCardComponent implements OnInit {
  @Input() weatherDatasInput !: weatherDatas;

  constructor() { }

  ngOnInit() {
    console.log('dados check', this.weatherDatasInput);

  }

}


/* 
Weather-card e um dumb component, porque ele esta apenas recebendo as inf de um comp pai
No caso, o weather-home e um smart comp, porque ele tem a logica, faz ch de API...
*/