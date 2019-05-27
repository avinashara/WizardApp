
class FetchData {
    constructor(url) {
        this.url = url;
    }
    apiCall() {
        return new Promise((resolve, reject) => {
            let xmlHttpRequest = new XMLHttpRequest();
            xmlHttpRequest.onload = function () {
                if (xmlHttpRequest.status == 200) {
                    resolve(JSON.parse(xmlHttpRequest.response));
                }
            }
            xmlHttpRequest.onerror = function () {
                reject("Network/Server issue !!");
            }
            xmlHttpRequest.open("GET", this.url);
            xmlHttpRequest.send();
        });
    }
}
export default FetchData;