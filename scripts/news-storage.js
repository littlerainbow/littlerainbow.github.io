let instance = null;

export class NewsStorage {
	constructor(sources){

		if(!instance){
            instance =  this;
		}

		this.sources = sources || {};
		this.currentSourse = this.sources.default ? this.sources.default : "";

		return instance;
	}
	setDefaultResaurse(){
        this.currentSourse = this.sources.default ? this.sources.default : "";
		return this.currentSourse;
	}
}
