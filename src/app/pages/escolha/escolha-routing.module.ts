import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EscolhaPage} from './escolha.page';

const routes: Routes = [
    {
        path: 'escolha',
        component: EscolhaPage,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EscolhaRoutingModule {
}
