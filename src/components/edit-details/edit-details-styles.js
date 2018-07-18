import {StyleSheet} from 'react-native';

import {DangerTextColor, ViewBorderColor, GrayTextColor} from '../../../assets/css/globalVariables';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#efeff4'
    },

    itemContainer: {
        backgroundColor: 'white'
    },

    itemContainerWithFrame: {
        backgroundColor: 'white',
        borderTopColor: ViewBorderColor,
        borderBottomColor: ViewBorderColor,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        marginTop: 10
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

    checkboxSubLevelContainer: {
        paddingLeft: 20
    },

    checkboxItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 16,
        marginRight: 16
    },

    checkboxImage: {
        height: 25,
        width: 25,
        marginRight: 10
    },

    checkboxTextContainer: {
        flex: 1
    },

    checkboxText: {
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomColor: ViewBorderColor,
        borderBottomWidth: 1
    },

    itemText: {
        fontSize: 16
    },

    grayText: {
        color: GrayTextColor,
        marginRight: 10
    },

    forwardArrowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: 100
    },

    forwardArrowContainerNoText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: 20
    },

    forwardArrowIcon: {
        height: 11,
        width: 11,
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