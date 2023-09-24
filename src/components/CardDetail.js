import "../components/cardDetail.css";
import Icon_Calendar from "../assets/fi_calendar-2.png";
import UsersIcon from "../assets/fi_users.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import moment from "moment/moment";

const CardDetail = () => {
  // Get Car Id
  const { id } = useParams();
  // Store car id to variable
  const carId = id;
  const [car, setCar] = useState([]);
  const [carName, setCarName] = useState("");
  // console.log(typeof car.category);
  const [orderId, setOrderId] = useState(0);
  // Date Picker
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  // Format start and end date with moment
  const dateStart = moment(startDate).format();
  const dateEnd = moment(endDate).format();
  // Pick two digits date
  const justStartDate = dateStart.substr(8, 2);
  const justEndDate = dateEnd.substr(8, 2);
  const rentDuration = justEndDate - justStartDate + 1;
  const totalPrice = car.price * rentDuration;
  // State to get totalPrice
  const [totalPriceApi, setTotalPriceApi] = useState(0);
  // State to check if user has login
  const [loginToken, setLoginToken] = useState(false);
  // console.log(loginToken);
  const navigate = useNavigate();

  // Remove dates and order id when user back to this page or refresh this page
  useEffect(() => {
    localStorage.removeItem("startDate");
    localStorage.removeItem("endDate");
    localStorage.removeItem("orderId");
    localStorage.removeItem("car_selected", carName);
    const token = localStorage.getItem("loginToken");
    if (!!token) {
      setLoginToken(true);
    } else {
      setLoginToken(false);
    }
  }, []);

  // set order id outside function, if set inside need to double click
  localStorage.setItem("orderId", orderId);
  localStorage.setItem("totalPrice", totalPriceApi);

  // Post API, payload and config to get orderID
  const handleButtonPaymentCardDetail = () => {
    // Set the dates and order id to local storage
    localStorage.setItem("startDate", startDate);
    localStorage.setItem("endDate", endDate);
    localStorage.setItem("car_selected", carName);

    // Get login Token
    const config = {
      headers: {
        access_token: localStorage.getItem("loginToken"),
      },
    };

    // Payload request format to get Order ID from API's response
    const payload = {
      start_rent_at: dateStart.substr(0, 10),
      finish_rent_at: dateEnd.substr(0, 10),
      car_id: carId,
    };

    // Post API, payload and config to get orderID
    axios
      .post(`https://bootcamp-rent-cars.herokuapp.com/customer/order`, payload, config)
      .then((res) => {
        console.log("This is customer order", res);
        setOrderId(res.data.id);
        setTotalPriceApi(res.data.total_price);
        setTimeout(() => {
          navigate(`/payment1/${res.data.id}/`);
        }, 1000);
      })
      .catch((err) => console.log(err.message));
    if (loginToken === false) {
      navigate("/login/");
    }
  };

  // Get Chosen Car from Search Page By Id (Old Version)
  // useEffect(() => {
  //   axios
  //     .get(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`)
  //     .then((res) => {
  //       console.log("This is customer car", res);
  //       setCar(res.data);
  //       setCarName(res.data.name);
  //     })
  //     .catch((err) => console.log(err.message));
  // }, []);
  useEffect(() => {
    axios
      .get(`https://api-car-rental.binaracademy.org/customer/car/${id}`)
      .then((res) => {
        console.log("This is customer car", res);
        setCar(res.data);
        setCarName(res.data.name);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="card-detail-outer-container">
      <div className="card-detail-inner-container">
        {Object.entries(car).length ? (
          <div className="card-detail-content">
            <div className="card-img-container">
              <img src={car.image} alt="car"></img>
            </div>
            <div className="card-heading-container">
              {/* Capitalize the car name first letter */}
              <h1>{car.name ? car.name.charAt(0).toUpperCase() + car.name.slice(1) : null} </h1>
            </div>
            <div className="card-category-container">
              <div className="category-img">
                <img src={UsersIcon} alt="user-icon"></img>
              </div>
              <div className="category-heading">
                {(() => {
                  if (car.category === "small" || car.category === "Small") {
                    return <h1>2 - 4 Orang</h1>;
                  } else if (car.category === "Medium" || car.category === "medium") {
                    return <h1>5 - 7 Orang</h1>;
                  } else if (car.category === "large" || car.category === "Large") {
                    return <h1>8 - 12 Orang</h1>;
                  } else {
                    return <h1> - </h1>;
                  }
                })()}
              </div>
            </div>
            <div className="date-picker">
              <h6>Tentukan Lama Sewa Mobil (Max 7 Hari)</h6>
              <DatePicker
                className="date"
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                minDate={new Date()}
                maxDate={addDays(startDate, 6)}
                placeholderText="Pilih Tanggal Mulai dan Akhir Sewa"
                onChange={(update) => {
                  setDateRange(update);
                }}
                isClearable={true}
              />
              <div className="icon-calendar-cardDetail">
                <img src={Icon_Calendar} alt="calendar-icon"></img>
              </div>
            </div>

            <div className="card-billing-container">
              <h1>Total</h1>
              {/* Car rent price per day */}
              {/* <h1>{car.price}</h1> */}
              {(() => {
                if (rentDuration === 0) {
                  return <h1>Rp {Intl.NumberFormat("id-ID").format(car.price)}</h1>;
                } else if (!totalPrice) {
                  return <h1>Rp 0</h1>;
                } else if (rentDuration < 0) {
                  return <h1>Rp {Intl.NumberFormat("id-ID").format(car.price * (rentDuration + parseInt(justStartDate)))}</h1>;
                } else if (rentDuration > 0) {
                  return <h1>Rp {Intl.NumberFormat("id-ID").format(car.price * rentDuration)}</h1>;
                }
              })()}
            </div>

            {/* Protect 'Lanjutkan Pembayaran' Button */}
            <div className={startDate && endDate ? "btn-payment-cardDetail-on" : "btn-payment-cardDetail-off"}>
              <button onClick={handleButtonPaymentCardDetail}>Lanjutkan Pembayaran</button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CardDetail;
