import { InMemoryCache, makeVar } from "@apollo/client";

// export const cache = new InMemoryCache({
//     Query: {
//         fields: {
//             cartHidden: {
//                 read(): {
//                     return cartHiddenVar()
//                 }
//             },
//             cartItems: {
//                 read: {

//                 }
//             },
//             itemCount: {
//                 read(): {
//                     // return
//                 }
//             }
//         }
//     }
// })

export const cartHiddenVar = makeVar(true);
export const cartIremsVar = makeVar([]);
