import React, {useEffect} from 'react'
import {Text, TouchableOpacity, View, TextInput, ActivityIndicator, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {fetchUser} from '../redux/actions/index';
import {getCurrentUser} from '../redux/selectors/index';
import {Formik} from 'formik';
import HeaderCard from './HeaderCard';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import {createGroceryList} from '../redux/actions/groceryListAction'

export default function ShoppingLists() {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUserAction = fetchUser();
        dispatch(fetchUserAction);
    }, [])

    const currentUser = useSelector(getCurrentUser);

    return (
        <View style={styles.shoppingListContainer}>
            <HeaderCard/>
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
                        <Formik
                            initialValues={{shoppingListName: ''}}
                            onSubmit={(values, actions) => {
                                console.log('Values === ', values);
                                dispatch(createGroceryList(values.shoppingListName, true))
                                actions.resetForm()
                            }}>
                            {
                                props => (
                                    <View>
                                        <TextInput
                                            placeholder='Enter Shopping List Name'
                                            onChangeText={props.handleChange('shoppingListName')}
                                            value={props.values.shoppingListName}
                                        />
                                        <TouchableOpacity onPress={() => {
                                            props.handleSubmit()
                                        }}>
                                            <Icon name="plus" color="firebrick" size={50}/>
                                        </TouchableOpacity>

                                    </View>
                                )
                            }

                        </Formik>
                    </View>

                </View>}
        </View>
    )
}

const styles = StyleSheet.create({
    shoppingListContainer: {
        flex: 1
    },
    activityContainer: {
        justifyContent: 'center',
        flex: 1
    },
    greetingContainer: {
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: '#BDC3C7',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    greetingText: {
        fontSize: 20
    },
    shoppingListItemContainer: {
        alignSelf: 'flex-end'
    },
    afterGreetingContainer: {
        flex: 1,
        backgroundColor: 'blue'
    }
})