import "../components/packageDetail.css";
import Accordion from "react-bootstrap/Accordion";

const PackageDetail = () => {
  return (
    <div className="packageDetail-container">
      <Accordion className="accordion-packageDetail" defaultActiveKey={["2"]} alwaysOpen>
        {/* 1 */}
        <h1 className="txt-heading heading">Tentang Paket</h1>
        <Accordion.Item eventKey="0" className="accordion-item">
          <Accordion.Header className="header">
            <span className="txt-heading txt-heading-packageDetail heading-accordion">Include</span>
          </Accordion.Header>
          <Accordion.Body className="body">
            <ul className="txt-neutral">
              <li>Apa saja yang termasuk dalam paket, misal durasi max 12 jam</li>
              <li>Sudah termasuk bensin selama 1 hari</li>
              <li>Sudah termasuk biaya makan sopir Rp 75.000 / hari</li>
              <li>Sudah termasuk pajak</li>
            </ul>
          </Accordion.Body>
          {/* 2 */}
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="accordion-item">
          <Accordion.Header className="header">
            <span className="txt-heading txt-heading-packageDetail heading-accordion">Exclude</span>
          </Accordion.Header>
          <Accordion.Body className="body">
            <ul className="txt-neutral">
              <li>Tidak termasuk tiket wisata</li>
              <li>Tidak termasuk biaya parkir</li>
              <li>Tidak termasuk biaya tol</li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </ul>
          </Accordion.Body>
          {/* 3 */}
        </Accordion.Item>
        <Accordion.Item eventKey="2" className="accordion-item">
          <Accordion.Header className="accordion-header-packageDetail">
            <span className="txt-heading txt-heading-packageDetail heading-accordion">Refund, Reschedule & Overtime</span>
          </Accordion.Header>
          <Accordion.Body className="body">
            <ul className="txt-neutral">
              <li>Pembatalan yang diajukan lebih dari 24 jam sebelum penjemputan akan mendapat pengembalian dana 100% dari total biaya sewa</li>
              <li>Pembatalan yang diajukan dalam waktu 6 hingga 24 jam sebelum penjemputan akan mendapat pengembalian dana 50% dari total biaya sewa</li>
              <li>Pembatalan yang diajukan dalam waktu kurang dari 6 jam sebelum penjemputan tidak mendapat pengembalian dana</li>
              <li>Ketidaklengkapan data maksimum 6 jam sebelum pengantaran unit, akan mendapat pengembalian dana 25%</li>
              <li>Ketidaklengkapan data pada saat pengantaran unit tidak mendapat pengembalian dana</li>
              <li>Perubahan jadwal sewa yang diajukan lebih dari 6 jam sebelum penjemputan dapat dilakukan dengan menghubungi WhatsApp di nomor 0822 101 537 09 dan email ke lutvheanesa@gmail.com</li>
              <li>Pelanggan wajib melakukan konfirmasi untuk waktu penggunaan tambahan maksimum 2 jam sebelum waktu sewa kendaraan berakhir</li>
              <li>Biaya overtime sebesar 15% per jam dari harga sewa</li>
              <li>Waktu maksimal overtime adalah 3 jam</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default PackageDetail;
