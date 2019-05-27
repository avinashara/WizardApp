import style from './radioGroup.css';
import getStore from '../../helpers/store';

class RadioButtonOption {
    constructor(options, parentNode, id) {
        this.options = options;
        this.parentNode = parentNode;
        this.id = id;
        this.init();
    }
    init() {
        let container = document.createElement("section"),
            store = getStore(),
            savedData = store.getDetails(`${this.id}`);
        container.classList.add("radio-container");
        this.options.forEach(element => {
            let radioInput = document.createElement("input"),
                label = document.createElement("label");
            radioInput.type = "radio";
            radioInput.classList.add("radio-option");
            radioInput.value = element;
            radioInput.name = "option";
            if (savedData && savedData === element) {
                radioInput.setAttribute("checked", true);
                store.nextBtnRef.removeAttribute("disabled");
            }
            radioInput.addEventListener('change', (e) => {
                store.addDetails(e.target.value, this.id);
                if (store.toBeEnableSubmit()) {
                    store.submitBtnRef.classList.remove("hidden");
                } else if (store.toBeEnableNext()) {
                    store.nextBtnRef.removeAttribute("disabled");
                }
            })
            label.appendChild(radioInput);
            label.appendChild(document.createTextNode(element));
            container.appendChild(label);
        });
        this.parentNode.appendChild(container);
    }
}
export default RadioButtonOption;