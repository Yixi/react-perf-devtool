/**
 * Created by yhliu on 14/04/2017.
 */

import createMenu from './createMenu';

chrome.runtime.onInstalled.addListener(() => {
    createMenu();
});