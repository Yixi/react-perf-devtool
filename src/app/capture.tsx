import * as React from 'react';
import {inject, observer} from 'mobx-react';
import {TabsStore} from "./store/tabsStore";

interface CaptureProps {
    tabsStore?: TabsStore
}

@inject('tabsStore')
@observer
class Capture extends React.Component<CaptureProps, {}> {
    render() {
        let {tabsStore} = this.props;
        console.log(tabsStore.tabCaptureData[tabsStore.currentTabId]);
        return (
            <div>


            </div>
        )
    }
}

export default Capture;