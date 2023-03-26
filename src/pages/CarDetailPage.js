import "./pages.css";
import NavigationBar from "../components/NavigationBar";
import FilterDetail from "../components/FilterDetail";
import PackageDetail from "../components/PackageDetail";
import CardDetail from "../components/CardDetail";
import Footer from "../components/Footer";

const CarDetailPage = () => {
  return (
    <div className="car-detail-container">
      <NavigationBar />
      <div className="empty-header"></div>
      <div className="filter-detail-outer-container">
        <FilterDetail />
      </div>

      <div className="detail-info-container">
        <div className="detail-info-inner-container">
          <PackageDetail />
          <CardDetail />
        </div>
      </div>
      <div className="footerInCarDetail">
        <Footer />
      </div>
    </div>
  );
};

export default CarDetailPage;
