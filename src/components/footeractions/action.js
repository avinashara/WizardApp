import getStore from '../../helpers/store';
import renderQuestion from '../../helpers/question';

export default class Actions {
    constructor() {
        this.actionRef = document.getElementById("actions-buttons");
        this.init();
    }
    init() {
        this.actionRef.addEventListener('click', (e) => {
            let target = e.target;
            if (target.type === "button") {
                let store = getStore(),
                    curPage = store.getDetails('page'),
                    data = store.getFetchedData();;
                if (target.value === "Next") {
                    if ((curPage+1) <= data.length) {
                        store.currentCountRef.innerText = curPage + 1;
                        store.addDetails(curPage + 1, 'page');
                        store.preBtnRef.removeAttribute("disabled");
                        store.nextBtnRef.setAttribute("disabled", "disabled");
                        renderQuestion(data.slice(curPage, curPage + 1)[0]);
                        // if ((curPage + 1) == (data.length)) {
                        //     store.nextBtnRef.setAttribute("disabled", "disabled");
                        //     // store.submitBtnRef.removeAttribute("disabled");
                        // }
                    } else {
                        store.nextBtnRef.setAttribute("disabled", "disabled");
                        store.errorMsgRef.style.display = 'inline';
                        store.errorMsgRef.innertext = "Reached Maximum Question limit."
                    }
                } else if (target.value === "Previous") {
                    if (curPage > 1) {
                        renderQuestion(data.slice(curPage - 2, curPage)[0]);
                        store.addDetails(curPage - 1, 'page');
                        store.currentCountRef.innerText = curPage - 1;
                        store.nextBtnRef.removeAttribute("disabled");
                        if ((curPage - 1) == 1) {
                            store.preBtnRef.setAttribute("disabled", "disabled");
                        }
                    } else {
                        store.preBtnRef.setAttribute("disabled", "disabled");
                        store.errorMsgRef.style.display = 'inline';
                        store.errorMsgRef.innertext = "Reached Minimum Question limit."
                    }
                } else if (target.value === "Submit") {
                    let text="Answer Submitted :: ";
                    data.forEach(rec => {
                        text += `${rec.id}: ${store.getDetails(rec.id)} `;
                    });
                    alert(text);
                }
            }
        });
    }
}