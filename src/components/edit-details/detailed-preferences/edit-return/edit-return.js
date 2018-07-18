import React, {Component} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

// Constants
import CheckboxUnselected from '../../../../../assets/images/icons/3945fa79.png';
import CheckboxSelected from '../../../../../assets/images/icons/1c376ac1.png';
import {ReturnType} from '../../../../constants/enumerations';

// Styles
import styles from './edit-return-styles';
import editDetailStyles from '../../edit-details-styles';
import globalStyles from '../../../../../assets/css/styles';

// Components
import {GeneralText, HeaderBackButton} from '../../../shared';

// Actions
import {updateAdOnCache, iBuyCreateOrUpdateWish} from '../../../../actions/iBuyActions';
import {updateLoadingState} from '../../../../actions/applicationStateActions';


class EditReturn extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            returnType: ReturnType.Any,
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
        this.setState({ returnType: this.props.iBuy.cachedAd.return });
    }

    goBack()
    {
        const cachedAd = Object.assign({}, this.props.iBuy.cachedAd);
        cachedAd.return = this.state.returnType;
        this.props.iBuyCreateOrUpdateWish(cachedAd);
        this.props.navigation.goBack();
    }

    updateReturnType(returnType)
    {
        this.setState({ returnType: returnType });
    }

    render()
    {
        return (
            <View style={editDetailStyles.container}>
                <View style={styles.section}>
                    <GeneralText style={[globalStyles.smallText, editDetailStyles.text]}>Return</GeneralText>

                    <View style={editDetailStyles.itemContainerWithFrame}>
                        <TouchableOpacity
                            style={[editDetailStyles.checkboxItem]}
                            onPress={this.updateReturnType.bind(this, ReturnType.Any)}>
                            <Image
                                style={editDetailStyles.checkboxImage}
                                source={this.state.returnType === ReturnType.Any ? CheckboxSelected : CheckboxUnselected}/>
                            <View style={[globalStyles.viewBorderBottom, editDetailStyles.checkboxTextContainer]}>
                                <GeneralText
                                    style={[globalStyles.mediumText, editDetailStyles.checkboxText]}>Any</GeneralText>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[editDetailStyles.checkboxItem]}
                            onPress={this.updateReturnType.bind(this, ReturnType.OnlyFromSellersWhoAcceptReturns)}>
                            <Image
                                style={editDetailStyles.checkboxImage}
                                source={this.state.returnType === ReturnType.OnlyFromSellersWhoAcceptReturns ? CheckboxSelected : CheckboxUnselected}/>
                            <View style={editDetailStyles.checkboxTextContainer}>
                                <GeneralText
                                    style={[globalStyles.mediumText, editDetailStyles.checkboxText]}>Only from sellers who accept returns</GeneralText>
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

export default connect(mapStateToProps, { updateAdOnCache, iBuyCreateOrUpdateWish, updateLoadingState })(EditReturn);