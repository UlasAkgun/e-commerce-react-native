import React, {Component} from 'react';
import {View, ScrollView, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

// Photos
import Photo1 from '../../../../assets/images/photos/photo-1.jpg';
import Photo2 from '../../../../assets/images/photos/photo-2.jpg';
import Photo3 from '../../../../assets/images/photos/photo-3.jpg';
import Photo4 from '../../../../assets/images/photos/photo-4.jpg';
import Photo5 from '../../../../assets/images/photos/photo-5.jpg';
import Photo6 from '../../../../assets/images/photos/photo-6.jpg';
import Photo7 from '../../../../assets/images/photos/photo-7.jpg';
import Photo8 from '../../../../assets/images/photos/photo-8.jpg';
import Photo9 from '../../../../assets/images/photos/photo-9.jpg';
import Photo10 from '../../../../assets/images/photos/photo-10.jpg';
import Photo11 from '../../../../assets/images/photos/photo-11.jpg';

// Constants
import {ButtonClass, ButtonContainerClass} from '../../../constants/enumerations';
import PhotoIcon from '../../../../assets/images/icons/dbb5dacc.png';
import AddPhotoIcon from '../../../../assets/images/icons/4ebc8fa3.png';

// Styles
import styles from './iBuy-step3-styles';
import iBuyStyles from '../iBuy-styles';
import globalStyles from '../../../../assets/css/styles';

// Components
import IBuyHeader from '../iBuy-header/iBuy-header';
import {GeneralText, GeneralButton} from '../../shared';

// Actions
import {updateAdOnCache, iBuyCreateOrUpdateWish} from '../../../actions/iBuyActions';
import {updateLoadingState} from '../../../actions/applicationStateActions';


class IBuyStep3 extends Component {

    onNextClick()
    {
        this.props.iBuyCreateOrUpdateWish(this.props.iBuy.cachedAd);
        this.navigateToIBuyStep4();
    }

    navigateToIBuyStep2()
    {
        this.props.navigation.navigate('iBuyStep2');
    }

    navigateToIBuyStep4()
    {
        this.props.navigation.navigate('iBuyStep4');
    }

    render()
    {
        return (
            <View style={iBuyStyles.container}>
                <IBuyHeader step={3}/>
                <ScrollView style={styles.container}>
                    <View style={[styles.photosSection, styles.borderBottom]}>
                        <GeneralText style={[globalStyles.mediumText, globalStyles.bold, styles.text]}>Photos from your device</GeneralText>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                            <Image style={styles.photo} source={Photo1}/>
                            <Image style={styles.photo} source={Photo2}/>
                            <Image style={styles.photo} source={Photo3}/>
                            <Image style={styles.photo} source={Photo4}/>
                            <Image style={styles.photo} source={Photo5}/>
                            <TouchableOpacity>
                                <Image style={styles.photo} source={AddPhotoIcon}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.photosSection}>
                        <GeneralText style={[globalStyles.mediumText, globalStyles.bold, styles.text]}>Default photos</GeneralText>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                            <Image style={styles.photo} source={Photo6}/>
                            <Image style={styles.photo} source={Photo7}/>
                            <Image style={styles.photo} source={Photo8}/>
                            <Image style={styles.photo} source={Photo9}/>
                            <Image style={styles.photo} source={Photo10}/>
                            <Image style={styles.photo} source={Photo11}/>
                        </View>
                    </View>
                </ScrollView>
                <View style={globalStyles.buttonContainer}>
                    <View style={globalStyles.buttonRow}>
                        <GeneralButton title="Take a photo"
                                       iconLink={PhotoIcon}
                                       buttonClass={ButtonClass.Orange}
                                       containerClass={ButtonContainerClass.Full}/>
                    </View>
                    <View style={globalStyles.buttonRow}>
                        <GeneralButton
                            title="Previous"
                            buttonClass={ButtonClass.Grey}
                            containerClass={ButtonContainerClass.Half}
                            onClick={this.navigateToIBuyStep2.bind(this)}
                        />
                        <GeneralButton
                            title="Next"
                            buttonClass={ButtonClass.Blue}
                            containerClass={ButtonContainerClass.Half}
                            onClick={this.onNextClick.bind(this)}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) =>
{
    return {
        iBuy: state.iBuy,
    };
};

export default connect(mapStateToProps, { updateAdOnCache, iBuyCreateOrUpdateWish, updateLoadingState })(IBuyStep3);