import firebase from "firebase/app";
import "firebase/firestore";

firestore
  .collection("users")
  .doc("userID")
  .collection.apply("cartItem")
  .doc("cartItemID");

firestore.doc("/users/userID/cartItem/cartItemID");
