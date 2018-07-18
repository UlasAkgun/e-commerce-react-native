import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 12,
        marginLeft: 10,
        marginRight: 10,
        overflow: 'hidden',
        borderRadius: 4,
        borderWidth: 1
    },

    buttonText: {
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 36,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 13,
        paddingRight: 13,
        color: '#fff',
    },

    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    linearGradient: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    orange: {
        borderColor: '#eb6a2f'
    },

    red: {
        borderColor: '#9f0303'
    },

    blue: {
        borderColor: '#35475e'
    },

    grey: {
        borderColor: '#c2c2c2'
    },

    full: {
        flex: 1
    },

    half: {
        flex: 0.5
    }
});