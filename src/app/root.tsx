import * as React from "react";
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class Root extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <DropDownMenu>
                    <MenuItem value={1} primaryText="Never" />
                    <MenuItem value={2} primaryText="Every Night" />
                    <MenuItem value={3} primaryText="Weeknights" />
                    <MenuItem value={4} primaryText="Weekends" />
                </DropDownMenu>

                123123123123
            </div>
        );
    }
}