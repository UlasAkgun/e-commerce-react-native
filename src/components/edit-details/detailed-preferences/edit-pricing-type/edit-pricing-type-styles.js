import {StyleSheet} from 'react-native';

import {InputBorderColor} from '../../../../../assets/css/globalVariables';

export default styles = StyleSheet.create({
    section: {
        marginTop: 30
    },

    priceInputContainerLeft: {
        flex: 1,
        borderRightWidth: 1,
        borderRightColor: InputBorderColor,
        height: 35
    },

    priceInputContainerRight: {
        flex: 1,
        flexDirection: 'row',
        borderLeftWidth: 1,
        borderLeftColor: InputBorderColor,
        height: 35
    },

    priceInput: {
        borderWidth: 0,
        alignSelf: 'flex-end'
    },

    decimalSeparator: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
});