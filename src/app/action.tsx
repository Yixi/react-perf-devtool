import * as React from 'react';

interface ActionProps {
    tabId: number
}

class Action extends React.Component<ActionProps, {}> {

    render() {
        return (
            <div>{this.props.tabId}</div>
        )
    }
}

export default Action;