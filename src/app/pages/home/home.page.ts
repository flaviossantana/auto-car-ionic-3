import {Component, OnInit} from '@angular/core';

import {CarroModel} from '../../model/carro.model';
import {CarroService} from '../../service/carro.service';
import {AlertController, LoadingController, NavController} from '@ionic/angular';
import {LoadingService} from '../../core/service/loading.service';
import {HttpErrorResponse} from '@angular/common/http';
import {AlertService} from '../../core/service/alert.service';
import {NavigationExtras, Router} from '@angular/router';
import {DadoService} from '../../core/service/dado.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    public carros: CarroModel[];

    constructor(
        private router: Router,
        private carroService: CarroService,
        private loading: LoadingService,
        private alert: AlertService,
        private dadoService: DadoService
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

    selecionar(carro: CarroModel, id: number) {
        // this.dadoService.setDado(id, carro);
        const extras: NavigationExtras = {
            state: {
                carro
            }
        };

        this.router.navigate(['/escolha'], extras);
    }

}
