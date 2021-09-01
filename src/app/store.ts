import { configureStore } from "@reduxjs/toolkit";
import { reducer as pizzaOrderReducer } from "../PizzaOrder/pizzaOrderSlice";

export const store = configureStore({ 
    reducer:  {
        pizzaOrder: pizzaOrderReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
