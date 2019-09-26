import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot} from '@angular/router';
import {DadoService} from '../service/dado.service';

@Injectable({providedIn: 'root'})
export class DadoResolverService {

    constructor(private dadoService: DadoService) {}

    resolve(route: ActivatedRouteSnapshot) {
        const id = route.paramMap.get('id');
        return this.dadoService.getDado(id);
    }

}
