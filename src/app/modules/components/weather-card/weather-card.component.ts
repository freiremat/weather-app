import { Component, Input } from '@angular/core';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { weatherDatas } from 'src/app/models/interfaces/WeatherDatas';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styles: [],

})
export class WeatherCardComponent {
  //dados da previsao do tempo vindos do comp pai
  @Input() weatherDatasInput !: weatherDatas;

  minTemperatureIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;

  constructor() { }

}


/* 
Weather-card e um dumb component, porque ele esta apenas recebendo as inf de um comp pai
No caso, o weather-home e um smart comp, porque ele tem a logica, faz ch de API...
*/