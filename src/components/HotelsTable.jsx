import React from 'react';
import PropTypes from 'prop-types';

import HotelRow from './HotelRow';
import HotelsClickable from './HotelsClickable';

const HotelsTable = ({ hotels, sortKey, onSort }) => (
  <div className="result">
    <div className="result_title">
      <div className="result_title_photo"><i className="fa fa-photo" />外観</div>
      <HotelsClickable syntax="price" fa="credit-card" label="価格" sortKey="price" isSelected={sortKey === 'price'} onSort={key => onSort(key)} />
      <div className="result_title_address"><i className="fa fa-map-o" />住所</div>
      <HotelsClickable syntax="distance" fa="map-marker" label="距離" sortKey="distance" isSelected={sortKey === 'distance'} onSort={key => onSort(key)} />
      <div className="result_title_phone"><i className="fa fa-phone" />電話</div>
      <HotelsClickable syntax="average" fa="star-o" label="評価" sortKey="average" isSelected={sortKey === 'average'} onSort={key => onSort(key)} />
      <HotelsClickable syntax="count" fa="commenting" label="コメント" sortKey="count" isSelected={sortKey === 'count'} onSort={key => onSort(key)} />
    </div>
    {hotels.map(hotel => (<HotelRow key={hotel.id} hotel={hotel} />))}
  </div>
);

HotelsTable.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.any),
  sortKey: PropTypes.string.isRequired,
  onSort: PropTypes.func.isRequired,
};

HotelsTable.defaultProps = {
  hotels: [],
};

export default HotelsTable;
