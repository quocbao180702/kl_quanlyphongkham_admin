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

const CountBacSi = gql`
query CountBacSi{
  CountBacSi
}`


const CountNhanVien = gql`
query CountNhanVien{
  CountNhanVien
}`

const CountPhont = gql`
query CountPhong{
  CountPhong
}`

const CountChuyenKhoa = gql`
query CountChuyenKhoa{
  CountChuyenKhoa
}`

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
    loaicanlamsang
    mota
  }
}`

const getAllPhieuCLSbyNgay = gql`
query GetAllPhieuCLSbyNgay($ngaytao: DateTime!,$trangthai: String!){
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
        loaicanlamsang
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
      loaicanlamsang
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
      sodienthoai
    }
    trangthai
    ngaytao
    bhyt
    thanhtien
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
        sodienthoai
        diachi
      }
      motabenh
      ngaydat
      ngaykham
      trangthai
      email
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
          loaicanlamsang
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

const getAllHoaDonPhieuCanLamSang = gql`
query GetAllHoaDonPhieuCanLamSang{
  getAllHoaDonPhieuCanLamSang{
    _id
    bhyt
    benhnhan{
      hoten
      ngaysinh
      gioitinh
      sodienthoai
    }
    chitietcanlamsang{
      ten
      gia
      soluong
      thanhtien
    }
    thanhtien
    tinhtrang
    ngaytao
    idPhieuCLS
  }
}`


const getAllVatTuYTe = gql`
query GetAllVattuyte{
  getAllVatTuYTe{
    tenvattu
    _id
    tenvattu
    chiphi{
      bhyt
      gia
    }
    soluong
    dvt
  }
}`

const getAllBlog = gql`
query  GetAllBlogs($input: FetchPagination!){
  countBlogs
  getAllBlog(fetchPagination: $input){
    _id
    user{
      username
    }
    hinhanh{
      url
      fileName
      type
    }
    tieude
    tomtat
    noidung
    luotxem
    kichhoat
    ngaytao
  }
}`


const getBlogbyId = gql`
query GetBlogbyId($id: String!){
  getBlogbyId(id: $id){
  	_id
    user{
      username
    }
    tieude
    tomtat
    noidung
    hinhanh{
      fileName
      url
      type
    }
    luotxem
    ngaytao
    kichhoat
  }
}`


const countPhieuXacNhanByDate = gql`
query CountPhieuXacNhanByDate($start: DateTime!, $end: DateTime!){
  countPhieuXacNhanByDate(start: $start, end: $end)
}`


const getTotalThanhTienByDate = gql`
query GetTotalThanhTienByDate($start: DateTime!, $end: DateTime!){
  getTotalThanhTienByDate(start: $start, end: $end)
}`

const getTotalThanhTienCLSByDate = gql`
query getTotalThanhTienCLSByDate($start: DateTime!, $end: DateTime!){
  getTotalThanhTienCLSByDate(start: $start, end: $end)
}`

const getStartAndEndOfMonth = gql`
query getStartAndEndOfMonth($year: Float!){
  getStartAndEndOfMonth(year: $year){
    month
    count
  }
}`

const getTongTienbyMonth = gql`
query GetTongTienbyMonth($year: Float!){
  getTongTienbyMonth(year: $year){
    month
    tongtien
  }
}
`

const getTongTienbyMonthCLS = gql`
query GetTongTienbyMonthCLS($year: Float!){
  getTongTienbyMonthCLS(year: $year){
    month
    tongtien
  }
}`