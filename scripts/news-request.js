// let instance = null;
class getNews {

    constructor(APIkey){

        // if(!instance) {
        //     instance = this;
        // }

        this.url = "https://newsapi.org/v1/articles?source=";
        this.key = APIkey;

        // return instance;
    }

    sendRequest(resource) {
        return fetch(`${this.url}${resource}${this.key}`)
            .then((response) => response.json())
            .then((data) => data)
            .catch((error) => console.warn(error))
    }
}

export default getNews;
