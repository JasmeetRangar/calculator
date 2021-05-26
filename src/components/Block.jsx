import "./block.css"
export default function Block(props) {
  const handleClick = () => {
    
  }
  return (
    <button className="block-container" onClick={handleClick}>
      {props.label}
    </button>
  )
} 