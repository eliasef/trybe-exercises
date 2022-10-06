import "./App.css";
import Emails from "./pages/Emails";
import EmailsProvider from "./context/EmailsProvider";

function App() {
  return (
    <div className="App">
      <EmailsProvider>
        <Emails />
      </EmailsProvider>
    </div>
  );
}

export default App;
