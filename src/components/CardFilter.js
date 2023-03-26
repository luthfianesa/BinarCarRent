import "../components/cardFilter.css";
import { Link } from "react-router-dom";

const CardFilter = (props) => {
  return (
    // <div className="cardFilter-outer-container">
    <div className="cardFilter-inner-container">
      {props.carData.length
        ? props.carData.map((items) => {
            return (
              <div className="carData">
                <div className="container-img">
                  <img src={items.image} alt="car-api-pic"></img>
                </div>
                <div className="container-h1">
                  <h1>{items.name ? items.name.charAt(0).toUpperCase() + items.name.slice(1) : null} </h1>
                  <h1>Rp {Intl.NumberFormat('id-ID').format(items.price)} / Hari </h1>
                </div>
                {(() => {
                  if (items.category === "small" || items.category === "Small") {
                    return (
                      <div className="container-p">
                        <p>Mobil dengan kapasitas kecil nyaman untuk berpergian bersama pasangan atau keluarga kecil anda. Kapasitas 2 - 4 orang</p>
                      </div>
                    );
                  } else if (items.category === "medium" || items.category === "Medium") {
                    return (
                      <div className="container-p">
                        <p>Mobil dengan kapasitas sedang cocok untuk berpergian dengan cukup banyak teman atau keluarga. Kapasitas 5 - 7 orang </p>
                      </div>
                    );
                  } else if (items.category === "large" || items.category === "Large") {
                    return (
                      <div className="container-p">
                        <p>Mobil dengan kapasitas besar nyaman untuk berpergian dengan banyak teman atau keluarga anda. Kapasitas 8 - 12 orang</p>
                      </div>
                    );
                  }
                })()}
                {/* <div className="container-p">
                  <p>Silahkan pilih mobil yang sesuai dengan kebutuhan dan kenyamanan anda. Jangan ragu untuk bertanya jika ada hal yang belum jelas mengenai sewa mobil di Rental Binar</p>
                </div> */}
                <div className="container-btn">
                  <Link to={`/car-detail/${items.id}`}>
                    <button>Pilih Mobil</button>
                  </Link>
                </div>
              </div>
            );
          })
        : null}
    </div>
    // </div>
  );
};

export default CardFilter;

// const CardFilter = (props) => {
//   // Nampung data mobil
//   const [carData, setCarData] = useState([]);

// useEffect(() => {
//   axios
//     .get(`https://bootcamp-rent-cars.herokuapp.com/customer/v2/car`)
//     .then((res) => {
//       setCarData(res.data.cars);
//     })
//     .catch((err) => console.log(err.message));
// }, []);

// Liat Data API
// console.log(carData);
