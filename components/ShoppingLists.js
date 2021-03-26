import React, { useEffect } from 'react'
import { Text, TouchableOpacity, View, ActivityIndicator, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { useSelector} from 'react-redux';
import { fetchUser } from '../redux/actions/index';
import { getCurrentUser} from '../redux/selectors/index';
import HeaderCard from './HeaderCard';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default function ShoppingLists() {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUserAction = fetchUser();
        dispatch(fetchUserAction);
    }, [])

    const currentUser = useSelector(getCurrentUser);

    return (
        <View style={styles.shoppingListContainer}>
        <HeaderCard />
        {currentUser === undefined ? 
        <View style={styles.activityContainer}>
            <ActivityIndicator size="large" color="black"/>
        </View>
        :
        <View style={styles.afterGreetingContainer}>
        <View style={styles.greetingContainer}>
            <Text style={styles.greetingText}>Welcome {currentUser.name}</Text>
        </View>
        <View style={styles.shoppingListItemContainer}>
        <TouchableOpacity>
        <Icon name="plus" color="firebrick" size={50}/>
        </TouchableOpacity>
        </View>
        </View>}   
        </View>
    )
}

const styles=StyleSheet.create({
    shoppingListContainer:{
        flex:1
    },
    activityContainer:{
        justifyContent:'center',
        flex:1
    },
    greetingContainer:{
        paddingTop:5,
        paddingBottom:5,
        backgroundColor:'#BDC3C7',
        flexDirection:'row',
        justifyContent:'center'
    },
    greetingText:{
        fontSize: 20
    },
    shoppingListItemContainer:{
        alignSelf:'flex-end'
    },
    afterGreetingContainer:{
        flex:1,
        backgroundColor:'blue'
    }
})