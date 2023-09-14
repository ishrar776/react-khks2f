import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import sendMessage from '../reducer/displayMsg';
export const store = configureStore({
  reducer: {
    sendmsg: sendMessage,
  },
});
