import { useState } from 'react';
import WordCard from './components/WordCard';

function App() {
  const [word, setWord] = useState('');
  const [result, setResult] = useState(null);

  async function searchWord() {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await res.json();

    // basic error handling
    if (Array.isArray(data)) {
      const meaning = data[0].meanings[0].definitions[0].definition;
      const example = data[0].meanings[0].definitions[0].example || "No example available.";
      const pronunciation = data[0].phonetics[0]?.text || "Not available";
      
      setResult({
        word: data[0].word,
        meaning,
        example,
        pronunciation
      });
    } else {
      setResult(null);
      alert("Word not found");
    }
  }

  return (
    <div>
      <h1>Dictionary</h1>
      <div className="search-container">
        <input type="text" value={word} onChange={e => setWord(e.target.value)} placeholder="Enter a word..."/>
        <button onClick={searchWord}>Search</button>
      </div>

      {result && <WordCard {...result} />}
    </div>
  );
}

export default App;
