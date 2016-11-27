export class NewsStorage {
	constructor(sources){
		this.sources = sources || {};
		this.currentSourse = this.sources.default ? this.sources.default : "";
	}
	setDefaultResaurse(){
        this.currentSourse = this.sources.default ? this.sources.default : "";
		return this.currentSourse;
	}
}