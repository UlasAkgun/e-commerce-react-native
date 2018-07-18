import React, {Component} from 'react';
import {View, ScrollView, Image} from 'react-native';

// Constants
import {ButtonClass, ButtonContainerClass} from '../../../constants/enumerations';
import TickCircleIcon from '../../../../assets/images/icons/1c25a401.png';
// Styles
import styles from './iBuy-step4-styles';
import iBuyStyles from '../iBuy-styles';
import globalStyles from '../../../../assets/css/styles';

// Components
import IBuyHeader from '../iBuy-header/iBuy-header';
import {GeneralText, GeneralButton} from '../../shared';

export default class IBuyStep4 extends Component {
    navigateToIBuyStep3()
    {
        this.props.navigation.navigate('iBuyStep3');
    }

    render()
    {
        return (
            <View style={iBuyStyles.container}>
                <IBuyHeader step={4}/>
                <ScrollView style={styles.container}>
                    <View style={[styles.section, globalStyles.viewBorderBottom]}>
                        <Image source={TickCircleIcon}/>
                        <GeneralText style={[globalStyles.smallText, globalStyles.bold, styles.text]}>Your ad is ready</GeneralText>
                        <View style={globalStyles.buttonRow}>
                            <GeneralButton title="Publish Now" buttonClass={ButtonClass.Orange} containerClass={ButtonContainerClass.Full}/>
                        </View>
                    </View>
                    <View style={[styles.section]}>
                        <GeneralText style={[globalStyles.smallText, globalStyles.bold]}>Want to get better offers?</GeneralText>
                        <View style={globalStyles.buttonRow}>
                            <GeneralButton title="Add More Details" buttonClass={ButtonClass.Blue} containerClass={ButtonContainerClass.Full}/>
                        </View>
                        <GeneralText style={[globalStyles.smallText, globalStyles.bold, styles.text]}>Make sellers find you easier</GeneralText>
                    </View>
                </ScrollView>
                <View style={globalStyles.buttonContainer}>
                    <View style={globalStyles.buttonRow}>
                        <GeneralButton
                            title="Previous"
                            buttonClass={ButtonClass.Grey}
                            containerClass={ButtonContainerClass.Half}
                            onClick={this.navigateToIBuyStep3.bind(this)}
                        />
                    </View>
                </View>
            </View>
        );
    }
}
