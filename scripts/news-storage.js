let instance = null;


class NewsStorage {
	constructor(sources){

		if(!instance){
			instance = this;
		}

		this.sources = sources || {};
		this.cache = {};
		this.currentSourse = this.sources.default ? this.sources.default : "";

		return instance;
	}
	setDefaultResourse(){
        this.currentSourse = this.sources.default ? this.sources.default : "";
		return this.currentSourse;
	}
	addToCache(source, articles){
		this.cache[source] = articles;
	}
	removeFromCache(source) {
		delete this.cache[source];
	}
	clearCache(){
		this.cache = {};
	}
}

export default NewsStorage;
