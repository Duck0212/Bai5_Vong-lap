//Khai báo dữ liệu
const laiSuat = 0.05;
let soTienVayBanDau;

//Kiểm tra số tiền vay ban đầu
do {
  soTienVayBanDau = +prompt("Nhập số tiền vay ban đầu (USD):");

  //Kiểm tra số tiền vay ban đầu phải là số và phải > 100 USD và < 1000 USD
  if (
    isNaN(soTienVayBanDau) ||
    soTienVayBanDau <= 100 ||
    soTienVayBanDau >= 1000
  ) {
    alert("Số tiền vay ban đầu phải là số và phải > 100 USD và < 1000 USD");
  }
} while (
  isNaN(soTienVayBanDau) ||
  soTienVayBanDau <= 100 ||
  soTienVayBanDau >= 1000
);

//Khai báo dữ liệu
let soDu = -soTienVayBanDau;
let year = 1;

//Kiểm tra, tính và in kết quả lãi kép mỗi năm
while (year <= 10) {
  soDu = soDu * (1 + laiSuat);
  console.log(`Số dư sau ${year} năm là: ${soDu} USD`);
  if (soDu >= soTienVayBanDau * 2) {
    break;
  }
  year++;
}
