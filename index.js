// Một số toán tử so sánh
//1. So sánh bằng (==)
let diemToan = 9;
let diemVan = "9";
let ketQua = diemToan == diemVan;
console.log(ketQua);
let hoTenA = "Đình Sang";
let hoTenB = "đình sang";
let ketQua2 = hoTenA == hoTenB;
console.log(ketQua2);

//2. So sánh khác (!=)
let ketQua3 = diemVan != hoTenA;
console.log(ketQua3);

//3. So sánh giá trị và kiểu (===)
let ketQua4 = diemVan === diemToan;
console.log(ketQua4);

//4. so sánh khác giá trị hoặc kiểu (!==)
let monTrung = "Sủi cảo";
let monViet = "Bánh mì";
// let ketQua5 = monTrung !== monViet;
let ketQua5 = diemToan !== diemVan;
console.log(!ketQua5);

let diemSinh = 4;
let diemSu = 4;
console.log(diemSinh <= diemSu);

// Toán tử phủ định (!) : Đảo ngược các giá trị boolean hiện có vd !true ==> false

// Toán tử và (&&)
let diemAnh = 4;
let diemLy = 9;
let tong = (45 + 14 + 1) / 3;
// Lưu ý với toán tử && khi kết quả đầu tiên trả về false sẽ tự động trả kết quả cuối cùng là false không quan tâm tới các kết quả sau
// 4     false     9
let ketQua6 = diemAnh > diemLy && tong >= 20; //false
console.log(ketQua6);

// Toán tử hoặc (||)
let ketQua7 = diemAnh > diemLy || tong > 20 || diemLy > 8;
console.log(ketQua7);

// Cấu trúc điều kiện
if (34 < 15) {
  // Điều kiện đúng sẽ xử lí những hành động ở bên trong
  console.log("Kết quả là 34 lớn hơn 15");
}

// Yêu cầu 1: Dựa vào layout được cung cấp, thực hiện tạo một sự kiện onclick dành cho nút button kiểm tra kết quả, nếu giá trị tổng 2 số người dùng nhập lớn hơn 50 sẽ xuất kết quả là tổng 2 số lớn hơn 50
/**
 * B1: tạo sự kiện onclick cho nút button
 * B2: sử dụng DOM để truy cập tới 2 input và lấy dữ liệu sau đó lưu trữ vào biến
 * B3: sử dụng cấu trúc điều kiện để kiểm tra và xuất kết quả theo yêu cầu
 *
 */

document.querySelector(".btn-dark").onclick = function () {
  let soThuNhat = document.getElementById("soThuNhat").value * 1;
  let soThuHai = document.getElementById("soThuHai").value * 1;
  let tong = soThuNhat + soThuHai;
  console.log(tong);
  let theP = document.createElement("p");
  // kiểm tra khi giá trị lớn hơn 50
  // if (tong > 50) {
  //   // console.log("Tổng 2 số lớn hơn 50");
  //   // tạo một thẻ p giúp hiển thị kết quả nếu như tổng 2 số lớn hơn 50
  //   theP.className = "p-2 text-white bg-success mt-4";
  //   theP.innerHTML = "Tổng 2 số lớn hơn 50";
  // }

  // if (tong < 50) {
  //   theP.className = "p-2 text-white bg-danger mt-4";
  //   theP.innerHTML = "Tổng 2 số bé hơn 50";
  // }

  // xử lí 2 điều kiện if ở trên thông qua if else
  if (tong < 50) {
    theP.className = "p-2 text-white bg-danger mt-4";
    theP.innerHTML = "Tổng 2 số bé hơn 50";
  } else {
    theP.className = "p-2 text-white bg-success mt-4";
    theP.innerHTML = "Tổng 2 số lớn hơn hoặc = 50";
  }

  document.querySelector(".container").appendChild(theP);
};

// Giải bài tập tính tiền lương
// DOM tới nút tính tiền lương và tạo một sự kiện onclick
document.querySelector(".btn-primary").onclick = function () {
  let soLuong = document.getElementById("soLuong").value * 1;
  let soGioLam = document.getElementById("soGioLam").value * 1;
  // let tienLuongThang = soLuong * soGioLam;
  // if (soGioLam > 40) {
  //   tienLuongThang *=  1.5
  // }
  let tienLuongThang = 0;
  // TH1 : Số giờ lớn hơn 40
  if (soGioLam > 40) {
    // 44 ==> 40 giờ 4 OT
    tienLuongThang = soLuong * 40 + (soGioLam - 40) * 1.5 * soLuong;
  } else {
    tienLuongThang = soLuong * soGioLam;
  }
  // TH2: Số giờ làm bé hơn hoặc bằng với 40

  // Hiển thị dữ liệu
  document.getElementById("ketQua").innerHTML =
    "Số tiền lương bạn làm được tháng này: " +
    tienLuongThang.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    });
};
