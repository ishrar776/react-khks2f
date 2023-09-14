import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import sendMessage from '../reducer/counterName';
export const store = configureStore({
  reducer: {
    sendmsg: sendMessage,
  },
});
