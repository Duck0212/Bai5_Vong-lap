//Khai báo dữ liệu cho n
let n = Number(prompt("Nhập số bảng cửu chương:"));

//Khai báo dữ liệu cho i và kiểm tra dữ liệu của bảng cửu chương
let i = 1;
if (n > 9 || n < 1) {
  alert("Sô cần nhập phải từ 1 đến 9");
} else {
  if (isNaN(n)) {
    alert("Bạn cần nhập số!");
  } else {
    //In tên bảng
    console.log(`Bảng cửu chương ${n}`);

    //Kiểm tra và in thông tin
    while (i <= 10) {
      console.log(`Siêu anh hùng đánh bại ${n} x ${i} = ${n * i} kẻ xấu!`);
      i++;
    }
  }
}
