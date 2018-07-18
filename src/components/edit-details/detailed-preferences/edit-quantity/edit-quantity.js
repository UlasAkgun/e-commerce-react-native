import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

// Constants
import {Limits} from '../../../../constants/enumerations';

// Styles
import styles from './edit-quantity-styles';
import editDetailStyles from '../../edit-details-styles';
import globalStyles from '../../../../../assets/css/styles';

// Components
import {GeneralText, GeneralTextInput, HeaderBackButton} from '../../../shared';

// Actions
import {updateAdOnCache, iBuyCreateOrUpdateWish} from '../../../../actions/iBuyActions';
import {updateLoadingState} from '../../../../actions/applicationStateActions';


class EditQuantity extends Component {
    constructor(props)
    {
        super(props);

        this.state = { quantity: 0 };
    }

    static navigationOptions = ({ navigation }) =>
    {
        return {
            title: 'Quantity',
            headerStyle: globalStyles.headerStyle,
            headerTitleStyle: globalStyles.headerTitleStyle,
            headerLeft: <HeaderBackButton onClick={() => navigation.state.params.handleGoBack()}/>
        };

    };

    componentDidMount()
    {
        this.props.navigation.setParams({ handleGoBack: this.goBack.bind(this) });

        this.setState({
            quantity: this.props.iBuy.cachedAd.quantity
        });
    }

    goBack()
    {
        const cachedAd = Object.assign({}, this.props.iBuy.cachedAd);
        cachedAd.quantity = this.state.quantity;
        this.props.iBuyCreateOrUpdateWish(cachedAd);
        this.props.navigation.goBack();
    }

    updateQuantity(quantity)
    {
        quantity = quantity > Limits.quantityLimit ? Limits.quantityLimit : quantity;
        this.setState({ quantity })
    }

    render()
    {
        return (
            <View style={editDetailStyles.container}>
                <View style={styles.section}>
                    <GeneralText style={[globalStyles.smallText, editDetailStyles.text]}>How many items would you like to buy?</GeneralText>
                    <GeneralTextInput
                        style={[editDetailStyles.textInput, { height: 45 }]}
                        keyboardType={'numeric'}
                        value={this.state.quantity.toString()}
                        onChangeText={this.updateQuantity.bind(this)}
                    />
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

export default connect(mapStateToProps, { updateAdOnCache, iBuyCreateOrUpdateWish, updateLoadingState })(EditQuantity);