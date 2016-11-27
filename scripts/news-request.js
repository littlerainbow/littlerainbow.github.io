export class getNews {

    sendRequest(url, key, resource) {
        return fetch(`${url}${resource}${key}`)
            .then((response) => response.json())
            .then((data) => data)
            .catch((error) => console.warn(error))
    }
}
