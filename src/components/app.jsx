import React, { Component } from 'react';
import _ from 'lodash';

import SearchForm from './SearchForm';
import GeocodeResult from './GeocodeResult';
import Map from './Map';
import HotelsTable from './HotelsTable';

import { geocode } from '../domain/Geocoder';
import { searchHotelByLocation } from '../domain/HotelRepository';

const sortedHotels = (hotels, sortKey) => _.sortBy(hotels, h => h[sortKey]);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        lat: 35.6585805,
        lng: 139.7454329,
      },
      sortKey: 'price',
    };
  }

  setErrorMesage(message) {
    this.setState({
      address: message,
      location: {
        lat: 0,
        lng: 0,
      },
    });
  }

  handlePlaceSubmit(place) {
    geocode(place)
      .then(({ status, address, location }) => {
        switch (status) {
          case 'OK': {
            this.setState({ address, location });
            return searchHotelByLocation(location);
          }
          case 'ZERO_RESULTS': {
            this.setErrorMesage('結果が見つかりませんでした');
            break;
          }
          default: {
            this.setErrorMesage('エラーが発生しました');
          }
        }
        return [];
      })
      .then((hotels) => {
        this.setState({ hotels: sortedHotels(hotels, this.state.sortKey) });
      })
      .catch(() => {
        this.setErrorMesage('通信に失敗しました');
      });
  }

  render() {
    return (
      <div className="app">
        <h1 className="app_title"><i className="fa fa-map" />　ホテル検索</h1>
        <SearchForm onSubmit={(place => this.handlePlaceSubmit(place))} />
        <div className="app_result">
          <div className="app_result_column">
            <GeocodeResult
              address={this.state.address}
              location={this.state.location}
            />
            <h2 className="app_result_subtitle"><i className="fa fa-building-o" />　ホテル検索結果</h2>
            <HotelsTable hotels={this.state.hotels} />
          </div>
          <Map location={this.state.location} />
        </div>
      </div>
    );
  }
}

export default App;
