import React from 'react';
import PropTypes from 'prop-types';

import SettingsStyled from './Settings.styled';

const Settings = ({
  email,
  password,
  changeValue,
  connection,
  loading,
  logged,
}) => {
  const handleChange = (event) => {
    const { value, name } = event.target;
    changeValue(name, value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    connection();
  };
  return (
    <SettingsStyled>
      {logged && <div className="info">Bienvenue</div>}
      {loading && <div className="info">Veuillez patienter</div>}
      {!logged && !loading && (
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={email}
            className="settings-input"
            placeholder="Email"
            type="email"
            name="email"
            required
            autoComplete="new-password"
          />
          <input
            onChange={handleChange}
            value={password}
            className="settings-input"
            placeholder="Mot de passe"
            type="password"
            name="password"
            required
            autoComplete="new-password"
          />
          <button className="settings-submit" type="submit">Ok</button>
        </form>
      )}
    </SettingsStyled>
  );
};

Settings.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  changeValue: PropTypes.func.isRequired,
  connection: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

Settings.defaultProps = {
  email: '',
  password: '',
};

export default Settings;
