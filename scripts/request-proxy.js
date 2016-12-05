/**
 * Created by Artsiom_Papou on 12/5/2016.
 */
import getNews from "./news-request";


class ProxyRequest extends getNews {

    constructor(key){
        super();
        this.requestCache = {};
        this.time = new Date();
        this.APIkey = key;
    }

    isItTimeToUpdate (){
        let updateTime = 5; //min
        let now = new Date();

        if(now.getMinutes() - this.time.getMinutes() > updateTime) {
            this.time = now;
            return true;
        } else {
            return false;
        }
    }

    getNews(resource){

        const requests = new getNews(this.APIkey);
        if(!this.requestCache[resource]) {
            return requests.sendRequest(resource)
                .then(data => {
                    this.requestCache[resource] = data;
                    console.log(1)
                    console.log(requestCache)
                    return this.requestCache[resource];
                })
                .catch((error) => console.warn(error));
        } else {
            if (!this.isItTimeToUpdate()){
                console.log(2)
                console.log(this.requestCache)
                return this.requestCache[resource];
            } else {
                return requests.sendRequest(resource)
                    .then(data => {
                        this.requestCache[resource] = data;
                        console.log(3)
                        console.log(this.requestCache)
                        return this.requestCache[resource];
                    })
                    .catch((error) => console.warn(error))
            }
        }
    }
}

export default ProxyRequest;