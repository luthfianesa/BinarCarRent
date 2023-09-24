import "../components/cardPaymentDetail.css";
import Accordion from "react-bootstrap/Accordion";
import carCapacity from "../assets/fi_users.png";
import lineIcon from "../assets/icon_line-3.png";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment/moment";
import "moment/locale/id";

const CardPaymentDetail = () => {
  const today = new Date();
  const todayAddedOneHour = today.setHours(today.getHours() + 1);
  const formattedToday = moment(todayAddedOneHour).format("LLL");
  const deadlineToPay = formattedToday;
  // Get car id
  const { id } = useParams();
  const [car, setCar] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const dateStart = moment(localStorage.getItem("startDate"));
  const dateEnd = moment(localStorage.getItem("endDate"));
  const startDateOnly = dateStart.format().substr(8, 2);
  const endDateOnly = dateEnd.format().substr(8, 2);
  const rentDuration = endDateOnly - startDateOnly + 1;
  const navigate = useNavigate();
  const state = useSelector((rootReducer) => rootReducer);
  // console.log("ini state CardPayment", state);

  useEffect(() => {
    localStorage.removeItem("deadlineToPay");
    const config = {
      headers: {
        access_token: localStorage.getItem("loginToken"),
      },
    };

// Old version API Link
// https://bootcamp-rent-cars.herokuapp.com/customer/order/${id}
    axios
      .get(`https://api-car-rental.binaracademy.org/customer/order/${id}`, config)
      .then((res) => {
        // console.log(res.data);
        setCar(res.data.Car);
        setTotalPrice(res.data.total_price);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const handleBayar = () => {
    localStorage.setItem("deadlineToPay", deadlineToPay);
    // Get login token
    const config = {
      headers: {
        access_token: localStorage.getItem("loginToken"),
      },
    };

    // Get car data by id
    axios
      .get(`https://api-car-rental.binaracademy.org/customer/order/${id}`, config)
      .then((res) => {
        // console.log(res);
        setCar(res.data.Car);
        setTotalPrice(res.data.total_price);
        // res.data.id = orderId
        // console.log(res.data.id);
        navigate(`/payment2/${res.data.id}/`);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="cardPaymentDetail-container">
      <div className="cardPaymentDetail-heading firstHeading">
        <h1>{car.name ? car.name.charAt(0).toUpperCase() + car.name.slice(1) : "-"}</h1>
      </div>
      <div className="carCapacity-container">
        <div className="cardPaymentDetail-icon-user">
          <img src={carCapacity} alt="user-icon"></img>
        </div>
        <div className="carCapacity">
          {(() => {
            if (car.category === "small") {
              return <h6>2-4 Orang</h6>;
            } else if (car.category === "Medium") {
              return <h6>4-6 Orang</h6>;
            } else if (car.category === "large") {
              return <h6>6-8 Orang</h6>;
            } else {
              return <h6> - </h6>;
            }
          })()}
        </div>
      </div>

      <Accordion className="accordion-cardPayment" defaultActiveKey={["0"]} alwaysOpen flush>
        <Accordion.Item eventKey="0" className="accordion-item accordion-item-cardPayment">
          <Accordion.Header className="accordion-header-cardPayment">
            <span className="txt-heading heading-accordion accordion-cardPayment">Total</span>
            {(() => {
              if (rentDuration === 0) {
                return <span className="first-boldPrice">Rp {Intl.NumberFormat("id-ID").format(car.price)}</span>;
              } else if (!totalPrice) {
                return <span className="first-boldPrice">Rp 0</span>;
              } else if (rentDuration < 0) {
                return <span className="first-boldPrice">Rp {Intl.NumberFormat("id-ID").format(car.price * (rentDuration + parseInt(startDateOnly)))}</span>;
              } else if (rentDuration > 0) {
                return <span className="first-boldPrice">Rp {Intl.NumberFormat("id-ID").format(car.price * rentDuration)}</span>;
              }
            })()}
          </Accordion.Header>
          <Accordion.Body className="body accordion-body-cardPayment">
            <div className="cardPaymentDetail-heading secondHeading">
              <h1>Harga</h1>
            </div>
            <div className="rentDays-container">
              <div className="cardPaymentDetail-subHeading second-subHeading">
                <ul className="cardPaymentDetail-sewaMobil-ul">
                  <li>
                    Sewa Mobil Rp {Intl.NumberFormat("id-ID").format(car.price)}
                    {(() => {
                      if (rentDuration < 0) {
                        return <span className="rentDurations-Accordion"> x {rentDuration + parseInt(startDateOnly)} hari</span>;
                      } else {
                        return <span className="rentDurations-Accordion"> x {rentDuration} hari</span>;
                      }
                    })()}
                  </li>
                </ul>
              </div>
              <div className="price">
                {(() => {
                  if (rentDuration === 0) {
                    return <h6>Rp {Intl.NumberFormat("id-ID").format(car.price)}</h6>;
                  } else if (!totalPrice) {
                    return <h6>Rp 0</h6>;
                  } else if (rentDuration < 0) {
                    return <h6>Rp {Intl.NumberFormat("id-ID").format(car.price * (rentDuration + parseInt(startDateOnly)))}</h6>;
                  } else if (rentDuration > 0) {
                    return <h6>Rp {Intl.NumberFormat("id-ID").format(car.price * rentDuration)}</h6>;
                  }
                })()}
              </div>
            </div>
            <div className="otherCost-container">
              <div className="cardPaymentDetail-heading thirdHeading">
                <h1>Biaya Lainnya</h1>
              </div>
              <ul className="cardPayment-ul">
                <div className="cardPayment-include-container-1">
                  <div className="cardPayment-tax">
                    <li>Pajak</li>
                  </div>
                  <div className="cardPayment-include firstInclude">
                    <h6>Termasuk</h6>
                  </div>
                </div>
                <div className="cardPayment-include-container-2">
                  <div className="cardPayment-driverMealCost">
                    <li>Biaya Makan Supir</li>
                  </div>
                  <div className="cardPayment-include secondInclude">
                    <h6>Termasuk</h6>
                  </div>
                </div>
              </ul>
            </div>
            <div className="otherCost-container">
              <div className="cardPaymentDetail-heading fourthHeading">
                <h1>Belum Termasuk</h1>
              </div>
              <ul className="cardPayment-ul">
                <li>Bensin</li>
                <li>Tol dan Parkir</li>
              </ul>
            </div>
            <div className="lineIcon-container">
              <img src={lineIcon} alt="line-icon"></img>
            </div>
            <div className="secondTotal-container">
              <div className="cardPaymentDetail-heading fifthHeading">
                <h1>Total</h1>
              </div>
              <div className=" second-boldPrice">
                {(() => {
                  if (rentDuration === 0) {
                    return <h6>Rp {Intl.NumberFormat("id-ID").format(car.price)}</h6>;
                  } else if (!totalPrice) {
                    return <h6>Rp 0</h6>;
                  } else if (rentDuration < 0) {
                    return <h6>Rp {Intl.NumberFormat("id-ID").format(car.price * (rentDuration + parseInt(startDateOnly)))}</h6>;
                  } else if (rentDuration > 0) {
                    return <h6>Rp {Intl.NumberFormat("id-ID").format(car.price * rentDuration)}</h6>;
                  }
                })()}
              </div>
            </div>

            <div>
              {/* Condition to protect Bayar Button */}
              {(() => {
                if (state.bankReducer.isBCA === true || state.bankReducer.isBNI === true || state.bankReducer.isMandiri === true) {
                  return (
                    <div className="btn-cardPaymentDetail-on">
                      <button onClick={handleBayar}>
                        <span>Bayar</span>
                      </button>
                    </div>
                  );
                } else {
                  return (
                    <div className="btn-cardPaymentDetail-off">
                      <button>Bayar</button>
                    </div>
                  );
                }
              })()}
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default CardPaymentDetail;

// Previously used isBankChosen from bankAction for condition
// {(() => {
//   if (state.bankReducer.isBankChosen === "BCA" || state.bankReducer.isBankChosen === "BNI" || state.bankReducer.isBankChosen === "Mandiri") {
//     return (
//       <div className="btn-cardPaymentDetail-on">
//         <button onClick={handleBayar}>
//           <span>Bayar</span>
//         </button>
//       </div>
//     );
//   } else {
//     return (
//       <div className="btn-cardPaymentDetail-off">
//         <button>Bayar</button>
//       </div>
//     );
//   }
// })()}