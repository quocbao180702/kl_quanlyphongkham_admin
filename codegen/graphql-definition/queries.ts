import { gql } from "@apollo/client";

const getAllUsers = gql`
query getAllUsers{
    getAllUsers{
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
query getAllBacSi{
  getAllBacSi{
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
}`


const getAllBenhNhan = gql`
query getAllBenhNhan{
  getAllBenhNhan{
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


const getAllThuoc = gql`
query getAllThuoc{
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
}
`

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