/** @format */

const Faq = () => {
  return (
    <section className="container section-faq">
      <div className="section-title-faq">
        <h2>Frequently Asked Question</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
      <ul className="section-list-faq">
        <li className="box-list-faq">
          <span className="faq-title">Apa saja syarat yang dibutuhkan?</span>
          <i className="fa fa-chevron-down"></i>
        </li>
        <li className="box-list-faq">
          <span className="faq-title">Berapa hari minimal sewa mobil lepas kunci?</span>
          <i className="fa fa-chevron-down"></i>
        </li>
        <li className="box-list-faq">
          <span className="faq-title">Berapa hari sebelumnya sabaiknya booking sewa mobil?</span>
          <i className="fa fa-chevron-down"></i>
        </li>
        <li className="box-list-faq">
          <span className="faq-title">Apakah Ada biaya antar-jemput?</span>
          <i className="fa fa-chevron-down"></i>
        </li>
        <li className="box-list-faq">
          <span className="faq-title">Bagaimana jika terjadi kecelakaan</span>
          <i className="fa fa-chevron-down"></i>
        </li>
      </ul>
    </section>
  );
};

export default Faq;
