import InputField from './InputField';
import './AddForm.css';

const AddForm = (props) => {
  const { fields, submitBtnText, onSubmit, onChange } = props;

  const handleChange = (name, value) => onChange(name, value);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit();
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      { fields.map((o) => 
        <InputField {...o} onChange={handleChange} key={o.name}/>
      )}
      <button type='submit'>{submitBtnText}</button>
    </form>
  )
}

AddForm.defaultProps = {
  fields: [],
  submitBtnText: 'Добавить',
}
export default AddForm;
