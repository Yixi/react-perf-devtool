import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {sendStartCollectCommand, sendStopCollectCommand} from './chrome';

interface ActionProps {
    tabId: number
}

class Action extends React.Component<ActionProps, {}> {

    constructor(props: ActionProps) {
        super(props);
    }

    start() {
        console.log('start', this.props.tabId);
        sendStartCollectCommand(this.props.tabId);
    }

    stop() {
        sendStopCollectCommand(this.props.tabId);
    }

    render() {
        return (
            <div>
                <RaisedButton label="Start" onClick={this.start.bind(this)}/>
                <RaisedButton label="Stop" onClick={this.stop.bind(this)}/>
            </div>
        )
    }
}

export default Action;