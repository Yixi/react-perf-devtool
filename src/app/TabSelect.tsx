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
    render() {
        let {tabsStore} = this.props;
        return (
            <DropDownMenu>
                {tabsStore.tabs.map(tab => <MenuItem value={tab.id} primaryText={tab.title} key={tab.id}/>)}
            </DropDownMenu>
        );
    }
}

export default TabSelect;