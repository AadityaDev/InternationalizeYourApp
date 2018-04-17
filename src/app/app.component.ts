import { Component } from '@angular/core';
import { Translate } from '@google-cloud/translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  projectId = "internationalize-1523953329065";
  translate:Translate = new Translate({ projectId: this.projectId});

  translateText(source:String,dest:String,text:String){
  	this.translate.translate(dest,source,dest)
  	.then(results=>{
  		
  	});
  }
//   // Imports the Google Cloud client library
// const Translate = require('@google-cloud/translate');
 
// // Your Google Cloud Platform project ID
// const projectId = 'YOUR_PROJECT_ID';
 
// // Instantiates a client
// const translate = new Translate({
//   projectId: projectId,
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
}
