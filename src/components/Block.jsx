import "./block.css"
export default function Block(props) {
  return (
    <button className="block-container">
      {props.label}
    </button>
  )
} 