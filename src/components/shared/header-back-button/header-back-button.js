import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';

import IBuyBackButtonIcon from '../../../../assets/images/icons/ac9104b1.png';

const HeaderBackButton = (props) =>
{
    return (
        <TouchableOpacity style={{marginLeft: 20}} onPress={props.onClick}>
            <Image source={IBuyBackButtonIcon}/>
        </TouchableOpacity>

    );
};

HeaderBackButton.propTypes = {
    onClick: PropTypes.func,
};
HeaderBackButton.defaultProps = {
    onClick: null,
};

export default HeaderBackButton;