import {Injectable} from '@angular/core';
import {LoadingController} from '@ionic/angular';

@Injectable({providedIn: 'root'})
export class LoadingService {

    constructor(private loadingController: LoadingController) {
    }

    isLoading = false;

    async present(message?: string) {
        this.isLoading = true;
        return await this.loadingController.create({
            message: message || 'Carregando...',
            duration: 5000,
        }).then(a => {
                a.present().then(() => {
                    if (!this.isLoading) {
                        a.dismiss();
                    }
                });
            }
        );
    }

    async dimmiss() {
        this.isLoading = false;
        return await this.loadingController.dismiss().then( a => {
            console.log(a);
        });
    }

}
