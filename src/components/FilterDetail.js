import { Link } from "react-router-dom";
import "../components/filterDetail.css";
import ChevronIcon from "../assets/fi_chevron-down.png";
import CalendarIcon from "../assets/fi_calendar.png";
import ClockIcon from "../assets/fi_clock.png";
import UsersIcon from "../assets/fi_users.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FilterDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState([]);

  useEffect(() => {
    axios
      .get(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`)
      .then((res) => {
        // console.log(res);
        setCar(res.data);
        // console.log(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="filterDetail-container">
      <div className="filter-content-detail input input-1">
        <div className="chosenData chosenCarName">
          <h1>{car.name ? car.name.charAt(0).toUpperCase() + car.name.slice(1) : null} </h1>
          {/* {(() => {
            if (car.name) {
              return <h1>{car.name.charAt(0).toUpperCase() + car.name.slice(1)}</h1>
            }
          })()} */}
        </div>
        <div className="filterDetail-icon icon-1">
          <img src={ChevronIcon} alt="icon-chevron"></img>
        </div>
        <label>Nama Mobil</label>
        <input placeholder="" disabled></input>
      </div>
      <div className="filter-content-detail input input-2">
        <div className="chosenData chosenCarCategory">
          {/* <h1>{car.category ? car.category.charAt(0).toUpperCase() + car.category.slice(1) : null}</h1> */}
          {(() => {
            if (car.category === "small" || car.category === "Small") {
              return <h1>Kecil</h1>;
            } else if (car.category === "Medium" || car.category === "medium") {
              return <h1>Sedang </h1>;
            } else if (car.category === "large" || car.category === "Large") {
              return <h1>Besar</h1>;
            } else {
              return <h1> - </h1>;
            }
          })()}
        </div>
        <div className="filterDetail-icon icon-2">
          <img src={CalendarIcon} alt="icon-calendar"></img>
        </div>
        <label>Kategori</label>
        <input placeholder="" disabled></input>
      </div>
      {/* Input Harga */}
      <div className="filter-content-detail input input-3">
        <div className="chosenData chosenCarPrice">
          <h1>Rp {Intl.NumberFormat("id-ID").format(car.price)}</h1>
        </div>
        <div className="filterDetail-icon icon-3">
          <img src={ClockIcon} alt="icon-clock"></img>
        </div>
        <label>Harga Sewa</label>
        <input placeholder="" disabled></input>
      </div>
      <div className="filter-content-detail input input-4">
        <div className="chosenData chosenCarStatus">
          <h1>
            {(() => {
              if (car.status === false) {
                return "Tersedia";
              } else {
                return "Disewa";
              }
            })()}
          </h1>
        </div>
        <div className="filterDetail-icon icon-4">
          <img src={UsersIcon} alt="icon-users"></img>
        </div>
        <label>Status</label>
        <input placeholder="" disabled></input>
      </div>
      <div className="button-gantiMobil">
        <Link to={"/search-car"}>
          <button>Ganti Mobil</button>
        </Link>
      </div>
    </div>
  );
};

export default FilterDetail;
