import React, {Component} from 'react';
import {View} from 'react-native';

// Components
import LoadingSpinner from '../shared/loading-spinner/loading-spinner';
import BottomTabNavigator from '../bottom-tab-navigator/bottom-tab-navigator';

export default class MainNavigator extends Component {
    render()
    {
        return (
            <View style={{ flex: 1 }}>
                <BottomTabNavigator/>
                <LoadingSpinner/>
            </View>
        );
    }
}
