import { Component } from '@angular/core';

@Component({
  selector: 'app-range-scroll1',
  templateUrl: './range-scroll1.component.html',
  styleUrls: ['./range-scroll1.component.scss']
})
export class RangeScroll1Component {
    contador: number = 0;
    sliderValue = 0;
    heightDiv = 208
    incrementarContador() {
        this.contador = this.sliderValue
    }

}
