import React, {Component} from 'react';
import {Provider} from 'react-redux';

import store from './src/store';

import MainNavigator from './src/components/main-navigator/main-navigator';

export default class App extends Component {
    render()
    {
        return (
            <Provider store={store}>
                <MainNavigator />
            </Provider>
        );
    }
}
