import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class DadoService {
    constructor() {
    }

    private dados = [];

    setDado(id, dado) {
        this.dados[id] = dado;
    }

    getDado(id) {
        return this.dados[id];
    }
}
