import React, { Component } from 'react';
import PropTypes from 'prop-types';

const SearchForm = props => (
  <form className="search-form" onSubmit={(e) => props.onSubmit(e)}>
    <span className="search-form_title">国内地名：</span>
    <input
      type="text"
      value={props.place}
      onChange={e => props.onPlaceChange(e.target.value)}
    />
    <input type="submit" value="検索" />
  </form>
);

SearchForm.propTypes = {
  place: PropTypes.string.isRequired,
  onPlaceChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
