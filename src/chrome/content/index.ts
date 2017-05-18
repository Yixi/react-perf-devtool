import {MESSAGE, MESSAGE_TYPE} from "../../app/constant";

let havePerf:boolean = false;

function sendMessageToBackground(payload: {message: string, data?: object}) {
    chrome.runtime.sendMessage({
        type: MESSAGE_TYPE.FROM_CONTENT_SCRIPT,
        payload
    })
}

function sendMessageToPage(payload: {message: string}) {
    window.postMessage({
        type: MESSAGE_TYPE.FROM_CONTENT_SCRIPT,
        payload
    }, '*');
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
            case MESSAGE.SEND_PERF_DATA:
                sendMessageToBackground({
                    message: MESSAGE.SEND_PERF_DATA,
                    data: event.data.payload.data
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
            case MESSAGE.SEND_START_COMMAND:
                sendMessageToPage({message: MESSAGE.SEND_START_COMMAND});
                break;
            case MESSAGE.SEND_STOP_COMMAND:
                sendMessageToPage({message: MESSAGE.SEND_STOP_COMMAND});
                break;
        }
    }
});