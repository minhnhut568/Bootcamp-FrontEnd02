// Chứa các phương thức giúp kiểm tra dữ liệu
function Validation() {
    this.checkEmpty = function (inputVal, spanELE, message) {
        // trim(): xóa dấu khoảng cách phía trước và sau của chuỗi
        if (inputVal.trim() === "") {
            // Ô bị để trống
            // Dữ liệu không hợp lệ
            spanELE.innerHTML = message;
            return false;
        } else {
            // Dữ liệu hợp lệ
            spanELE.innerHTML = "";
            return true;
        }
    }
    this.checkMaSV = function (inputVal, spanELE, message, mangSV) {
        // Duyet mang
        //some duyet mang va tra ve gia tri true false dau vao dieu kien so sanh
        var isExist = false; //bien kiem tra ma sv co ton tai hay khong

        isExist = mangSV.some(function (item) {
            return inputVal.trim() === item.maSV;
        });

        //neu mang bi trung, 
        if (isExist) {
            spanELE.innerHTML = message;
            return false;
        } else {
            spanELE.innerHTML = "";
            return true;
        }
    }
    this.checkLetter = function (inputVal, spanELE, message) {
        //RegExp doi tuong tao san
        var letters = new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$");
        if (letters.test(inputVal)) {
            spanELE.innerHTML = "";
            return true;
        } else {
            spanELE.innerHTML = message;
            return false;
        }
    }
    this.checkString = function (inputVal, spanELE, message, mangSV) {
        var isExist = false; //bien kiem tra ma sv co ton tai hay khong

        isExist = mangSV.some(function (item) {
            return inputVal.trim() === item.email;
        });
        //neu mang bi trung 
        if (isExist) {
            spanELE.innerHTML = message;
            return false;
        } else {
            spanELE.innerHTML = "";
            return true;
        }
    }
    this.checkEmail = function (inputVal, spanELE, message, mangSV) {
        var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (inputVal.match(emailPattern)) {
            spanELE.innerHTML = "";
            return true;
        } else {
            spanELE.innerHTML = "Email khong hop le";
            return false;
        }
    }

    this.checkMatKhau = function (inputVal, spanELE, message, min, max) {

        if (inputVal.length >= min && inputVal.length <= max) {
            spanELE.innerHTML = "";
            return true;
        } else {
            spanELE.innerHTML = message;
            return false;
        }
    }
    this.checkFormatPass = function (inputVal, spanELE, message) {
        var pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
        if(inputVal.match(pass)){
            spanELE.innerHTML = "";
            return true;
        }else {
            spanELE.innerHTML = message;
            return false;
        }
    }
    this.checkDate = function (inputVal, spanELE, message) {
        var date = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
        if(inputVal.match(date)){
            spanELE.innerHTML = "";
            return true;
        }else {
            spanELE.innerHTML = message;
            return false;
        }
       
    }
   
    // this.checkKhoaHoc = function (inputVal, spanELE, message) {
    //     if(inputVal.match("Chọn khóa học")){
    //         spanELE.innerHTML = message;
    //         return false;
    //     }else {
    //         spanELE.innerHTML = "";
    //         return true;
    //     }  
    // }

    this.checkDropDown = function (selectELE, spanELE, message) {
        if (selectELE.selectedIndex != 0){
            spanELE.innerHTML = "";
            return true;
        }else {
            spanELE.innerHTML = message;
            return false;
        }
    }
    this.checkDiem = function (inputVal, spanELE, message) {
        var diem = /^(\d{1,2}(\.\d{1,2})?)$/;
        if (inputVal.match(diem)){
            spanELE.innerHTML = "";
            return true;
        }else {
            spanELE.innerHTML = message;
            return false;
        }
    }
}