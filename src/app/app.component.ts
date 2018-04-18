import { Component,NgZone, Injectable, Optional } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Translate } from '@google-cloud/translate';
import { TranslationServiceService } from './services/translation/translation-service.service';

declare var gapi: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  
  title = 'app';
  projectId = "internationalize-1523953329065";
  zone:NgZone;
  r1;
  r2;

  constructor(private translationService:TranslationServiceService){

  }

  ngOnInit(): void {
    // this.apiLoaderService.loadClient().then(
    //     result => this.apiLoaded = true,
    //     err => this.apiLoaded = false
    // );
  }

  initClient(): Promise<any> {
    var API_KEY = "AIzaSyD2vreIeczCP7dnp5T2mHhptkHFlr6UFrA";
    var DISCOVERY_DOC = "";
    var initObj = {
        'apiKey': API_KEY,
        'discoveryDocs': [DISCOVERY_DOC],
    };

    return new Promise((resolve, reject) => {
        this.zone.run(() => {
            gapi.client.init(initObj).then(resolve, reject);
        });
    });
  }

 loadClient(): Promise<any> {
     return new Promise((resolve, reject) => {
         this.zone.run(() => {
                gapi.load('client', {
                    callback: resolve,
                    onerror: reject,
                    timeout: 1000, // 5 seconds.
                    ontimeout: reject
                });
         });
    });
  }

  loadTextTranslation(){
    this.translationService.getTranslatedText("")
    .then(
      res=>{
        this.r1=res;
        console.log('res is: '+JSON.stringify(this.r1));
      }
    );
  }
  
  loadTextTranslationFull(){
    this.r2=this.translationService.getTranslatedTextWithInterface();
    console.log('res2 is: '+JSON.stringify(this.r2));    
  }
}