let instance = null;

class NewsStorage {
	constructor(sources){

		if(!instance){
			instance = this;
		}

		this.sources = sources || {};
		this.currentSourse = this.sources.default ? this.sources.default : "";

		return this;

	}
	setDefaultResourse(){
        this.currentSourse = this.sources.default ? this.sources.default : "";
		return this.currentSourse;
	}
}

export default NewsStorage;