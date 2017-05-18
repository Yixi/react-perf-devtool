import {MESSAGE, MESSAGE_TYPE} from "./constant";
import * as stores from './store';

const init = () => {
    getAllTabs();
};

const getAllTabs = () => {
    chrome.tabs.query({}, tabs => {
        tabs.forEach(tab => chrome.tabs.sendMessage(tab.id, {
            type: MESSAGE_TYPE.FROM_DEV_WINDOW,
            payload: {
                message: MESSAGE.GET_PAGE_STATUE
            }
        }));
    });
};


chrome.runtime.onMessage.addListener((request, sender) => {
    if (request.type && request.type === MESSAGE_TYPE.FROM_CONTENT_SCRIPT) {
        //message from content script;
        switch (request.payload.message) {
            case MESSAGE.DETECTED_PERF:
                stores.tabsStore.addTab(sender.tab);
                break;
            case MESSAGE.SEND_PERF_DATA:
                stores.tabsStore.setTabCaptureData(sender.tab.id, request.payload.data);
                break;
        }
    }
});

export const sendStartCollectCommand = (tabId: number) => {
    chrome.tabs.sendMessage(tabId, {
        type: MESSAGE_TYPE.FROM_DEV_WINDOW,
        payload: {
            message: MESSAGE.SEND_START_COMMAND
        }
    });
};

export const sendStopCollectCommand = (tabId: number) => {
    chrome.tabs.sendMessage(tabId, {
        type: MESSAGE_TYPE.FROM_DEV_WINDOW,
        payload: {
            message: MESSAGE.SEND_STOP_COMMAND
        }
    })
};

export {
    init
};

