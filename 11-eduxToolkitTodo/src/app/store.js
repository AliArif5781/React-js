import {configureStore} from '@reduxjs/toolkit'   // first we configure the store.yeh core redux sa aya ha na ki react redux sa.Ab yeh store bn gya ha ab but properly tiyaar ni ha.
import todoReducer from '../features/todo/todoSlice';    //Store.js ko bas reducer ki knowledge chayeh thi.

export  const store = configureStore({                 // yeh object lata ha but abhi bi ready ni ha.
        reducer: todoReducer                  // yeh reducer ki list ha
})    

//ab jo sb sa imp cheez ati ha jiska lya hi actually ma hmara store incomplete ha wo ha reducers
// Next step is to make reducers.//


