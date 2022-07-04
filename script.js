var air = document.getElementById("air"); // Tạo biến air là thẻ div có id="air"
function turnOn() { // Viết hàm bật điều hoà
    //Gợi ý: thay đổi thông số opacity của biến air thành 1
    //Link tham khảo: https://www.w3schools.com/js/js_htmldom_css.asp
    air.style.opacity = 1;
}

function turnOff() { //Viết hàm tắt điều hoà (tương tự hàm bật)
    air.style.opacity = 0;
}