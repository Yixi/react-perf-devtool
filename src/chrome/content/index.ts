import {MESSAGE_TYPE} from "../../app/constant";

window.addEventListener('message', event => {
    if (event.source != window) return;

    if (event.data.type && event.data.type === MESSAGE_TYPE.FROM_PAGE) {
        console.log(event.data.payload);
    }
});