import {MESSAGE, MESSAGE_TYPE} from "../../app/constant";

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
                sendMessageToBackground({
                    message: MESSAGE.DETECTED_PERF
                });
                break;
        }
    }
});

