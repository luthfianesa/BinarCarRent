import "../components/paymentStep.css";
import BackIcon from "../assets/fi_arrow-left.png";
import CheckIcon from "../assets/fi_check.png";
import LineIcon from "../assets/icon_line.png";
import Number3BlueIcon from "../assets/icon_number-3-blue.png";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PaymentStep3 = () => {
  const { id } = useParams();
  const [orderId, setOrderId] = useState(0);
  const navigate = useNavigate();

  // Back to previous page
  const goBack = () => {
    navigate(`/search-car/`);
  };

  useEffect(() => {
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
        console.log(res);
        setOrderId(res.data.id);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="paymentStep3-container">
      <div className="paymentStepContent-container">
        <div className="paymentStep-left-content">
          <div className="back-icon">
            <button>
              <img src={BackIcon} alt="back-icon" onClick={goBack}></img>
            </button>
          </div>
          <div className="bankChosen-container">
            <div className="txt-pembayaran bankChosen">
              <h1>Payment Receipt</h1>
            </div>
            <div className="orderId">
              <h6>Order ID: {orderId}</h6>
            </div>
          </div>
        </div>
        <div className="paymentStep-right-content">
          <div className="checklist-icon">
            <img src={CheckIcon} alt="checklist-icon"></img>
          </div>
          <div className="txt-paymentStep">
            <h3>Pilih Metode</h3>
          </div>
          <div className="icon-line">
            <img src={LineIcon} alt="line-icon"></img>
          </div>
          <div className="icon-number icon-number2">
            <img src={CheckIcon} alt="checklist-icon"></img>
          </div>
          <div className="txt-paymentStep">
            <h3>Bayar</h3>
          </div>
          <div className="icon-line">
            <img src={LineIcon} alt="line-icon"></img>
          </div>
          <div className="icon-number icon-number3">
            <img src={Number3BlueIcon} alt="checklist-icon"></img>
          </div>
          <div className="txt-paymentStep">
            <h3>Tiket</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentStep3;
