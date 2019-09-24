import {Injectable} from '@angular/core';
import {AlertController} from '@ionic/angular';
import {LoadingService} from './loading.service';

@Injectable({providedIn: 'root'})
export class AlertService {

    constructor(
        private alertController: AlertController,
        private loading: LoadingService
    ) {

    }

    async present(title?: string, subtitle?: string, text?: string) {
        this.loading.dimmiss();
        const alert = await this.alertController.create({
            header: title,
            subHeader: subtitle,
            message: text,
            buttons: ['Ok']
        });
        await alert.present();
    }

}
