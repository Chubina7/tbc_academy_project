import "./App.css";
import Wrapper from "./components/wrapper/Wrapper";

const contentStyle = { padding: "15px 0" };

function App() {
  return (
    <main className="app">
      <Wrapper>
        <h1 style={contentStyle}>First test content</h1>
      </Wrapper>
      <Wrapper>
        <h1 style={contentStyle}>Second test content</h1>
      </Wrapper>
      <Wrapper>
        <h1 style={contentStyle}>Third test content</h1>
      </Wrapper>
    </main>
  );
}

export default App;
