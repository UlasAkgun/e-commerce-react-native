import {StyleSheet} from 'react-native';
import {ViewBorderColor} from '../../../../assets/css/globalVariables';

export default styles = StyleSheet.create({
    container: {
        flex: 1
    },

    section: {
        paddingTop: 25,
        paddingBottom: 25,
        marginLeft: 16,
        marginRight: 16,
        alignItems: 'center'
    },

    borderBottom: {
        borderBottomColor: ViewBorderColor,
        borderBottomWidth: 1
    },

    text: {
        marginTop: 15
    }
});