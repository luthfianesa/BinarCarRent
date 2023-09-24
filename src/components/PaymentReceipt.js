import "../components/paymentReceipt.css";
import IconGreenCheck from "../assets/icon_payment-success.png";
import IconDownload from "../assets/icon_download.png";
import BinarLogo from "../assets/logo-binar.png";
import moment from "moment/moment";
import "moment/locale/id";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
// import { useEffect, useState } from "react";

// All Data in Payment Receipt Received from Local Storage
const PaymentReceipt = () => {
  const startDate = moment(localStorage.getItem("startDate"));
  const endDate = moment(localStorage.getItem("endDate"));
  // const [orderId, setOrderId] = useState(0);
  // const [bankChosen, setBankChosen] = useState();

  // useEffect(() => {
  //   setOrderId(localStorage.getItem("orderId"));
  //   setBankChosen(localStorage.getItem("selectedBank"))
  // }, []);

  const orderId = localStorage.getItem("orderId");
  const selectedCar = localStorage.getItem("car_selected");
  const totalPrice = localStorage.getItem("totalPrice");
  const bankChosen = localStorage.getItem("selectedBank");
  const paymentProof = localStorage.getItem("PaymentProof");

  const downloadPdf = () => {
    const input = document.getElementById("PaymentReceipt"); //Element Id which will be screenshotted
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", "a4");
      pdf.addImage(imgData, "JPEG", 15, 50);
      pdf.save("PaymentReceipt-Binar"); //PDF name after downloaded
    });
  };

  return (
    <div className="PaymentReceipt-container">
      <div className="caption-PaymentReceipt-container">
        <div className="icon-greenCheck">
          <img src={IconGreenCheck} alt="icon-green-check"></img>
        </div>
        <div className="mainHeading-PaymentReceipt">
          <h1>Pembayaran Berhasil !</h1>
        </div>
        <div className="subHeading-PaymentReceipt">
          <h6>Tunjukkan Payment Receipt ini ke petugas BCR di titik temu</h6>
        </div>
      </div>
      {/* <div className="download-PaymentReceipt-container">
        <div className="first-row-download-PaymentReceipt">
          <div className="heading-and-subHeading-PaymentReceipt-container">
            <div className="heading-PaymentReceipt">
              <h1>PaymentReceipt</h1>
            </div>
            <div className="subHeading-PaymentReceipt">
              <h6>*No PaymentReceipt</h6>
            </div>
          </div>
          <div className="btn-download-PaymentReceipt">
            <button>
              <img src={IconDownload} alt="icon-download"></img>
            </button>
          </div>
        </div>
        <div className="second-row-download-PaymentReceipt">
          <div className="PaymentReceipt-preview">
            <div className="icon-image-preview">
              <img src={IconImage} alt="icon-img"></img>
            </div>
            <div className="txt-preview">
              <h6>PDF Viewer</h6>
            </div>
          </div>
        </div>
      </div> */}
      {/* Tombol Unduh di Atas */}
      {/* <div className="btn-download-PaymentReceipt">
        <button>
          <img src={IconDownload} alt="icon-download"></img>
        </button>
      </div> */}
      <div className="beautiful-PaymentReceipt">
        <div className="beautiful-PaymentReceipt-inner-container" id="PaymentReceipt">
          <div className="roundedRectangle-outer-container">
            <div className="roundedRectangle-inner-container"></div>
            <div className="roundedRectangle-inner-container"></div>
            {/* <div className="roundedRectangle-inner-container"></div> */}
          </div>
          <div className="header-container-PaymentReceipt">
            <div className="first-heading-PaymentReceipt">
              <h1>Payment Receipt</h1>
            </div>
            <div className="logo-container-PaymentReceipt">
              <img src={BinarLogo}></img>
            </div>
          </div>
          <div className="order-id-and-address-container">
            <div className="order-id-PaymentReceipt-container">
              <h3>Order ID : {orderId}</h3>
            </div>
            <div className="address-PaymentReceipt-container">
              <p className="address-PaymentReceipt">Jalan Suroyo No. 161 Mayangan Kota Probolinggo 672000</p>
            </div>
          </div>
          <div className="line-PaymentReceipt-container">
            <div className="line-PaymentReceipt"></div>
          </div>
          <div className="detail-order-container-PaymentReceipt">
            <div className="left-content-PaymentReceipt">
              <h3>Nama Mobil</h3>
              <h3>Tanggal Mulai Sewa</h3>
              <h3>Tanggal Akhir Sewa</h3>
              <h3>Metode Pembayaran</h3>
              <h3 className="total-PaymentReceipt">Total Bayar</h3>
            </div>
            <div className="right-content-PaymentReceipt">
              <h3 className="selected-car">{selectedCar}</h3>
              <h3>{startDate.locale("id").format("LL")}</h3>
              <h3>{endDate.locale("id").format("LL")}</h3>
              <h3>{bankChosen} Transfer</h3>
              <h3 className="total-PaymentReceipt">Rp {Intl.NumberFormat("id-ID").format(totalPrice)}</h3>
            </div>
          </div>
          <div className="line-PaymentReceipt-container">
            <div className="line-PaymentReceipt"></div>
          </div>
          <div className="footer-PaymentReceipt">
            <p> Binar Car Rental</p>
            {/* <p>© Luthfi 2023 | lutvheanesa@gmail.com | +6282210153709</p> */}
          </div>
        </div>
      </div>
      {/* Tombol Unduh di bawah */}
      <div className="btn-download-PaymentReceipt">
        <button>
          <img src={IconDownload} alt="icon-download" onClick={downloadPdf}></img>
        </button>
      </div>
      <div className="paymentProof-PaymentReceipt">
        <h1> Bukti Pembayaran Anda</h1>
        <img src={paymentProof}></img>
      </div>
    </div>
  );
};

export default PaymentReceipt;
