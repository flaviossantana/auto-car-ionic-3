import {NgModule} from '@angular/core';
import {EscolhaPage} from './escolha.page';
import {IonicModule} from '@ionic/angular';
import {EscolhaRoutingModule} from './escolha-routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        EscolhaRoutingModule
    ],
    declarations: [
        EscolhaPage
    ]
})
export class EscolhaModule {

}
