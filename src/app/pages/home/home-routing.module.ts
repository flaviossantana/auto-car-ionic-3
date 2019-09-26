import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePage} from './home.page';
import {EscolhaPage} from '../escolha/escolha.page';
import {DadoResolverService} from '../../core/resolve/dado-resolver.service';

const routes: Routes = [
    {
        path: '',
        component: HomePage,
    },
    {
        path: 'escolha',
        component: EscolhaPage,
        resolve: {
            special : DadoResolverService
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {
}
