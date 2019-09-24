import {Component, OnInit} from '@angular/core';

import {CarroModel} from '../model/carro.model';
import {CarroService} from '../service/carro.service';
import {LoadingController} from '@ionic/angular';
import {async} from '@angular/core/testing';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    public carros: CarroModel[];

    constructor(
        private carroService: CarroService,
        private loadCtl: LoadingController) {
    }

    ngOnInit(): void {
        this.carroService.todos().subscribe((carros) => {
            this.carros = carros;
            console.log(this.carros);
        });

    }


}
