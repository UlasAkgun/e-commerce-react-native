import React, {Component} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

// Constants
import ForwardArrow from '../../../../assets/images/icons/41086839.png';
import IBuyCloseButton from '../../../../assets/images/icons/11848fc7.png';

// Styles
import styles from './edit-details-main-styles';
import globalStyles from '../../../../assets/css/styles';

// Components
import {GeneralText, HeaderCloseButton} from '../../shared/index';

// Actions
import {updateAdOnCache, iBuyCreateOrUpdateWish} from '../../../actions/iBuyActions';
import {updateLoadingState} from '../../../actions/applicationStateActions';


class EditDetails extends Component {
    static navigationOptions = ({ navigation }) =>
    {
        return {
            title: 'Edit Details',
            headerStyle: globalStyles.headerStyle,
            headerTitleStyle: globalStyles.headerTitleStyle,
            headerRight: <HeaderCloseButton onClick={() => navigation.navigate('profile')}/>
        };

    };

    navigateTo(path)
    {
        this.props.navigation.navigate(path);
    }

    render()
    {
        return (
            <View style={styles.container}>
                <View style={styles.section}>
                    <View style={styles.itemContainer}>
                        <TouchableOpacity style={[styles.item, globalStyles.viewBorderBottom]}>
                            <GeneralText style={[globalStyles.mediumText, styles.itemText]}>Summary / Preview</GeneralText>
                            <Image source={ForwardArrow} style={globalStyles.forwardArrowIcon}/>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.itemContainer}>
                        <TouchableOpacity style={[styles.item]}>
                            <GeneralText style={[globalStyles.mediumText, styles.itemText]}>Ad Status</GeneralText>
                            <View style={globalStyles.forwardArrowContainer}>
                                <GeneralText style={[globalStyles.smallText, styles.grayText]}>Only In Wishlist</GeneralText>
                                <Image source={ForwardArrow} style={globalStyles.forwardArrowIcon}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.section}>
                    <View style={styles.itemContainer}>
                        <TouchableOpacity style={[styles.item, globalStyles.viewBorderBottom]} onPress={this.navigateTo.bind(this, 'editTitle')}>
                            <GeneralText style={[globalStyles.mediumText, styles.itemText]}>Title</GeneralText>
                            <Image source={ForwardArrow} style={globalStyles.forwardArrowIcon}/>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.itemContainer}>
                        <TouchableOpacity style={[styles.item, globalStyles.viewBorderBottom]} onPress={this.navigateTo.bind(this, 'editDescription')}>
                            <GeneralText style={[globalStyles.mediumText, styles.itemText]}>Description</GeneralText>
                            <Image source={ForwardArrow} style={globalStyles.forwardArrowIcon}/>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.itemContainer}>
                        <TouchableOpacity style={[styles.item, globalStyles.viewBorderBottom]}>
                            <GeneralText style={[globalStyles.mediumText, styles.itemText]}>Item / service Type</GeneralText>
                            <Image source={ForwardArrow} style={globalStyles.forwardArrowIcon}/>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.itemContainer}>
                        <TouchableOpacity style={[styles.item, globalStyles.viewBorderBottom]} onPress={this.navigateTo.bind(this, 'detailedPreferences')}>
                            <GeneralText style={[globalStyles.mediumText, styles.itemText]}>Detailed Preferences</GeneralText>
                            <Image source={ForwardArrow} style={globalStyles.forwardArrowIcon}/>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.itemContainer}>
                        <TouchableOpacity style={[styles.item]}>
                            <GeneralText style={[globalStyles.mediumText, styles.itemText]}>Images</GeneralText>
                            <Image source={ForwardArrow} style={globalStyles.forwardArrowIcon}/>
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

export default connect(mapStateToProps, { updateAdOnCache, iBuyCreateOrUpdateWish, updateLoadingState })(EditDetails);