import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

// Constants
import {Limits} from '../../../constants/enumerations';

// Styles
import styles from './edit-description-styles';
import editDetailStyles from '../edit-details-styles';
import globalStyles from '../../../../assets/css/styles';

// Components
import {GeneralText, GeneralTextInput, HeaderBackButton} from '../../shared';

// Actions
import {updateAdOnCache, iBuyCreateOrUpdateWish} from '../../../actions/iBuyActions';
import {updateLoadingState} from '../../../actions/applicationStateActions';


class EditDescription extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            description: '',
            remainingCharacters: Limits.descriptionCharLimit
        }
    }

    static navigationOptions = ({ navigation }) =>
    {
        return {
            title: 'Description',
            headerStyle: globalStyles.headerStyle,
            headerTitleStyle: globalStyles.headerTitleStyle,
            headerLeft: <HeaderBackButton onClick={() => navigation.state.params.handleGoBack()}/>
        };

    };

    componentDidMount()
    {
        this.props.navigation.setParams({ handleGoBack: this.goBack.bind(this) });

        this.setState({
            description: this.props.iBuy.cachedAd.description,
            remainingCharacters: Limits.descriptionCharLimit - this.props.iBuy.cachedAd.description.length
        });
    }

    goBack()
    {
        const cachedAd = Object.assign({}, this.props.iBuy.cachedAd);
        cachedAd.description = this.state.description;
        this.props.iBuyCreateOrUpdateWish(cachedAd);
        this.props.navigation.goBack();
    }


    updateDescription(description)
    {
        this.setState({ description, remainingCharacters: Limits.descriptionCharLimit - description.length })
    }

    render()
    {
        return (
            <View style={editDetailStyles.container}>
                <View style={styles.section}>
                    <GeneralText style={[globalStyles.smallText, editDetailStyles.text]}>Please enter description for your listing</GeneralText>
                    <GeneralTextInput
                        containerStyle={{ flex: 1, alignSelf: 'stretch', marginBottom: 10 }}
                        style={[editDetailStyles.textInput, { flex: 1 }]}
                        multiline
                        numberOfLines={6}
                        value={this.state.description}
                        onChangeText={this.updateDescription.bind(this)}
                    />
                    <View style={editDetailStyles.infoTextContainer}>
                        <GeneralText style={[globalStyles.small, editDetailStyles.infoText]}>Remaining Characters:</GeneralText>
                        <GeneralText style={[globalStyles.small, editDetailStyles.infoText, editDetailStyles.infoTextCharacterCount]}>
                            {this.state.remainingCharacters}
                        </GeneralText>
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

export default connect(mapStateToProps, { updateAdOnCache, iBuyCreateOrUpdateWish, updateLoadingState })(EditDescription);