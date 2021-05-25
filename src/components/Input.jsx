import Block from './Block';
import './input.css';
export default function Input() {
  return (
    <div className="input-container">
    <Block label="AC" />
    <input className="input" />
    </div>
  )
}