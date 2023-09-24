import "./pages.css";
import NavigationBar from "../components/NavigationBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Filter from "../components/Filter";
import CardFilter from "../components/CardFilter";
import axios from "axios";
import { useEffect, useState } from "react";

const SearchCarPage = () => {
  const [carData, setCarData] = useState([]);
  // console.log(carData);
  const [fName, setFName] = useState("");
  const [fCategory, setFCategory] = useState("");
  const [fMinPrice, setFMinPrice] = useState("");
  const [fMaxPrice, setFMaxPrice] = useState("");
  const [fStatus, setFStatus] = useState("");
  // const [carPrice, setCarPrice] = useState(0);
  console.log("ini min price", fMinPrice);
  console.log("ini max price", fMaxPrice);

  // Handle Car Filter old version
  // const handleFilter = (e) => {
  // axios
  // .get(`https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?name=${fName}&category=${fCategory}&minPrice=${fMinPrice}&maxPrice=${fMaxPrice}&isRented=${fStatus}`)
  // .then((res) => {
  // setCarData(res.data.cars);
  // console.log(res);
  // })
  // .catch((err) => console.log(err.message));
  // };
  
  const handleFilter = (e) => {
    axios
      .get(`https://api-car-rental.binaracademy.org/customer/v2/car?name=${fName}&category=${fCategory}&minPrice=${fMinPrice}&maxPrice=${fMaxPrice}&isRented=${fStatus}`)
      .then((res) => {
        setCarData(res.data.cars);
        console.log(res);
      })
      .catch((err) => console.log(err.message));
  };

  // Show All Car Old Version
  // useEffect(() => {
  //   axios
  //     .get(`https://bootcamp-rent-cars.herokuapp.com/customer/v2/car`)
  //     .then((res) => {
  //       setCarData(res.data.cars);
  //       // console.log(res.data.cars);
  //     })
  //     .catch((err) => console.log(err.message));
  // }, []);

  useEffect(() => {
    axios
      .get(`https://api-car-rental.binaracademy.org/customer/v2/car`)
      .then((res) => {
        setCarData(res.data.cars);
        // console.log(res.data.cars);
      })
      .catch((err) => console.log(err.message));
  }, []);

  // Fungsi handle query param
  const handleFilterName = (e) => {
    setFName(e.target.value);
    // console.log(e.target.value);
  };

  const handleFilterCategory = (e) => {
    setFCategory(e.target.value);
    // console.log(e.target.value);
  };

  const handleFilterPrice = (e) => {
    if (e.target.value === "cheap") {
      setFMinPrice(0);
      setFMaxPrice(399999);
    } else if (e.target.value === "middle") {
      setFMinPrice(400000);
      setFMaxPrice(600000);
    } else if (e.target.value === "prestige") {
      setFMinPrice(600001);
      setFMaxPrice("");
    } else if (e.target.value === "") {
      setFMinPrice("");
      setFMaxPrice("");
    }
  };

  const handleFilterStatus = (e) => {
    setFStatus(e.target.value);
  };

  return (
    <div>
      <NavigationBar />
      <Header isBtnShow={false} />
      <div className="container-for-filter-and-cardFilter">
        {/* Kirim Data ke filter di Search Car Page */}
        <Filter handleFilter={handleFilter} fName={handleFilterName} fCategory={handleFilterCategory} fPrice={handleFilterPrice} fStatus={handleFilterStatus} isInputDisable={false} />
        {/* Kirim Data ke cardFilter di Search Car Page */}
        <CardFilter carData={carData} />
      </div>
      <div className="footerInSearchCar">
        <Footer />
      </div>
    </div>
  );
};

export default SearchCarPage;
