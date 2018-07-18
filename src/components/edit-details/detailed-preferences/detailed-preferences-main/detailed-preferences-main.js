import React, {Component} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

// Constants
import ForwardArrow from '../../../../../assets/images/icons/41086839.png';

// Styles
import styles from './detailed-preferences-main-styles';
import editDetailStyles from '../../edit-details-styles';
import globalStyles from '../../../../../assets/css/styles';

// Components
import {GeneralText, HeaderBackButton} from '../../../shared/index';

// Actions
import {updateAdOnCache, iBuyCreateOrUpdateWish} from '../../../../actions/iBuyActions';
import {updateLoadingState} from '../../../../actions/applicationStateActions';


class DetailedPreferences extends Component {
    static navigationOptions = ({ navigation }) =>
    {
        return {
            title: 'Detailed Preferences',
            headerStyle: globalStyles.headerStyle,
            headerTitleStyle: globalStyles.headerTitleStyle,
            headerLeft: <HeaderBackButton onClick={() => navigation.goBack()}/>
        };

    };

    navigateTo(path)
    {
        this.props.navigation.navigate(path);
    }

    render()
    {
        return (
            <View style={editDetailStyles.container}>
                <GeneralText style={[globalStyles.subTitleText, styles.subTitleText]}>GENERAL PREFERENCES</GeneralText>
                <View style={styles.section}>
                    <View style={editDetailStyles.itemContainer}>
                        <TouchableOpacity
                            style={[editDetailStyles.item, globalStyles.viewBorderBottom]}
                            onPress={this.navigateTo.bind(this, 'editQuantity')}
                        >
                            <GeneralText style={[globalStyles.mediumText, editDetailStyles.itemText]}>Quantity</GeneralText>
                            <View style={editDetailStyles.forwardArrowContainer}>
                                <GeneralText style={[globalStyles.smallText, editDetailStyles.grayText]}>
                                    {this.props.iBuy.cachedAd.quantity}
                                </GeneralText>
                                <Image source={ForwardArrow} style={editDetailStyles.forwardArrowIcon}/>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={editDetailStyles.itemContainer}>
                        <TouchableOpacity
                            style={[editDetailStyles.item, globalStyles.viewBorderBottom]}
                            onPress={this.navigateTo.bind(this, 'editPricingType')}
                        >
                            <GeneralText style={[globalStyles.mediumText, editDetailStyles.itemText]}>Pricing Type</GeneralText>
                            <View style={editDetailStyles.forwardArrowContainer}>
                                <GeneralText style={[globalStyles.smallText, editDetailStyles.grayText]}>
                                    {this.props.iBuy.cachedAd.pricing[0]}
                                </GeneralText>
                                <Image source={ForwardArrow} style={editDetailStyles.forwardArrowIcon}/>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={editDetailStyles.itemContainer}>
                        <TouchableOpacity
                            style={[editDetailStyles.item, globalStyles.viewBorderBottom]}
                            onPress={this.navigateTo.bind(this, 'editCondition')}
                        >
                            <GeneralText style={[globalStyles.mediumText, editDetailStyles.itemText]}>Condition</GeneralText>
                            <View style={editDetailStyles.forwardArrowContainer}>
                                <GeneralText style={[globalStyles.smallText, editDetailStyles.grayText]}>
                                    {this.props.iBuy.cachedAd.condition[0]}
                                </GeneralText>
                                <Image source={ForwardArrow} style={editDetailStyles.forwardArrowIcon}/>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={editDetailStyles.itemContainer}>
                        <TouchableOpacity
                            style={[editDetailStyles.item, globalStyles.viewBorderBottom]}
                            onPress={this.navigateTo.bind(this, 'editBoxing')}
                        >
                            <GeneralText style={[globalStyles.mediumText, editDetailStyles.itemText]}>Boxing</GeneralText>
                            <View style={editDetailStyles.forwardArrowContainer}>
                                <GeneralText style={[globalStyles.smallText, editDetailStyles.grayText]} numberOfLines={1}>
                                    {this.props.iBuy.cachedAd.boxing[0]}
                                </GeneralText>
                                <Image source={ForwardArrow} style={editDetailStyles.forwardArrowIcon}/>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={editDetailStyles.itemContainer}>
                        <TouchableOpacity
                            style={[editDetailStyles.item, globalStyles.viewBorderBottom]}
                            onPress={this.navigateTo.bind(this, 'editWarrantyStatus')}
                        >
                            <GeneralText style={[globalStyles.mediumText, editDetailStyles.itemText]}>Warranty Status</GeneralText>
                            <View style={editDetailStyles.forwardArrowContainer}>
                                <GeneralText style={[globalStyles.smallText, editDetailStyles.grayText]} numberOfLines={1}>
                                    {this.props.iBuy.cachedAd.warrantystatus}
                                </GeneralText>
                                <Image source={ForwardArrow} style={editDetailStyles.forwardArrowIcon}/>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={editDetailStyles.itemContainer}>
                        <TouchableOpacity
                            style={[editDetailStyles.item]}
                            onPress={this.navigateTo.bind(this, 'editReturn')}
                        >
                            <GeneralText style={[globalStyles.mediumText, editDetailStyles.itemText]}>Return</GeneralText>
                            <View style={editDetailStyles.forwardArrowContainer}>
                                <GeneralText style={[globalStyles.smallText, editDetailStyles.grayText]} numberOfLines={1}>
                                    {this.props.iBuy.cachedAd.return}
                                </GeneralText>
                                <Image source={ForwardArrow} style={editDetailStyles.forwardArrowIcon}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <GeneralText style={[globalStyles.subTitleText, styles.subTitleText]}>COMMON PREFERENCES</GeneralText>
                <View style={styles.section}>
                    <View style={editDetailStyles.itemContainer}>
                        <TouchableOpacity
                            style={[editDetailStyles.item, globalStyles.viewBorderBottom]}
                            onPress={this.navigateTo.bind(this, 'preferredLocations')}>
                            <GeneralText style={[globalStyles.mediumText, editDetailStyles.itemText]}>Preferred Locations</GeneralText>
                            <View style={editDetailStyles.forwardArrowContainer}>
                                <GeneralText style={[globalStyles.smallText, editDetailStyles.grayText]}>Any</GeneralText>
                                <Image source={ForwardArrow} style={editDetailStyles.forwardArrowIcon}/>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={editDetailStyles.itemContainer}>
                        <TouchableOpacity style={[editDetailStyles.item]}>
                            <GeneralText style={[globalStyles.mediumText, editDetailStyles.itemText]}>Valid Until</GeneralText>
                            <View style={editDetailStyles.forwardArrowContainer}>
                                <GeneralText style={[globalStyles.smallText, editDetailStyles.grayText]}>01-01-2018</GeneralText>
                                <Image source={ForwardArrow} style={editDetailStyles.forwardArrowIcon}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.section, { marginTop: 35 }]}>
                    <View style={editDetailStyles.itemContainer}>
                        <TouchableOpacity style={[editDetailStyles.item, globalStyles.viewBorderBottom]}>
                            <GeneralText style={[globalStyles.mediumText, editDetailStyles.itemText]}>Privacy Options</GeneralText>
                            <Image source={ForwardArrow} style={editDetailStyles.forwardArrowIcon}/>
                        </TouchableOpacity>
                    </View>

                    <View style={editDetailStyles.itemContainer}>
                        <TouchableOpacity style={[editDetailStyles.item]}>
                            <GeneralText style={[globalStyles.mediumText, editDetailStyles.itemText]}>Notification Options</GeneralText>
                            <Image source={ForwardArrow} style={editDetailStyles.forwardArrowIcon}/>
                        </TouchableOpacity>
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

export default connect(mapStateToProps, { updateAdOnCache, iBuyCreateOrUpdateWish, updateLoadingState })(DetailedPreferences);