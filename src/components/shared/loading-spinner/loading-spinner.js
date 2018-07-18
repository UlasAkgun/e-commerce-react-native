import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';

class Loading extends Component {
    renderActivityIndicator()
    {
        if (!this.props.isLoading)
            return null;

        return (
            <View style={{
                backgroundColor: 'rgba(255, 152, 51, 0.4)',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            }}>
                <ActivityIndicator size="large"/>
            </View>);
    }

    render()
    {
        return this.renderActivityIndicator();
    }
}

const mapStateToProps = (state) =>
{
    return {
        isLoading: state.applicationState.isLoading
    }
};

export default connect(mapStateToProps)(Loading);