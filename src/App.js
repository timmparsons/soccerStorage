import React from 'react';
import InputForm from './components/InputForm/InputForm'
import Header from './components/Header/Header'

function App() {
  
  return (
    <div className="App">
        <Header />
        <main style={{marginTop: '65px'}}>
        <InputForm />
        </main>
    </div>
  );
}

export default App;
