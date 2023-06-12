import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addEntry, removeEntry } from '../store/pbSlice';

export const App = () => {
  const [text, setText] = useState('');

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      REDUX homework template
    </div>
  );
};
