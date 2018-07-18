import React, {Component} from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

// Styles
import styles from './general-text-styles';

const GeneralText = (props) =>
{
    return (
        <Text numberOfLines={props.numberOfLines} style={[props.style, styles.text]}>{props.children}</Text>
    );
};

GeneralText.propTypes = {
    style: PropTypes.any,
    numberOfLines: PropTypes.number
};

GeneralText.defaultProps = {
    numberOfLines: 0
};

export default GeneralText;