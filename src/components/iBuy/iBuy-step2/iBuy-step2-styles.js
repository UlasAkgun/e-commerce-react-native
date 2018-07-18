import {StyleSheet} from 'react-native';
import {ViewBorderColor} from '../../../../assets/css/globalVariables';

export default styles = StyleSheet.create({
    container: {
        flex: 1
    },

    filterContainer: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 15,
        paddingBottom: 20,
        backgroundColor: '#fcfcfc',
        borderBottomColor: ViewBorderColor,
        borderBottomWidth: 1,
        flexDirection: 'column'
    },

    categoryContainer: {
        flexDirection: 'column',
        marginBottom: 10,
        borderBottomColor: ViewBorderColor,
        borderBottomWidth: 1
    },

    categoryItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 10,
        paddingBottom: 10
    },

    categoryItemLast: {
        borderBottomWidth: 0
    },

    categoryItemText: {
        fontSize: 16
    },

    categoryItemSelected: {
        backgroundColor: '#35475e'
    },

    categoryTextSelected: {
        color: 'white'
    },

    tickIcon: {
        height: 12,
        width: 12,
        marginRight: 10
    }
});