export class getNews {

    constructor(APIkey){
        this.url =
        this.key = APIkey;
    }

    sendRequest(resource) {
        return fetch(`${this.url}${resource}${this.key}`)
            .then((response) => response.json())
            .then((data) => data)
            .catch((error) => console.warn(error))
    }
}
