import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';

interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string // It's optional
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([])

  return (
    <div className="App">
      <h1>people invited to my party</h1>
      <List people={people} />
    </div>
  );
}

export default App;
