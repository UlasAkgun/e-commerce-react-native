import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {isEmpty} from 'lodash';

// Constants
import {ButtonClass, ButtonContainerClass, AdStatus} from '../../../constants/enumerations';

// Styles
import styles from './iBuy-step1-styles';
import iBuyStyles from '../iBuy-styles';
import globalStyles from '../../../../assets/css/styles';
import {OrangeTextColor, GrayTextColor} from '../../../../assets/css/globalVariables';

// Components
import IBuyHeader from '../iBuy-header/iBuy-header';
import {GeneralText, GeneralTextInput, GeneralButton} from '../../shared';

// Models
import AdModel from '../../../models/ad.model';

// Actions
import {updateAdOnCache, iBuyCreateOrUpdateWish} from '../../../actions/iBuyActions';
import {updateLoadingState} from '../../../actions/applicationStateActions';


class IBuyStep1 extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            title: '' || this.props.iBuy.cachedAd.title,
            description: '' || this.props.iBuy.cachedAd.description
        }
    }

    onNextClick()
    {
        this.updateAdOnCache();
        this.navigateToIBuyStep2();
    }

    navigateToIBuyStep2()
    {
        this.props.navigation.navigate('iBuyStep2');
    }

    assignTitleAndDescriptionToCachedAd()
    {
        let cachedAd = Object.assign({}, this.props.iBuy.cachedAd);

        if (isEmpty(cachedAd))
        {
            cachedAd = new AdModel();
        }

        cachedAd.title = this.state.title;
        cachedAd.description = this.state.description;

        return cachedAd;
    }

    updateAdOnCache()
    {
        const cachedAd = this.assignTitleAndDescriptionToCachedAd();
        this.props.updateAdOnCache(cachedAd);
    }

    addToWishlist()
    {
        const cachedAd = this.assignTitleAndDescriptionToCachedAd();
        cachedAd.status = AdStatus.wishList;

        this.props.iBuyCreateOrUpdateWish(cachedAd);
        this.props.navigation.navigate('profile');
    }

    updateTitle(title)
    {
        this.setState({ title });
    }

    updateDescription(description)
    {
        this.setState({ description });
    }

    render()
    {
        return (
            <View style={iBuyStyles.container}>
                <IBuyHeader step={1}/>

                <View style={styles.inputs}>
                    <View style={styles.section}>
                        <View style={styles.inputLabelContainer}>
                            <GeneralText style={[globalStyles.mediumText, globalStyles.bold]}>Title </GeneralText>
                            <GeneralText style={[globalStyles.mediumText, globalStyles.semiBold, { fontStyle: 'italic' }]}>or</GeneralText>
                            <GeneralText style={[globalStyles.mediumText, globalStyles.bold]}> URL </GeneralText>
                            <GeneralText style={[globalStyles.smallText, { fontStyle: 'italic', color: OrangeTextColor }]}>
                                *required
                            </GeneralText>
                        </View>
                        <GeneralTextInput
                            style={{ height: 35 }}
                            value={this.state.title}
                            onChangeText={this.updateTitle.bind(this)}
                        />
                    </View>

                    <View style={[styles.section, { flex: 1 }]}>
                        <View style={styles.inputLabelContainer}>
                            <GeneralText style={[globalStyles.mediumText, globalStyles.bold]}>Description </GeneralText>
                            <GeneralText style={[globalStyles.smallText, { fontStyle: 'italic', color: GrayTextColor }]}>*optional</GeneralText>
                        </View>
                        <GeneralTextInput
                            containerStyle={{ flex: 1, alignSelf: 'stretch', marginBottom: 10 }}
                            style={{ flex: 1 }}
                            multiline
                            numberOfLines={6}
                            value={this.state.description}
                            onChangeText={this.updateDescription.bind(this)}
                        />
                    </View>
                </View>

                <View style={globalStyles.buttonContainer}>
                    <View style={globalStyles.buttonRow}>
                        <GeneralButton
                            title="Only Add to Wishlist"
                            buttonClass={ButtonClass.Orange}
                            containerClass={ButtonContainerClass.Full}
                            onClick={this.addToWishlist.bind(this)}/>
                    </View>
                    <View style={globalStyles.buttonRow}>
                        <GeneralButton title="Cancel" buttonClass={ButtonClass.Grey} containerClass={ButtonContainerClass.Half}/>
                        <GeneralButton
                            title="Next"
                            buttonClass={ButtonClass.Blue}
                            containerClass={ButtonContainerClass.Half}
                            onClick={this.onNextClick.bind(this)}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) =>
{
    return {
        iBuy: state.iBuy,
    };
};

export default connect(mapStateToProps, { updateAdOnCache, iBuyCreateOrUpdateWish, updateLoadingState })(IBuyStep1);