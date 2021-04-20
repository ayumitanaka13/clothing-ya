const INITIAL_STATE = {
    sections: [
        {
            title: "hats",
            imageUrl: "https://images.unsplash.com/photo-1607611439230-fcbf50e42f7c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80",
            size: "large",
            id: 1,
            linkUrl: "shop/hats",
        },
        {
            title: "jackets",
            imageUrl: "https://images.unsplash.com/photo-1544923246-77307dd654cb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80",
            size: "large",
            id: 2,
            linkUrl: "shop/jackets",
        },
        {
            title: "sneakers",
            imageUrl: "https://images.unsplash.com/photo-1496202703211-aa28e9500c30?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
            size: "large",
            id: 3,
            linkUrl: "shop/sneakers",
        },
        {
            title: "womens",
            imageUrl: "https://images.unsplash.com/photo-1528812969535-4bcefc071532?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80",
            size: "large",
            id: 4,
            linkUrl: "shop/womens",
        },
        {
            title: "mens",
            imageUrl: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80",
            size: "large",
            id: 5,
            linkUrl: "shop/mens",
        },
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
};

export default directoryReducer;