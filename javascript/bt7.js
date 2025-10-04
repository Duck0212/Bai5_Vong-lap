let num = Number(prompt("Nhập số nguyên tối đa từ 2 đến 100"));

if (isNaN(num) || num <= 1 || num > 100) {
  alert("Bạn cần nhập số trong khoảng từ 2 đến 100!");
} else {
  let ketQua = "Các số nguyên tố là: ";
  for (let i = 2; i <= num; i++) {
    let laSoNguyenTo = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        laSoNguyenTo = false;
        break;
      }
    }
    if (laSoNguyenTo) {
      ketQua += i + " ";
    }
  }
  console.log(ketQua);
}
