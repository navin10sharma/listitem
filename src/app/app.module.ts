import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { DetailsPage } from '../pages/details/details';
import { IonicAudioModule, AudioProvider, audioProviderfactory } from './ionic-audio/ionic-audio.module';
@NgModule({
  declarations: [
    MyApp,
    Page1,
    DetailsPage
    ],
  imports: [
    IonicModule.forRoot(MyApp),
     IonicAudioModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    DetailsPage
  ],
  providers: [ { provide: AudioProvider, useFactory: audioProviderfactory }]
})
export class AppModule {}
