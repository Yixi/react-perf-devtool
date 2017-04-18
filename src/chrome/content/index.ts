import {MESSAGE, MESSAGE_TYPE} from "../../app/constant";

let havePerf:boolean = false;

function sendMessageToBackground(payload: {message: string}) {
    chrome.runtime.sendMessage({
        type: MESSAGE_TYPE.FROM_CONTENT_SCRIPT,
        payload
    })
}

window.addEventListener('message', event => {
    if (event.source != window) return;

    if (event.data.type && event.data.type === MESSAGE_TYPE.FROM_PAGE) {
        switch (event.data.payload.message) {
            case MESSAGE.NON_PERF:
                break;
            case MESSAGE.DETECTED_PERF:
                havePerf = true;
                sendMessageToBackground({
                    message: MESSAGE.DETECTED_PERF
                });
                break;
        }
    }
});

chrome.runtime.onMessage.addListener((request) => {
    if (request.type && request.type === MESSAGE_TYPE.FROM_DEV_WINDOW) {
        //message from panel
        switch (request.payload.message) {
            case MESSAGE.GET_PAGE_STATUE:
                if (havePerf) {
                    sendMessageToBackground({message: MESSAGE.DETECTED_PERF});
                }
                break;
        }
    }
});