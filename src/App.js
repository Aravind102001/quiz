import React from 'react';
import Start from './components/Start';
import Quiz from './components/Quiz';
import Result from './components/Result';
import { DataProvider } from './context/dataContext';
// import Email from './components/Email'

function App() {
  return (
    <DataProvider>
      
      <Start/>
      <Quiz/>
      <Result/>

    </DataProvider>
  );
}

export default App;
