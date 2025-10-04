//Khai báo dữ liệu
let scores = [],
  tong = 0;

//Nhập điểm số của 10 cầu thủ
for (i = 0; i < 10; i++) {
  let point = +prompt(`Nhập điểm số của cầu thủ thứ ${i + 1}: `);
  scores.push(point);
}

//Kiểm tra điểm và tính tổng điểm
for (let score of scores) {
  tong += score;
}

//Kiểm tra tổng điểm và in kết quả
if (tong > 100) console.log("Đội thắng!");
else console.log("Đội thua!");
