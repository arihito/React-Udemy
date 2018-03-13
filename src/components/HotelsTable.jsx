import React from 'react';
import PropTypes from 'prop-types';

import HotelRow from './HotelRow';

const HotelsTable = ({ hotels }) => (
  <div className="result">
    <div className="result_title">
      <div className="result_title_photo"><i className="fa fa-photo" /> 外観</div>
      <div className="result_title_price"><i className="fa fa-credit-card" /> 価格</div>
      <div className="result_title_address"><i className="fa fa-map-o" /> 住所</div>
      <div className="result_title_distance"><i className="fa fa-map-marker" /> 距離</div>
      <div className="result_title_phone"><i className="fa fa-phone" /> 電話</div>
      <div className="result_title_average"><i className="fa fa-star" />評価</div>
      <div className="result_title_count"><i className="fa fa-pencil" /> コメント</div>
    </div>
    {hotels.map(hotel => (<HotelRow key={hotel.id} hotel={hotel} />))}
  </div>
);

HotelsTable.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.any),
};

HotelsTable.defaultProps = {
  hotels: [],
};

export default HotelsTable;
