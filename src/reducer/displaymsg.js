import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  setMessage = '',
};
export const sendMessage = createSlice({
      name:'sendmsg',
      initialState,
      reducers:{ 
        reset: (state) =>{
           state.setMessage = '';
        },
        enterByUser : (state, action) => {
           state.setMessage = action.payload;
        },            
      },
});
export const { reset, enterByUser } = sendMessage.actions;
export default sendMessage.reducer;