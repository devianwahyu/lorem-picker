import { useState } from 'react';
import data from './data';
import './App.css';

function App() {
  const [lorem, setLorem] = useState([]);
  const [num, setNum] = useState(0);

  const generateLorem = (num) => {
    setLorem([]);
    console.log(data.length);
    if (num <= data.length) {
      for (let i = 0; i < num; i++) {
        setLorem(lorem => [...lorem, data[i]]);
      }
    } else {
      setLorem(lorem => ["Maaf, maksimal paragraf yang dapat diambil saat ini hanya 10 saja ya adik-adik."]);
    }
  };

  return (
    <div className="Container">
      <h1 className="Title">Mager nulis lorem ipsum?</h1>
      <div className="Form">
        <p>Paragraphs: </p>
        <input type="number" onChange={e => setNum(e.target.value)} />
        <button onClick={() => generateLorem(num)}>GENERATE</button>
      </div>
      {lorem.map((data, index) => <p className="Text" key={index}>{data}</p>)}
    </div>
  );
}

export default App;
