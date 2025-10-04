//Dùng do...while để lặp lại nếu số lượng ứng cử viên không hợp lệ
do {
  //Khai báo dữ liệu cho biến và mảng
  let soLuongUngCuVien = Number(prompt("Có bao nhiêu ứng cử viên?"));
  let doiTuongPhieuBau = [];

  //Kiểm tra số lượng ứng cử viên có phải số không
  if (isNaN(soLuongUngCuVien)) {
    alert("Số lượng ứng cử viên phải là số!");
  } else {
    for (let i = 1; i <= soLuongUngCuVien; i++) {
      //Sử dụng do...while để lặp lại khi nhập sai yêu cầu
      do {
        let tenUngCuVien = prompt(`Nhập tên ứng cử viên thứ ${i}`);
        let soPhieu = parseInt(
          prompt(`Nhập số phiếu mà ứng cứ viên thứ ${i} có`)
        );

        //Kiểm tra số phiếu bầu có phải số không
        if (isNaN(soPhieu)) {
          alert("Số phiếu không hợp lệ!");
        } else {
          //Đẩy thông tin đã nhập vào cuối mảng
          doiTuongPhieuBau.push({ ungCuvien: tenUngCuVien, soPhieu: soPhieu });
          break;
        }
      } while (true);
    }

    //Khai báo dữ liệu
    let tongSophieu = 0;

    //Kiểm tra số phiếu của mỗi ứng cử viên và tính tổng số phiếu
    for (let ungCu of doiTuongPhieuBau) {
      tongSophieu += ungCu.soPhieu;
    }

    //In thông tin
    console.log(`Tổng số phiếu bầu cử là ${tongSophieu}`);

    //Khai báo dữ liệu
    let stt = 1;

    //Gán từng phần tử của doiTuongPhieuBau cho ungCu
    for (let ungCu of doiTuongPhieuBau) {
      console.log(`Thông tin ứng cử viên ${stt}:`);

      //Lấy thuộc tính trong ungCu vào thuocTinh và in thông tin
      for (let thuocTinh in ungCu) {
        console.log(" - ", thuocTinh, ": ", ungCu[thuocTinh]);
      }

      //In ra 1 dòng giúp ngăn cách để dễ nhìn
      console.log("-------------------------------");
      stt++;
    }
    break;
  }
} while (true);
