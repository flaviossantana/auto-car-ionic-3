import {NgModule} from '@angular/core';
import {EscolhaPage} from './escolha.page';
import {IonicModule} from '@ionic/angular';
import {EscolhaRoutingModule} from './escolha-routing.module';

@NgModule({
    imports: [
        IonicModule,
        EscolhaRoutingModule
    ],
    declarations: [
        EscolhaPage
    ]
})
export class EscolhaModule {

}
