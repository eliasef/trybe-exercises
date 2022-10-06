import { useEffect, useState } from "react";
import "./styles.css";

// this.setState({ count: ... }, () => {  })

const API = "https://rickandmortyapi.com/api/character";

function App() {
  const [count, setCount] = useState(1);
  const [character, setCharacter] = useState({});

  // didMount
  useEffect(() => {
    console.log("Ciclo de vida");
  }, []); // recebe uma callback e um array de dependencias

  //WillUnMount
  useEffect(() => {
    console.log("qualquer coisa");
// atualização
    return () => {
      console.log("Vai desmontar");
      // Aqui seria os efeitos de desmontagem
      // por exemplo
      // clearInterval()
    };
  }, []);

  // DidUpdate e tbm o segundo parametro setState
  useEffect(() => {
    // if(count !== null) {
    //   console.log("DidUpdate", count);
    // }
    const fetchAPI = async () => {
      const response = await fetch(`${API}/${count}`);
      const data = await response.json();
      console.log(data);
      setCharacter(data);
    };
    fetchAPI();
  }, []);

  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrease = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <main className="App">
      <h1>Contador: {count} </h1>
      <button type="button" onClick={handleDecrease}>
        Diminuir
      </button>
      <button type="button" onClick={handleIncrease}>
        Aumentar
      </button>
      <section>
        <h2>{character.name}</h2>
        <img src={character.image} alt={character.name} />
      </section>
    </main>
  );
}

export default App;

// FONTE AULA: https://codesandbox.io/s/goofy-dijkstra-vwotiy?file=/src/App.js