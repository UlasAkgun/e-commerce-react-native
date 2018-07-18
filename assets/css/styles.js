import {StyleSheet} from 'react-native';

import {ViewBorderColor, DangerTextColor} from './globalVariables';

export default styles = StyleSheet.create({
    subTitleText: {
        color: '#666',
        fontWeight: '700',
        fontSize: 16
    },

    bold: {
        fontWeight: 'bold'
    },

    semiBold: {
        fontWeight: '400'
    },

    mediumText: {
        fontSize: 18
    },

    smallText: {
        fontSize: 16
    },

    dangerText: {
        color: DangerTextColor
    },

    viewBorderBottom: {
        borderBottomColor: ViewBorderColor,
        borderBottomWidth: 1
    },

    buttonContainer: {
        backgroundColor: '#fafafa',
        borderTopColor: '#ccc',
        borderTopWidth: 1,
        paddingBottom: 15
    },

    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch'
    },

    forwardArrowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    forwardArrowIcon: {
        height: 11,
        width: 11,
        marginRight: 10
    },

    headerStyle: {
        backgroundColor: '#232f3e'
    },

    headerTitleStyle: {
        color: 'white',
        fontWeight: '500'
    },

    separator: {
        borderBottomWidth: 1,
        borderBottomColor: ViewBorderColor,
        borderTopWidth: 1,
        borderTopColor: ViewBorderColor,
        marginTop: 20
    }
});