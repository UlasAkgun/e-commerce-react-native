import React, {Component} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

// Constants
import CheckboxUnselected from '../../../../../assets/images/icons/3945fa79.png';
import CheckboxSelected from '../../../../../assets/images/icons/1c376ac1.png';
import {WarrantyStatus} from '../../../../constants/enumerations';

// Styles
import styles from './edit-warranty-status-styles';
import editDetailStyles from '../../edit-details-styles';
import globalStyles from '../../../../../assets/css/styles';

// Components
import {GeneralText, HeaderBackButton} from '../../../shared';

// Actions
import {updateAdOnCache, iBuyCreateOrUpdateWish} from '../../../../actions/iBuyActions';
import {updateLoadingState} from '../../../../actions/applicationStateActions';


class EditWarrantyStatus extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            warranty: WarrantyStatus.Any,
        }
    }

    static navigationOptions = ({ navigation }) =>
    {
        return {
            title: 'Return',
            headerStyle: globalStyles.headerStyle,
            headerTitleStyle: globalStyles.headerTitleStyle,
            headerLeft: <HeaderBackButton onClick={() => navigation.state.params.handleGoBack()}/>
        };
    };

    componentDidMount()
    {
        this.props.navigation.setParams({ handleGoBack: this.goBack.bind(this) });
        this.setState({ warranty: this.props.iBuy.cachedAd.warrantystatus });
    }

    goBack()
    {
        const cachedAd = Object.assign({}, this.props.iBuy.cachedAd);
        cachedAd.warrantystatus = this.state.warranty;
        this.props.iBuyCreateOrUpdateWish(cachedAd);
        this.props.navigation.goBack();
    }

    updateWarrantyStatus(warrantyStatus)
    {
        this.setState({ warranty: warrantyStatus });
    }

    render()
    {
        return (
            <View style={editDetailStyles.container}>
                <View style={styles.section}>
                    <GeneralText style={[globalStyles.smallText, editDetailStyles.text]}>Warranty Status</GeneralText>

                    <View style={editDetailStyles.itemContainerWithFrame}>
                        <TouchableOpacity
                            style={[editDetailStyles.checkboxItem]}
                            onPress={this.updateWarrantyStatus.bind(this, WarrantyStatus.Any)}>
                            <Image
                                style={editDetailStyles.checkboxImage}
                                source={this.state.warranty === WarrantyStatus.Any ? CheckboxSelected : CheckboxUnselected}/>
                            <View style={[globalStyles.viewBorderBottom, editDetailStyles.checkboxTextContainer]}>
                                <GeneralText
                                    style={[globalStyles.mediumText, editDetailStyles.checkboxText]}>Any</GeneralText>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[editDetailStyles.checkboxItem]}
                            onPress={this.updateWarrantyStatus.bind(this, WarrantyStatus.UnderWarranty)}>
                            <Image
                                style={editDetailStyles.checkboxImage}
                                source={this.state.warranty === WarrantyStatus.UnderWarranty ? CheckboxSelected : CheckboxUnselected}/>
                            <View style={[globalStyles.viewBorderBottom, editDetailStyles.checkboxTextContainer]}>
                                <GeneralText
                                    style={[globalStyles.mediumText, editDetailStyles.checkboxText]}>Under Warranty</GeneralText>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[editDetailStyles.checkboxItem]}
                            onPress={this.updateWarrantyStatus.bind(this, WarrantyStatus.NoWarranty)}>
                            <Image
                                style={editDetailStyles.checkboxImage}
                                source={this.state.warranty === WarrantyStatus.NoWarranty ? CheckboxSelected : CheckboxUnselected}/>
                            <View style={editDetailStyles.checkboxTextContainer}>
                                <GeneralText
                                    style={[globalStyles.mediumText, editDetailStyles.checkboxText]}>No Warranty</GeneralText>
                            </View>
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

export default connect(mapStateToProps, { updateAdOnCache, iBuyCreateOrUpdateWish, updateLoadingState })(EditWarrantyStatus);