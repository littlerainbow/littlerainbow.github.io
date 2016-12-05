// let intance = null;
class getNews {

    constructor(APIkey){

        // if(!intance) {
        //     intance = this;
        // }

        this.url = "https://newsapi.org/v1/articles?source=";
        this.key = APIkey;

        // return intance;
    }

    sendRequest(resource) {
        return fetch(`${this.url}${resource}${this.key}`)
            .then((response) => response.json())
            .then((data) => data)
            .catch((error) => console.warn(error))
    }
}

export default getNews;
