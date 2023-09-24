import "../components/bankPayment.css";
import LineIcon2 from "../assets/icon_line-2.png";
import GreenCheck from "../assets/fi_check-2.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleBankBCA, handleBankBNI, handleBankMandiri } from "../redux/actions/bankAction";

import rootReducer from "../redux/reducers";

const BankPayment = () => {
  const [bankBCA, setBankBCA] = useState(true);
  const [bankBNI, setBankBNI] = useState(true);
  const [bankMandiri, setBankMandiri] = useState(true);
  const [selectedBankBCA, setSelectedBankBCA] = useState("BCA");
  const [selectedBankBNI, setSelectedBankBNI] = useState("BNI");
  const [selectedBankMandiri, setSelectedBankMandiri] = useState("Mandiri");

  // Initialization dispatch
  const dispatch = useDispatch();
  // Receive data from redux
  const state = useSelector((rootReducer) => rootReducer);
  // console.log("ini state BankPayment", state);

  // Remove the chosen bank from local storage when this page refreshed
  useEffect(() => {
    localStorage.removeItem("SelectedBank", selectedBankBCA);
    localStorage.removeItem("SelectedBank", selectedBankBNI);
    localStorage.removeItem("SelectedBank", selectedBankMandiri);
    localStorage.removeItem("BCA", bankBCA);
    localStorage.removeItem("BNI", bankBNI);
    localStorage.removeItem("Mandiri", bankMandiri);
  }, []);

  // Reset bank picked to empty string and all the banks state to false when back to this page or refresh this page
  useEffect(() => {
    // state.bankReducer.isBankChosen = "";
    state.bankReducer.isBCA = false;
    state.bankReducer.isBNI = false;
    state.bankReducer.isMandiri = false;
  }, [state]);

  // Handle when BCA picked
  const onHandleBankBCA = () => {
    dispatch(handleBankBCA());
    localStorage.setItem("selectedBank", selectedBankBCA);
    localStorage.setItem("BCA", bankBCA);
    localStorage.removeItem("BNI", bankBNI);
    localStorage.removeItem("Mandiri", bankMandiri);
  };

  // Handle when BNI picked
  const onHandleBankBNI = () => {
    dispatch(handleBankBNI());
    localStorage.setItem("selectedBank", selectedBankBNI);
    localStorage.setItem("BNI", bankBNI);
    localStorage.removeItem("BCA", bankBCA);
    localStorage.removeItem("Mandiri", bankMandiri);
  };
  // Handle when Mandiri picked
  const onHandleBankMandiri = () => {
    dispatch(handleBankMandiri());
    localStorage.setItem("selectedBank", selectedBankMandiri);
    localStorage.setItem("Mandiri", bankMandiri);
    localStorage.removeItem("BCA", bankBCA);
    localStorage.removeItem("BNI", bankBNI);
  };

  return (
    <div className="bankPayment-container">
      <div className="heading-container-bankPayment">
        <h1>Pilih Bank Transfer</h1>
      </div>
      <div className="bankPayment-sub-heading-container">
        <h3>Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking</h3>
      </div>
      <div className="bank-container">
        <div className="bank-name" onClick={onHandleBankBCA}>
          <h6>BCA</h6>
        </div>
        <div className="txt-bank-container" onClick={onHandleBankBCA}>
          <h6>BCA Transfer</h6>
        </div>
        <div className={state.bankReducer.isBCA ? "greenCheck-on" : "greenCheck-off"}>
          <img src={GreenCheck} alt="green-check"></img>
        </div>
      </div>
      <div className="iconLine2-container">
        <img src={LineIcon2} alt="line-icon"></img>
      </div>
      <div className="bank-container">
        <div className="bank-name" onClick={onHandleBankBNI}>
          <h6>BNI</h6>
        </div>
        <div className="txt-bank-container" onClick={onHandleBankBNI}>
          <h6>BNI Transfer</h6>
        </div>
        <div className={state.bankReducer.isBNI ? "greenCheck-on" : "greenCheck-off"}>
          <img src={GreenCheck} alt="green-check"></img>
        </div>
      </div>
      <div className="iconLine2-container">
        <img src={LineIcon2} alt="line-icon"></img>
      </div>
      <div className="bank-container" onClick={onHandleBankMandiri}>
        <div className="bank-name">
          <h6>Mandiri</h6>
        </div>
        <div className="txt-bank-container" onClick={onHandleBankMandiri}>
          <h6>Mandiri Transfer</h6>
        </div>
        <div className={state.bankReducer.isMandiri ? "greenCheck-on" : "greenCheck-off"}>
          <img src={GreenCheck} alt="green-check"></img>
        </div>
      </div>
      <div className="iconLine2-container">
        <img src={LineIcon2} alt="line-icon"></img>
      </div>
    </div>
  );
};

export default BankPayment;
