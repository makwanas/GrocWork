import React, { useState, useEffect } from 'react';
import Header from './components/Header.js';
import ListItem from './components/ListItem.js';
import AddItem from './components/AddItem.js';
import DeleteChecked from './components/DeleteChecked.js';
import TitleLogo from './components/TitleLogo.js';
import { View, Text, StyleSheet, FlatList, Alert, TouchableWithoutFeedback, Keyboard, Button, TouchableOpacity } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import HomeStack from './components/routes/HomeStack.js';
import auth from '@react-native-firebase/auth';
import { Provider } from 'react-redux';
import Workspace from './components/Workspace';
import store from './redux/store/index';

const App = () => {
  // const [items, setItems] = useState([
  //   { id: uuidv4(), text: 'Milk' },
  //   { id: uuidv4(), text: 'Eggs' },
  //   { id: uuidv4(), text: 'Bread' },
  //   { id: uuidv4(), text: 'Juice' }
  // ]);

  // const [editStatus, editStatusChange] = useState(false);

  // const [editItemDetail, editItemDetailChange] = useState({
  //   id: null,
  //   text: null
  // })

  // const [checkedItems, checkedItemChange] = useState([]);

  // const deleteItem = (id) => {
  //   setItems(prevItems => {
  //     return prevItems.filter(item => item.id != id)
  //   });
  // }

  // const saveEditItem = (id, text) => {
  //   setItems(prevItems => {
  //     return prevItems.map(item => item.id === editItemDetail.id ? { id, text: editItemDetail.text } : item)
  //   })
  //   editStatusChange(!editStatus);
  // }

  // const handleEditChange = text => {
  //   editItemDetailChange({ id: editItemDetail.id, text })
  // }

  // const addItem = (text) => {
  //   if (!text) {
  //     Alert.alert('Error', 'Please enter an item',
  //       [{
  //         text: "Cancel"
  //       }],
  //       { cancelable: true });
  //   } else {
  //     setItems(prevItems => {
  //       return [{ id: uuidv4(), text }, ...prevItems]
  //     })
  //   }
  // }

  // const editItem = (id, text) => {
  //   editItemDetailChange({
  //     id,
  //     text,
  //   });
  //   return editStatusChange(!editStatus);
  // }

  // const itemChecked = (id, text) => {
  //   const isChecked = checkedItems.filter(checkedItem => checkedItem.id === id);
  //   isChecked.length ? checkedItemChange(prevItems => {
  //     return [...prevItems.filter(item => item.id !== id)]
  //   })
  //     :
  //     checkedItemChange(prevItems => {
  //       return [...prevItems.filter(item => item.id !== id), { id, text }];
  //     })
  // }

  // const deleteCheckedItems = () =>
  //   setItems(items.filter(a => !checkedItems.map(b => b.id).includes(a.id)));


  // console.log("Checked items are:", checkedItems)
  // console.log("Overall items are:", items)


  return (
    <Provider store={store}>
      <Workspace />
    </Provider>
  )



  // if (!user) {

  //   return (

  //     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
  //       <View style={styles.container}>
  //         <TitleLogo />
  //         <HomeStack />
  //         {/* <AddItem addItem={addItem} />
  //     <FlatList data={items}
  //       renderItem={({ item }) =>
  //         <ListItem item={item}
  //           deleteItem={deleteItem}
  //           editItem={editItem}
  //           isEditing={editStatus}
  //           editItemDetail={editItemDetail}
  //           saveEditItem={saveEditItem}
  //           handleEditChange={handleEditChange}
  //           itemChecked={itemChecked}
  //           checkedItems={checkedItems} />}
  //     />
  //     <DeleteChecked deleteCheckedItems={deleteCheckedItems} /> */}
  //       </View>
  //     </TouchableWithoutFeedback>
  //   )
  // }
  // return (
  //   <View>
  //     <Text>Welcome {user.email}</Text>
  //     <TouchableOpacity onPress={handleLogOut}>
  //       <Text>LogOut</Text></TouchableOpacity>
  //   </View>
  // )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   }
// })

export default App;