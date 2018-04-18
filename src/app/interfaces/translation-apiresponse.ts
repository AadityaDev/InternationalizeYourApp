export interface TranslationApiresponse {

	data:Array<Translations>;

}
export interface Translations {

	translatedText:String;
	model:String;

}