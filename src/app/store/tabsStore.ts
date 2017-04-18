import {action, computed, observable} from 'mobx';
import Tab = chrome.tabs.Tab;
import * as _ from 'lodash';

class TabsStore {
    @observable tabs: Tab[] = [];
    @observable currentTabId: number = null;

    @computed get currentTab(): Tab | undefined {
        return _.find(this.tabs, _t => _t.id === this.currentTabId);
    }

    @action addTab = (tab: Tab) => {
        _.remove(this.tabs, _t => _t.id === tab.id);
        this.tabs.push(tab);
    };

    @action chooseTab = (tabId: number) => this.currentTabId = tabId;
}

const tabsStore = new TabsStore();

export default tabsStore;
export {
    TabsStore
}
