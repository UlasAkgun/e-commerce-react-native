import React, {Component} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

// Constants
import CheckboxUnselected from '../../../../../assets/images/icons/3945fa79.png';
import CheckboxSelected from '../../../../../assets/images/icons/1c376ac1.png';
import ForwardArrow from '../../../../../assets/images/icons/41086839.png';
import {PricingType, PricingIndexes, MinOrMax} from '../../../../constants/enumerations';

// Styles
import styles from './edit-pricing-type-styles';
import editDetailStyles from '../../edit-details-styles';
import globalStyles from '../../../../../assets/css/styles';

// Components
import {GeneralText, GeneralTextInput, HeaderBackButton} from '../../../shared';

// Actions
import {updateAdOnCache, iBuyCreateOrUpdateWish} from '../../../../actions/iBuyActions';
import {updateLoadingState} from '../../../../actions/applicationStateActions';


class EditPricingType extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            pricingType: PricingType.Negotiation,
            minPriceWholeNumber: 0,
            minPriceDecimalNumber: 0,
            maxPriceWholeNumber: 0,
            maxPriceDecimalNumber: 0
        }
    }

    static navigationOptions = ({ navigation }) =>
    {
        return {
            title: 'Pricing Type Single',
            headerStyle: globalStyles.headerStyle,
            headerTitleStyle: globalStyles.headerTitleStyle,
            headerLeft: <HeaderBackButton onClick={() => navigation.state.params.handleGoBack()}/>
        };
    };

    componentDidMount()
    {
        this.props.navigation.setParams({ handleGoBack: this.goBack.bind(this) });

        this.setInitialState();
    }

    setInitialState()
    {
        let cachedAd = Object.assign({}, this.props.iBuy.cachedAd);
        let minPriceWholeNumber = 0;
        let minPriceDecimalNumber = 0;
        let maxPriceWholeNumber = 0;
        let maxPriceDecimalNumber = 0;

        if (cachedAd.pricing[PricingIndexes.MinPrice])
        {
            minPriceWholeNumber = cachedAd.pricing[PricingIndexes.MinPrice].toString().split('.')[0];
            minPriceDecimalNumber = cachedAd.pricing[PricingIndexes.MinPrice].toString().split('.')[1] || 0;
        }

        if (cachedAd.pricing[PricingIndexes.MaxPrice])
        {
            maxPriceWholeNumber = cachedAd.pricing[PricingIndexes.MaxPrice].toString().split('.')[0];
            maxPriceDecimalNumber = cachedAd.pricing[PricingIndexes.MaxPrice].toString().split('.')[1] || 0;
        }

        this.setState({
            pricingType: this.props.iBuy.cachedAd.pricing[PricingIndexes.PricingType],
            minPriceWholeNumber: minPriceWholeNumber,
            minPriceDecimalNumber: minPriceDecimalNumber,
            maxPriceWholeNumber: maxPriceWholeNumber,
            maxPriceDecimalNumber: maxPriceDecimalNumber
        });
    }

    goBack()
    {
        const cachedAd = Object.assign({}, this.props.iBuy.cachedAd);
        cachedAd.pricing[PricingIndexes.PricingType] = this.state.pricingType;
        cachedAd.pricing[PricingIndexes.MinPrice] = Number(this.state.minPriceWholeNumber + '.' + this.state.minPriceDecimalNumber);
        cachedAd.pricing[PricingIndexes.MaxPrice] = Number(this.state.maxPriceWholeNumber + '.' + this.state.maxPriceDecimalNumber);

        this.props.iBuyCreateOrUpdateWish(cachedAd);
        this.props.navigation.goBack();
    }

    updatePricingType(pricingType)
    {
        this.setState({ pricingType: pricingType })
    }

    updatePriceWholeNumber(minOrMaxPrice, priceWholeNumber)
    {
        minOrMaxPrice === MinOrMax.Max ? this.setState({ maxPriceWholeNumber: priceWholeNumber }) : this.setState({ minPriceWholeNumber: priceWholeNumber });
    }

    updatePriceDecimal(minOrMaxPrice, priceDecimal)
    {
        minOrMaxPrice === MinOrMax.Max ? this.setState({ maxPriceDecimalNumber: priceDecimal }) : this.setState({ minPriceDecimalNumber: priceDecimal });
    }

    renderPriceRange()
    {
        if (this.state.pricingType === PricingType.Negotiation)
            return;

        return (
            <View>
                <View style={styles.section}>
                    <GeneralText style={[globalStyles.smallText, editDetailStyles.text]}>Please set the maximum price</GeneralText>
                    <View style={[editDetailStyles.itemContainerWithFrame, { height: 45, flexDirection: 'row', alignItems: 'center' }]}>
                        <View style={styles.priceInputContainerLeft}>
                            <GeneralTextInput
                                style={styles.priceInput}
                                value={this.state.maxPriceWholeNumber}
                                onChangeText={this.updatePriceWholeNumber.bind(this, MinOrMax.Max)}/>
                        </View>
                        <View style={styles.decimalSeparator}>
                            <GeneralText>.</GeneralText>
                        </View>
                        <View style={styles.priceInputContainerRight}>
                            <GeneralTextInput
                                style={styles.priceInput}
                                value={this.state.maxPriceDecimalNumber}
                                onChangeText={this.updatePriceDecimal.bind(this, MinOrMax.Max)}/>
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <GeneralText style={[globalStyles.smallText, editDetailStyles.text]}>Please set the minimum price</GeneralText>
                    <View style={[editDetailStyles.itemContainerWithFrame, { height: 45, flexDirection: 'row', alignItems: 'center' }]}>
                        <View style={styles.priceInputContainerLeft}>
                            <GeneralTextInput
                                style={styles.priceInput}
                                value={this.state.minPriceWholeNumber}
                                onChangeText={this.updatePriceWholeNumber.bind(this, MinOrMax.Min)}/>
                        </View>
                        <View style={styles.decimalSeparator}>
                            <GeneralText>.</GeneralText>
                        </View>
                        <View style={styles.priceInputContainerRight}>
                            <GeneralTextInput
                                style={styles.priceInput}
                                value={this.state.minPriceDecimalNumber}
                                onChangeText={this.updatePriceDecimal.bind(this, MinOrMax.Min)}/>
                        </View>
                    </View>
                </View>

            </View>
        );
    }

    render()
    {
        return (
            <View style={editDetailStyles.container}>
                <View style={styles.section}>
                    <GeneralText style={[globalStyles.smallText, editDetailStyles.text]}>How much would you like to pay?</GeneralText>

                    <View style={editDetailStyles.itemContainerWithFrame}>
                        <TouchableOpacity
                            style={[editDetailStyles.checkboxItem]}
                            onPress={this.updatePricingType.bind(this, PricingType.Negotiation)}>
                            <Image
                                style={editDetailStyles.checkboxImage}
                                source={this.state.pricingType === PricingType.Negotiation ? CheckboxSelected : CheckboxUnselected}/>
                            <View style={[globalStyles.viewBorderBottom, editDetailStyles.checkboxTextContainer]}>
                                <GeneralText
                                    style={[globalStyles.mediumText, editDetailStyles.checkboxText]}>Negotiable</GeneralText>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[editDetailStyles.checkboxItem]}
                            onPress={this.updatePricingType.bind(this, PricingType.PriceRange)}>
                            <Image
                                style={editDetailStyles.checkboxImage}
                                source={this.state.pricingType === PricingType.PriceRange ? CheckboxSelected : CheckboxUnselected}/>
                            <View style={editDetailStyles.checkboxTextContainer}>
                                <GeneralText
                                    style={[globalStyles.mediumText, editDetailStyles.checkboxText]}>Price Range</GeneralText>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                {this.renderPriceRange()}

                <View style={styles.section}>
                    <View style={editDetailStyles.itemContainerWithFrame}>
                        <TouchableOpacity
                            style={editDetailStyles.item}
                            onPress={this.props.navigation.navigate.bind(this, 'editCurrency')}>
                            <GeneralText style={[globalStyles.mediumText, editDetailStyles.itemText]}>Currency</GeneralText>
                            <View style={editDetailStyles.forwardArrowContainer}>
                                <GeneralText style={[globalStyles.smallText, editDetailStyles.grayText]}>
                                    {this.props.iBuy.cachedAd.pricing[PricingIndexes.Currency]}
                                </GeneralText>
                                <Image source={ForwardArrow} style={editDetailStyles.forwardArrowIcon}/>
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

export default connect(mapStateToProps, { updateAdOnCache, iBuyCreateOrUpdateWish, updateLoadingState })(EditPricingType);