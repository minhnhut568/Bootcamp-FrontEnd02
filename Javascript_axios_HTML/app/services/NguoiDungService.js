//chua cac phuong thuc giao tiep online
function NguoiDungService() {
    //lay danh sach nguoi dung
    this.layDS = function () {
        var promise = axios({
            method: 'get',
            url: 'https://5fd20855b485ea0016eef3ac.mockapi.io/NguoiDung'
        });
        return promise;
    }
    this.themND = function(nd){
        var promise = axios({
            method: 'post',
            url: 'https://5fd20855b485ea0016eef3ac.mockapi.io/NguoiDung',
            data: nd
        });
        return promise;
    }
    this.xoaND = function(id){
        var promise = axios({
            method: 'delete',
            url: `https://5fd20855b485ea0016eef3ac.mockapi.io/NguoiDung/${id}`
            
        });
        return promise;
    }
    this.layChiTiet = function(id){
        var promise = axios({
            method: 'get',
            url: `https://5fd20855b485ea0016eef3ac.mockapi.io/NguoiDung/${id}`
            
        });
        return promise;
    }
    this.capNhatND = function(nd,id){
        var promise = axios({
            method: 'put',
            url: `https://5fd20855b485ea0016eef3ac.mockapi.io/NguoiDung/${id}`,
            data: nd
        });
        return promise;
    }
}