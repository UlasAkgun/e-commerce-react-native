import React, {Component} from 'react';
import {View, TextInput, Image} from 'react-native';
import PropTypes from 'prop-types';

import SearchIcon from '../../../../assets/images/icons/2eb861e8.png';

// Styles
import styles from './general-text-input-styles';

export default class GeneralTextInput extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            paddingLeft: this.props.placeholder ? 32 : 8,
            shadowOpacity: 0
        };
    }

    setShadowOpacity(hasShadow)
    {
        this.setState({ shadowOpacity: hasShadow ? 0.25 : 0 })
    }

    renderSearchIcon()
    {
        if (!this.props.showSearchIcon)
            return;

        return (
            <Image style={styles.searchIcon} source={SearchIcon}/>
        );
    }

    render()
    {
        return (
            <View style={this.props.containerStyle}>
                <TextInput style={[styles.textInput, { shadowOpacity: this.state.shadowOpacity, paddingLeft: this.state.paddingLeft }, this.props.style]}
                           placeholder={this.props.placeholder}
                           autoCorrect={this.props.autoCorrect}
                           multiline={this.props.multiline}
                           numberOfLines={this.props.numberOfLines}
                           keyboardType={this.props.keyboardType}
                           onChangeText={this.props.onChangeText}
                           onBlur={this.setShadowOpacity.bind(this, false)}
                           onFocus={this.setShadowOpacity.bind(this, true)}>
                    {this.props.value}
                </TextInput>
                {this.renderSearchIcon()}
            </View>
        );
    }
};

GeneralTextInput.propTypes = {
    style: PropTypes.any,
    containerStyle: PropTypes.any,
    placeholder: PropTypes.string,
    autoCorrect: PropTypes.bool,
    multiline: PropTypes.bool,
    numberOfLines: PropTypes.number,
    showSearchIcon: PropTypes.bool,
    keyboardType: PropTypes.string,
    onChangeText: PropTypes.func,
    value: PropTypes.string
};

GeneralTextInput.defaultProps = {
    autoCorrect: false,
    multiline: false,
    numberOfLines: 1,
    showSearchIcon: false,
    keyboardType: null,
    onChangeText: null,
    value: ''
};