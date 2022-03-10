
import '../Styles/components/textarea.css';

export default function Textarea(props) {
  return (
    <div id="input-block-textarea">
      <hr />
      <textarea
        value={props.value}
        onChange={props.change}
        name={props.name}
        id={props.name}
        maxLength="250"
        cols="30"
        rows="10"
        placeholder={props.text}
        required
      />
      <label htmlFor={props.name}>Sobre</label>
    </div>
  );
}