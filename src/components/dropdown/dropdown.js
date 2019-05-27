import style from './dropdown.css';
import getStore from '../../helpers/store';

class DropDown {
    constructor(options, parent, id) {
        this.options = options;
        this.parent = parent;
        this.id = id;
        this.init();
    }
    init() {
        let container = document.createElement("section"),
            store = getStore(),
            savedData = store.getDetails(`${this.id}`),
            selectRef = document.createElement("select"),
            optionRef = document.createElement("option");
        selectRef.classList.add("select-container");
        optionRef.innerText = "--Select--";
        selectRef.appendChild(optionRef);
        this.options.forEach(element => {
            let option = document.createElement("option");
            option.value = element;
            option.classList.add("select-option")
            option.innerText = element;
            if (savedData && savedData === element) {
                option.setAttribute("selected", "selected");
            }
            selectRef.appendChild(option);
        });
        selectRef.addEventListener("change", (e) => {
            let value = e.target.value;
            store.addDetails(value, `${this.id}`);
            if (store.toBeEnableSubmit()) {
                store.submitBtnRef.classList.remove("hidden");;
            } else if (store.toBeEnableNext()) {
                store.nextBtnRef.removeAttribute("disabled");
            }
        });
        container.appendChild(selectRef);
        this.parent.appendChild(container);
    }
}

export default DropDown;