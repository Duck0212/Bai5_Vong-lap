//Khai báo dữ liệu
let chieuCao = 5;

//Kiểm tra và in kết quả

//Kiểm tra số dòng
for (i = 1; i <= chieuCao; i++) {
  let dong = "";

  //Kiểm tra số (*) trong mỗi dòng
  for (j = 1; j <= i; j++) {
    dong += "*";
  }
  //In kết quả
  console.log(dong);
}
