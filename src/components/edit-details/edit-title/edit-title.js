import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

// Constants
import {Limits} from '../../../constants/enumerations';

// Styles
import styles from './edit-title-styles';
import editDetailStyles from '../edit-details-styles';
import globalStyles from '../../../../assets/css/styles';

// Components
import {GeneralText, GeneralTextInput, HeaderBackButton} from '../../shared';

// Actions
import {updateAdOnCache, iBuyCreateOrUpdateWish} from '../../../actions/iBuyActions';
import {updateLoadingState} from '../../../actions/applicationStateActions';


class EditTitle extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            title: '',
            remainingCharacters: Limits.titleCharLimit
        }
    }

    static navigationOptions = ({ navigation }) =>
    {
        return {
            title: 'Title',
            headerStyle: globalStyles.headerStyle,
            headerTitleStyle: globalStyles.headerTitleStyle,
            headerLeft: <HeaderBackButton onClick={() => navigation.state.params.handleGoBack()}/>
        };

    };

    componentDidMount()
    {
        this.props.navigation.setParams({ handleGoBack: this.goBack.bind(this) });

        this.setState({
            title: this.props.iBuy.cachedAd.title,
            remainingCharacters: Limits.titleCharLimit - this.props.iBuy.cachedAd.title.length
        });
    }

    goBack()
    {
        const cachedAd = Object.assign({}, this.props.iBuy.cachedAd);
        cachedAd.title = this.state.title;
        this.props.iBuyCreateOrUpdateWish(cachedAd);
        this.props.navigation.goBack();
    }

    updateTitle(title)
    {
        this.setState({ title, remainingCharacters: Limits.titleCharLimit - title.length })
    }

    render()
    {
        return (
            <View style={editDetailStyles.container}>
                <View style={styles.section}>
                    <GeneralText style={[globalStyles.smallText, editDetailStyles.text]}>Please enter title</GeneralText>
                    <GeneralTextInput
                        style={[editDetailStyles.textInput, { height: 45 }]}
                        value={this.state.title}
                        onChangeText={this.updateTitle.bind(this)}
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

export default connect(mapStateToProps, { updateAdOnCache, iBuyCreateOrUpdateWish, updateLoadingState })(EditTitle);