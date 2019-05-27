import FetchData from './helpers/serverCall';
import getStore from './helpers/store';
import renderQuestion from './helpers/question';
import Actions from './components/footeractions/action';

class App {
    constructor() {
        this.mainContainer = document.getElementById("main-container");
        this.url = " http://www.mocky.io/v2/5cead61c330000da397c38e9";
        this.init();
    }
    init() {
        this.mainContainer.appendChild(document.createTextNode('Loading...'));
        new FetchData(this.url).apiCall().then((data) => {
            let store = getStore();
            store.saveFecthedData(data);
            store.addDetails(1, 'page');
            store.currentCountRef.innerText = 1;
            store.totalCountRef.innerText = data.length;
            renderQuestion(data[0]);
            new Actions();
        }).catch((err) => {
            getStore().errorMsgRef.style.display = 'inline';
        });
    }
}
export default App;