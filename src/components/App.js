import React, { useState } from 'react'

import '../styles/App.css';

const data = {
  '2018': [
    'Avengers 1',
    'Now you see me',
    'Fast and Furious 7'
  ],
  '2019': [
    'Avengers 2',
    'Now you see me 2',
    'Fast and Furious 8'
  ],
  '2020': [
    'Final Avengers Movie(Iron man dies)',
    'Now you finally used Lenskart',
    'Covid Came'
  ],
  '2021': [
    'Covid Returns',
  ],
  '2022': [
    'Adventures of Saiman',
    'Adventures of Shaktiman'
  ]
}
const App = () => {

  const keys = Object.keys(data);
  const updated_keys = keys.map((element, index) => {
    return <option value={element} key={element + index}>{element}</option>
  })
  let nullvalue = <option value={null}></option>

  const [yearselction, setYearselection] = React.useState("No year selected");
  let [litags, setLitags] = useState();
  const setthis = (event) => {
    if (event.target.value != null) {
      event.persist();

      setYearselection(() => `Selected year- ${event.target.value}`);
      let year = event.target.value;

      year = data[year]


      let litags1 = year.map((element, index) => <li key={element + index}>{element}</li>);
      setLitags(() => litags1);


    }
  }

  return (
    <div id="main">
      <select name="" id="card" onChange={setthis}  >


        {nullvalue}
        {updated_keys}

      </select>
      <div id="selected-year">
        {yearselction}
      </div>
      <ul>
        {litags}
      </ul>
    </div>
  )
}


export default App;
