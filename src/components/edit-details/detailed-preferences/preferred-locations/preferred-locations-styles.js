import {StyleSheet} from 'react-native';

import {ViewBorderColor} from '../../../../../assets/css/globalVariables';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: '#efeff4'
    },

    section: {
        marginTop: 30
    },

    borderedSection: {
        borderTopColor: ViewBorderColor,
        borderBottomColor: ViewBorderColor,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        marginTop: 5
    },

    topBorder: {
        borderTopColor: ViewBorderColor,
        borderTopWidth: 2
    }
});