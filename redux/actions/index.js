import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { USER_STATE_CHANGE } from '../constants/index';

export function fetchUser() {
    return (dispatch => {
        firestore().collection("Users")
            .doc(auth().currentUser.uid)
            .get()
            .then(snapshot => {
                if (snapshot.exists) {
                    console.log("Snapshot in action:", snapshot.data());
                    dispatch({ type: USER_STATE_CHANGE, currentUser: snapshot.data() })
                }
                else {
                    console.log("Snapshot does note exist");
                }
            })
    })
}