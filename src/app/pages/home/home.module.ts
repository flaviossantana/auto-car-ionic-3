import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';

import {HomePage} from './home.page';
import {EscolhaModule} from '../escolha/escolha.module';
import {HomeRoutingModule} from './home-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        EscolhaModule,
        HomeRoutingModule
    ],
    declarations: [HomePage]
})
export class HomeModule {
}
