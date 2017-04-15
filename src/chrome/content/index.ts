import {MESSAGE, MESSAGE_TYPE} from "../../app/constant";

window.addEventListener('message', event => {
    if (event.source != window) return;

    if (event.data.type && event.data.type === MESSAGE_TYPE.FROM_PAGE) {
        switch (event.data.payload.message) {
            case MESSAGE.NON_PERF:
                break;
        }
    }
});