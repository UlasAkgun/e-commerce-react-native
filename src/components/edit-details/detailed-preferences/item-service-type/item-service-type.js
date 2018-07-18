import React, {Component} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

// Constants
import ForwardArrow from '../../../../../assets/images/icons/41086839.png';
import {DangerTextColor} from '../../../../../assets/css/globalVariables';

// Styles
import styles from './item-service-type-styles';
import editDetailStyles from '../../edit-details-styles';
import globalStyles from '../../../../../assets/css/styles';

// Components
import {GeneralText} from '../../../shared/index';

export default class ItemServiceType extends Component {
    render()
    {
        return (
            <View style={styles.container}>
                <View style={styles.section}>
                    <View style={editDetailStyles.itemContainer}>
                        <TouchableOpacity style={[editDetailStyles.item, globalStyles.viewBorderBottom]}>
                            <GeneralText style={[globalStyles.mediumText, editDetailStyles.itemText]}>Total Items</GeneralText>
                            <GeneralText style={[globalStyles.smallText, editDetailStyles.grayText]}>0</GeneralText>
                        </TouchableOpacity>
                    </View>

                    <View style={editDetailStyles.itemContainer}>
                        <TouchableOpacity style={[editDetailStyles.item]}>
                            <GeneralText style={[globalStyles.mediumText, styles.itemText]}>Main Type</GeneralText>
                            <View style={globalStyles.forwardArrowContainer}>
                                <GeneralText style={[globalStyles.smallText, editDetailStyles.grayText]}>Motorlu Tasitlar</GeneralText>
                                <Image source={ForwardArrow} style={globalStyles.forwardArrowIcon}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.section}>
                    <View style={editDetailStyles.itemContainer}>
                        <TouchableOpacity style={[editDetailStyles.item]}>
                            <View>
                                <GeneralText style={[globalStyles.mediumText, globalStyles.dangerText, globalStyles.bold, editDetailStyles.itemText]}>ITEM TYPE</GeneralText>
                                <View style={{ paddingLeft: 16 }}>
                                    <GeneralText style={[globalStyles.mediumText, editDetailStyles.itemText, { fontStyle: 'italic' }]}>
                                        Item type is not defined
                                    </GeneralText>
                                    <GeneralText style={[globalStyles.mediumText, globalStyles.dangerText, editDetailStyles.itemText, { fontStyle: 'italic' }]}>
                                        Please select item type
                                    </GeneralText>
                                </View>
                            </View>
                            <Image source={ForwardArrow} style={globalStyles.forwardArrowIcon}/>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }
}
