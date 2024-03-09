/** @format */

import Button from '../components/Button';

const CardFind = () => {
  return (
    <div>
      <div className="container section-find-car">
        <div className="find-car-item">
          <div className="search-field">
            <span>Nama Mobil</span>
            <input />
          </div>
          <div className="search-field">
            <span>Kategori</span>
            <input />
          </div>
          <div className="search-field">
            <span>Harga</span>
            <input />
          </div>
          <div className="search-field">
            <span>Status</span>
            <input />
          </div>

          <Button type="button" id="change-color" className="btn-find-car">
            Cari Mobil
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardFind;
