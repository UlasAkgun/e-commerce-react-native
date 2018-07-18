import {StyleSheet} from 'react-native';
import {ViewBorderColor} from '../../../../assets/css/globalVariables';

export default styles = StyleSheet.create({
    container: {
        flex: 1
    },

    photosSection: {
        paddingTop: 25,
        paddingBottom: 25,
        paddingLeft: 16,
        paddingRight: 16
    },

    borderBottom: {
        borderBottomColor: ViewBorderColor,
        borderBottomWidth: 1
    },

    photo: {
        height: 100,
        width: 100,
        margin: 2
    },

    text: {
        paddingBottom: 10
    }
});