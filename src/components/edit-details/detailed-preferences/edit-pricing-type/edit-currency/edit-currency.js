import React, {Component} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

// Constants
import CheckboxUnselected from '../../../../../../assets/images/icons/3945fa79.png';
import CheckboxSelected from '../../../../../../assets/images/icons/1c376ac1.png';
import {CurrencyType, PricingIndexes} from '../../../../../constants/enumerations';

// Styles
import styles from './edit-currency-styles';
import editDetailStyles from '../../../edit-details-styles';
import globalStyles from '../../../../../../assets/css/styles';

// Components
import {GeneralText, HeaderBackButton} from '../../../../shared';

// Actions
import {updateAdOnCache, iBuyCreateOrUpdateWish} from '../../../../../actions/iBuyActions';
import {updateLoadingState} from '../../../../../actions/applicationStateActions';


class EditCurrency extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            currencyType: CurrencyType.USD,
        }
    }

    static navigationOptions = ({ navigation }) =>
    {
        return {
            title: 'Currency',
            headerStyle: globalStyles.headerStyle,
            headerTitleStyle: globalStyles.headerTitleStyle,
            headerLeft: <HeaderBackButton onClick={() => navigation.goBack()}/>
        };
    };

    componentDidMount()
    {
        this.setState({ currencyType: this.props.iBuy.cachedAd.pricing[PricingIndexes.Currency] });
    }

    updateCurrencyType(currencyType)
    {
        this.setState({ currencyType: currencyType });
        const cachedAd = Object.assign({}, this.props.iBuy.cachedAd);
        cachedAd.pricing[PricingIndexes.Currency] = currencyType;
        this.props.iBuyCreateOrUpdateWish(cachedAd);
    }

    render()
    {
        return (
            <View style={editDetailStyles.container}>
                <View style={styles.section}>
                    <View style={editDetailStyles.itemContainerWithFrame}>
                        <TouchableOpacity
                            style={[editDetailStyles.checkboxItem]}
                            onPress={this.updateCurrencyType.bind(this, CurrencyType.USD)}>
                            <Image
                                style={editDetailStyles.checkboxImage}
                                source={this.state.currencyType === CurrencyType.USD ? CheckboxSelected : CheckboxUnselected}/>
                            <View style={[globalStyles.viewBorderBottom, editDetailStyles.checkboxTextContainer]}>
                                <GeneralText
                                    style={[globalStyles.mediumText, editDetailStyles.checkboxText]}>USD</GeneralText>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[editDetailStyles.checkboxItem]}
                            onPress={this.updateCurrencyType.bind(this, CurrencyType.EURO)}>
                            <Image
                                style={editDetailStyles.checkboxImage}
                                source={this.state.currencyType === CurrencyType.EURO ? CheckboxSelected : CheckboxUnselected}/>
                            <View style={editDetailStyles.checkboxTextContainer}>
                                <GeneralText
                                    style={[globalStyles.mediumText, editDetailStyles.checkboxText]}>EURO</GeneralText>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[editDetailStyles.checkboxItem]}
                            onPress={this.updateCurrencyType.bind(this, CurrencyType.TL)}>
                            <Image
                                style={editDetailStyles.checkboxImage}
                                source={this.state.currencyType === CurrencyType.TL ? CheckboxSelected : CheckboxUnselected}/>
                            <View style={editDetailStyles.checkboxTextContainer}>
                                <GeneralText
                                    style={[globalStyles.mediumText, editDetailStyles.checkboxText]}>TL</GeneralText>
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

export default connect(mapStateToProps, { updateAdOnCache, iBuyCreateOrUpdateWish, updateLoadingState })(EditCurrency);