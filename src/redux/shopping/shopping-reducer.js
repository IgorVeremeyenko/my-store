import * as actionTypes from './shopping-types';

const INITIAL_STATE = {
    products: [
        {
          id: 1,
          name: 'чашка',
          cost: 75,
          img: 'http://www.eney.com.ua/image/cache/data/products/10gorn/51K034M90-530x530.jpg'
        },
        {
          id: 2,
          name: 'очки',
          cost: 500,
          img: 'https://images.ua.prom.st/2592020431_w640_h640_2592020431.jpg'
        },
        {
          id: 3,
          name: 'бритва',
          cost: 150,
          img: 'https://jetstore.com.ua/image/cache/catalog/tovari/stanok/9033001-stanok-t-obraznyy-merkur-33c-650x650.jpg'
        }
      ],
    cart: [],
    currentItem: null
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            const item = state.products.find(prod => prod.id === action.payload.id);
            const isInCart = state.cart.find(item => item.id === action.payload.id ? true : false)
        return{
            ...state,
            cart: isInCart ? 
            state.cart.map(item => item.id === action.payload.id ? {...item, qty: item.qty + 1} : item) : 
            [...state.cart, {...item, qty: 1} ],
        };
        case actionTypes.REMOVE_FROM_CART:
        return{
          ...state,
          cart: state.cart.filter(item => item.id != action.payload.id)
        }
        case actionTypes.LOAD_CURRENT_ITEM:
        return{}
        case actionTypes.QUANTITY:
        return{
          ...state,
          cart: state.cart.map(item => item.id === action.payload.id ? {...item, qty: action.payload.qty} : item)
        };
        default: 
        return state;
    }
}

export default shopReducer;