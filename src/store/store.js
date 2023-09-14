import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import sendMessage from '../reducer/displaymsg';
export const store = configureStore({
  reducer: {
    sendmsg: sendMessage,
  },
});
