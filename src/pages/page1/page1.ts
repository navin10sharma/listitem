import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DetailsPage} from '../../pages/details/details';
import {Service} from './page1.service';

@Component({
    selector: 'page-page1',
    templateUrl: 'page1.html',
    providers: [Service]

})
export class Page1 {
    list: any[] = [];

    constructor(public navCtrl: NavController, public service: Service) {
        this.service.getList()
            .subscribe((response)=> {
                this.list = response;
            })
    }

    cardDetails(index) {
        this.navCtrl.push(DetailsPage , {
            index : index
        });
    }

}
