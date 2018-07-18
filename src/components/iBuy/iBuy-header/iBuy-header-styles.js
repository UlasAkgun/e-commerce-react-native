import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    linearGradient: {
        paddingLeft: 15,
        paddingRight: 15
    },

    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 10,
        height: 75
    },

    stepIcon: {
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 4,
        marginRight: 4,
        width: 28,
        height: 28
    },

    active: {
        width: 36,
        height: 36
    },

    passive: {
        width: 28,
        height: 28
    }
});