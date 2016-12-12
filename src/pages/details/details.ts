import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AudioProvider} from '../../app/ionic-audio/ionic-audio.module';
import {DetailsService} from './details.service';
import {Slides} from 'ionic-angular';
import {ViewChild} from '@angular/core';

@Component({
    selector: 'page-details',
    templateUrl: 'details.html',
    providers: [DetailsService]

})
export class DetailsPage {
    @ViewChild('mySlider') slider: Slides;

    Details: any[] =
        [{
            list: {},
            details: {
                content: {}
            }
        }];

    singleTrack: any;
    index: number;

    mySlideOptions: any = {
        initialSlide: 1,
        loop: true,
        autoplay: ''

    };

    constructor(public navCtrl: NavController,
                private navParams: NavParams,
                public detailsService: DetailsService) {

        this.mySlideOptions.initialSlide = this.navParams.get('index');

        this.detailsService.getListDetails()
            .subscribe((response)=> {
                this.Details = response
            });

        this.singleTrack = {
            src: "assets/audio/avengers.mp3",
            artist: 'Stephane Wrembel',
            title: 'Avengers',
            preload: 'metadata'
        };

    }

    onTrackFinished(track: any) {
        console.log('Track finished', track);
    }

}


             
           
             
               
            
   
            
     

    
 