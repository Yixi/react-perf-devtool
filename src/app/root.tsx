import * as React from "react";
import {inject, observer} from 'mobx-react';
import TabSelect from './TabSelect';
import {TabsStore} from "./store/tabsStore";
import Action from './action';
import Capture from './capture';

interface rootProps {
    tabsStore?: TabsStore
}

@inject('tabsStore')
@observer
export default class Root extends React.Component<rootProps, {}> {
    render() {
        let {tabsStore} = this.props;
        return (
            <div>
                <TabSelect />
                {tabsStore.currentTab && <Action tabId={tabsStore.currentTabId}/>}
                {tabsStore.currentTab && <Capture/>}
            </div>
        );
    }
}