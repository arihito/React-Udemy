import React from 'react';
import PropTypes from 'prop-types';

const HotelRow = ({ hotel }) => (
  <a href={hotel.url} target="_blank">
    <div className="hotels">
      <div className="hotels_photo" style={{ background: `url(${hotel.thumbUrl}) center 0 no-repeat`, backgroundSize: 'cover' }} />
      <div className="hotels_name">{hotel.name}</div>
      <div className="hotels_price">{hotel.price ? `${hotel.price.toString().replace(/(\d+?)(?=(?:\d{3})+$)/g, x => x + ',')}円〜` : '空室なし'}</div>
      <div className="hotels_address">{hotel.address1}{hotel.address2}</div>
      <div className="hotels_distance">{hotel.distance}ｍ</div>
      <div className="hotels_phone"><a href="tel:{hotel.phone}">{hotel.phone}</a></div>
      <div className="hotels_average">{hotel.average}</div>
      <div className="hotels_count">{hotel.count ? `${hotel.count}件` : 'コメント無し'}</div>
    </div>
  </a>
);

HotelRow.propTypes = {
  hotel: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
    thumbUrl: PropTypes.string,
    price: PropTypes.number,
    address1: PropTypes.string,
    address2: PropTypes.string,
    phone: PropTypes.string,
    count: PropTypes.number,
    average: PropTypes.number,
    distance: PropTypes.number,
  }).isRequired,
};

export default HotelRow;
