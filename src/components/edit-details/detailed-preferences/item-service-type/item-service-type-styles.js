import {StyleSheet} from 'react-native';

import {DangerTextColor, ViewBorderColor, GrayTextColor} from '../../../../../assets/css/globalVariables';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: '#efeff4'
    },

    section: {
        borderTopColor: ViewBorderColor,
        borderBottomColor: ViewBorderColor,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        marginTop: 30
    }
});