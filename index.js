// câu lệnh giúp thay đổi nội dung của một thẻ có id
// document.getElementById("demo").innerHTML = "Tôi là Khải";

// câu lệnh console
console.log("Hello World");
console.error("Tôi đang sai ở dòng 3");
console.warn("Coi chừng bị lỗi");
console.clear();

// biến (variable)
// tên biến đặt theo cấu trúc camel case
// tên biến không được chứa số ở ký tự đầu
// tên biến không chứa khoảng cách và gạch nối
// nhớ lưu ý biến tạo ra phải có ý nghĩa và phân biệt chữ hoa chữ thường
let hoTen = "Sang ròm";
hoTen = "Hiếu bến tàu";

// Kiểu dữ liệu
// Kiểu dữ liệu Number
let soTuoi = 32 + 10;
console.log(typeof 42);
// Kiểu dữ liệu String
let monAn = "Mì xào chua ngọt";
let soGioLam = "120";
console.log(typeof "Chicken");

// Kiểu dữ liệu Boolean
let emDung = false;
let anhDung = true;

// Phép toán
let tong = 12 + 5 - (3 * 2) / 4;
console.log(tong);
// Phép chia lấy dư (%)
let soChan = 15 + 33 - 11 * 4;
console.log(soChan);
// phép tính chia lấy dư bên dưới là phương pháp tìm kiếm số đó là số lẻ hay chẵn
let kiemTraSoChan = soChan % 2;
console.log(kiemTraSoChan);

// Phép tăng (++)
let diemToan = 8;
// diemToan = 9;
// diemToan++;
// ++diemToan;
let diemHoa = 6;
let diemTong = diemHoa + ++diemToan; // diemToan = 9
// Phép tăng trước và tăng sau, bản chất sẽ khác ở phần xử lí, phép tăng trước sẽ tăng ngay 1 giá trị ngay tại thời điểm được gọi tới, còn tăng sau sẽ thêm giá trị sau thời điểm đó
console.log(diemToan);
console.log(diemTong);

// Phép gán
// console.log(lopHoc);
// let lopHoc = "12A5";
// console.log(lopHoc);
// var lopHoc = "12A5";
let namSinh = "2002";
let soTuoiCuaNam = 32;
let tongSoTuoi = soTuoiCuaNam + namSinh;
console.log(typeof tongSoTuoi);
// phép gán (+=)
let diemVan = 3;
let diemSu = 5;
let diemTrungBinh = (diemVan + diemSu) / 2;
// diemTrungBinh = diemTrungBinh + 3;
diemTrungBinh += 4;
console.log(diemTrungBinh);
// diemTrungBinh = diemTrungBinh % 2;
diemTrungBinh %= 2;
console.log(diemTrungBinh);

// Hằng số
// const GIA_TRI_PI = 3.15;
// GIA_TRI_PI = 3.15;
// console.log(Math.PI);

// Sơ đồ 3 khối
/**
 * Đầu vào: Hình chữ nhật, chiều dài và chiều rộng
 *
 *
 * Các bước xử lí :
 * ==> Công thức diện tích = dài * rộng
 * ==> Công thức chu vi = (dài + rộng) * 2
 *
 *
 * Đầu ra: Diện tích và chu vi của hình chữ nhật
 */

let chieuDai = 4;
let chieuRong = 3;
let dienTich = chieuDai * chieuRong;
let chuVi = (chieuDai + chieuRong) * 2;
console.log("Giá trị diện tích là: " + dienTich);
console.log("Giá trị chu vi là: " + chuVi);
