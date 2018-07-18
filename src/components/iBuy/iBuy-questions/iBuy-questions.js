import React from 'react';
import {View, Text, Image} from 'react-native';
import {LinearGradient} from 'expo';

import styles from './iBuy-questions-styles';

import QuestionIcon from '../../../../assets/images/icons/d4a027e2.png';

export default IBuyQuestions = ({ step }) =>
{
    let questionText = '';
    if (step === 1)
    {
        questionText = 'What do you want?';
    }
    else if (step === 2)
    {
        questionText = 'What type of item/service';
    }
    else if (step === 3)
    {
        questionText = 'Choose a photo or take one';
    }
    else if (step === 4)
    {
        questionText = 'Congratulations!';
    }

    return (
        <View style={styles.container}>
            <Text>{questionText}</Text>
            <LinearGradient style={styles.questionIconContainer} colors={['#ff9833', '#eb6a2f']}>
                <View style={styles.questionIconBorder}>
                    <Image style={styles.questionIcon} source={QuestionIcon}/>
                </View>
            </LinearGradient>
        </View>
    );
}
