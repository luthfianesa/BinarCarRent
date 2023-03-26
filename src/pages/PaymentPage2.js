import "../pages/pages.css";
import NavigationBar from "../components/NavigationBar";
import PaymentStep2 from "../components/PaymentStep2";
import PayBefore from "../components/PayBefore";
import Footer from "../components/Footer";
import PaymentConfirmation from "../components/PaymentConfirmation";
import PaymentTransfer from "../components/PaymentTransfer";
import PaymentInstruction from "../components/PaymentInstruction";

const Payment2Page = () => {
  return (
    <div className="payment-container">
      <NavigationBar />
      <div className="empty-header"></div>
      <PaymentStep2 />
      <div className="outer-container-for-payBefore-and-paymentConfirmation">
        <div className="inner-container-for-payBefore-and-paymentConfirmation">
          <PayBefore />
          <PaymentConfirmation />
        </div>
      </div>

      <div className="outer-containerFortransferPayment-and-paymentInstruction">
        <div className="inner-containerFortransferPayment-and-paymentInstruction">
          <PaymentTransfer />
          <PaymentInstruction />
          <div className="footerInPayment2">
          <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment2Page;
