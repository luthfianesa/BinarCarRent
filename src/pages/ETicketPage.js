import "../pages/pages.css";
import NavigationBar from "../components/NavigationBar";
import PaymentStep3 from "../components/PaymentStep3";
import PaymentReceipt from "../components/PaymentReceipt";
import Footer from "../components/Footer";

const ETicketPage = () => {
  return (
    <div className="eTicketPage-container">
      <NavigationBar />
      <div className="empty-header-for-eTicketPage"></div>
      <PaymentStep3 />
      <div className="container-for-PaymentReceipt">
        <PaymentReceipt />
      </div>
      <div className="footer-In-ETicketPage">
        <Footer />
      </div>
    </div>
  );
};

export default ETicketPage;
