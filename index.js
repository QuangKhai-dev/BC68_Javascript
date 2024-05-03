// Câu lệnh DOM (Document Object Model)
// Cách tương tác với thẻ thông qua id
// 1. Thay đổi nội dung của thẻ (innerHTML)
let theH1 = document.getElementById("title");
console.log(theH1);
theH1.innerHTML = "Xin chào tới buổi 2";
// 2. Thay đổi css của thẻ (style)
theH1.style.backgroundColor = "red";
// 3. gọi tới tất cả thuộc tính của thẻ để lấy giá trị
let clasTheH1 = theH1.className;
console.log(clasTheH1);
let contentTheH1 = theH1.innerHTML;
console.log(contentTheH1);

// Yêu cầu 1: Thực hiện DOM tới thẻ img có id là hinhAnh và hiển thị hình một chú mèo lên thẻ img
document.getElementById("hinhAnh").src =
  "https://w0.peakpx.com/wallpaper/414/380/HD-wallpaper-lovely-cat-lovely-animals-cat-eyes.jpg";
let idHinhAnh = document.getElementById("hinhAnh").id;
console.log(idHinhAnh);

// xử lí dom tới nút đăng nhập và tạo một sự kiện onclick sẽ chạy khi được người dùng click vào
document.getElementById("btnDangNhap").onclick = function () {
  // Tất cả xử lí sẽ chạy khi người dùng click vào nút đăng nhập
  // Xử lí tương tác với input
  let taiKhoan = document.getElementById("taiKhoan").value;
  console.log(taiKhoan);

  let matKhau = document.getElementById("matKhau").value;
  console.log(matKhau);
};

// Yêu cầu : thực hiện tương tác với 2 nút button tắt và bật để thực hiện chức năng bật tắt đèn
// B1 : DOM tới nút tắt và tạo một sự kiện onclick cho hiển thị console.log("Tôi là nút tắt đèn")
// B2 : DOM tới nút bật và tạo một sự kiện onclick cho hiển thị console.log("Tôi là nút bật đèn")
// B3 : Thực hiện xử lí để thay đổi tấm hình để thay đổi đèn tắt thành đèn mở cho nút bật ở trong sự kiện onclick của nút bật
// B4 :  Thực hiện xử lí để thay đổi tấm hình để thay đổi đèn mở thành đèn tắt cho nút tắt ở trong sự kiện onclick của nút tắt
let hinhBongDen = document.getElementById("hinhBongDen");
document.getElementById("btnBatDen").onclick = function () {
  console.log("Tôi là nút bật đèn");
  // viết sử lí tới thẻ img có id hinhBongDen và thay thế src của thẻ thành hình bóng mở
  hinhBongDen.src = "./img/pic_bulbon.gif";
};

document.getElementById("btnTatDen").onclick = function () {
  console.log("Tôi là nút tắt đèn");
  hinhBongDen.src = "./img/pic_bulboff.gif";
};

// Câu lệnh giúp dom tới phần tử thông qua selector
document.querySelector(".btnHienThiMatKhau").onclick = function () {
  // xử lí dom tới input có id là matKhau
  document.querySelector("#matKhau").type = "text";
};

//
let theP = document.querySelector(".container p");
document.querySelector(".container .btn-themClass").onclick = function () {
  // console.log("holla");

  // theP.classList.add("text-color");
  let classTheP = theP.className;
  console.log(classTheP); // "huhu"
  theP.className = classTheP + " text-color";
  // theP.className += " text-color";
};

// global scope (phạm vi hoạt động trên toàn file js bất cứ đâu cũng có thể truy cập tới)
// function scope (Phạm vi hoạt động sẽ nhỏ hơn và nằm trong function, các nơi khác không thể truy cập tới biến để lấy dữ liệu)
document.querySelector(".btn-xoaClass").onclick = function () {
  console.log("Tôi là nút xoá class");
  console.log(theP);
  theP.classList.remove("text-color");
};

document.querySelector(".btn_darkTheme").onclick = function () {
  // console.log("bật dark theme");
  // DOM tới thẻ body
  // toggle là một dạng thêm class vào thẻ nếu chưa có, nếu kiểm tra đã có class thì sẽ tự động remove class đó
  document.querySelector("body").classList.toggle("dark");
};

// Tạo thẻ html từ js
document.getElementById("taoTheHTML").onclick = function () {
  // tạo thẻ html
  let theImg = document.createElement("img");
  // thêm các thuộc tính cho thẻ
  theImg.src =
    "https://i.pinimg.com/736x/4d/0b/8f/4d0b8fa5bbb1f781cbba4c91d57331ac.jpg";
  console.log(theImg);
  // truyền thẻ html được tạo ra vào layout html (sử dụng appendChild)
  document.querySelector(".result").appendChild(theImg);
};
