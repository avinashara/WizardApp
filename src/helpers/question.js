import RadioButtonOption from '../components/radiogroup/radioGroup';
import DropDown from '../components/dropdown/dropdown';

export default function renderQuestion(record) {
    if (!record) return null;
    let parent = document.getElementById("main-container"),
        title = document.createElement('section');
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    title.classList.add('title');
    title.appendChild(document.createTextNode(`${record.id}: ${record.title}`));
    parent.appendChild(title);
    if (record.type === "radiogroup") {
        new RadioButtonOption(record.options, parent, record.id);
    }
    else if (record.type === "dropdown") {
        new DropDown(record.options, parent, record.id);
    }
}