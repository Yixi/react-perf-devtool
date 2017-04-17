/**
 * Created by yhliu on 14/04/2017.
 */

import createMenu from './createMenu';
import {MESSAGE, MESSAGE_TYPE} from "../../app/constant";
import Tab = chrome.tabs.Tab;

let detectedTabs: Tab[] = [];

//create menu
chrome.runtime.onInstalled.addListener(() => {
    createMenu();
});

//listen runtime message
chrome.runtime.onMessage.addListener((request, sender, response) => {
    if (request.type && request.type === MESSAGE_TYPE.FROM_CONTENT_SCRIPT) {
        //message from content script;
        switch (request.payload.message) {
            case MESSAGE.DETECTED_PERF:
                detectedTabs.push(sender.tab);
                break;
        }
    }
});


