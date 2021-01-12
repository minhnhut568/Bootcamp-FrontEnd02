/**
 * axios return promise :
 *    1/ pending : chờ
 *    2/ resolve : thành công
 *    3/ reject : thất bại
 */

const renderHtml = () => {
  const contentHtml = `<div class="card text-white bg-dark">
  <div class="card-body">
    <h4 class="card-title">Danh sách sản phẩm</h4>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <input
            id="maSP"
            class="form-control"
            placeholder="Mã SP"
            disabled
          />
        </div>
        <div class="col-md-3">
          <input id="tenSP" class="form-control" placeholder="Tên SP" />
        </div>
        <div class="col-md-3">
          <input id="gia" class="form-control" placeholder="Giá" />
        </div>
        <div class="col-md-3">
          <input
            id="hinhAnh"
            class="form-control"
            placeholder="Link hình"
          />
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
        <th>Giá</th>
        <th>Hình ảnh</th>
        <th></th>
      </tr>
    </thead>
    <tbody id="tblDanhSachSanPham"></tbody>
  </table>
    </div>`;
  document.getElementById("root").innerHTML = contentHtml;
};
renderHtml();

// lấy data từ server về
const getProductList = async () => {
  // c1
  // axios({
  //   method: "GET",
  //   url: "https://5fb26e6787ed490016ea8e2b.mockapi.io/sanPham",
  // })
  //   .then((res) => {
  //     const proList = res.data;
  //     console.log("proList : ", proList);
  //     // dùng map và reduce để hiển thị ra màn hình
  //     document.getElementById("tblDanhSachSanPham").innerHTML = proList
  //       .map((pro, index) => {
  //         const stringHtml = `
  //         <tr>
  //           <td>
  //             ${pro.id}
  //           </td>
  //           <td>
  //             ${pro.tenSP}
  //           </td>
  //           <td>
  //             ${pro.gia}
  //           </td>
  //           <td>
  //             <img width="50px" src='${pro.hinhAnh}'/>
  //           </td>
  //           <td>
  //             <button class="btn btn-danger" onclick="handleDelete(${pro.id})">
  //               Xóa
  //             </button>
  //             <button class="btn btn-info" onclick="handleEdit(${pro.id})">
  //               Sửa
  //             </button>
  //           </td>
  //         </tr>
  //       `;
  //         return stringHtml;
  //       })
  //       .reduce((contentHtml, stringHtml) => {
  //         contentHtml += stringHtml;
  //         return contentHtml;
  //       }, "");
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // c2
  try {
    const res = await axios({
      method: "GET",
      url: "https://5fb26e6787ed490016ea8e2b.mockapi.io/sanPham",
    });
    console.log(res);
    const proList = res.data;
    // dùng map và reduce để hiển thị ra màn hình
    document.getElementById("tblDanhSachSanPham").innerHTML = proList
      .map((pro, index) => {
        const stringHtml = `
          <tr>
            <td>
              ${pro.id}
            </td>
            <td>
              ${pro.tenSP}
            </td>
            <td>
              ${pro.gia}
            </td>
            <td>
              <img width="50px" src='${pro.hinhAnh}'/>
            </td>
            <td>
              <button class="btn btn-danger" onclick="handleDelete(${pro.id})">
                Xóa
              </button>
              <button class="btn btn-info" onclick="handleEdit(${pro.id})">
                Sửa
              </button>
            </td>
          </tr>
        `;
        return stringHtml;
      })
      .reduce((contentHtml, stringHtml) => {
        contentHtml += stringHtml;
        return contentHtml;
      }, "");
  } catch (error) {
    console.log(error);
  }
};

getProductList();

// thêm sảm phẩm
document.getElementById("btnThem").addEventListener("click", () => {
  // lấy data người dùng nhập vào
  const tenSP = document.getElementById("tenSP").value;
  const gia = document.getElementById("gia").value;
  const hinhAnh = document.getElementById("hinhAnh").value;
  // tạo object sản phẩm
  const newSP = {
    // tenSP: tenSP, // es6
    tenSP,
    gia,
    hinhAnh,
  };
  // dùng axios để tương tác với server - thành công thì thông báo cho người dùng
  axios({
    method: "POST",
    url: "https://5fb26e6787ed490016ea8e2b.mockapi.io/sanPham",
    data: newSP,
  })
    .then((res) => {
      console.log(res);
      alert("Thêm Thành Công");
      // lấy data và hiển thị ra màn hình
      getProductList();
    })
    .catch((err) => {
      console.log(err);
    });
});

// xóa sản phẩm
const handleDelete = (id) => {
  // gọi axios để xóa
  axios({
    method: "DELETE",
    url: `https://5fb26e6787ed490016ea8e2b.mockapi.io/sanPham/${id}`,
    data: null,
  })
    .then((res) => {
      console.log(res);
      alert("Xóa Thành Thành Công");
      getProductList();
    })
    .catch((err) => {
      console.log(err);
    });
};
window.handleDelete = handleDelete;

// sửa sản phẩm
const handleEdit = (id) => {
  // gọi axios
  axios({
    method: "GET",
    url: `https://5fb26e6787ed490016ea8e2b.mockapi.io/sanPham/${id}`,
    data: null,
  })
    .then((res) => {
      console.log(res);
      const userEdit = res.data;
      // const id = userEdit.id;
      const { id, tenSP, gia, hinhAnh } = userEdit; // destructuring - es6
      // hien thi len form
      document.getElementById("maSP").value = id;
      document.getElementById("tenSP").value = tenSP;
      document.getElementById("gia").value = gia;
      document.getElementById("hinhAnh").value = hinhAnh;
    })
    .catch((err) => {
      console.log(err);
    });
};
window.handleEdit = handleEdit;

// xử lý cập nhật
document.getElementById("btnCapNhat").addEventListener("click", () => {
  // lấy data người dùng nhập vào
  const id = document.getElementById("maSP").value;
  const tenSP = document.getElementById("tenSP").value;
  const gia = document.getElementById("gia").value;
  const hinhAnh = document.getElementById("hinhAnh").value;
  // tạo object sản phẩm
  const newSP = {
    // tenSP: tenSP, // es6
    tenSP,
    gia,
    hinhAnh,
  };
  // call api
  axios({
    method: "PUT",
    url: `https://5fb26e6787ed490016ea8e2b.mockapi.io/sanPham/${id}`,
    data: newSP,
  })
    .then((res) => {
      console.log(res);
      alert("Cập Nhật Thành Công");
      // lấy data và hiển thị ra màn hình
      getProductList();
    })
    .catch((err) => {
      console.log(err);
    });
});
