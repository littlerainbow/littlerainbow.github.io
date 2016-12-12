

//apikey bGSTn2sSr6wKxYHPADjJNkPZA90zBG2Q
//url https://api.mlab.com/api/1/databases/ds159737/collections/news/


class dbProvaider {
	constructor(db, collections, apikey){
		this.apiKey = "&apiKey=" + apikey;
		this.url = 'https://api.mlab.com/api/1/databases/' + db + '/collections/' + collections + '/?';
	}

	get(query){
		const query = query ? "q=" + JSON.stringify(query) : ""; 
		return fetch(`${this.url}${query}${this.apiKey}`);
	}

	post(data){
		return fetch(this.url, {
			method: "post",
			body: JSON.stringify(data)
		})
	},
	put(data){
		return fetch(this.url, {
			method: "put",
			body: JSON.stringify(data)
		})
	}
}

export default dbProvaider;