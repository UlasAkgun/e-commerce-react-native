import React, {Component} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

// Constants
import CheckboxUnselected from '../../../../../assets/images/icons/3945fa79.png';
import CheckboxSelected from '../../../../../assets/images/icons/1c376ac1.png';
import Constants from '../../../../constants/constants';
import {ConditionType} from '../../../../constants/enumerations';

// Styles
import styles from './edit-condition-styles';
import editDetailStyles from '../../edit-details-styles';
import globalStyles from '../../../../../assets/css/styles';

// Components
import {GeneralText, HeaderBackButton} from '../../../shared';

// Actions
import {updateAdOnCache, iBuyCreateOrUpdateWish} from '../../../../actions/iBuyActions';
import {updateLoadingState} from '../../../../actions/applicationStateActions';


class EditCondition extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            condition: [ConditionType.AnyWorking],
        }
    }

    static navigationOptions = ({ navigation }) =>
    {
        return {
            title: 'Boxing',
            headerStyle: globalStyles.headerStyle,
            headerTitleStyle: globalStyles.headerTitleStyle,
            headerLeft: <HeaderBackButton onClick={() => navigation.state.params.handleGoBack()}/>
        };
    };

    componentDidMount()
    {
        this.props.navigation.setParams({ handleGoBack: this.goBack.bind(this) });
        this.setState({ condition: this.props.iBuy.cachedAd.condition });
    }

    goBack()
    {
        const cachedAd = Object.assign({}, this.props.iBuy.cachedAd);
        cachedAd.condition = this.state.condition;
        this.props.iBuyCreateOrUpdateWish(cachedAd);
        this.props.navigation.goBack();
    }

    isConditionSelected(conditionName)
    {
        return this.state.condition.includes(conditionName);
    }

    addRemoveCondition(conditionName)
    {
        const currentCondition = [...this.state.condition];

        if (currentCondition.includes(conditionName))
        {
            const conditionIndexToRemove = currentCondition.findIndex(conName => conName === conditionName);
            currentCondition.splice(conditionIndexToRemove, 1);

            const conditionObjectToRemove = Constants.ConditionsArray.find(conObj => conObj.name === conditionName);
            const finalConditionAfterRemoval = this.removeChildrenConditions(conditionObjectToRemove, currentCondition);

            this.setState({ condition: finalConditionAfterRemoval });
            return;
        }

        // Add the selected condition
        currentCondition.push(conditionName);
        const conditionObjectToAdd = Constants.ConditionsArray.find(conObj => conObj.name === conditionName);

        // Add children conditions
        const finalConditionAfterAdd = this.addChildrenConditions(conditionObjectToAdd, currentCondition);

        this.setState({ condition: finalConditionAfterAdd });
    }

    addChildrenConditions(conditionObject, currentCondition)
    {
        if (!conditionObject.children)
            return currentCondition;

        conditionObject.children.forEach(childConditionName =>
        {
            if (!currentCondition.includes(childConditionName))
                currentCondition.push(childConditionName);

            const childConditionObject = Constants.ConditionsArray.find(conObj => conObj.name === childConditionName);
            currentCondition = this.addChildrenConditions(childConditionObject, currentCondition);
        });

        return currentCondition;
    }

    removeChildrenConditions(conditionObject, currentCondition)
    {
        if (!conditionObject.children)
            return currentCondition;

        conditionObject.children.forEach(childConditionName =>
        {
            if (currentCondition.includes(childConditionName))
            {
                const conditionIndexToRemove = currentCondition.findIndex(conName => conName === childConditionName);
                currentCondition.splice(conditionIndexToRemove, 1);
            }

            const childConditionObject = Constants.ConditionsArray.find(con => con.name === childConditionName);
            currentCondition = this.removeChildrenConditions(childConditionObject, currentCondition);
        });

        return currentCondition;
    }

    render()
    {
        return (
            <View style={editDetailStyles.container}>
                <View style={styles.section}>
                    <GeneralText style={[globalStyles.smallText, editDetailStyles.text]}>In what condition would you like to buy your item?</GeneralText>

                    <View style={editDetailStyles.itemContainerWithFrame}>
                        <TouchableOpacity style={[editDetailStyles.checkboxItem]}
                                          onPress={this.addRemoveCondition.bind(this, ConditionType.AnyWorking)}>
                            <Image
                                style={editDetailStyles.checkboxImage}
                                source={this.isConditionSelected(ConditionType.AnyWorking) ? CheckboxSelected : CheckboxUnselected}/>
                            <View style={[globalStyles.viewBorderBottom, editDetailStyles.checkboxTextContainer]}>
                                <GeneralText
                                    style={[globalStyles.mediumText, editDetailStyles.checkboxText]}>Any Working</GeneralText>
                            </View>
                        </TouchableOpacity>

                        <View style={editDetailStyles.checkboxSubLevelContainer}>
                            <TouchableOpacity style={[editDetailStyles.checkboxItem]}
                                              onPress={this.addRemoveCondition.bind(this, ConditionType.FactorySealed)}>
                                <Image
                                    style={editDetailStyles.checkboxImage}
                                    source={this.isConditionSelected(ConditionType.FactorySealed) ? CheckboxSelected : CheckboxUnselected}/>
                                <View style={[globalStyles.viewBorderBottom, editDetailStyles.checkboxTextContainer]}>
                                    <GeneralText
                                        style={[globalStyles.mediumText, editDetailStyles.checkboxText]}>Factory Sealed</GeneralText>
                                </View>
                            </TouchableOpacity>

                            <View style={editDetailStyles.checkboxSubLevelContainer}>
                                <TouchableOpacity
                                    style={[editDetailStyles.checkboxItem]}
                                    onPress={this.addRemoveCondition.bind(this, ConditionType.BrandNew)}>
                                    <Image
                                        style={editDetailStyles.checkboxImage}
                                        source={this.isConditionSelected(ConditionType.BrandNew) ? CheckboxSelected : CheckboxUnselected}/>
                                    <View style={[globalStyles.viewBorderBottom, editDetailStyles.checkboxTextContainer]}>
                                        <GeneralText
                                            style={[globalStyles.mediumText, editDetailStyles.checkboxText]}>Brand New</GeneralText>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={[editDetailStyles.checkboxItem]}
                                    onPress={this.addRemoveCondition.bind(this, ConditionType.Refurbished)}>
                                    <Image
                                        style={editDetailStyles.checkboxImage}
                                        source={this.isConditionSelected(ConditionType.Refurbished) ? CheckboxSelected : CheckboxUnselected}/>
                                    <View style={[globalStyles.viewBorderBottom, editDetailStyles.checkboxTextContainer]}>
                                        <GeneralText
                                            style={[globalStyles.mediumText, editDetailStyles.checkboxText]}>Refurbished</GeneralText>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={editDetailStyles.checkboxSubLevelContainer}>
                            <TouchableOpacity
                                style={[editDetailStyles.checkboxItem]}
                                onPress={this.addRemoveCondition.bind(this, ConditionType.SecondHandUsed)}>
                                <Image
                                    style={editDetailStyles.checkboxImage}
                                    source={this.isConditionSelected(ConditionType.SecondHandUsed) ? CheckboxSelected : CheckboxUnselected}/>
                                <View style={[globalStyles.viewBorderBottom, editDetailStyles.checkboxTextContainer]}>
                                    <GeneralText
                                        style={[globalStyles.mediumText, editDetailStyles.checkboxText]}>2nd Hand / Used</GeneralText>
                                </View>
                            </TouchableOpacity>

                            <View style={editDetailStyles.checkboxSubLevelContainer}>
                                <TouchableOpacity
                                    style={[editDetailStyles.checkboxItem]}
                                    onPress={this.addRemoveCondition.bind(this, ConditionType.NeverUsed)}>
                                    <Image
                                        style={editDetailStyles.checkboxImage}
                                        source={this.isConditionSelected(ConditionType.NeverUsed) ? CheckboxSelected : CheckboxUnselected}/>
                                    <View style={[globalStyles.viewBorderBottom, editDetailStyles.checkboxTextContainer]}>
                                        <GeneralText
                                            style={[globalStyles.mediumText, editDetailStyles.checkboxText]}>Never Used</GeneralText>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={[editDetailStyles.checkboxItem]}
                                    onPress={this.addRemoveCondition.bind(this, ConditionType.LikeNewMint)}>
                                    <Image
                                        style={editDetailStyles.checkboxImage}
                                        source={this.isConditionSelected(ConditionType.LikeNewMint) ? CheckboxSelected : CheckboxUnselected}/>
                                    <View style={[globalStyles.viewBorderBottom, editDetailStyles.checkboxTextContainer]}>
                                        <GeneralText
                                            style={[globalStyles.mediumText, editDetailStyles.checkboxText]}>Like New</GeneralText>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={[editDetailStyles.checkboxItem]}
                                    onPress={this.addRemoveCondition.bind(this, ConditionType.SomeDefects)}>
                                    <Image
                                        style={editDetailStyles.checkboxImage}
                                        source={this.isConditionSelected(ConditionType.SomeDefects) ? CheckboxSelected : CheckboxUnselected}/>
                                    <View style={[globalStyles.viewBorderBottom, editDetailStyles.checkboxTextContainer]}>
                                        <GeneralText
                                            style={[globalStyles.mediumText, editDetailStyles.checkboxText]}>Some Defects</GeneralText>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <TouchableOpacity
                            style={[editDetailStyles.checkboxItem]}
                            onPress={this.addRemoveCondition.bind(this, ConditionType.Broken)}>
                            <Image
                                style={editDetailStyles.checkboxImage}
                                source={this.isConditionSelected(ConditionType.Broken) ? CheckboxSelected : CheckboxUnselected}/>
                            <View style={[globalStyles.viewBorderBottom, editDetailStyles.checkboxTextContainer]}>
                                <GeneralText
                                    style={[globalStyles.mediumText, editDetailStyles.checkboxText]}>Broken</GeneralText>
                            </View>
                        </TouchableOpacity>

                        <View style={editDetailStyles.checkboxSubLevelContainer}>
                            <TouchableOpacity
                                style={[editDetailStyles.checkboxItem]}
                                onPress={this.addRemoveCondition.bind(this, ConditionType.NeedsToBeRepaired)}>
                                <Image
                                    style={editDetailStyles.checkboxImage}
                                    source={this.isConditionSelected(ConditionType.NeedsToBeRepaired) ? CheckboxSelected : CheckboxUnselected}/>
                                <View style={[globalStyles.viewBorderBottom, editDetailStyles.checkboxTextContainer]}>
                                    <GeneralText
                                        style={[globalStyles.mediumText, editDetailStyles.checkboxText]}>Needs to be repaired</GeneralText>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[editDetailStyles.checkboxItem]}
                                onPress={this.addRemoveCondition.bind(this, ConditionType.CanOnlyBeUsedAsSpareParts)}>
                                <Image
                                    style={editDetailStyles.checkboxImage}
                                    source={this.isConditionSelected(ConditionType.CanOnlyBeUsedAsSpareParts) ? CheckboxSelected : CheckboxUnselected}/>
                                <View style={[editDetailStyles.checkboxTextContainer]}>
                                    <GeneralText
                                        style={[globalStyles.mediumText, editDetailStyles.checkboxText]}>Can only be used as spare parts</GeneralText>
                                </View>
                            </TouchableOpacity>
                        </View>
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

export default connect(mapStateToProps, { updateAdOnCache, iBuyCreateOrUpdateWish, updateLoadingState })(EditCondition);