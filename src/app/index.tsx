import * as ReactDOM from "react-dom";
import * as React from "react";
import Root from "./root";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const mountNode = document.getElementById('mainAPP');

ReactDOM.render(
    <MuiThemeProvider>
        <Root/>
    </MuiThemeProvider>
    , mountNode);