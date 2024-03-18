import { gql } from "@apollo/client";

const login = gql`
mutation login($input: LoginUserInput!){
  login(loginUserInput: $input){
    access_token
    user{
      _id
      username
      phoneNumber
      email
      role
      avatar{
        url
        fileName
        type
      }
      isLocked
    }
  }
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
    phoneNumber
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
mutation CreateBacSi($input: NewBacSiInput!) {
  createBacSi(newBacSiInput: $input) {
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

const updateThuoc =gql`
mutation UpdateThuoc($input: UpdateThuocInput!){
  updateThuoc(input: $input){
    _id
  }
}`

const deleteThuoc = gql`
mutation DeleteThuoc($id: String!){
  deleteThuoc(_id: $id)
}`