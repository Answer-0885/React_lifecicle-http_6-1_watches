import "./InputField.css";

const InputField = (props) => {
  const { name, value, label, onChange } = props;

  const handleChange = (evt) => onChange(name, evt.target.value);

  return (
    <div className='input-field'>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} value={value} onChange={handleChange}/>
    </div>
  )
}


export default InputField