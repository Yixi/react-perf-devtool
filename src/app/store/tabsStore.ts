import {action, observable} from 'mobx';
import Tab = chrome.tabs.Tab;

class TabsStore {
    @observable tabs: Tab[] = [];

    @action addTab = (tab: Tab) => {
        this.tabs.push(tab);
    }
}

const tabsStore = new TabsStore();

export default tabsStore;
export {
    TabsStore
}
