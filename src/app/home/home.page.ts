import {Component} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    public carros;

    constructor() {
        this.carros = [];
        this.carros.push({modelo: 'Civic XLS', valor: '45.700,00'});
        this.carros.push({modelo: 'Corola XEI', valor: '62.990,00'});
        this.carros.push({modelo: 'Fit LSL', valor: '39.550,00'});
        this.carros.push({modelo: 'Ecosport Freestyle', valor: '52.320,00'});
        this.carros.push({modelo: 'Onix Joy', valor: '35.120,00'});
        this.carros.push({modelo: 'Onix Plus', valor: '49.550,00'});
        this.carros.push({modelo: 'Gol Power', valor: '37.340,00'});
        this.carros.push({modelo: 'Thiida Grand', valor: '22.750,00'});
        this.carros.push({modelo: 'I30', valor: '32.970,00'});
        this.carros.push({modelo: 'Edge Titanium', valor: '82.990,00'});
        this.carros.push({modelo: 'Cruze LTZ', valor: '62.830,00'});
        this.carros.push({modelo: 'T-Cross TSI', valor: '72.350,00'});
        this.carros.push({modelo: 'Virtus 200TSI', valor: '56.321,00'});
        this.carros.push({modelo: 'Fox Tred', valor: '33.256,00'});
    }


}
