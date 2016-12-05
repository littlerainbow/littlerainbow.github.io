/**
 * Created by Artsiom_Papou on 12/5/2016.
 */
import {getNews} from "./news-request";

class ProxyRequest extends getNews {
    const requestCache = {};
    const requests = new getNews();

    return {
        res: resource,
        data: {}
    }
}

export ProxyRequest;