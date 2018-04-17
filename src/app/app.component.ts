import { Component,NgZone, Injectable, Optional } from '@angular/core';
import { Translate } from '@google-cloud/translate';
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
  // Imports the Google Cloud client library
 // Translate = require('@google-cloud/translate');
 
// Your Google Cloud Platform project ID
// const projectId = 'YOUR_PROJECT_ID';
 
// Instantiates a client
// translate = new Translate({
//   projectId: this.projectId,
// });
  // translate:Translate = new Translate({ projectId: this.projectId});

  // translateText(source:String,dest:String,text:String){
  // 	this.translate.translate(dest,source,dest)
  // 	.then(results=>{

  // 	});
  // }
//   // Imports the Google Cloud client library
// const Translate = require('@google-cloud/translate');
 
// // Your Google Cloud Platform project ID
// const projectId = 'YOUR_PROJECT_ID';
 
// // Instantiates a client
// const translate = new Translate({
//   pro   jectId: projectId,
// });
 
// // The text to translate
// const text = 'Hello, world!';
// // The target language
// const target = 'ru';
 
// // Translates some text into Russian
// translate
//   .translate(text, target)
//   .then(results => {
//     const translation = results[0];
 
//     console.log(`Text: ${text}`);
//     console.log(`Translation: ${translation}`);
//   })
//   .catch(err => {
//     console.error('ERROR:', err);
//   });


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
}
