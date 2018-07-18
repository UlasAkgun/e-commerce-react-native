import {StyleSheet} from 'react-native';
import { ViewBorderColor } from '../../../../assets/css/globalVariables';

export default styles = StyleSheet.create({
    container: {
        backgroundColor: '#fafafa',
        borderBottomColor: ViewBorderColor,
        borderBottomWidth: 1,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center'
    },

    questionIconContainer: {
        width: 24,
        height: 24,
        borderRadius: 12,
        position: 'absolute',
        right: 20
    },

    questionIconBorder: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#eb6a2f',
        justifyContent: 'center',
        alignItems: 'center'
    },

    questionIcon: {
        height: 16
    }
});