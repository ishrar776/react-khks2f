import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
function Child() {
  const displayMessage = useSelector((item) => item.sendmsg.sendMessage);
  return (
    <>
      <main className="App">
        <div>{displayMessage}</div>
      </main>
    </>
  );
}
export default Child;
