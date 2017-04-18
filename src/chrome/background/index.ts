/**
 * Created by yhliu on 14/04/2017.
 */

import createMenu from './createMenu';
import Tab = chrome.tabs.Tab;

//create menu
chrome.runtime.onInstalled.addListener(() => {
    createMenu();
});
