//Ngẫu nhiên 1 cấp độ hang động có thể trúng kho báu
let khoBau = Math.floor(Math.random() * 20) + 1;

//alert(`Kho báu nằm ở cấp ${khoBau}!`); //Dòng lệnh dùng để kiểm tra khoBau

//Khai báo dữ liệu
let capDo;

//Kiểm tra cấp độ và in ra kết quả
do {
  capDo = Number(prompt("Nhập cấp độ hang động bạn muốn khám phá: (1-20)"));
  if (capDo === khoBau) {
    alert(
      `Chúc mừng! Bạn đã tìm được kho báu trong hang động ở cấp độ ${capDo}`
    );
    break;
  } else {
    if (capDo >= 1 && capDo <= 20) {
      alert(`Không tìm thấy gì trong hang động ở cấp độ ${capDo}`);
    } else {
      if (capDo < 1 || capDo > 20) {
        alert("Cấp độ hang động không hợp lệ! Thử lại từ 1-20");
      } else {
        alert("Cấp độ hang động phải là số. Vui lòng nhập lại!");
      }
    }
  }
} while (true);
