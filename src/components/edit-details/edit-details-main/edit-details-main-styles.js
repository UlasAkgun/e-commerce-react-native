import {StyleSheet} from 'react-native';

import {DangerTextColor, ViewBorderColor, GrayTextColor} from '../../../../assets/css/globalVariables';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#efeff4'
    },

    section: {
        borderTopColor: ViewBorderColor,
        borderBottomColor: ViewBorderColor,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        marginTop: 30
    },

    itemContainer: {
        backgroundColor: 'white'
    },

    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 16,
        marginRight: 16,
        paddingTop: 10,
        paddingBottom: 10
    },

    itemText: {
        fontSize: 16
    },

    grayText: {
        color: GrayTextColor,
        marginRight: 10
    },

    text: {
        paddingLeft: 16,
        paddingRight: 16
    },

    textInput: {
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: 'white'
    },

    infoTextContainer: {
        paddingTop: 10,
        paddingLeft: 16,
        paddingRight: 16,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },

    infoText: {
        fontStyle: 'italic'
    },

    infoTextCharacterCount: {
        color: DangerTextColor
    }
});