import "../components/paymentInstruction.css";
import React, { useState, useEffect } from "react";

const PaymentInstruction = () => {
  const [payment1, setPayment1] = useState(false);
  const [payment2, setPayment2] = useState(false);
  const [payment3, setPayment3] = useState(false);
  const [payment4, setPayment4] = useState(false);
  const bankBCA = localStorage.getItem("BCA");
  console.log(bankBCA);
  const bankBNI = localStorage.getItem("BNI");
  const bankMandiri = localStorage.getItem("Mandiri");

  useEffect(() => {
    setPayment1(true);
  }, []);

  const handlePayment1 = () => {
    setPayment1(true);
    setPayment2(false);
    setPayment3(false);
    setPayment4(false);
  };
  const handlePayment2 = () => {
    setPayment2(true);
    setPayment1(false);
    setPayment3(false);
    setPayment4(false);
  };
  const handlePayment3 = () => {
    setPayment3(true);
    setPayment1(false);
    setPayment2(false);
    setPayment4(false);
  };
  const handlePayment4 = () => {
    setPayment4(true);
    setPayment1(false);
    setPayment2(false);
    setPayment3(false);
  };

  return (
    <div className="paymentInstruction-container">
      <div className="mainHeading-paymentInstruction">
        <h1>Instruksi Pembayaran</h1>
      </div>
      {(() => {
        if (bankBCA === "true") {
          return (
            <div className="paymentMethod-outer-container">
              <div className="paymentMethod-container">
                <div className="payment1">
                  <h6 className={payment1 ? "bank-active" : "bank-inactive"} onClick={handlePayment1}>
                    ATM BCA
                  </h6>
                </div>
                <div className="payment2">
                  <h6 className={payment2 ? "bank-active" : "bank-inactive"} onClick={handlePayment2}>
                    M-BCA
                  </h6>
                </div>
                <div className="payment3">
                  <h6 className={payment3 ? "bank-active" : "bank-inactive"} onClick={handlePayment3}>
                    BCA Klik
                  </h6>
                </div>
                <div className="payment4">
                  <h6 className={payment4 ? "bank-active" : "bank-inactive"} onClick={handlePayment4}>
                    Internet Banking
                  </h6>
                </div>
              </div>
            </div>
          );
        } else if (bankBNI === "true") {
          return (
            <div className="paymentMethod-outer-container">
              <div className="paymentMethod-container">
                <div className="payment1">
                  <h6 className={payment1 ? "bank-active" : "bank-inactive"} onClick={handlePayment1}>
                    ATM BNI
                  </h6>
                </div>
                <div className="payment2">
                  <h6 className={payment2 ? "bank-active" : "bank-inactive"} onClick={handlePayment2}>
                    M-BNI
                  </h6>
                </div>
                <div className="payment3">
                  <h6 className={payment3 ? "bank-active" : "bank-inactive"} onClick={handlePayment3}>
                    BNI Tapcash
                  </h6>
                </div>
                <div className="payment4">
                  <h6 className={payment4 ? "bank-active" : "bank-inactive"} onClick={handlePayment4}>
                    Internet Banking
                  </h6>
                </div>
              </div>
            </div>
          );
        } else if (bankMandiri === "true") {
          return (
            <div className="paymentMethod-outer-container">
              <div className="paymentMethod-container">
                <div className="payment1">
                  <h6 className={payment1 ? "bank-active" : "bank-inactive"} onClick={handlePayment1}>
                    ATM Mandiri
                  </h6>
                </div>
                <div className="payment2">
                  <h6 className={payment2 ? "bank-active" : "bank-inactive"} onClick={handlePayment2}>
                    Livin-Mandiri
                  </h6>
                </div>
                <div className="payment3">
                  <h6 className={payment3 ? "bank-active" : "bank-inactive"} onClick={handlePayment3}>
                    VA Mandiri
                  </h6>
                </div>
                <div className="payment4">
                  <h6 className={payment4 ? "bank-active" : "bank-inactive"} onClick={handlePayment4}>
                    Internet Banking
                  </h6>
                </div>
              </div>
            </div>
          );
        }
      })()}
      {(() => {
        if (bankBCA === "true" && payment1 === true) {
          return (
            <div className="instructionsBottomContainer">
              <div className="instructions ATM-BCA">
                <ul>
                  <li>Masukkan kartu ATM, lalu PIN</li>
                  <li>Pilih menu “Transaksi Lainnya” - “Transfer” - "“Ke Rek BCA Virtual Account”" </li>
                  <li>
                    Masukkan nomor BCA Virtual Account: 70020+Order ID <br></br>Contoh: No. Peserta: 12345678, maka ditulis 7002012345678
                  </li>
                  <li>Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi</li>
                  <li>Ambil dan simpanlah bukti transaksi tersebut</li>
                </ul>
              </div>
            </div>
          );
        } else if (bankBCA === "true" && payment2 === true) {
          return (
            <div className="instructionsBottomContainer">
              <div className="instructions M-BCA">
                <ul>
                  <li>Login dengan akun M-banking Anda</li>
                  <li>Pilih menu “M-Transfer”, pilih “BCA Virtual Account” </li>
                  <li>
                    Input Kode Virtual Account: 39107+20+NRP <br></br> Contoh: No. Peserta: 12345678, maka ditulis 7002012345678
                  </li>
                  <li>Klik menu “Simpan Daftar Transfer” untuk menyimpan nomor pembayaran</li>
                  <li>Klik OK kemudian Kirim / Send</li>
                  <li>Input PIN BCA untuk mengotorisasi</li>
                  <li>Ikuti instruksi untuk menyelesaikan transaksi</li>
                </ul>
              </div>
            </div>
          );
        } else if (bankBCA === "true" && payment3 === true) {
          return (
            <div className="instructionsBottomContainer">
              <div className="instructions BCA-klik">
                <ul>
                  <li>Buka halaman BCAKlikPay</li>
                  <li>Pilih menu Registrasi</li>
                  <li>Baca Syarat dan Ketentuan</li>
                  <li>Isi data dengan benar</li>
                  <li>Pilih sumber dana pembayaran. Untuk saat ini DTKP hanya mendukung metode pembayaran BCA KlikPay dengan sumber dana dari KlikBCA</li>
                  <li>Anda akan menerima kode aktivasi lewat email dan SMS</li>
                </ul>
              </div>
            </div>
          );
        } else if (bankBCA === "true" && payment4 === true) {
          return (
            <div className="instructionsBottomContainer">
              <div className="instructions BCA-InternetBanking">
                <ul>
                  <li>Login ke KlikBCA Individual</li>
                  <li>Pilih Menu “Transfer”</li>
                  <li>Pilih Menu “Transfer ke BCA Virtual Account”</li>
                  <li>
                    Input Kode Virtual Account: 39107+20+NRP <br></br>Contoh: No. Peserta: 12345678, maka ditulis 7002012345678
                  </li>
                  <li>Pilih “Lanjutkan” untuk melanjutkan pembayaran</li>
                  <li>Masukkan Respon KeyBCA Apply 1</li>
                  <li>Ikuti instruksi untuk menyelesaikan transaksi</li>
                </ul>
              </div>
            </div>
          );
        }
      })()}
      {(() => {
        if (bankBNI === "true" && payment1 === true) {
          return (
            <div className="instructionsBottomContainer">
              <div className="instructions ATM-BNI">
                <ul>
                  <li>Masukkan kartu ATM, lalu PIN</li>
                  <li>Pilih “Menu Lainnya”</li>
                  <li>Pilih Jenis rekening yang akan Anda gunakan (Contoh: “Dari Rekening Tabungan”)</li>
                  <li>Pilih “Virtual Account Billing”</li>
                  <li>Masukan nomor Virtual Account Anda (contoh: 8277087781881441)</li>
                  <li>Tagihan yang harus dibayarkan akan muncul pada layar konfirmasi</li>
                  <li>Konfirmasi, apabila telah sesuai, lanjutkan transaksi</li>
                  <li>Transaksi anda telah selesai</li>
                </ul>
              </div>
            </div>
          );
        } else if (bankBNI === "true" && payment2 === true) {
          return (
            <div className="instructionsBottomContainer">
              <div className="instructions M-BNI">
                <ul>
                  <li>Akses BNI Mobile Banking</li>
                  <li>Masukan User ID dan Password</li>
                  <li>Pilih menu “Transfer”</li>
                  <li>Pilih Menu “Virtual Billing” kemudian pilih rekening debet</li>
                  <li>Masukkan nomor Virtual Account Anda (contoh: 8277087781881441) pada menu “Input Baru”</li>
                  <li>Tagihan yang harus dibayarkan akan muncul pada layar konfirmasi</li>
                  <li>Konfirmasi transaksi dan masukkan Password Transaksi</li>
                  <li>Pembayaran Anda Telah Berhasil</li>
                </ul>
              </div>
            </div>
          );
        } else if (bankBNI === "true" && payment3 === true) {
          return (
            <div className="instructionsBottomContainer">
              <div className="instructions BNI-tapCash">
                <ul>
                  <li>Pilih BNI TapCash</li>
                  <li>Masukkan Nomor Virtual Account (contoh: 8277087781881441)</li>
                  <li>Pastikan “Nominal Uang” pada Mesin Reader sesuai dengan “Nominal Pembayaran”</li>
                  <li>Letakkan kartu TapCash di mesin reader</li>
                  <li>Apabila transaksi sukses, maka nominal pada kartu TapCash akan berkurang sesuai nilai pembayaran</li>
                  <li>Pastikan sisa saldo pada Kartu TapCash sudah benar</li>
                </ul>
              </div>
            </div>
          );
        } else if (bankBNI === "true" && payment4 === true) {
          return (
            <div className="instructionsBottomContainer">
              <div className="instructions BNI-InternetBanking">
                <ul>
                  <li>Ketik alamat https://ibank.bni.co.id kemudian klik “Enter”</li>
                  <li>Masukkan User ID dan Password</li>
                  <li>Pilih menu “Transfer”</li>
                  <li>Pilih “Virtual Account Billing”</li>
                  <li>Kemudian masukan Nomor Virtual Account Anda (contoh: 8277087781881441)</li>
                  <li> Lalu pilih rekening debet yang akan digunakan. Kemudian tekan ‘’Lanjut’’</li>
                  <li>Kemudian tagihan yang harus dibayarkan akan muncul pada layar konfirmasi</li>
                  <li>Masukkan Kode Otentikasi Token</li>
                  <li>Pembayaran Anda telah berhasil</li>
                </ul>
              </div>
            </div>
          );
        }
      })()}
      {(() => {
        if (bankMandiri === "true" && payment1 === true) {
          return (
            <div className="instructionsBottomContainer">
              <div className="instructions ATM-Mandiri">
                <ul>
                  <li>Masukkan kartu ATM, lalu PIN</li>
                  <li>Pilih menu “Bayar / Beli”</li>
                  <li>Pilih Menu lainnya hingga menemukan menu “Multipayment”</li>
                  <li>Masukkan Nomor Virtual Account, contoh: 8938800123456789</li>
                  <li>Tekan 1 kemudian OK</li>
                  <li>Muncul konfirmasi pembayaran. Tekan YA untuk melakukan pembayaran</li>
                  <li>Transaksi Selesai</li>
                  <li>Bukti Pembayaran dalam bentuk STRUK agar disimpan sebagai bukti pembayaran yang sah dari Bank Mandiri</li>
                </ul>
              </div>
            </div>
          );
        } else if (bankMandiri === "true" && payment2 === true) {
          return (
            <div className="instructionsBottomContainer">
              <div className="instructions Livin-Mandiri">
                <ul>
                  <li>Login ke aplikasi Livin' by Mandiri</li>
                  <li>Klik ikon Menu di sebelah kiri atas</li>
                  <li>Pilih menu “Pembayaran”</li>
                  <li>Klik “Pembayaran Baru”</li>
                  <li>Pilih “Multi Payment”</li>
                  <li>Klik “Penyedia Jasa” atau “Service Provider”</li>
                  <li>Masukkan Nomor Virtual Account</li>
                  <li>Masukan Nominal Pembayaran</li>
                  <li>Pilih “Konfirmasi”</li>
                  <li>Klik “Lanjut”</li>
                  <li>Masukkan PIN Livin Mandiri</li>
                </ul>
              </div>
            </div>
          );
        } else if (bankMandiri === "true" && payment3 === true) {
          return (
            <div className="instructionsBottomContainer">
              <div className="instructions VA-Mandiri">
                <ul>
                  <li>Login Mandiri Online dengan memasukkan Username dan Password</li>
                  <li>Pilih menu Pembayaran</li>
                  <li>Pilih menu “Multi Payment”</li>
                  <li>Masukkan Nomor Virtual Account, contoh: 8830832133555679 dan nominal yang akan dibayarkan, lalu pilih “Lanjut”</li>
                  <li>Setelah muncul tagihan, pilih “Konfirmasi”</li>
                  <li>Masukkan PIN / challenge kode token</li>
                  <li>Transaksi selesai, simpan bukti bayar anda</li>
                </ul>
              </div>
            </div>
          );
        } else if (bankMandiri === "true" && payment4 === true) {
          return (
            <div className="instructionsBottomContainer">
              <div className="instructions Mandiri-InternetBanking">
                <ul>
                  <li>Pada Halaman Utama pilih menu “Bayar”</li>
                  <li>Pilih submenu “Multi Payment”</li>
                  <li>Masukkan Kode Virtual Account, contoh: 8830832133555679</li>
                  <li>Masukkan jumlah pembayaran sesuai dengan tagihan</li>
                  <li>Pilih “Lanjutkan”</li>
                  <li>Pilih tagihan anda, jika sudah sesuai “Lanjutkan”</li>
                  <li>Transaksi selesai, lalu cetak hasil transaksi</li>
                </ul>
              </div>
            </div>
          );
        }
      })()}
    </div>
  );
};

export default PaymentInstruction;
