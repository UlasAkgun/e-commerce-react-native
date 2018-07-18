import {StyleSheet} from 'react-native';

import {ViewBorderColor} from '../../../../../assets/css/globalVariables';

export default styles = StyleSheet.create({
    section: {
        borderTopColor: ViewBorderColor,
        borderBottomColor: ViewBorderColor,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        marginTop: 5
    },

    subTitleText: {
        marginTop: 30,
        paddingLeft: 16,
        paddingRight: 16
    }
});