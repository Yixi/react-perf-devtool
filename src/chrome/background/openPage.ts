const popWindow = (url: string) => {
    chrome.windows.create({
        type: 'panel',
        url: url
    })
};

export default function openPage(menuId: string) {
    let url: string;
    switch (menuId) {
        case 'open-panel':
            url = chrome.runtime.getURL('window.html');
            break;
    }

    popWindow(url);
}