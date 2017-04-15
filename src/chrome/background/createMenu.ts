import openPage from "./openPage";

chrome.contextMenus.onClicked.addListener(({menuItemId}) => {
    openPage(menuItemId);
});

export default () => {
    const menu = [
        {id: 'open-panel', title: 'open-panel'}
    ];

    menu.forEach(({id, title}) => {
        chrome.contextMenus.create({
            id,
            title,
            contexts: ['page_action']
        });
    });
};
