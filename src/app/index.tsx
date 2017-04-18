import * as ReactDOM from "react-dom";
import * as React from "react";
import Root from "./root";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import {Provider} from "mobx-react";
import * as stores from './store';
import * as chrome from './chrome';

chrome.init();

injectTapEventPlugin();

const mountNode = document.getElementById('mainAPP');

ReactDOM.render(
    <Provider {...stores}>
        <MuiThemeProvider>
            <Root/>
        </MuiThemeProvider>
    </Provider>
    , mountNode);