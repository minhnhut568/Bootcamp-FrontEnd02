// Axios trả về promise:
// 1. pending: chờ 
//  2. chờ => thành công = resolve
//   3. chờ => thất bại = reject

let escOrDesc = true; // true = tăng dần
let proList = [];

const renderHtml = () => {
  const contentHtml = `<div class="card text-white bg-dark">
    <div class="card-body">
      <h4 class="card-title">Danh sách sản phẩm</h4>
      <div class='container'>
        <div class="row">
          <div class="col-md-3">
            <input id="maSP" class="form-control" placeholder="Mã SP" disabled />
          </div>
          <div class="col-md-3">
            <input id="tenSP" class="form-control" placeholder="Tên SP" />
          </div>
          <div class="col-md-3">
            <input id="gia" class="form-control" placeholder="Giá" />
          </div>
          <div class="col-md-3">
            <input id="hinhAnh" class="form-control" placeholder="Link hình" />
          </div>
        </div>
        <br />
        <button id="btnThem" class="btn btn-success">Thêm sản phẩm</button>
        <button id="btnCapNhat" class="btn btn-success">Cap nhat</button>
      </div>
    </div>
  </div>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th>Mã SP</th>
          <th>Tên SP</th>
          <th style="cursor: pointer;" id="handleSort">
            Giá <i class="fa fa-level-down-alt" id="desc"></i> <i class="fa fa-level-up-alt" id="esc"></i> 
          </th>
          <th>Hình ảnh</th>
          <th></th>
        </tr>
      </thead>
      <tbody id="tblDanhSachSanPham">

      </tbody>
    </table>
  </div>`;
  document.getElementById("root").innerHTML = contentHtml;
}; renderHtml();

// Lấy data từ sever (mockAPi)
const getProductList = async () => {
  // Hiển thị
  // axios({
  //     method: "get",
  //     url: "https://5fd0d27f1f2374001663242a.mockapi.io/SanPham",
  // }).then((res) => {
  //     const proList = res.data;
  //     console.log(proList);
  //     // dùng map và reduce để hiển thị ra màn hình
  //     document.getElementById("tblDanhSachSanPham").innerHTML = proList.map((pro) => {
  //       const stringHtml = `
  //         <tr>
  //           <td>${pro.id}</td>
  //           <td>${pro.tenSP}</td>
  //           <td>${pro.gia}</td>
  //           <td>
  //             <img src="${pro.hinhAnh}" width="50px">
  //           </td>
  //           <td>
  //           <button type="button" class="btn btn-danger" onclick="handleDelete(${pro.id})">Xóa</button>
  //           <button type="button" class="btn btn-success" onclick="handleUpdate(${pro.id})">Sửa</button>
  //           </td>
  //         </tr>
  //       `;
  //       return stringHtml;
  //     }).reduce((contentHtml, stringHtml) => {
  //       contentHtml += stringHtml;
  //       return contentHtml;
  //     }, "");
  // }).catch((error) => {
  //     console.log(error);
  // });



  try {
    const res = await axios({
      method: "get",
      url: "https://5fd0d27f1f2374001663242a.mockapi.io/SanPham",
    });
    proList = res.data;
    // dùng map và reduce để hiển thị ra màn hình
    document.getElementById("tblDanhSachSanPham").innerHTML = proList.map((pro) => {
      const stringHtml = `
      <tr>
        <td>${pro.id}</td>
        <td>${pro.tenSP}</td>
        <td>${pro.gia}</td>
        <td>
          <img src="${pro.hinhAnh}" width="50px">
        </td>
        <td>
        <button type="button" class="btn btn-danger" onclick="handleDelete(${pro.id})">Xóa</button>
        <button type="button" class="btn btn-success" onclick="handleUpdate(${pro.id})">Sửa</button>
        </td>
      </tr>
    `;
      return stringHtml;
    }).reduce((contentHtml, stringHtml) => {
      contentHtml += stringHtml;
      return contentHtml;
    }, "");
  } catch (error) {
    console.log(error);
  }
}; getProductList();

// Thêm sản phẩm
document.getElementById("btnThem").addEventListener("click", async () => {
  // Lấy data người dùng nhập vào
  // const maSp = document.getElementById("maSP").value;
  const tenSP = document.getElementById("tenSP").value;
  const gia = document.getElementById("gia").value;
  const hinhAnh = document.getElementById("hinhAnh").value;
  // Tạo obj sản phẩm
  // const danhSachSanPham = (maSp, tenSp, gia, hinhAnh) => {
  //   return this.arrayDanhSach = [maSp, tenSp, gia, hinhAnh];
  // }; 
  // console.log(danhSachSanPham(maSp, tenSp, gia, hinhAnh));
  const newSP = {
    // Literal obj ES6 tenSP: tenSp;
    tenSP,
    gia,
    hinhAnh,
  };
  // Dùng axios để tương tác với server
  // Thành công => thông báo cho người dùng
  try {
    const res = await axios({
      method: 'post',
      url: "https://5fd0d27f1f2374001663242a.mockapi.io/SanPham",
      data: newSP,
    });
    getProductList();
    alert("Thêm thành công");
  } catch (error) {
    console.log(error);
  }

});

// Xóa sản phẩm
const handleDelete = async (id) => {
  // Gọi axios xóa
  await axios({
    method: 'delete',
    url: `https://5fd0d27f1f2374001663242a.mockapi.io/SanPham/${id}`,
    data: null,
  });
  getProductList();
  alert("Xóa thành công");

};
window.handleDelete = handleDelete;

// Cập nhật
const handleUpdate = (id) => {
  // Hiển thị lên UI để lấy thông tin đúng sản phẩm
  axios({
    method: 'get',
    url: `https://5fd0d27f1f2374001663242a.mockapi.io/SanPham/${id}`,
    data: null,
  }).then((res) => {
    const userEdit = res.data;
    const { id, tenSP, gia, hinhAnh } = userEdit; // destructoring => const id = res.data.id
    document.getElementById("maSP").value = id;
    document.getElementById("tenSP").value = tenSP;
    document.getElementById("gia").value = gia;
    document.getElementById("hinhAnh").value = hinhAnh;
  }).catch();
}

document.getElementById("btnCapNhat").addEventListener("click", () => {
  // Lấy data người dùng nhập vào
  // const maSp = document.getElementById("maSP").value;
  const id = document.getElementById("maSP").value;
  const tenSP = document.getElementById("tenSP").value;
  const gia = document.getElementById("gia").value;
  const hinhAnh = document.getElementById("hinhAnh").value;
  // Tạo obj sản phẩm
  // const danhSachSanPham = (maSp, tenSp, gia, hinhAnh) => {
  //   return this.arrayDanhSach = [maSp, tenSp, gia, hinhAnh];
  // }; 
  // console.log(danhSachSanPham(maSp, tenSp, gia, hinhAnh));
  const newSP = {
    // Literal obj ES6 tenSP: tenSp;
    tenSP,
    gia,
    hinhAnh,
  };

  axios({
    method: 'put',
    url: `https://5fd0d27f1f2374001663242a.mockapi.io/SanPham/${id}`,
    data: newSP,
  }).then((res) => {
    alert("Cap nhat thanh cong");
    getProductList();
  }).catch();
});
getProductList();

const numbers = [12, 3, 4, 67, 8, 89];
console.log("Mang khi chua sap xep tang: ", numbers);

//sap xep tang dan - ESC
const numbersESC = numbers.sort((nextNumber, currentNumber) => {
  return nextNumber - currentNumber;
});

console.log("Mang sau khi sap xep tang: ", numbersESC);

//Giam dan
const numbersDESC = numbers.sort((nextNumber, currentNumber) => {
  return currentNumber - nextNumber;
});
console.log("Mang sau khi sap xep giam dan", numbersDESC);

//Xu ly sap xep
document.getElementById("handleSort").addEventListener("click", () => {
  escOrDesc = !escOrDesc;
  let productListAfterSort = [];
  if (escOrDesc) {
    //tang dan
    document.getElementById("esc").style.visibility = "hidden";
    document.getElementById("desc").style.visibility = "visible";
    productListAfterSort = proList.sort((nextProduct, currentProduct) => nextProduct.gia - currentProduct.gia);
  } else {
    //giam dan
    document.getElementById("esc").style.visibility = "visible";
    document.getElementById("desc").style.visibility = "hidden";
    productListAfterSort = proList.sort((nextProduct, currentProduct) => - nextProduct.gia + currentProduct.gia);
  }
  document.getElementById("tblDanhSachSanPham").innerHTML = productListAfterSort.map((pro) => {
    const stringHtml = `
    <tr>
      <td>${pro.id}</td>
      <td>${pro.tenSP}</td>
      <td>${pro.gia}</td>
      <td>
        <img src="${pro.hinhAnh}" width="50px">
      </td>
      <td>
      <button type="button" class="btn btn-danger" onclick="handleDelete(${pro.id})">Xóa</button>
      <button type="button" class="btn btn-success" onclick="handleUpdate(${pro.id})">Sửa</button>
      </td>
    </tr>
  `;
    return stringHtml;
  }).reduce((contentHtml, stringHtml) => {
    contentHtml += stringHtml;
    return contentHtml;
  }, "");

});

