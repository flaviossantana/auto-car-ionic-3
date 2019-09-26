import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePage} from './home.page';
import {EscolhaPage} from '../escolha/escolha.page';

const routes: Routes = [
    {
        path: '',
        component: HomePage,
    },
    {
        path: 'escolha',
        component: EscolhaPage
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {
}
