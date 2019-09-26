import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CarroModel} from '../../model/carro.model';


@Component({
    selector: 'app-escolha',
    templateUrl: 'escolha.page.html',
    styleUrls: ['escolha.page.scss']
})
export class EscolhaPage implements OnInit, OnDestroy {

    carro: CarroModel;

    constructor(private route: ActivatedRoute, private router: Router) {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.carro = this.router.getCurrentNavigation().extras.state.carro;
            }
        });
    }


    ngOnInit(): void {
        console.log(this.carro);
    }

    ngOnDestroy(): void {
        console.log('ngOnDestroy:EscolhaPage');
    }

}
