import React from 'react';
import PropTypes from 'prop-types';

const classPath = "resutl_title_";
const faPath = "fa fa-";

const HotelsClickable = ({ syntax, fa, label, sortKey, isSelected, onSort }) => (
  <div
    className={classPath + syntax}
    onClick={() => onSort(sortKey)}
  >
    <i className={faPath + fa} />
    {label}
    <span className="arrow">{isSelected ? '▲' : ''}</span>
  </div>
);

HotelsClickable.propTypes = {
  label: PropTypes.string.isRequired,
  sortKey: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSort: PropTypes.func.isRequired,
};

export default HotelsClickable;
