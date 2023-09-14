import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reset, sendDoc } from '../reducer/counterName';
const DemoCounter = () => {
  const [firstName, SetFirstName] = useState('');
  const displayMessage = useSelector((item) => item.sendMge.setMessage);
  const dispatch = useDispatch();
  const clearAll = (e) => {
    dispatch(reset());
    SetFirstName('');
  };
  return (
    <>
      <div>Hellow {displayMessage}</div>
      <div>
        <input
          type="text"
          value={firstName}
          onChange={(e) => SetFirstName(e.target.value)}
        />
        <button onClick={() => dispatch(sendDoc(firstName))}>Send</button>
        <button onClick={clearAll}>Reset</button>
      </div>
    </>
  );
};
export default DemoCounter;
