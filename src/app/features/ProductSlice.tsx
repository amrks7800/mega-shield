import { RootState } from "@/store"
import { createSlice } from "@reduxjs/toolkit"

type InitialState = {
  isOpen: boolean
}

const initialState: InitialState = {
  isOpen: false,
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    toggleIsProductOpen: (state, action) => {
      state.isOpen = action.payload
    },
  },
})

export default productSlice.reducer

export const { toggleIsProductOpen } = productSlice.actions

export const IsProductOpenSelector = (state: RootState) =>
  state.product.isOpen
