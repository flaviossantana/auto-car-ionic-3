import {Component, OnInit} from '@angular/core';

import {CarroModel} from '../model/carro.model';
import {CarroService} from '../service/carro.service';
import {AlertController, LoadingController} from '@ionic/angular';
import {LoadingService} from '../core/service/loading.service';
import {HttpErrorResponse} from '@angular/common/http';
import {AlertService} from '../core/service/alert.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    public carros: CarroModel[];

    constructor(
        private carroService: CarroService,
        private loading: LoadingService,
        private alert: AlertService
    ) {
    }

    ngOnInit(): void {

        this.loading.present();

        this.carroService.todos().subscribe(
            (carros) => {
                this.carros = carros;
                this.loading.dimmiss();
            },
            (error: HttpErrorResponse) => {
                this.alert.present(
                    'Falha na conexão',
                    error.statusText,
                    error.message
                );
            }
        );
    }

    selecionar(carro: CarroModel) {
        console.log(carro);
    }

}
