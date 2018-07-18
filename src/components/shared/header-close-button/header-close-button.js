import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';

import IBuyCloseButtonIcon from '../../../../assets/images/icons/11848fc7.png';

const HeaderCloseButton = (props) =>
{
    return (
        <TouchableOpacity style={{ marginRight: 20 }} onPress={props.onClick}>
            <Image source={IBuyCloseButtonIcon}/>
        </TouchableOpacity>

    );
};

HeaderCloseButton.propTypes = {
    onClick: PropTypes.func,
};
HeaderCloseButton.defaultProps = {
    onClick: null,
};

export default HeaderCloseButton;