import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import PropTypes from 'prop-types';

import FormStyled from './Form.styled';

const Form = ({ messageValue, doChange, sendMessage }) => {
  const handleChange = (event) => {
    const { value } = event.target;
    // j'execute ma fonction récupéré en props pour changer la valeur,
    // je lui transmet la valeur
    doChange(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage();
  };
  return (
    <FormStyled onSubmit={handleSubmit}>
      <input
        // value={/* une valeur venant du state */}
        // onChange={/* émettre une changement dans le state */}
        value={messageValue}
        onChange={handleChange}
        className="form-input"
        placeholder="Saisissez votre messages..."
      />
      <button className="form-submit" type="submit">
        <FaPaperPlane />
      </button>
    </FormStyled>
  );
};

Form.propTypes = {
  messageValue: PropTypes.string.isRequired,
  doChange: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

export default Form;
