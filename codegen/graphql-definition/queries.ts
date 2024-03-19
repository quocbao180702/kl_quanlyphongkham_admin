import { gql } from "@apollo/client";

const getAllUsers = gql`
query GetAllUser($input: FetchUsersArgs!){
  countUser
  getAllUsers(fetchUsersArgs: $input){
    _id
      username
      email
      phoneNumber
      password
      role
      isLocked
      avatar{
        fileName
        url
        type
      }
      refreshToken
  }
}
`

const logout = gql`
query Logout {
  logout
}
`


const getAllBacSi = gql`
query GetAllBacSi($input: FetchPagination!){
  CountBacSi
  getAllBacSi(fetchPagination: $input){
     	_id
        hoten	
        ngaysinh
        gioitinh
        diachi
        cccd
        ngayBD
    		user{
          _id
          username
          email
          phoneNumber
        }
    		phongs{
          _id
          tenphong
        }
    		chuyenkhoa{
          _id
          tenkhoa
        }
    }
}
`


const getAllBenhNhan = gql`
query getAllBenhNhan($input: FetchPagination!){
  CountBenhNhan
  getAllBenhNhan(fetchPagination: $input){
     _id
    hoten
    ngaysinh
    gioitinh
    diachi
    cccd
    bhyt
    user{
      _id
      phoneNumber
      email
    }
  }
}`


const getThuocPagination = gql`
query GetThuocPagination($input: FetchPagination!){
  CountThuoc
  getThuocPagination(fetchPagination: $input){
    _id
    tenthuoc
    tenPhoBien
    dangthuoc
    donvi
    gia
    hamluong
    bhyt
    nhasanxuat
    hansudung
    soluong
  }
}
`
const getAllThuoc= gql`
query GetAllThuoc{
  getAllThuoc{
    _id
    tenthuoc
    tenPhoBien
    dangthuoc
    donvi
    gia
    hamluong
    bhyt
    nhasanxuat
    hansudung
    soluong
  }
}`

const getAllSinhHieuByBenhNhan = gql`
query GetAllSinhHieuByBenhNhan($id: String!){
  getAllSinhHieuByBenhNhan(benhnhanId: $id){
     _id
    mach
    nhietdo
    ha
    chieucao
    cannang
    bmi
    benhmangtinh
  }
}`

const getAllBenh = gql`
query GetAllBenh{
  getAllBenh{
    tenbenh
    motabenh
    _id
    maICD
    chuongbenh
  }
}`


const getAllNgayVaPhong = gql`
query GetAllNgayVaPhong($ngaykham: DateTime!, $phongIds: String!){
  getAllByNgayVaPhong(ngaykham: $ngaykham, phongIds: $phongIds){
    _id
    benhnhan{
      _id
      hoten
      ngaysinh
      gioitinh
      diachi
      cccd
      bhyt
      user{
        phoneNumber
        email
      }
      sinhhieu{
        _id
        mach
        nhietdo
        ha
        chieucao
        cannang
        bmi
        benhmangtinh
      }
    }
    phongs{
      _id
      tenphong
    }
    trangthai
    sothutu
    ngaytao
    ngaykham
  }
}
`

const getAllLoaiCLS = gql`
query GetAllLoaiCLS{
  getAllLoaiCLS{
    _id
    tenxetnghiem
    gia
    mota
  }
}`

const getAllPhieuCLSbyNgay = gql`
query GetAllPhieuCLSbyNgay($ngaytao: DateTime!){
  getAllPhieuCLSbyNgay(ngaytao: $ngaytao){
      _id
    benhnhan{
      hoten
      ngaysinh
      gioitinh
      user{
        phoneNumber
      }
    }
    bacsi{
      hoten
      ngaysinh
      gioitinh
      user{
        phoneNumber
      }
    }
    bhyt
    ketquacanlamsangs{
      _id
      loaicanlamsang{
        tenxetnghiem
        gia
      }
      hinhanh{
        fileName
        url
        type
      }
      ketluan
      thietbi
    }
  }
}`

const getAllPhong = gql`
query GetAllPhong{
  getAllPhong{
    _id
    tenphong
    mota
    chuyenkhoa{
      tenkhoa
    }
  }
}`

const getAllChuyenKhoa = gql`
query GetAllChuyenKhoa{
  getAllChuyenKhoa{
    _id
    tenkhoa
    mota
  }
}`