import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { TranslationApiresponse } from '../../interfaces/translation-apiresponse';

import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class TranslationServiceService {

  translationResult:TranslationApiresponse;
  baseURL = "https://translation.googleapis.com/language/translate/v2";
  httpOptions:HttpHeaders;

  constructor(private http: HttpClient) { 
	// this.httpOptions = {
 //  		headers: new HttpHeaders({
 //    		'Content-Type':  'application/json'
 //    	})
	// };
  }

  getTranslatedText(apiKey:String){
  	// const options = 
   // { params: new HttpParams().set('name', ) };

    const options = { 
    	params: new HttpParams()
    	.set('key', 'AIzaSyD2vreIeczCP7dnp5T2mHhptkHFlr6UFrA')
    	.set('q', 'my name is adi')
    	.set('target', 'ar')
    	.set('source', 'en')
    	.set('model', 'nmt')
    };
  	return this.http.get(this.baseURL,options).toPromise();
  }

  getTranslatedTextWithInterface(){
  	const options = { 
    	params: new HttpParams()
    	.set('key', 'AIzaSyD2vreIeczCP7dnp5T2mHhptkHFlr6UFrA')
    	.set('q', 'my name is adi')
    	.set('target', 'ar')
    	.set('source', 'en')
    	.set('model', 'nmt')
    };
  	return this.http.get<TranslationApiresponse>(this.baseURL,options);
  }

  // getTranslatedTextWithInterfaceFullResponse():  Observable<HttpResponse<TranslationServiceService>>{
  // 	const options = { 
  //   	params: new HttpParams()
  //   	.set('key', 'AIzaSyD2vreIeczCP7dnp5T2mHhptkHFlr6UFrA')
  //   	.set('q', 'my name is adi')
  //   	.set('target', 'ar')
  //   	.set('source', 'en')
  //   	.set('model', 'nmt')
  //   };
  	// return this.http.get<TranslationApiresponse>(this.baseURL,options);
  // }

}
