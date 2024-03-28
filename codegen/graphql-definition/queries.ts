import { gql } from "@apollo/client";


const onlyUser = gql`
query OnlyUser{
  onlyUser{
  	... on Users{
      _id
      username
      email
      role
      avatar{
        url
        fileName
        type
      }
      isLocked
    }
    ... on BacSi{
      _id
      hoten
      ngaysinh
      gioitinh
      diachi
      sodienthoai
      cccd
      ngayBD
      user{
        _id
      username
      email
      role
      avatar{
        url
        fileName
        type
      }
      isLocked
      }
      phongs{
        _id
        tenphong
      }
      chuyenkhoa{
        tenkhoa
      }
    }
    ... on BenhNhan{
      _id
      hoten
      ngaysinh
      gioitinh
      diachi
      sodienthoai
      cccd
      bhyt
      user{
        email
      }
    }
    ... on NhanVien{
      _id
      hoten
      ngaysinh
      gioitinh
      diachi
      sodienthoai
      cccd
      ngayBD
      chucvu
      user{
        _id
      username
      email
      role
      avatar{
        url
        fileName
        type
      }
      isLocked
      }
      phongs{
        _id
        tenphong
      }
    }
  }
}`

const getAllUsers = gql`
query GetAllUser($input: FetchUsersArgs!){
  countUser
  getAllUsers(fetchUsersArgs: $input){
    _id
      username
      email
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

const getAllBacSi = gql`
query GetAllBacSi($input: FetchPagination!){
  CountBacSi
  getAllBacSi(fetchPagination: $input){
     	_id
        hoten	
        ngaysinh
        gioitinh
        diachi
        sodienthoai
        cccd
        ngayBD
    		user{
          _id
          username
          email
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
    sodienthoai
    cccd
    bhyt
  }
}`

const getAllBenhNhanNoPagination = gql`
query GetAllBenhNhanNoPagination{
  getAllBenhNhanNoPagination{
     _id
    hoten
    ngaysinh
    gioitinh
    diachi
    sodienthoai
    cccd
    bhyt
  }
}
`


const getThuocPagination = gql`
query GetThuocPagination($input: FetchPagination!){
  CountThuoc
  getThuocPagination(fetchPagination: $input){
    _id
    tenthuoc
    tenPhoBien
    dangthuoc
    donvi
    giaBHYT
    giaKhongBHYT
    hamluong
    bhyt
    nhasanxuat
    hansudung
    soluong
  }
}
`
const getAllThuoc = gql`
query GetAllThuoc{
  getAllThuoc{
    _id
    tenthuoc
    tenPhoBien
    dangthuoc
    donvi
    giaBHYT
    giaKhongBHYT
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
query GetAllNgayVaPhong($ngaykham: String!, $phongIds: String!, $trangthai: String!){
  getAllByNgayVaPhong(ngaykham: $ngaykham, phongIds: $phongIds, trangthai: $trangthai){
    _id
    benhnhan{
      _id
      hoten
      ngaysinh
      gioitinh
      diachi
      sodienthoai
      cccd
      bhyt
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
query GetAllPhieuCLSbyNgay($ngaytao: DateTime!,$trangthai: Boolean!){
  getAllPhieuCLSbyNgay(ngaytao: $ngaytao, trangthai: $trangthai){
      _id
    benhnhan{
      hoten
      ngaysinh
      gioitinh
      sodienthoai
    }
    bacsi{
      hoten
      ngaysinh
      gioitinh
      sodienthoai
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

const findAllRelatedKetQuaCanLamSang = gql`
query FindAllRelatedKetQuaCanLamSang($input: [String!]!){
  findAllRelatedKetQuaCanLamSang(ketQuaIds: $input){
    _id
    loaicanlamsang{
      tenxetnghiem
    }
    hinhanh{
      url
      fileName
      type
    }
    thietbi
    ketluan
  }
}`


const getAllHoadon = gql`
query GetAllHoaDon{
  getAllHoadon{
    _id
    benhnhan{
      hoten
      ngaysinh
      gioitinh
    }
    trangthai
    ngaytao
    bhyt
    thanhtien
    canlamsangs{
      ten
      gia
      soluong
      thanhtien
    }
    thuocs{
      ten
      gia
      soluong
      thanhtien
    }
    vattuyte{
      ten
      gia
      soluong
      thanhtien
    }
  }
}`

const getAllDatLichbyTrangThai = gql`
  query GetAllDatLichbyTrangThai($input: String!){
    getAllDatLichbyTrangThai(trangthai: $input){
      _id
      benhnhan{
        _id
        hoten
        ngaysinh
      }
      motabenh
      ngaydat
      ngaykham
      trangthai
      bhyt
    }
}`


const getAllPhieuXacNhanDaXetNgiem = gql`
query GetAllPhieuXacNhanDaXetNghiem($ngaykham: String!, $phongIds: String!){
  getAllPhieuXacNhanDaXetNgiem(ngaykham: $ngaykham, phongIds: $phongIds){
    _id
    benhnhan {
      _id
      hoten
      ngaysinh
      gioitinh
      diachi
      sodienthoai
      cccd
      bhyt
      user {
        email
      }
      sinhhieu {
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
    phongs {
      _id
      tenphong
    }
    trangthai
    sothutu
    ngaytao
    ngaykham
    phieuchidinhcanlamsang{
      _id
      bacsi{
        _id
        hoten
      }
      bhyt
      ngaytao
      trangthai
      ketquacanlamsangs{
        loaicanlamsang{
          _id
          tenxetnghiem
        }
        ketluan
        thietbi
        hinhanh{
          url
          fileName
          type
        }
      }
    }
  }
}`


const getAllNhanVien = gql`
query GetAllNhanVien{
  getAllNhanVien{
    _id
    hoten
    ngaysinh
  	gioitinh
    diachi
    sodienthoai
    cccd
    phongs{
      _id
      tenphong
    }
    ngayBD
    chucvu
  }
}`