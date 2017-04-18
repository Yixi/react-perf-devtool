import * as React from 'react';
import {inject, observer} from "mobx-react";
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Tab = chrome.tabs.Tab;
import {TabsStore} from "./store/tabsStore";

interface TabSelectProps {
    tabsStore?: TabsStore;
}

@inject('tabsStore')
@observer
class TabSelect extends React.Component<TabSelectProps, {}> {

    handleChange = (event: React.SyntheticEvent<EventTarget> , index: number, value: number) => {
        this.props.tabsStore.chooseTab(value);
    };

    render() {
        let {tabsStore} = this.props;
        return (
            <div>
                <DropDownMenu onChange={this.handleChange} value={tabsStore.currentTabId}>
                    {tabsStore.tabs.map(tab => <MenuItem value={tab.id} primaryText={tab.title} key={tab.id}/>)}
                </DropDownMenu>
            </div>
        );
    }
}

export default TabSelect;