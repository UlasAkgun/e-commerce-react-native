import React, {Component} from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import LinearGradient from "expo/src/effects/LinearGradient.ios";

// Components
import IBuyStep1 from '../iBuy/iBuy-step1/iBuy-step1';
import IBuyStep2 from '../iBuy/iBuy-step2/iBuy-step2';
import IBuyStep3 from '../iBuy/iBuy-step3/iBuy-step3';
import IBuyStep4 from '../iBuy/iBuy-step4/iBuy-step4';
import Wishlist from '../wishlist/wishlist';


import EditDetails from '../edit-details/edit-details-main/edit-details-main';
import EditTitle from '../edit-details/edit-title/edit-title';
import EditDescription from '../edit-details/edit-description/edit-description';
import EditQuantity from '../edit-details/detailed-preferences/edit-quantity/edit-quantity';
import EditCondition from '../edit-details/detailed-preferences/edit-condition/edit-condition';
import DetailedPreferences from '../edit-details/detailed-preferences/detailed-preferences-main/detailed-preferences-main';
import EditPricingType from '../edit-details/detailed-preferences/edit-pricing-type/edit-pricing-type';
import EditWarrantyStatus from '../edit-details/detailed-preferences/edit-warranty-status/edit-warranty-status';
import EditReturn from '../edit-details/detailed-preferences/edit-return/edit-return';
import EditBoxing from '../edit-details/detailed-preferences/edit-boxing/edit-boxing';
import EditCurrency from '../edit-details/detailed-preferences/edit-pricing-type/edit-currency/edit-currency';
import PreferredLocations from '../edit-details/detailed-preferences/preferred-locations/preferred-locations';
import ItemServiceType from '../edit-details/detailed-preferences/item-service-type/item-service-type';


// Icons
import ProfileIcon from '../../../assets/images/icons/4a6bed35.png';
import SearchIcon from '../../../assets/images/icons/773fa8e9.png';
import IBuyIcon from '../../../assets/images/icons/faf2ec71.png';
import MessageIcon from '../../../assets/images/icons/21bed354.png';
import NotificationIcon from '../../../assets/images/icons/fca1e468.png';

// Constants
import {ButtonGradientColor} from '../../constants/enumerations';

export default class BottomTabNavigator extends Component {
    render()
    {
        const iBuyStackNavigator = createStackNavigator({
            iBuyStep1: { screen: IBuyStep1, navigationOptions: { tabBarVisible: false } },
            iBuyStep2: { screen: IBuyStep2 },
            iBuyStep3: { screen: IBuyStep3 },
            iBuyStep4: { screen: IBuyStep4 }
        }, {
            headerMode: 'none',
            navigationOptions: {
                headerVisible: false,
                tabBarVisible: false
            },

        });

        const EditDetailsStackNavigator = createStackNavigator({
            editDetails: { screen: EditDetails },
            editTitle: { screen: EditTitle },
            editDescription: { screen: EditDescription },
            detailedPreferences: { screen: DetailedPreferences },
            editQuantity: { screen: EditQuantity },
            editCondition: { screen: EditCondition },
            editWarrantyStatus: { screen: EditWarrantyStatus },
            editPricingType: { screen: EditPricingType },
            editCurrency: { screen: EditCurrency },
            editReturn: { screen: EditReturn },
            editBoxing: { screen: EditBoxing },
            preferredLocations: { screen: PreferredLocations }
        });

        const BottomTabNavigator = createBottomTabNavigator({
            profile: {
                screen: Wishlist,
                navigationOptions: {
                    tabBarIcon: () =>
                    {
                        return <Image source={ProfileIcon}/>
                    }
                }
            },
            search: {
                screen: EditDetailsStackNavigator,
                navigationOptions: {
                    tabBarIcon: () =>
                    {
                        return <Image source={SearchIcon}/>
                    }
                }
            },
            iBuy: {
                screen: iBuyStackNavigator,
                navigationOptions: {
                    tabBarIcon: () =>
                    {
                        return (
                            <LinearGradient colors={ButtonGradientColor['orange']}
                                            style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={IBuyIcon}/>
                            </LinearGradient>
                        )
                    }
                }
            },
            messages: {
                screen: EditCondition,
                navigationOptions: {
                    tabBarIcon: () =>
                    {
                        return <Image source={MessageIcon}/>
                    }
                }
            },
            notifications: {
                screen: EditQuantity,
                navigationOptions: {
                    tabBarIcon: () =>
                    {
                        return <Image source={NotificationIcon}/>
                    }
                }
            }
        }, {
            tabBarOptions: {
                showLabel: false
            }
        });

        return <BottomTabNavigator />
    }
}