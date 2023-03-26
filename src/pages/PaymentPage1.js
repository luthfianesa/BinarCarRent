import "../pages/pages.css";
import NavigationBar from "../components/NavigationBar";
import PaymentStep1 from "../components/PaymentStep1";
import OrderDetail from "../components/OrderDetail";
import BankPayment from "../components/BankPayment";
import CardPaymentDetail from "../components/CardPaymentDetail";
import Footer from "../components/Footer";

const Payment1Page = () => {
  return (
    <div className="paymentPage1-container">
      <NavigationBar />
      <div className="empty-header"></div>
      <PaymentStep1 />
      <OrderDetail />
      <div className="outer-containerForBankPayment-and-CardPaymentDetail">
        <div className="inner-containerForBankPayment-and-CardPaymentDetail">
          <BankPayment />
          <CardPaymentDetail />
        </div>
      </div>
      <div className="footerInPayment1">
        <Footer />
      </div>
    </div>
  );
};

export default Payment1Page;
