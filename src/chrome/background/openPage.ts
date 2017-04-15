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
            url = chrome.extension.getURL('window.html');
            break;
    }

    popWindow(url);
}