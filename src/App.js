import './App.css';
import Block from './components/Block';
import Input from './components/Input';

function App() {
  return (
    <div className="app-container">
      <Input />
      <Block label="1" />
      <Block label="2" />
      <Block label="3" />
      <Block label="÷" />
      <Block label="4" />
      <Block label="5" />
      <Block label="6" />
      <Block label="X" />
      <Block label="7" />
      <Block label="8" />
      <Block label="9" />
      <Block label="-" />
      <Block label="0" />
      <Block label="." />
      <Block label="=" />
      <Block label="+" />
    </div>
  );
}

export default App;
