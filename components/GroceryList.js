import React, {useState, useEffect} from "react";

import {View, Text, Button, TextInput} from 'react-native'
import {useDispatch, useSelector} from "react-redux";
import {deleteGroceryList, modifyNameGroceryList, fetchItems} from "../redux/actions/groceryListAction";
import GroceryItems from "./GroceryItems";
import {createItem} from "../redux/actions/itemAction";

const GroceryList = ({navigation, groceryList}) => {
    const [isEdit, setIsEdit] = useState(false)
    const [isShow, setIsShow] = useState(false)
    const [name, setName] = useState(groceryList.name)
    const [itemName, setItemName] = useState('')

    const dispatch = useDispatch()
    const items = useSelector(state => state.item)

    useEffect(() => {
        dispatch(fetchItems(groceryList.groceryListId))
    }, [])



    return (groceryList &&
        <View>
            {isEdit === true ? (
                <TextInput
                    placeholder={'placeholder'}
                    onChangeText={text => setName(text)}
                    onSubmitEditing={() => {
                        setIsEdit(!isEdit)
                        dispatch(modifyNameGroceryList(groceryList.groceryListId, name))
                    }}>
                    {name}
                </TextInput>) : (
                <Text onPress={() => setIsEdit(!isEdit)}>
                    {name}
                </Text>

            )}
            <Button
                title={'detail'}
                onPress={() => setIsShow(!isShow)}
            />

            {isShow ? (
                    <>
                        <TextInput
                            placeholder={'placeholder'}
                            onChangeText={text => setItemName(text)}
                            onSubmitEditing={() => {
                                dispatch(createItem(groceryList.groceryListId, itemName))
                                setItemName('')
                            }}>
                            {itemName}
                        </TextInput>
                        <GroceryItems items={items}/>
                    </>
                ) :
                (null)
            }


            <Button
                title={'x'}
                onPress={() => {
                    dispatch(deleteGroceryList(groceryList.groceryListId))
                }}
            />
        </View>
    )
}

export default GroceryList