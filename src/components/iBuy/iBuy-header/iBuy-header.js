import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {LinearGradient} from 'expo';

import styles from './iBuy-header-styles';

import IBuyQuestions from '../iBuy-questions/iBuy-questions';

import IBuyLogo from '../../../../assets/images/icons/faf2ec71.png';

import Step1PassiveImage from '../../../../assets/images/icons/43a58dca.png';
import Step2PassiveImage from '../../../../assets/images/icons/2219f12c.png';
import Step3PassiveImage from '../../../../assets/images/icons/d39e77a0.png';
import Step4PassiveImage from '../../../../assets/images/icons/cbed36c.png';

import Step1ActiveImage from '../../../../assets/images/icons/956f1ffb.png';
import Step2ActiveImage from '../../../../assets/images/icons/81c1716.png';
import Step3ActiveImage from '../../../../assets/images/icons/fc574b40.png';
import Step4ActiveImage from '../../../../assets/images/icons/d5dcacbb.png';

import IBuyCloseButton from '../../../../assets/images/icons/11848fc7.png';

export default IBuyHeader = ({ step }) =>
{
    return (
        <View>
            <LinearGradient colors={['#fd9740', '#feaa62', '#fd9740']} start={[0, 0.5]} end={[1, 0.5]} style={styles.linearGradient}>
                <View style={styles.container}>
                    <Image source={IBuyLogo}/>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <Image style={[styles.stepIcon, step === 1 ? styles.active : styles.passive]}
                               source={step === 1 ? Step1ActiveImage : Step1PassiveImage}/>
                        <Image style={[styles.stepIcon, step === 2 ? styles.active : styles.passive]}
                               source={step === 2 ? Step2ActiveImage : Step2PassiveImage}/>
                        <Image style={[styles.stepIcon, step === 3 ? styles.active : styles.passive]}
                               source={step === 3 ? Step3ActiveImage : Step3PassiveImage}/>
                        <Image style={[styles.stepIcon, step === 4 ? styles.active : styles.passive]}
                               source={step === 4 ? Step4ActiveImage : Step4PassiveImage}/>
                    </View>
                    <TouchableOpacity>
                        <Image source={IBuyCloseButton}/>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
            <IBuyQuestions step={ step }/>
        </View>
    );
}
