import { gql } from "@apollo/client";

const login = gql`
mutation login($input: LoginUserInput!){
  login(loginUserInput: $input){
    access_token
  }
}
`

const logout = gql`
mutation Logout{
  logout
}
`

const createUser = gql`
mutation CreateUser($input: NewUserInput!){
  createUser(newUserInput: $input){
    _id
  }
}`

const deleteUser = gql`
mutation deleteUser($id: String!){
  deleteUser(_id: $id)
}`


const updateUser = gql`
mutation updateUser($update: UpdateUserInput!) {
  updateUser(input: $update) {
    _id
    username
    email
   	password
    role
    isLocked
    avatar{
      url
      fileName
      type
    }
  }
}
`

const xulyKhoa = gql`
mutation XulyKhoa($id: String!){
  xulyKhoa(id: $id){
    isLocked
  }
}`


const createToaThuoc = gql`
mutation CreateToaThuoc($input: CreateToathuocInput!){
	createToathuoc(createToathuocInput: $input){
    _id
    benhnhan{
      hoten
    }
    bacsi{
      hoten
    }
    thuocs{
      tenthuoc
      tenPhoBien
      hamluong
			dangthuoc
      donvi
    }
    soluongs
    benhs{
      tenbenh
    }
    bhyt
    ngaytaikham
    ngaytao
  }
}`


const updateSinhhieu = gql`
mutation UpdateSinhhieu($input: UpdateSinhhieuInput!){
	updateSinhhieu(updateSinhhieuInput: $input){
    _id
    mach
    nhietdo
    ha
    chieucao
    cannang
    bmi
    benhmangtinh
  }
} `

const createPhieuchidinhcanlamsang = gql`
mutation CreatePhieuchidinhcanlamsang(
  $phieuchidinh: CreatePhieuchidinhcanlamsangInput!, 
  $ketqua: [CreateKetquacanlamsangInput!]!
) {
  createPhieuchidinhcanlamsang(
    createPhieuchidinhcanlamsangInput: $phieuchidinh, 
    createKetQuaCLSList: $ketqua
  ) {
    _id
    ketquacanlamsangs{
      loaicanlamsang{
        tenxetnghiem
        gia
        loaicanlamsang
      }
    }
  }
}
`

const updateKetquacanlamsang = gql`
mutation UpdateKetquacanlamsang($input: UpdateKetquacanlamsangInput!){
  updateKetquacanlamsang(updateKetquacanlamsangInput: $input){
    _id
    ketluan
    thietbi
  }
}`

const createBacSi = gql`
mutation CreateBacSi($newBacSiInput: NewBacSiInput!,$createLichkham: CreateLichkhamInput!){
  createBacSi(newBacSiInput: $newBacSiInput, createLichkham: $createLichkham){
    _id
  }
}
`

const updateBacSi = gql`
mutation UpdateBacSi($input: UpdateBacSiInput!){
  updateBacSi(input: $input){
    _id
  }
}`

const deleteBacSi = gql`
mutation DeleteBacSi($id: String!){
  deleteBacSi(_id: $id)
}`

const createBenhNhan = gql`
mutation CreateBenhNhan($input: NewBenhNhanInput!){
  createBenhNhan(newBenhNhanInput: $input){
    _id
  }
}`

const updateBenhNhan = gql`
mutation UpdateBenhNhan($input: UpdateBenhNhanInput!){
  updateBenhNhan(input: $input){
    _id
  }
}`

const deleteBenhNhan = gql`
mutation DeleteBenhNhan($id: String!){
  deleteBenhNhan(_id: $id)
}`

const createThuoc = gql`
mutation CreateThuoc($input: NewThuocInput!){
  createThuoc(newThuocInput: $input){
    _id
  }
}
`

const updateThuoc = gql`
mutation UpdateThuoc($input: UpdateThuocInput!){
  updateThuoc(input: $input){
    _id
  }
}`

const deleteThuoc = gql`
mutation DeleteThuoc($id: String!){
  deleteThuoc(_id: $id)
}`


const createHoadon = gql`
mutation CreateHoaDon($input:  CreateHoadonInput!){
  createHoadon(createHoadonInput: $input){
    _id
  }
}
`
const updateHoadon = gql`
mutation UpdateHoaDon($input: UpdateHoadonInput!){
  updateHoadon(updateHoadonInput: $input){
    _id
    thanhtien
  }
}
`

const updateTrangThaiHoaDon = gql`
mutation UpdateTrangThaiHoaDon($id: String!){
  updateTrangThaiHoaDon(id:$id){
    _id
    trangthai
  }
}
`

const updateTrangThaiCanLamSang = gql`
mutation UpdateTrangThaiCanLamSang($id: String!, $trangthai: String!){
  updateTrangThaiCanLamSang(id: $id, trangthai: $trangthai){
    _id
    trangthai
  }
}`

const deleteHoadon = gql`
mutation DeleteHoaDon($id: String!){
  deleteHoadon(id: $id)
}`

const createPhieuXacNhan = gql`
mutation CreatePhieuXacNhan($input: CreatePhieuXacNhanInput!){
  createPhieuXacNhan(newPhieuXacNhanInput: $input){
    _id
  }
}`


const updateTrangThaiKham = gql`
mutation  UpdateTrangThaiKham($id: String!, $trangthai: String!){
  updateTrangThaiKham(id: $id, trangthai: $trangthai){
    _id
    trangthai
  }
}`

const updateTrangThaiDatLich = gql`
mutation UpdateTrangThaiDatLich($id: String!, $trangthai: String!){
  updateTrangThaiDatLich(id: $id, trangthai: $trangthai){
    _id
    trangthai
  }
}`

const deleteDatLich = gql`
mutation DeleteDatlich($id: String!){
  deleteDatLich(_id:$id)
}`

const createNhanVien = gql`
mutation CreateNhanVien($input: NewNhanVienInput!){
  createNhanVien(newNhanVienInput: $input){
    _id
  }
}`

const updateNhanVien = gql`
mutation UpdateNhanVien($input: UpdateNhanVienInput!){
  updateNhanVien(input: $input){
    _id
  }
}`

const deleteNhanVien = gql`
mutation DeleteNhanVien($id: String!){
  deleteNhanVien(_id: $id)
}`


const createSinhhieu = gql`
mutation CreateSinhHieu($input: CreateSinhhieuInput!){
  createSinhhieu(createSinhhieuInput: $input){
    _id
  }
}`

const createHoadonchidinhcanlamsang = gql`
mutation CreateHoadonchidinhcanlamsang($input: CreateHoadonchidinhcanlamsangInput!){
  createHoadonchidinhcanlamsang(createHoadonchidinhcanlamsang: $input){
    _id
  }
}`

const createBlog = gql`
mutation CreateBlog($input: CreateBlogInput!){
  createBlog(createBlogInput: $input){
    _id
  }
}`

const updateBlog = gql`
mutation UpdateBlog($input: UpdateBlogInput!){
  updateBlog(updateBlogInput:$input){
  	_id
  }
}`

const deleteBlog = gql`
mutation DeleteBlog($id: String!){
  deleteBlog(id: $id)
}`

const updateKichHoat = gql`
mutation UpdateKichHoat($id: String!){
  updateKichHoat(_id: $id)
}`

const updateTinhTrangHoaDonCLS = gql`
mutation UpdateTinhTrangHoaDonCLS($id: String!){
  updateTinhTrangHoaDonCLS(id: $id){
    _id
  }
}`

const updateTrangThaiDatLichBacSi = gql`
mutation UpdateTrangThaiDatLichBacSi($id:String!, $trangthai:String!){
  updateTrangThaiDatLichBacSi(id: $id, trangthai: $trangthai){
    _id
  }
}`

const createTest = gql`
mutation CreateTest($input: CreateTestInput!){
  createTest(createTestInput: $input){
    _id
  }
}`


const createBenh = gql`
mutation CreateBenh($input: NewBenhInput!) {
  createBenh(newBenhInput: $input){
    _id
  }
}`

const updateUuTien = gql`
mutation UpdateUutien($id: String!){
  updateUuTien(id: $id){
  	_id
    truoc
  }
}`