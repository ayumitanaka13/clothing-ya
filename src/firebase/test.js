import { firestore } from "./firebase.util";

firestore
  .collection("users")
  .doc("userID")
  .collection.apply("cartItem")
  .doc("cartItemID");
firestore;
