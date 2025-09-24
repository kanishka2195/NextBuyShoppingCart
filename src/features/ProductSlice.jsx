import { createSlice } from '@reduxjs/toolkit'

export const STATUS =Object.freeze({
    SUCCESS:'Success',
    ERROR:'error',
    LOADING :'Loading'
})

const initialState = {
   data:[],
   status:STATUS.SUCCESS,
}
export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  
  reducers: {
    setProducts: (state,action) => {
      state.data=action.payload;
    },
    setStatus: (state,action) => {
      state.status=action.payload;
    },
  },
})

export const { setProducts, setStatus } = ProductSlice.actions

export default ProductSlice.reducer


// middleware
export function fetchProducts(){
    return async function fetchProductThunk(dispatch){
        dispatch(setStatus(STATUS.LOADING));
        try {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            dispatch(setProducts(data));
            dispatch(setStatus(STATUS.SUCCESS));
            
        } catch (error) {
            console.log(error)
            dispatch(setStatus(STATUS.ERROR));
        }
    }
}