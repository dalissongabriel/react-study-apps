import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { PizzaOrder } from './types';

const initialState: PizzaOrder = {
    base: "small",
    crust: "simple",
    sauce: "no_sauce",
    cheese: "mozzarela"
}
const pizzaOrderSlice = createSlice({
    name: "pizzaOrder",
    initialState: initialState,
    reducers: {
        chooseBase: (state, action:PayloadAction<string>) => { state.base = action.payload },
        chooseCrust: (state, action:PayloadAction<string>) => { state.crust = action.payload },
        chooseSauce: (state, action:PayloadAction<string>) => { state.sauce = action.payload },
        chooseCheese: (state, action:PayloadAction<string>) => { state.cheese = action.payload },
    }
})

export const selectPizzaOrder = (state: RootState) => state.pizzaOrder;

export const { reducer } = pizzaOrderSlice;
export const { chooseBase, chooseCheese, chooseCrust, chooseSauce } = pizzaOrderSlice.actions;

