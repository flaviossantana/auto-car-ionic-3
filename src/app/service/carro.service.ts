import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CarroModel} from '../model/carro.model';
import {Observable} from 'rxjs';

const API = 'http://localhost:8080/api/carro/';

@Injectable({providedIn: 'root'})
export class CarroService {

    constructor(private http: HttpClient) {
    }

    todos(): Observable<CarroModel []> {
        return this.http
            .get<CarroModel[]>(API + 'listaTodos');
    }

}
