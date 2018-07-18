import React, {Component} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

// Constants
import {ButtonClass, ButtonContainerClass} from '../../../constants/enumerations';
import TickIcon from '../../../../assets/images/icons/62d31a9a.png';
import Constants from '../../../constants/constants';

// Styles
import styles from './iBuy-step2-styles';
import iBuyStyles from '../iBuy-styles';
import globalStyles from '../../../../assets/css/styles';

// Components
import IBuyHeader from '../iBuy-header/iBuy-header';
import {GeneralText, GeneralTextInput, GeneralButton} from '../../shared';

// Actions
import {updateAdOnCache} from '../../../actions/iBuyActions';
import {updateLoadingState} from '../../../actions/applicationStateActions';


class IBuyStep2 extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            selectedCategoryId: 0
        };
    }

    onNextClick()
    {
        this.props.iBuy.cachedAd.selectedCat = Constants.Categories.find(cat => cat.id === this.state.selectedCategoryId);
        this.navigateToIBuyStep3();
    }

    navigateToIBuyStep1()
    {
        this.props.navigation.navigate('iBuyStep1');
    }

    navigateToIBuyStep3()
    {
        this.props.navigation.navigate('iBuyStep3');
    }

    renderCategories()
    {
        return Constants.Categories.map((category, index) =>
        {
            const tickIcon = this.state.selectedCategoryId === category.id ? (<Image style={styles.tickIcon} source={TickIcon}/>) : null;
            const buttonLastItemStyle = Constants.Categories.length - 1 === index ? styles.categoryItemLast : null;
            const buttonSelectedItemStyle = this.state.selectedCategoryId === category.id ? styles.categoryItemSelected : null;
            const textSelectedItemStyle = this.state.selectedCategoryId === category.id ? styles.categoryTextSelected : null;

            return (
                <TouchableOpacity style={[styles.categoryItem, globalStyles.borderBottom, buttonLastItemStyle, buttonSelectedItemStyle]}
                                  key={category.id}
                                  onPress={() => this.setState({ selectedCategoryId: category.id })}>
                    {tickIcon}
                    <GeneralText style={[globalStyles.mediumText, styles.categoryItemText, textSelectedItemStyle]}>{category.name}</GeneralText>
                </TouchableOpacity>);
        });
    }

    render()
    {
        return (
            <View style={iBuyStyles.container}>
                <IBuyHeader step={2}/>
                <View style={styles.container}>
                    <View style={styles.filterContainer}>
                        <GeneralText style={[globalStyles.mediumText, globalStyles.bold]}>Filter</GeneralText>
                        <GeneralTextInput
                            style={{ height: 35, paddingLeft: 30 }}
                            placeholder="Type keywords to find type"
                            showSearchIcon
                        />
                    </View>

                    <View style={styles.categoryContainer}>
                        {this.renderCategories()}
                    </View>
                </View>
                <View style={globalStyles.buttonContainer}>
                    <View style={globalStyles.buttonRow}>
                        <GeneralButton
                            title="Previous"
                            buttonClass={ButtonClass.Grey}
                            containerClass={ButtonContainerClass.Half}
                            onClick={this.navigateToIBuyStep1.bind(this)}
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

export default connect(mapStateToProps, { updateAdOnCache, updateLoadingState })(IBuyStep2);