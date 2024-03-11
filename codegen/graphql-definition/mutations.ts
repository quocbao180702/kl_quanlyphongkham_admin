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

const createBacSi = gql`
mutation CreateBacSi($input: NewBacSiInput!) {
  createBacSi(newBacSiInput: $input) {
      _id
      hoten
      ngaysinh
      gioitinh
      diachi
      cccd
      ngayBD
      user{
        username
        email
        phoneNumber
      }
      phongs{
        tenphong
      }
      chuyenkhoa{
        tenkhoa
      }
  }
}

`

const createThuoc = gql`
mutation CreateThuoc($input: NewThuocInput!){
  createThuoc(newThuocInput: $input){
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