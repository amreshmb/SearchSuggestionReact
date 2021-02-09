import React, { useState } from "react";

//Question
//Create an input box where users can type their search.
//Display suggestions in a drop down. Suggestions should be fetched and displayed while typing
//The input for the getSuggestion API will be the current word that is being typed not the whole search.
//The output for the getSuggestion API will be only for the current word.
//getSuggestions API returns a promise which can get resolved or rejected at any time ranging from 0 - 200 ms.
let timeClear = 0;

const suggestions = ["delhi", "mumbai", "city", "state"];
function App() {
  const [state, setState] = useState({ value: "", isDisplay: false }); 

  const getSuggestions = (search) => {
    return suggestions.filter((item) => item.includes(search));
  };

  const handleChange = (e) => {
    if (timeClear) {
      clearTimeout(timeClear);
    }
    timeClear = setTimeout(() => {
      setState(getSuggestions(e.target.value));
    }, 200);
  };
  return (
    <div>
      <input type="text" onChange={handleChange} />
      {state.length ? (
        <select>
          {state.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </select>
      ) : null}
    </div>
  );
}

export default App;

