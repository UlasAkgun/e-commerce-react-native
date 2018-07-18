import React, {Component} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

// Constants
import {ButtonClass, ButtonContainerClass} from '../../../../constants/enumerations';
import ForwardArrow from '../../../../../assets/images/icons/41086839.png';
import CheckboxUnselected from '../../../../../assets/images/icons/3945fa79.png';
import CheckboxSelected from '../../../../../assets/images/icons/1c376ac1.png';

// Styles
import styles from './preferred-locations-styles';
import editDetailStyles from '../../edit-details-styles';
import globalStyles from '../../../../../assets/css/styles';

// Components
import {GeneralText, GeneralButton, HeaderBackButton} from '../../../shared';

// Actions
import {updateAdOnCache, iBuyCreateOrUpdateWish} from '../../../../actions/iBuyActions';
import {updateLoadingState} from '../../../../actions/applicationStateActions';


class PreferredLocations extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            isAddingLocation: false,
            preferredLocations: [],
            title: 'Preferred Locations'
        }
    }

    static navigationOptions = ({ navigation }) =>
    {
        const { params = {} } = navigation.state;
        console.log('navigation state is ', params);
        return {
            title: `${navigation.state.params.title}`,
            headerStyle: globalStyles.headerStyle,
            headerTitleStyle: globalStyles.headerTitleStyle,
            headerLeft: <HeaderBackButton onClick={() => navigation.state.params.handleGoBack()}/>
        };
    };

    componentDidMount()
    {
        this.props.navigation.setParams({
            handleGoBack: this.goBack.bind(this),
            title: 'Add a location'
        });
        this.setState({ preferredLocations: this.props.iBuy.cachedAd.preferredLocations });
    }

    goBack()
    {
        const cachedAd = Object.assign({}, this.props.iBuy.cachedAd);
        cachedAd.preferredLocations = this.state.preferredLocations;
        this.props.iBuyCreateOrUpdateWish(cachedAd);
        this.props.navigation.goBack();
    }

    renderSeparator()
    {
        if (this.state.preferredLocations.length === 0)
            return <View style={globalStyles.separator}/>;

        return this.state.preferredLocations.map(preferredLocation =>
        {
            return (
                <View style={styles.borderedSection}>
                    <View style={editDetailStyles.itemContainer} key={preferredLocation.id}>
                        <TouchableOpacity
                            style={[editDetailStyles.item, globalStyles.viewBorderBottom]}>
                            <GeneralText
                                style={[globalStyles.mediumText, editDetailStyles.itemText, { paddingRight: 30 }]}>{preferredLocation.name}</GeneralText>
                            <View style={editDetailStyles.forwardArrowContainerNoText}>
                                <Image source={ForwardArrow} style={editDetailStyles.forwardArrowIcon}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            );

        });
    }

    render()
    {
        return (
            <View style={editDetailStyles.container}>
                <View style={styles.section}>
                    <GeneralText style={[globalStyles.smallText, editDetailStyles.text]}>Where do you want to get your items from?</GeneralText>
                    {this.renderSeparator()}
                    <View style={globalStyles.buttonRow}>
                        <GeneralButton
                            title={this.state.preferredLocations.length === 0 ? 'Add a location' : 'Add another location'}
                            buttonClass={ButtonClass.Orange}
                            containerClass={ButtonContainerClass.Full}/>
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

export default connect(mapStateToProps, { updateAdOnCache, iBuyCreateOrUpdateWish, updateLoadingState })(PreferredLocations);