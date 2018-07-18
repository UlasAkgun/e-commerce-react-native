import {StyleSheet} from 'react-native';

import {InputBorderColor} from '../../../../assets/css/globalVariables';

export default styles = StyleSheet.create({
    textInput: {
        fontFamily: 'Helvetica',
        borderColor: InputBorderColor,
        borderWidth: 1,
        marginTop: 10,
        paddingRight: 32,
        fontSize: 16,
        shadowOffset: { width: 0, height: 0 },
        shadowColor: 'black',
        shadowRadius: 2
    },

    searchIcon: {
        position: 'absolute',
        marginTop: 20,
        marginLeft: 10
    }
});