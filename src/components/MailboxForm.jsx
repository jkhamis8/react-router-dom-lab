import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const MailboxForm = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});


    const handleSubmit = (e) => {
      e.preventDefault();
      props.addBox(formData);
      setFormData();
      navigate('/mailboxes');
    };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <main>
      <h2>New MailBox</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxholder">Enter Boxholder:</label>
        <input
          type="text"
          id="boxholder"
          name="boxholder"
          onChange={handleChange}
        />
        <label htmlFor="boxsize">Select a Box Size:</label>
        <select required id="boxsize" name="boxsize" defaultValue="" onChange={handleChange}>
          <option value="">Select a Size</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default MailboxForm;