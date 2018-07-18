import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {isEmpty} from 'lodash';

// Constants
import {ButtonClass, ButtonContainerClass, AdStatus} from '../../constants/enumerations';

// Styles
import styles from './wishlist-styles';
import globalStyles from '../../../assets/css/styles';
import {OrangeTextColor, GrayTextColor} from '../../../assets/css/globalVariables';

// Components
import {GeneralText, GeneralTextInput, GeneralButton} from '../shared';

// Actions
import {getUserWishlistByUserIdAndStatus, updateAdOnCache, deleteWish} from '../../actions/iBuyActions';
import {updateLoadingState} from '../../actions/applicationStateActions';


class WishList extends Component {
    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        this.props.updateLoadingState(true);
        this.props.getUserWishlistByUserIdAndStatus(AdStatus.wishList);
    }

    componentDidUpdate(prevProps)
    {
        if (!isEmpty(this.props.iBuy.wishList) || prevProps !== this.props)
        {
            this.props.updateLoadingState(false);
        }
    }

    navigateToEditDetailsPage(ad)
    {
        this.props.updateAdOnCache(ad);
        this.props.navigation.navigate('search')
    }

    renderWishList()
    {
        if (this.props.iBuy.wishList.length === 0)
            return null;

        return this.props.iBuy.wishList.map(ad =>
        {
            return (
                <TouchableOpacity key={ad.title} onPress={this.navigateToEditDetailsPage.bind(this, ad)}>
                    <Text>{ad.title}</Text>
                    <Text>{ad.description}</Text>
                    <TouchableOpacity style={{ marginLeft: 10 }} onPress={this.props.deleteWish.bind(this, ad.id)}>
                        <Text>X</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            );
        })
    }

    render()
    {
        return (
            <View style={{ flex: 1, marginTop: 50, marginLeft: 20 }}>
                {this.renderWishList()}
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

export default connect(mapStateToProps,
    {
        getUserWishlistByUserIdAndStatus,
        updateAdOnCache,
        deleteWish,
        updateLoadingState
    })(WishList);