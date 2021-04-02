import React, {useEffect} from 'react'
import {Text, TouchableOpacity, View, TextInput, StyleSheet, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchGroceryLists} from '../../redux/actions/userAction';
import {Formik} from 'formik';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {createGroceryList} from '../../redux/actions/groceryListAction'
import GroceryLists from "../GroceryLists";

export default function ShoppingLists() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGroceryLists())
    }, [])

    const groceryLists = useSelector(state => state.groceryList)

    //console.log('Shopping list === ', groceryLists)

    return (
        <View style={styles.shoppingListContainer}>
            <Text style={styles.headerText}>Your Shopping Lists</Text>
            <View style={styles.addShoppingListContainer}>
                    <TouchableOpacity style={styles.addShoppingListButtonContainer}>
                    <Icon style={styles.addShoppingListButtonIcon} name="plus" size={24} color="#52BE80"/>
                    <Text style={styles.addShoppingListButtonText}> Add a List</Text>
                    </TouchableOpacity>
            </View>
            <View style={styles.afterGreetingContainer}>
                
                <GroceryLists groceryLists={groceryLists}/>
                <View style={styles.shoppingListItemContainer}>
                    <Formik
                        initialValues={{shoppingListName: ''}}
                        onSubmit={(values, actions) => {
                            //console.log('Values === ', values);

                            // create a grocery list
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

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerText:{
        fontFamily:'OpenSans-Semibold',
        fontSize: 26,
        backgroundColor:"#E5E7E9",
        paddingLeft:5,
        paddingTop:5,
        paddingBottom:5
    },
    shoppingListContainer: {
        flex: 1
    },
    addShoppingListContainer:{
        flexDirection:'row-reverse',
    },
    addShoppingListButtonContainer:{
        flexDirection:'row',
        borderWidth:2,
        borderRadius:12,
        borderColor:"#52BE80",
        marginRight:5,
        marginTop:5

    },
    addShoppingListButtonText:{
        paddingTop:5,
        paddingBottom:5,
        paddingRight:10,
        fontFamily:'OpenSans-Semibold',
        fontSize: 18,
        color:"#52BE80"
    },
    addShoppingListButtonIcon:{
        paddingTop:5,
        paddingLeft:5,
        paddingRight:3
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
        flex: 1
    }
})