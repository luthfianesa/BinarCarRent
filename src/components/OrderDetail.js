import "../components/orderDetail.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import moment from "moment/moment";
import "moment/locale/id";

const OrderDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState([]);
  const startDate = moment(localStorage.getItem("startDate"));
  const endDate = moment(localStorage.getItem("endDate"));

  useEffect(() => {
    // Get login token
    const config = {
      headers: {
        access_token: localStorage.getItem("loginToken"),
      },
    };

    // Get Chosen car from Search Page by id
    axios
      .get(`https://bootcamp-rent-cars.herokuapp.com/customer/order/${id}`, config)
      .then((res) => {
        setCar(res.data.Car);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div className="orderDetail-container">
      <div className="orderDetailContent-outer-container">
        <div className="orderDetailContent-inner-container col-with-heading">
          <div className="heading-container">
            <h1>Detail Pesananmu</h1>
          </div>
          <div className="sub-heading-container sub-heading-1">
            <h3>Nama / Tipe Mobil</h3>
          </div>
          <div className="sub-heading-container sub-heading-2">
            {/* Capitalize the car name first letter */}
            <h3>{car.name ? car.name.charAt(0).toUpperCase() + car.name.slice(1) : null}</h3>
          </div>
        </div>
        <div className="orderDetailContent-inner-container col-without-heading">
          <div className="sub-heading-container sub-heading-1">
            <h3 className="category">Kategori</h3>
          </div>
          <div className="sub-heading-container sub-heading-2">
            {(() => {
              if (car.category === "small") {
                return <h3>Kecil</h3>;
              } else if (car.category === "Medium") {
                return <h3>Sedang </h3>;
              } else if (car.category === "large") {
                return <h3>Besar</h3>;
              } else {
                return <h3> - </h3>;
              }
            })()}
          </div>
        </div>
        <div className="orderDetailContent-inner-container col-without-heading">
          <div className="sub-heading-container sub-heading-1">
            <h3>Tanggal Mulai Sewa</h3>
          </div>
          <div className="sub-heading-container sub-heading-2">
            {/* Set start date to locale Indonesia and Format it to Day-Month-Year */}
            <h3>{startDate.locale("id").format("LL")}</h3>
          </div>
        </div>
        <div className="orderDetailContent-inner-container col-without-heading">
          <div className="sub-heading-container sub-heading-1">
            <h3>Tanggal Akhir Sewa</h3>
          </div>
          <div className="sub-heading-container sub-heading-2">
            {/* Set end date to locale Indonesia  and Format it to Day-Month-Year */}
            <h3>{endDate.locale("id").format("LL")}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
