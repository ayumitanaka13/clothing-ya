import { InMemoryCache, makeVar } from '@apollo/client'

export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                cartHidden: {
                    read() {
                        return cartHiddenVar()
                    }
                },
                cartItems: {
                    read() {
                        return cartItemsVar()
                    }
                },
                itemCount: {
                    read() {
                        return itemCountVar()
                    }
                }
            }
        }
    }
})

export const cartHiddenVar = makeVar(true)
export const cartItemsVar = makeVar([])
export const itemCountVar = makeVar(0)