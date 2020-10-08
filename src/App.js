import React, {useState} from 'react';
import {Edit} from '@styled-icons/material/Edit';
import IconButton from './components/IconButton';
import TextField from './components/TextField';

function App() {
  const [textValue, setTextValue] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    console.log(Object.fromEntries(fd.entries()));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} autoComplete='off'>
        <TextField
          label='todo'
          name='todo'
          value={textValue}
          onChange={(event) => {
            // console.log(event.target.value)
            setTextValue(event.target.value)
          }}
        />
      </form>
      <IconButton>
        <Edit />
      </IconButton>
    </div>
  );
}

export default App;
