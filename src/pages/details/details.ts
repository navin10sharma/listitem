import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { MediaPlugin } from 'ionic-native';
import { AudioProvider } from '../../app/ionic-audio/ionic-audio.module';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
  
})
export class DetailsPage {
   myTracks: any[];
  singleTrack: any;
  allTracks: any[];
  selectedTrack: number;


constructor(public navCtrl: NavController,private _audioProvider: AudioProvider ) {
    

  
    this.singleTrack = {
      src: "assets/audio/avengers.mp3",
      artist: 'Stephane Wrembel',
      title: 'Avengers',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
    };

  }

  ngAfterContentInit() {     
    // get all tracks managed by AudioProvider so we can control playback via the API
    this.allTracks = this._audioProvider.tracks; 
  }
    
  onTrackFinished(track: any) {
    console.log('Track finished', track);
  }
}
