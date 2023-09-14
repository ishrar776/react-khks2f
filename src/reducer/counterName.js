import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  setMessage = '',
};
export const sendMessage = createSlice({
      name:'sendMge',
      initialState,
      reducers:{ 
        reset: (state) =>{
           state.setMessage = '';
        },
        sendDoc : (state, action) => {
           state.setMessage = action.payload;
        },            
      },
});
export const { reset, sendDoc } = sendMessage.actions;
export default sendMessage.reducer;