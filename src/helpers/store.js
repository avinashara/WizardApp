export default function getStore() {
    return {
        saveFecthedData: (data) => {
            sessionStorage.setItem('fetchedData', JSON.stringify(data));
        },
        getFetchedData: () => {
            return JSON.parse(sessionStorage.getItem('fetchedData'));
        },
        addDetails: (data, type) => {
            sessionStorage.setItem(type, JSON.stringify(data));
        },
        getDetails: (type) => {
            return JSON.parse(sessionStorage.getItem(type));
        },
        currentCountRef: document.getElementById("ccount"),
        totalCountRef: document.getElementById("tcount"),
        errorMsgRef: document.getElementById("error-msg"),
        preBtnRef: document.getElementById("previous"),
        nextBtnRef: document.getElementById("next"),
        submitBtnRef: document.getElementById("submit"),
        toBeEnableSubmit: function () {
            let data = JSON.parse(sessionStorage.getItem('fetchedData')),
                page = JSON.parse(sessionStorage.getItem("page"));
            return data.length === +page;
        },
        toBeEnableNext: function () {
            let data = JSON.parse(sessionStorage.getItem('fetchedData')),
                page = JSON.parse(sessionStorage.getItem("page"));
            return data.length > +page;
        }
    }
}