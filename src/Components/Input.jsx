
import '../Styles/components/input.css';

export default function Input(props) {
  return (
    <div id="input-block">
      <hr />
      <input
        value={props.value}
        onChange={props.change}
        type={props.type}
        id={props.name}
        name={props.name}
        placeholder={props.text}
        min={props.min}
        max={props.max}
        required
      />
      <label htmlFor={props.name}>{props.label}</label>
    </div>
  );
}