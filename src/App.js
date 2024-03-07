import { useState, useEffect } from "react";
import ButtonTab from "./ButtonTab";
import Output from "./Output";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com";

  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [postfix, setPostfix] = useState('');

  useEffect(() => {
    const fetchItems = async (postfix) => {
      try {
        const response = await fetch(`${API_URL}/${postfix}`);
        if (!response.ok) throw Error('Did not receive expected data');
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      }
    };
    if (postfix) fetchItems(postfix);
  }, [postfix]);

  return (
    <main className="App">
      <ButtonTab
        setPostfix={setPostfix}
      />
      <Output
        items={items}
      />
    </main>
  );
}

export default App;
