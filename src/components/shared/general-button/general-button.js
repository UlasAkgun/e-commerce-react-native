import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from "expo/src/effects/LinearGradient.ios";

// Constants
import {ButtonClass, ButtonGradientColor} from '../../../constants/enumerations';

// Styles
import styles from './general-button-styles';

export default class GeneralButton extends Component {
    renderIcon()
    {
        if (!this.props.iconLink)
            return;

        return (
            <Image source={this.props.iconLink}/>
        );
    }

    render()
    {
        return (
            <TouchableOpacity onPress={this.props.onClick} style={[styles.buttonContainer, styles[this.props.buttonClass], styles[this.props.containerClass]]}>
                <LinearGradient colors={ButtonGradientColor[this.props.buttonClass]} style={styles.linearGradient}>
                    <View style={styles.buttonContent} >
                        {this.renderIcon()}
                        <Text
                            style={[styles.buttonText, this.props.buttonClass === ButtonClass.Grey ? { color: '#232f3e' } : null]}>
                            {this.props.title}
                        </Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>
        );
    }
}

GeneralButton.propTypes = {
    title: PropTypes.string.isRequired,
    iconLink: PropTypes.any,
    containerClass: PropTypes.string,
    buttonClass: PropTypes.string,
    onClick: PropTypes.func,
};
GeneralButton.defaultProps = {
    containerClass: '',
    buttonClass: '',
    onClick: null,
};
