import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type BacSi = {
  __typename?: 'BacSi';
  _id: Scalars['ID']['output'];
  cccd: Scalars['String']['output'];
  chuyenkhoa: ChuyenKhoa;
  diachi: Scalars['String']['output'];
  gioitinh: Scalars['Boolean']['output'];
  hoten: Scalars['String']['output'];
  ngayBD: Scalars['DateTime']['output'];
  ngaysinh: Scalars['DateTime']['output'];
  phongs: Array<Phong>;
  user: Users;
};

export type Benh = {
  __typename?: 'Benh';
  _id: Scalars['ID']['output'];
  chuongbenh: Scalars['String']['output'];
  maICD: Scalars['String']['output'];
  motabenh: Scalars['String']['output'];
  tenbenh: Scalars['String']['output'];
};

export type BenhNhan = {
  __typename?: 'BenhNhan';
  _id: Scalars['ID']['output'];
  bhyt: Scalars['String']['output'];
  cccd: Scalars['String']['output'];
  diachi: Scalars['String']['output'];
  gioitinh: Scalars['Boolean']['output'];
  hoten: Scalars['String']['output'];
  ngaysinh: Scalars['String']['output'];
  sinhhieu: Sinhhieu;
  user: Users;
};

export type ChuyenKhoa = {
  __typename?: 'ChuyenKhoa';
  _id: Scalars['ID']['output'];
  mota: Scalars['String']['output'];
  tenkhoa: Scalars['String']['output'];
};

export type CreateDichvuInput = {
  bhyt: Scalars['Boolean']['input'];
  dvt: Scalars['String']['input'];
  gia: Scalars['Float']['input'];
  soluong: Scalars['Int']['input'];
  tendichvu: Scalars['String']['input'];
};

export type CreateHoadonInput = {
  benhnhan: Scalars['String']['input'];
  canlamsangs: Array<Scalars['String']['input']>;
  dichvus: Array<Scalars['String']['input']>;
  ngaytao: Scalars['DateTime']['input'];
  thanhtien: Scalars['Float']['input'];
  thuocs: Array<Scalars['String']['input']>;
};

export type CreatePhieuXacNhanInput = {
  benhnhan: Scalars['String']['input'];
  ngaykham: Scalars['DateTime']['input'];
  ngaytao: Scalars['DateTime']['input'];
  phongs: Array<Scalars['String']['input']>;
  sothutu: Scalars['Int']['input'];
  trangthai: Scalars['Boolean']['input'];
};

export type CreatePhieuchidinhcanlamsangInput = {
  bacsi: Scalars['String']['input'];
  benhnhan: Scalars['String']['input'];
  bhyt: Scalars['Boolean']['input'];
  hinhanh: Scalars['String']['input'];
  ketluan: Scalars['String']['input'];
  loaicanlamsang: Scalars['String']['input'];
  thietbi: Scalars['String']['input'];
};

export type CreateSinhhieuInput = {
  benhmangtinh: Scalars['Boolean']['input'];
  benhnhan: Scalars['String']['input'];
  bmi: Scalars['Float']['input'];
  cannang: Scalars['Float']['input'];
  chieucao: Scalars['Float']['input'];
  ha: Scalars['String']['input'];
  mach: Scalars['Float']['input'];
  nhietdo: Scalars['Float']['input'];
};

export type CreateSobenhInput = {
  benhnhan: Scalars['String']['input'];
  ngaytao: Scalars['DateTime']['input'];
};

export type CreateToathuocInput = {
  bacsi: Scalars['String']['input'];
  benhnhan: Scalars['String']['input'];
  benhs: Array<Scalars['String']['input']>;
  bhyt: Scalars['Boolean']['input'];
  ngaytaikham: Scalars['DateTime']['input'];
  ngaytao: Scalars['DateTime']['input'];
  soluongs: Array<Scalars['Int']['input']>;
  thuocs: Array<Scalars['String']['input']>;
};

export type DatLich = {
  __typename?: 'DatLich';
  _id: Scalars['ID']['output'];
  benhnhans: BenhNhan;
  bhyt: Scalars['Boolean']['output'];
  motabenh: Scalars['String']['output'];
  ngaydat: Scalars['DateTime']['output'];
  ngaykham: Scalars['DateTime']['output'];
};

export type Dichvu = {
  __typename?: 'Dichvu';
  _id: Scalars['ID']['output'];
  bhyt: Scalars['Boolean']['output'];
  dvt: Scalars['String']['output'];
  gia: Scalars['Float']['output'];
  hoadons: Array<Hoadon>;
  soluong: Scalars['Int']['output'];
  tendichvu: Scalars['String']['output'];
};

export type Hoadon = {
  __typename?: 'Hoadon';
  _id: Scalars['ID']['output'];
  benhnhan: BenhNhan;
  canlamsangs: Array<LoaiCanLamSang>;
  dichvus: Array<Dichvu>;
  ngaytao: Scalars['DateTime']['output'];
  thanhtien: Scalars['Float']['output'];
  thuocs: Array<Thuoc>;
};

export type LinkImage = {
  __typename?: 'LinkImage';
  fileName: Scalars['String']['output'];
  type: TypeImage;
  url: Scalars['String']['output'];
};

export type LinkImageInput = {
  fileName: Scalars['String']['input'];
  type: TypeImage;
  url: Scalars['String']['input'];
};

export type LoaiCanLamSang = {
  __typename?: 'LoaiCanLamSang';
  _id: Scalars['ID']['output'];
  gia: Scalars['Float']['output'];
  hoadons: Array<Hoadon>;
  mota: Scalars['String']['output'];
  tenxetnghiem: Scalars['String']['output'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  access_token: Scalars['String']['output'];
  refresh_token: Scalars['String']['output'];
  user: Users;
};

export type LoginUserInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBacSi: BacSi;
  createBenh: Benh;
  createBenhNhan: BenhNhan;
  createChuyenKhoa: ChuyenKhoa;
  createDatLich: DatLich;
  createDichvu: Dichvu;
  createHoadon: Hoadon;
  createLoaicanlamsang: LoaiCanLamSang;
  createNhanVien: NhanVien;
  createPhieuXacNhan: PhieuXacNhan;
  createPhieuchidinhcanlamsang: Phieuchidinhcanlamsang;
  createPhong: Phong;
  createSinhhieu: Sinhhieu;
  createSobenh: Sobenh;
  createThuoc: Thuoc;
  createToathuoc: Toathuoc;
  createUser: Users;
  deleteBacSi: Scalars['Boolean']['output'];
  deleteBenh: Scalars['Boolean']['output'];
  deleteBenhNhan: Scalars['Boolean']['output'];
  deleteChuyenKhoa: Scalars['Boolean']['output'];
  deleteDatLich: Scalars['Boolean']['output'];
  deleteDichvu: Dichvu;
  deleteHoadon: Hoadon;
  deleteLoaicanlamsang: Scalars['Boolean']['output'];
  deleteNhanVien: Scalars['Boolean']['output'];
  deletePhieuXacNhan: Scalars['Boolean']['output'];
  deletePhieuchidinhcanlamsang: Phieuchidinhcanlamsang;
  deletePhong: Scalars['Boolean']['output'];
  deleteSinhhieu: Sinhhieu;
  deleteSobenh: Sobenh;
  deleteThuoc: Scalars['Boolean']['output'];
  deleteToathuoc: Toathuoc;
  deleteUser: Scalars['Boolean']['output'];
  login: LoginResponse;
  updateBacSi: BacSi;
  updateBenh: Benh;
  updateBenhNhan: BenhNhan;
  updateChuyenKhoa: ChuyenKhoa;
  updateDatLich: DatLich;
  updateDichvu: Dichvu;
  updateHoadon: Hoadon;
  updateLoaicanlamsang: LoaiCanLamSang;
  updateNhanVien: NhanVien;
  updatePhieuXacNhan: PhieuXacNhan;
  updatePhieuchidinhcanlamsang: Phieuchidinhcanlamsang;
  updatePhong: Phong;
  updateSinhhieu: Sinhhieu;
  updateSobenh: Sobenh;
  updateSoluongThuoc: Thuoc;
  updateThuoc: Thuoc;
  updateToathuoc: Toathuoc;
  updateUser: Users;
  xulyKhoa: Users;
};


export type MutationCreateBacSiArgs = {
  newBacSiInput: NewBacSiInput;
};


export type MutationCreateBenhArgs = {
  newBenhInput: NewBenhInput;
};


export type MutationCreateBenhNhanArgs = {
  newBenhNhanInput: NewBenhNhanInput;
};


export type MutationCreateChuyenKhoaArgs = {
  newChuyenKhoaInput: NewChuyenKhoaInput;
};


export type MutationCreateDatLichArgs = {
  newDatLichInput: NewDatLichInput;
};


export type MutationCreateDichvuArgs = {
  createDichvuInput: CreateDichvuInput;
};


export type MutationCreateHoadonArgs = {
  createHoadonInput: CreateHoadonInput;
};


export type MutationCreateLoaicanlamsangArgs = {
  createLoaicanlamsangInput: NewLoaiCanLamSangInput;
};


export type MutationCreateNhanVienArgs = {
  newNhanVienInput: NewNhanVienInput;
};


export type MutationCreatePhieuXacNhanArgs = {
  newPhieuXacNhanInput: CreatePhieuXacNhanInput;
};


export type MutationCreatePhieuchidinhcanlamsangArgs = {
  createPhieuchidinhcanlamsangInput: CreatePhieuchidinhcanlamsangInput;
};


export type MutationCreatePhongArgs = {
  newPhongInput: NewPhongInput;
};


export type MutationCreateSinhhieuArgs = {
  createSinhhieuInput: CreateSinhhieuInput;
};


export type MutationCreateSobenhArgs = {
  createSobenhInput: CreateSobenhInput;
};


export type MutationCreateThuocArgs = {
  newThuocInput: NewThuocInput;
};


export type MutationCreateToathuocArgs = {
  createToathuocInput: CreateToathuocInput;
};


export type MutationCreateUserArgs = {
  newUserInput: NewUserInput;
};


export type MutationDeleteBacSiArgs = {
  _id: Scalars['String']['input'];
};


export type MutationDeleteBenhArgs = {
  _id: Scalars['String']['input'];
};


export type MutationDeleteBenhNhanArgs = {
  _id: Scalars['String']['input'];
};


export type MutationDeleteChuyenKhoaArgs = {
  _id: Scalars['String']['input'];
};


export type MutationDeleteDatLichArgs = {
  _id: Scalars['String']['input'];
};


export type MutationDeleteDichvuArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteHoadonArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteLoaicanlamsangArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteNhanVienArgs = {
  _id: Scalars['String']['input'];
};


export type MutationDeletePhieuXacNhanArgs = {
  _id: Scalars['String']['input'];
};


export type MutationDeletePhieuchidinhcanlamsangArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeletePhongArgs = {
  _id: Scalars['String']['input'];
};


export type MutationDeleteSinhhieuArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteSobenhArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteThuocArgs = {
  _id: Scalars['String']['input'];
};


export type MutationDeleteToathuocArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  _id: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationUpdateBacSiArgs = {
  _id: Scalars['String']['input'];
  input: UpdateBacSiInput;
};


export type MutationUpdateBenhArgs = {
  input: UpdateBenhInput;
};


export type MutationUpdateBenhNhanArgs = {
  input: UpdateBenhNhanInput;
};


export type MutationUpdateChuyenKhoaArgs = {
  updateChuyenKhoaInput: UpdateChuyenKhoaInput;
};


export type MutationUpdateDatLichArgs = {
  input: UpdateDatLichInput;
};


export type MutationUpdateDichvuArgs = {
  updateDichvuInput: UpdateDichvuInput;
};


export type MutationUpdateHoadonArgs = {
  updateHoadonInput: UpdateHoadonInput;
};


export type MutationUpdateLoaicanlamsangArgs = {
  updateLoaicanlamsangInput: UpdateLoaicanlamsangInput;
};


export type MutationUpdateNhanVienArgs = {
  _id: Scalars['String']['input'];
  input: UpdateNhanVienInput;
};


export type MutationUpdatePhieuXacNhanArgs = {
  input: UpdatePhieuXacNhanInput;
};


export type MutationUpdatePhieuchidinhcanlamsangArgs = {
  updatePhieuchidinhcanlamsangInput: UpdatePhieuchidinhcanlamsangInput;
};


export type MutationUpdatePhongArgs = {
  input: UpdatePhongInput;
};


export type MutationUpdateSinhhieuArgs = {
  updateSinhhieuInput: UpdateSinhhieuInput;
};


export type MutationUpdateSobenhArgs = {
  updateSobenhInput: UpdateSobenhInput;
};


export type MutationUpdateSoluongThuocArgs = {
  id: Scalars['String']['input'];
  soluongdung: Scalars['Float']['input'];
};


export type MutationUpdateThuocArgs = {
  input: UpdateThuocInput;
};


export type MutationUpdateToathuocArgs = {
  updateToathuocInput: UpdateToathuocInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationXulyKhoaArgs = {
  id: Scalars['String']['input'];
};

export type NewBacSiInput = {
  cccd: Scalars['String']['input'];
  chuyenkhoa: Scalars['String']['input'];
  diachi: Scalars['String']['input'];
  gioitinh: Scalars['Boolean']['input'];
  hoten: Scalars['String']['input'];
  ngayBD: Scalars['DateTime']['input'];
  ngaysinh: Scalars['DateTime']['input'];
  phongs: Array<Scalars['String']['input']>;
  user: Scalars['String']['input'];
};

export type NewBenhInput = {
  chuongbenh: Scalars['String']['input'];
  maICD: Scalars['String']['input'];
  motabenh: Scalars['String']['input'];
  tenbenh: Scalars['String']['input'];
};

export type NewBenhNhanInput = {
  bhyt: Scalars['String']['input'];
  cccd: Scalars['String']['input'];
  diachi: Scalars['String']['input'];
  gioitinh: Scalars['Boolean']['input'];
  hoten: Scalars['String']['input'];
  ngaysinh: Scalars['DateTime']['input'];
  user: Scalars['String']['input'];
};

export type NewChuyenKhoaInput = {
  mota: Scalars['String']['input'];
  tenkhoa: Scalars['String']['input'];
};

export type NewDatLichInput = {
  benhnhans: Scalars['String']['input'];
  bhyt: Scalars['Boolean']['input'];
  motabenh: Scalars['String']['input'];
  ngaydat: Scalars['DateTime']['input'];
  ngaykham: Scalars['DateTime']['input'];
};

export type NewLoaiCanLamSangInput = {
  gia: Scalars['Float']['input'];
  mota: Scalars['String']['input'];
  tenxetnghiem: Scalars['String']['input'];
};

export type NewNhanVienInput = {
  cccd: Scalars['String']['input'];
  diachi: Scalars['String']['input'];
  gioitinh: Scalars['Boolean']['input'];
  hoten: Scalars['String']['input'];
  ngayBD: Scalars['DateTime']['input'];
  ngaysinh: Scalars['DateTime']['input'];
  phong: Scalars['String']['input'];
  sdt: Scalars['String']['input'];
};

export type NewPhongInput = {
  chuyenkhoa: Scalars['String']['input'];
  mota: Scalars['String']['input'];
  tenphong: Scalars['String']['input'];
};

export type NewThuocInput = {
  bhyt: Scalars['Boolean']['input'];
  dangthuoc: Scalars['String']['input'];
  donvi: Scalars['String']['input'];
  gia: Scalars['Float']['input'];
  hamluong: Scalars['Float']['input'];
  hansudung: Scalars['String']['input'];
  nhasanxuat: Scalars['String']['input'];
  soluong: Scalars['Int']['input'];
  tenPhoBien: Scalars['String']['input'];
  tenthuoc: Scalars['String']['input'];
};

export type NewUserInput = {
  avatar: LinkImageInput;
  email: Scalars['String']['input'];
  isLocked: Scalars['Boolean']['input'];
  password: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  role: UserRole;
  username: Scalars['String']['input'];
};

export type NhanVien = {
  __typename?: 'NhanVien';
  _id: Scalars['ID']['output'];
  cccd: Scalars['String']['output'];
  diachi: Scalars['String']['output'];
  gioitinh: Scalars['Boolean']['output'];
  hoten: Scalars['String']['output'];
  ngayBD: Scalars['DateTime']['output'];
  ngaysinh: Scalars['DateTime']['output'];
  phong: Scalars['String']['output'];
  sdt: Scalars['String']['output'];
};

export type PhieuXacNhan = {
  __typename?: 'PhieuXacNhan';
  _id: Scalars['ID']['output'];
  benhnhan: BenhNhan;
  ngaykham: Scalars['DateTime']['output'];
  ngaytao: Scalars['DateTime']['output'];
  phongs: Array<Phong>;
  sothutu: Scalars['Int']['output'];
  trangthai: Scalars['Boolean']['output'];
};

export type Phieuchidinhcanlamsang = {
  __typename?: 'Phieuchidinhcanlamsang';
  _id: Scalars['ID']['output'];
  bacsi: BacSi;
  benhnhan: BenhNhan;
  bhyt: Scalars['Boolean']['output'];
  hinhanh: Scalars['String']['output'];
  ketluan: Scalars['String']['output'];
  loaicanlamsang: LoaiCanLamSang;
  thietbi: Scalars['String']['output'];
};

export type Phong = {
  __typename?: 'Phong';
  _id: Scalars['ID']['output'];
  chuyenkhoa: ChuyenKhoa;
  mota: Scalars['String']['output'];
  tenphong: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  findAll: Array<Hoadon>;
  getAllBacSi: Array<BacSi>;
  getAllBenh: Array<Benh>;
  getAllBenhNhan: Array<BenhNhan>;
  getAllByNgayVaPhong: Array<PhieuXacNhan>;
  getAllChuyenKhoa: Array<ChuyenKhoa>;
  getAllDatLich: Array<DatLich>;
  getAllDichVu: Array<Dichvu>;
  getAllNhanVien: Array<NhanVien>;
  getAllPhieuCLS: Array<Phieuchidinhcanlamsang>;
  getAllPhieuXacNhan: Array<PhieuXacNhan>;
  getAllPhong: Array<Phong>;
  getAllSinhHieuByBenhNhan: Sinhhieu;
  getAllSinhhieu: Array<Sinhhieu>;
  getAllSoBenh: Array<Sobenh>;
  getAllThuoc: Array<Thuoc>;
  getAllToaThuoc: Array<Toathuoc>;
  getAllUsers: Array<Users>;
  getBenhNhanbyId: BenhNhan;
  getThuocbyIds: Array<Thuoc>;
  getUserByEmail: Users;
  getUserById: Users;
  getUserByUsername: Users;
  logout?: Maybe<Scalars['Boolean']['output']>;
};


export type QueryGetAllByNgayVaPhongArgs = {
  ngaykham: Scalars['DateTime']['input'];
  phongIds: Scalars['String']['input'];
};


export type QueryGetAllSinhHieuByBenhNhanArgs = {
  benhnhanId: Scalars['String']['input'];
};


export type QueryGetBenhNhanbyIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetThuocbyIdsArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type QueryGetUserByEmailArgs = {
  email: Scalars['String']['input'];
};


export type QueryGetUserByIdArgs = {
  _id: Scalars['String']['input'];
};


export type QueryGetUserByUsernameArgs = {
  username: Scalars['String']['input'];
};

export type Sinhhieu = {
  __typename?: 'Sinhhieu';
  _id: Scalars['ID']['output'];
  benhmangtinh: Scalars['Boolean']['output'];
  benhnhan: BenhNhan;
  bmi: Scalars['Float']['output'];
  cannang: Scalars['Float']['output'];
  chieucao: Scalars['Float']['output'];
  ha: Scalars['String']['output'];
  mach: Scalars['Float']['output'];
  nhietdo: Scalars['Float']['output'];
};

export type Sobenh = {
  __typename?: 'Sobenh';
  _id: Scalars['ID']['output'];
  benhnhan: BenhNhan;
  ngaytao: Scalars['DateTime']['output'];
};

export type Thuoc = {
  __typename?: 'Thuoc';
  _id: Scalars['ID']['output'];
  bhyt: Scalars['Boolean']['output'];
  dangthuoc: Scalars['String']['output'];
  donvi: Scalars['String']['output'];
  gia: Scalars['Float']['output'];
  hamluong: Scalars['Float']['output'];
  hansudung: Scalars['String']['output'];
  nhasanxuat: Scalars['String']['output'];
  soluong: Scalars['Int']['output'];
  tenPhoBien: Scalars['String']['output'];
  tenthuoc: Scalars['String']['output'];
};

export type Toathuoc = {
  __typename?: 'Toathuoc';
  _id: Scalars['ID']['output'];
  bacsi: BacSi;
  benhnhan: BenhNhan;
  benhs: Array<Benh>;
  bhyt: Scalars['Boolean']['output'];
  ngaytaikham: Scalars['DateTime']['output'];
  ngaytao: Scalars['DateTime']['output'];
  soluongs: Array<Scalars['Int']['output']>;
  thuocs: Array<Thuoc>;
};

export enum TypeImage {
  File = 'FILE',
  Link = 'LINK'
}

export type UpdateBacSiInput = {
  cccd: Scalars['String']['input'];
  chuyenkhoaId: Scalars['String']['input'];
  diachi: Scalars['String']['input'];
  gioitinh: Scalars['Boolean']['input'];
  hoten: Scalars['String']['input'];
  ngayBD: Scalars['DateTime']['input'];
  ngaysinh: Scalars['DateTime']['input'];
  phong: Scalars['String']['input'];
  sdt: Scalars['String']['input'];
};

export type UpdateBenhInput = {
  chuongbenh?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  maICD?: InputMaybe<Scalars['String']['input']>;
  motabenh?: InputMaybe<Scalars['String']['input']>;
  tenbenh?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateBenhNhanInput = {
  _id: Scalars['ID']['input'];
  bhyt?: InputMaybe<Scalars['String']['input']>;
  cccd?: InputMaybe<Scalars['String']['input']>;
  diachi?: InputMaybe<Scalars['String']['input']>;
  gioitinh?: InputMaybe<Scalars['Boolean']['input']>;
  hoten?: InputMaybe<Scalars['String']['input']>;
  ngaysinh?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateChuyenKhoaInput = {
  id: Scalars['String']['input'];
  mota?: InputMaybe<Scalars['String']['input']>;
  tenkhoa?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateDatLichInput = {
  benhnhans?: InputMaybe<Scalars['String']['input']>;
  bhyt?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  motabenh?: InputMaybe<Scalars['String']['input']>;
  ngaydat?: InputMaybe<Scalars['DateTime']['input']>;
  ngaykham?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateDichvuInput = {
  bhyt?: InputMaybe<Scalars['Boolean']['input']>;
  dvt?: InputMaybe<Scalars['String']['input']>;
  gia?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['String']['input'];
  soluong?: InputMaybe<Scalars['Int']['input']>;
  tendichvu?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateHoadonInput = {
  benhnhan?: InputMaybe<Scalars['String']['input']>;
  canlamsangs?: InputMaybe<Array<Scalars['String']['input']>>;
  dichvus?: InputMaybe<Array<Scalars['String']['input']>>;
  id: Scalars['String']['input'];
  ngaytao?: InputMaybe<Scalars['DateTime']['input']>;
  thanhtien?: InputMaybe<Scalars['Float']['input']>;
  thuocs?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UpdateLoaicanlamsangInput = {
  gia?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['String']['input'];
  mota?: InputMaybe<Scalars['String']['input']>;
  tenxetnghiem?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateNhanVienInput = {
  cccd: Scalars['String']['input'];
  diachi: Scalars['String']['input'];
  gioitinh: Scalars['Boolean']['input'];
  hoten: Scalars['String']['input'];
  ngayBD: Scalars['DateTime']['input'];
  ngaysinh: Scalars['DateTime']['input'];
  phong: Scalars['String']['input'];
  sdt: Scalars['String']['input'];
};

export type UpdatePhieuXacNhanInput = {
  benhnhan?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  ngaykham?: InputMaybe<Scalars['DateTime']['input']>;
  ngaytao?: InputMaybe<Scalars['DateTime']['input']>;
  phongs?: InputMaybe<Array<Scalars['String']['input']>>;
  sothutu?: InputMaybe<Scalars['Int']['input']>;
  trangthai?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdatePhieuchidinhcanlamsangInput = {
  bacsi?: InputMaybe<Scalars['String']['input']>;
  benhnhan?: InputMaybe<Scalars['String']['input']>;
  bhyt?: InputMaybe<Scalars['Boolean']['input']>;
  hinhanh?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  ketluan?: InputMaybe<Scalars['String']['input']>;
  loaicanlamsang?: InputMaybe<Scalars['String']['input']>;
  thietbi?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePhongInput = {
  chuyenkhoa?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  mota?: InputMaybe<Scalars['String']['input']>;
  tenphong?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSinhhieuInput = {
  benhmangtinh: Scalars['Boolean']['input'];
  bmi: Scalars['Float']['input'];
  cannang: Scalars['Float']['input'];
  chieucao: Scalars['Float']['input'];
  ha: Scalars['String']['input'];
  id: Scalars['String']['input'];
  mach: Scalars['Float']['input'];
  nhietdo: Scalars['Float']['input'];
};

export type UpdateSobenhInput = {
  benhnhan?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  ngaytao?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateThuocInput = {
  bhyt?: InputMaybe<Scalars['Boolean']['input']>;
  dangthuoc?: InputMaybe<Scalars['String']['input']>;
  donvi?: InputMaybe<Scalars['String']['input']>;
  gia?: InputMaybe<Scalars['Float']['input']>;
  hamluong?: InputMaybe<Scalars['Float']['input']>;
  hansudung?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  nhasanxuat?: InputMaybe<Scalars['String']['input']>;
  soluong?: InputMaybe<Scalars['Int']['input']>;
  tenPhoBien?: InputMaybe<Scalars['String']['input']>;
  tenthuoc?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateToathuocInput = {
  bacsi?: InputMaybe<Scalars['String']['input']>;
  benhnhan?: InputMaybe<Scalars['String']['input']>;
  benhs?: InputMaybe<Array<Scalars['String']['input']>>;
  bhyt?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  ngaytaikham?: InputMaybe<Scalars['DateTime']['input']>;
  ngaytao?: InputMaybe<Scalars['DateTime']['input']>;
  soluongs?: InputMaybe<Array<Scalars['Int']['input']>>;
  thuocs?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UpdateUserInput = {
  avatar: LinkImageInput;
  email: Scalars['String']['input'];
  id: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  role: UserRole;
  username: Scalars['String']['input'];
};

export enum UserRole {
  Admin = 'ADMIN',
  Staff = 'STAFF',
  User = 'USER'
}

export type Users = {
  __typename?: 'Users';
  _id: Scalars['ID']['output'];
  avatar: LinkImage;
  email: Scalars['String']['output'];
  isLocked: Scalars['Boolean']['output'];
  password: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  role: UserRole;
  username: Scalars['String']['output'];
};

export type LoginMutationVariables = Exact<{
  input: LoginUserInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', access_token: string, user: { __typename?: 'Users', _id: string, username: string, phoneNumber: string, email: string, role: UserRole, isLocked: boolean, avatar: { __typename?: 'LinkImage', url: string, fileName: string, type: TypeImage } } } };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: boolean };

export type UpdateUserMutationVariables = Exact<{
  update: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'Users', _id: string, username: string, phoneNumber: string, email: string, password: string, role: UserRole, isLocked: boolean, avatar: { __typename?: 'LinkImage', url: string, fileName: string, type: TypeImage } } };

export type XulyKhoaMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type XulyKhoaMutation = { __typename?: 'Mutation', xulyKhoa: { __typename?: 'Users', isLocked: boolean } };

export type CreateBacSiMutationVariables = Exact<{
  input: NewBacSiInput;
}>;


export type CreateBacSiMutation = { __typename?: 'Mutation', createBacSi: { __typename?: 'BacSi', _id: string, hoten: string, ngaysinh: any, gioitinh: boolean, diachi: string, cccd: string, ngayBD: any, user: { __typename?: 'Users', username: string, email: string, phoneNumber: string }, phongs: Array<{ __typename?: 'Phong', tenphong: string }>, chuyenkhoa: { __typename?: 'ChuyenKhoa', tenkhoa: string } } };

export type CreateThuocMutationVariables = Exact<{
  input: NewThuocInput;
}>;


export type CreateThuocMutation = { __typename?: 'Mutation', createThuoc: { __typename?: 'Thuoc', _id: string, tenthuoc: string, tenPhoBien: string, dangthuoc: string, donvi: string, gia: number, hamluong: number, bhyt: boolean, nhasanxuat: string, hansudung: string, soluong: number } };

export type CreateToaThuocMutationVariables = Exact<{
  input: CreateToathuocInput;
}>;


export type CreateToaThuocMutation = { __typename?: 'Mutation', createToathuoc: { __typename?: 'Toathuoc', _id: string, soluongs: Array<number>, bhyt: boolean, ngaytaikham: any, ngaytao: any, benhnhan: { __typename?: 'BenhNhan', hoten: string }, bacsi: { __typename?: 'BacSi', hoten: string }, thuocs: Array<{ __typename?: 'Thuoc', tenthuoc: string, tenPhoBien: string, hamluong: number, dangthuoc: string, donvi: string }>, benhs: Array<{ __typename?: 'Benh', tenbenh: string }> } };

export type UpdateSinhhieuMutationVariables = Exact<{
  input: UpdateSinhhieuInput;
}>;


export type UpdateSinhhieuMutation = { __typename?: 'Mutation', updateSinhhieu: { __typename?: 'Sinhhieu', _id: string, mach: number, nhietdo: number, ha: string, chieucao: number, cannang: number, bmi: number, benhmangtinh: boolean } };

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'Query', getAllUsers: Array<{ __typename?: 'Users', _id: string, username: string, email: string, phoneNumber: string, password: string, role: UserRole, isLocked: boolean, refreshToken: string, avatar: { __typename?: 'LinkImage', fileName: string, url: string, type: TypeImage } }> };

export type LogoutQueryVariables = Exact<{ [key: string]: never; }>;


export type LogoutQuery = { __typename?: 'Query', logout?: boolean | null };

export type GetAllBacSiQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllBacSiQuery = { __typename?: 'Query', getAllBacSi: Array<{ __typename?: 'BacSi', _id: string, hoten: string, ngaysinh: any, gioitinh: boolean, diachi: string, cccd: string, ngayBD: any, user: { __typename?: 'Users', username: string, email: string, phoneNumber: string }, phongs: Array<{ __typename?: 'Phong', _id: string, tenphong: string }>, chuyenkhoa: { __typename?: 'ChuyenKhoa', _id: string, tenkhoa: string } }> };

export type GetAllBenhNhanQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllBenhNhanQuery = { __typename?: 'Query', getAllBenhNhan: Array<{ __typename?: 'BenhNhan', _id: string, hoten: string, ngaysinh: string, gioitinh: boolean, diachi: string, cccd: string, bhyt: string, user: { __typename?: 'Users', phoneNumber: string, email: string } }> };

export type GetAllThuocQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllThuocQuery = { __typename?: 'Query', getAllThuoc: Array<{ __typename?: 'Thuoc', _id: string, tenthuoc: string, tenPhoBien: string, dangthuoc: string, donvi: string, gia: number, hamluong: number, bhyt: boolean, nhasanxuat: string, hansudung: string, soluong: number }> };

export type GetAllSinhHieuByBenhNhanQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetAllSinhHieuByBenhNhanQuery = { __typename?: 'Query', getAllSinhHieuByBenhNhan: { __typename?: 'Sinhhieu', _id: string, mach: number, nhietdo: number, ha: string, chieucao: number, cannang: number, bmi: number, benhmangtinh: boolean } };

export type GetAllBenhQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllBenhQuery = { __typename?: 'Query', getAllBenh: Array<{ __typename?: 'Benh', tenbenh: string, motabenh: string, _id: string, maICD: string, chuongbenh: string }> };

export type GetAllNgayVaPhongQueryVariables = Exact<{
  ngaykham: Scalars['DateTime']['input'];
  phongIds: Scalars['String']['input'];
}>;


export type GetAllNgayVaPhongQuery = { __typename?: 'Query', getAllByNgayVaPhong: Array<{ __typename?: 'PhieuXacNhan', _id: string, trangthai: boolean, sothutu: number, ngaytao: any, ngaykham: any, benhnhan: { __typename?: 'BenhNhan', _id: string, hoten: string, ngaysinh: string, gioitinh: boolean, diachi: string, cccd: string, bhyt: string, user: { __typename?: 'Users', phoneNumber: string, email: string }, sinhhieu: { __typename?: 'Sinhhieu', _id: string, mach: number, nhietdo: number, ha: string, chieucao: number, cannang: number, bmi: number, benhmangtinh: boolean } }, phongs: Array<{ __typename?: 'Phong', _id: string, tenphong: string }> }> };


export const LoginDocument = gql`
    mutation login($input: LoginUserInput!) {
  login(loginUserInput: $input) {
    access_token
    user {
      _id
      username
      phoneNumber
      email
      role
      avatar {
        url
        fileName
        type
      }
      isLocked
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const DeleteUserDocument = gql`
    mutation deleteUser($id: String!) {
  deleteUser(_id: $id)
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const UpdateUserDocument = gql`
    mutation updateUser($update: UpdateUserInput!) {
  updateUser(input: $update) {
    _id
    username
    phoneNumber
    email
    password
    role
    isLocked
    avatar {
      url
      fileName
      type
    }
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      update: // value for 'update'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const XulyKhoaDocument = gql`
    mutation XulyKhoa($id: String!) {
  xulyKhoa(id: $id) {
    isLocked
  }
}
    `;
export type XulyKhoaMutationFn = Apollo.MutationFunction<XulyKhoaMutation, XulyKhoaMutationVariables>;

/**
 * __useXulyKhoaMutation__
 *
 * To run a mutation, you first call `useXulyKhoaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useXulyKhoaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [xulyKhoaMutation, { data, loading, error }] = useXulyKhoaMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useXulyKhoaMutation(baseOptions?: Apollo.MutationHookOptions<XulyKhoaMutation, XulyKhoaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<XulyKhoaMutation, XulyKhoaMutationVariables>(XulyKhoaDocument, options);
      }
export type XulyKhoaMutationHookResult = ReturnType<typeof useXulyKhoaMutation>;
export type XulyKhoaMutationResult = Apollo.MutationResult<XulyKhoaMutation>;
export type XulyKhoaMutationOptions = Apollo.BaseMutationOptions<XulyKhoaMutation, XulyKhoaMutationVariables>;
export const CreateBacSiDocument = gql`
    mutation CreateBacSi($input: NewBacSiInput!) {
  createBacSi(newBacSiInput: $input) {
    _id
    hoten
    ngaysinh
    gioitinh
    diachi
    cccd
    ngayBD
    user {
      username
      email
      phoneNumber
    }
    phongs {
      tenphong
    }
    chuyenkhoa {
      tenkhoa
    }
  }
}
    `;
export type CreateBacSiMutationFn = Apollo.MutationFunction<CreateBacSiMutation, CreateBacSiMutationVariables>;

/**
 * __useCreateBacSiMutation__
 *
 * To run a mutation, you first call `useCreateBacSiMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBacSiMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBacSiMutation, { data, loading, error }] = useCreateBacSiMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateBacSiMutation(baseOptions?: Apollo.MutationHookOptions<CreateBacSiMutation, CreateBacSiMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBacSiMutation, CreateBacSiMutationVariables>(CreateBacSiDocument, options);
      }
export type CreateBacSiMutationHookResult = ReturnType<typeof useCreateBacSiMutation>;
export type CreateBacSiMutationResult = Apollo.MutationResult<CreateBacSiMutation>;
export type CreateBacSiMutationOptions = Apollo.BaseMutationOptions<CreateBacSiMutation, CreateBacSiMutationVariables>;
export const CreateThuocDocument = gql`
    mutation CreateThuoc($input: NewThuocInput!) {
  createThuoc(newThuocInput: $input) {
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
    `;
export type CreateThuocMutationFn = Apollo.MutationFunction<CreateThuocMutation, CreateThuocMutationVariables>;

/**
 * __useCreateThuocMutation__
 *
 * To run a mutation, you first call `useCreateThuocMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateThuocMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createThuocMutation, { data, loading, error }] = useCreateThuocMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateThuocMutation(baseOptions?: Apollo.MutationHookOptions<CreateThuocMutation, CreateThuocMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateThuocMutation, CreateThuocMutationVariables>(CreateThuocDocument, options);
      }
export type CreateThuocMutationHookResult = ReturnType<typeof useCreateThuocMutation>;
export type CreateThuocMutationResult = Apollo.MutationResult<CreateThuocMutation>;
export type CreateThuocMutationOptions = Apollo.BaseMutationOptions<CreateThuocMutation, CreateThuocMutationVariables>;
export const CreateToaThuocDocument = gql`
    mutation CreateToaThuoc($input: CreateToathuocInput!) {
  createToathuoc(createToathuocInput: $input) {
    _id
    benhnhan {
      hoten
    }
    bacsi {
      hoten
    }
    thuocs {
      tenthuoc
      tenPhoBien
      hamluong
      dangthuoc
      donvi
    }
    soluongs
    benhs {
      tenbenh
    }
    bhyt
    ngaytaikham
    ngaytao
  }
}
    `;
export type CreateToaThuocMutationFn = Apollo.MutationFunction<CreateToaThuocMutation, CreateToaThuocMutationVariables>;

/**
 * __useCreateToaThuocMutation__
 *
 * To run a mutation, you first call `useCreateToaThuocMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateToaThuocMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createToaThuocMutation, { data, loading, error }] = useCreateToaThuocMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateToaThuocMutation(baseOptions?: Apollo.MutationHookOptions<CreateToaThuocMutation, CreateToaThuocMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateToaThuocMutation, CreateToaThuocMutationVariables>(CreateToaThuocDocument, options);
      }
export type CreateToaThuocMutationHookResult = ReturnType<typeof useCreateToaThuocMutation>;
export type CreateToaThuocMutationResult = Apollo.MutationResult<CreateToaThuocMutation>;
export type CreateToaThuocMutationOptions = Apollo.BaseMutationOptions<CreateToaThuocMutation, CreateToaThuocMutationVariables>;
export const UpdateSinhhieuDocument = gql`
    mutation UpdateSinhhieu($input: UpdateSinhhieuInput!) {
  updateSinhhieu(updateSinhhieuInput: $input) {
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
    `;
export type UpdateSinhhieuMutationFn = Apollo.MutationFunction<UpdateSinhhieuMutation, UpdateSinhhieuMutationVariables>;

/**
 * __useUpdateSinhhieuMutation__
 *
 * To run a mutation, you first call `useUpdateSinhhieuMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSinhhieuMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSinhhieuMutation, { data, loading, error }] = useUpdateSinhhieuMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateSinhhieuMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSinhhieuMutation, UpdateSinhhieuMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSinhhieuMutation, UpdateSinhhieuMutationVariables>(UpdateSinhhieuDocument, options);
      }
export type UpdateSinhhieuMutationHookResult = ReturnType<typeof useUpdateSinhhieuMutation>;
export type UpdateSinhhieuMutationResult = Apollo.MutationResult<UpdateSinhhieuMutation>;
export type UpdateSinhhieuMutationOptions = Apollo.BaseMutationOptions<UpdateSinhhieuMutation, UpdateSinhhieuMutationVariables>;
export const GetAllUsersDocument = gql`
    query getAllUsers {
  getAllUsers {
    _id
    username
    email
    phoneNumber
    password
    role
    isLocked
    avatar {
      fileName
      url
      type
    }
    refreshToken
  }
}
    `;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
      }
export function useGetAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export function useGetAllUsersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersSuspenseQueryHookResult = ReturnType<typeof useGetAllUsersSuspenseQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const LogoutDocument = gql`
    query Logout {
  logout
}
    `;

/**
 * __useLogoutQuery__
 *
 * To run a query within a React component, call `useLogoutQuery` and pass it any options that fit your needs.
 * When your component renders, `useLogoutQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLogoutQuery({
 *   variables: {
 *   },
 * });
 */
export function useLogoutQuery(baseOptions?: Apollo.QueryHookOptions<LogoutQuery, LogoutQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LogoutQuery, LogoutQueryVariables>(LogoutDocument, options);
      }
export function useLogoutLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LogoutQuery, LogoutQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LogoutQuery, LogoutQueryVariables>(LogoutDocument, options);
        }
export function useLogoutSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<LogoutQuery, LogoutQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<LogoutQuery, LogoutQueryVariables>(LogoutDocument, options);
        }
export type LogoutQueryHookResult = ReturnType<typeof useLogoutQuery>;
export type LogoutLazyQueryHookResult = ReturnType<typeof useLogoutLazyQuery>;
export type LogoutSuspenseQueryHookResult = ReturnType<typeof useLogoutSuspenseQuery>;
export type LogoutQueryResult = Apollo.QueryResult<LogoutQuery, LogoutQueryVariables>;
export const GetAllBacSiDocument = gql`
    query getAllBacSi {
  getAllBacSi {
    _id
    hoten
    ngaysinh
    gioitinh
    diachi
    cccd
    ngayBD
    user {
      username
      email
      phoneNumber
    }
    phongs {
      _id
      tenphong
    }
    chuyenkhoa {
      _id
      tenkhoa
    }
  }
}
    `;

/**
 * __useGetAllBacSiQuery__
 *
 * To run a query within a React component, call `useGetAllBacSiQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBacSiQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBacSiQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllBacSiQuery(baseOptions?: Apollo.QueryHookOptions<GetAllBacSiQuery, GetAllBacSiQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllBacSiQuery, GetAllBacSiQueryVariables>(GetAllBacSiDocument, options);
      }
export function useGetAllBacSiLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllBacSiQuery, GetAllBacSiQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllBacSiQuery, GetAllBacSiQueryVariables>(GetAllBacSiDocument, options);
        }
export function useGetAllBacSiSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllBacSiQuery, GetAllBacSiQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllBacSiQuery, GetAllBacSiQueryVariables>(GetAllBacSiDocument, options);
        }
export type GetAllBacSiQueryHookResult = ReturnType<typeof useGetAllBacSiQuery>;
export type GetAllBacSiLazyQueryHookResult = ReturnType<typeof useGetAllBacSiLazyQuery>;
export type GetAllBacSiSuspenseQueryHookResult = ReturnType<typeof useGetAllBacSiSuspenseQuery>;
export type GetAllBacSiQueryResult = Apollo.QueryResult<GetAllBacSiQuery, GetAllBacSiQueryVariables>;
export const GetAllBenhNhanDocument = gql`
    query getAllBenhNhan {
  getAllBenhNhan {
    _id
    hoten
    ngaysinh
    gioitinh
    diachi
    cccd
    bhyt
    user {
      phoneNumber
      email
    }
  }
}
    `;

/**
 * __useGetAllBenhNhanQuery__
 *
 * To run a query within a React component, call `useGetAllBenhNhanQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBenhNhanQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBenhNhanQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllBenhNhanQuery(baseOptions?: Apollo.QueryHookOptions<GetAllBenhNhanQuery, GetAllBenhNhanQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllBenhNhanQuery, GetAllBenhNhanQueryVariables>(GetAllBenhNhanDocument, options);
      }
export function useGetAllBenhNhanLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllBenhNhanQuery, GetAllBenhNhanQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllBenhNhanQuery, GetAllBenhNhanQueryVariables>(GetAllBenhNhanDocument, options);
        }
export function useGetAllBenhNhanSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllBenhNhanQuery, GetAllBenhNhanQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllBenhNhanQuery, GetAllBenhNhanQueryVariables>(GetAllBenhNhanDocument, options);
        }
export type GetAllBenhNhanQueryHookResult = ReturnType<typeof useGetAllBenhNhanQuery>;
export type GetAllBenhNhanLazyQueryHookResult = ReturnType<typeof useGetAllBenhNhanLazyQuery>;
export type GetAllBenhNhanSuspenseQueryHookResult = ReturnType<typeof useGetAllBenhNhanSuspenseQuery>;
export type GetAllBenhNhanQueryResult = Apollo.QueryResult<GetAllBenhNhanQuery, GetAllBenhNhanQueryVariables>;
export const GetAllThuocDocument = gql`
    query getAllThuoc {
  getAllThuoc {
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
    `;

/**
 * __useGetAllThuocQuery__
 *
 * To run a query within a React component, call `useGetAllThuocQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllThuocQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllThuocQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllThuocQuery(baseOptions?: Apollo.QueryHookOptions<GetAllThuocQuery, GetAllThuocQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllThuocQuery, GetAllThuocQueryVariables>(GetAllThuocDocument, options);
      }
export function useGetAllThuocLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllThuocQuery, GetAllThuocQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllThuocQuery, GetAllThuocQueryVariables>(GetAllThuocDocument, options);
        }
export function useGetAllThuocSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllThuocQuery, GetAllThuocQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllThuocQuery, GetAllThuocQueryVariables>(GetAllThuocDocument, options);
        }
export type GetAllThuocQueryHookResult = ReturnType<typeof useGetAllThuocQuery>;
export type GetAllThuocLazyQueryHookResult = ReturnType<typeof useGetAllThuocLazyQuery>;
export type GetAllThuocSuspenseQueryHookResult = ReturnType<typeof useGetAllThuocSuspenseQuery>;
export type GetAllThuocQueryResult = Apollo.QueryResult<GetAllThuocQuery, GetAllThuocQueryVariables>;
export const GetAllSinhHieuByBenhNhanDocument = gql`
    query GetAllSinhHieuByBenhNhan($id: String!) {
  getAllSinhHieuByBenhNhan(benhnhanId: $id) {
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
    `;

/**
 * __useGetAllSinhHieuByBenhNhanQuery__
 *
 * To run a query within a React component, call `useGetAllSinhHieuByBenhNhanQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllSinhHieuByBenhNhanQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllSinhHieuByBenhNhanQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAllSinhHieuByBenhNhanQuery(baseOptions: Apollo.QueryHookOptions<GetAllSinhHieuByBenhNhanQuery, GetAllSinhHieuByBenhNhanQueryVariables> & ({ variables: GetAllSinhHieuByBenhNhanQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllSinhHieuByBenhNhanQuery, GetAllSinhHieuByBenhNhanQueryVariables>(GetAllSinhHieuByBenhNhanDocument, options);
      }
export function useGetAllSinhHieuByBenhNhanLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllSinhHieuByBenhNhanQuery, GetAllSinhHieuByBenhNhanQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllSinhHieuByBenhNhanQuery, GetAllSinhHieuByBenhNhanQueryVariables>(GetAllSinhHieuByBenhNhanDocument, options);
        }
export function useGetAllSinhHieuByBenhNhanSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllSinhHieuByBenhNhanQuery, GetAllSinhHieuByBenhNhanQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllSinhHieuByBenhNhanQuery, GetAllSinhHieuByBenhNhanQueryVariables>(GetAllSinhHieuByBenhNhanDocument, options);
        }
export type GetAllSinhHieuByBenhNhanQueryHookResult = ReturnType<typeof useGetAllSinhHieuByBenhNhanQuery>;
export type GetAllSinhHieuByBenhNhanLazyQueryHookResult = ReturnType<typeof useGetAllSinhHieuByBenhNhanLazyQuery>;
export type GetAllSinhHieuByBenhNhanSuspenseQueryHookResult = ReturnType<typeof useGetAllSinhHieuByBenhNhanSuspenseQuery>;
export type GetAllSinhHieuByBenhNhanQueryResult = Apollo.QueryResult<GetAllSinhHieuByBenhNhanQuery, GetAllSinhHieuByBenhNhanQueryVariables>;
export const GetAllBenhDocument = gql`
    query GetAllBenh {
  getAllBenh {
    tenbenh
    motabenh
    _id
    maICD
    chuongbenh
  }
}
    `;

/**
 * __useGetAllBenhQuery__
 *
 * To run a query within a React component, call `useGetAllBenhQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBenhQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBenhQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllBenhQuery(baseOptions?: Apollo.QueryHookOptions<GetAllBenhQuery, GetAllBenhQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllBenhQuery, GetAllBenhQueryVariables>(GetAllBenhDocument, options);
      }
export function useGetAllBenhLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllBenhQuery, GetAllBenhQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllBenhQuery, GetAllBenhQueryVariables>(GetAllBenhDocument, options);
        }
export function useGetAllBenhSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllBenhQuery, GetAllBenhQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllBenhQuery, GetAllBenhQueryVariables>(GetAllBenhDocument, options);
        }
export type GetAllBenhQueryHookResult = ReturnType<typeof useGetAllBenhQuery>;
export type GetAllBenhLazyQueryHookResult = ReturnType<typeof useGetAllBenhLazyQuery>;
export type GetAllBenhSuspenseQueryHookResult = ReturnType<typeof useGetAllBenhSuspenseQuery>;
export type GetAllBenhQueryResult = Apollo.QueryResult<GetAllBenhQuery, GetAllBenhQueryVariables>;
export const GetAllNgayVaPhongDocument = gql`
    query GetAllNgayVaPhong($ngaykham: DateTime!, $phongIds: String!) {
  getAllByNgayVaPhong(ngaykham: $ngaykham, phongIds: $phongIds) {
    _id
    benhnhan {
      _id
      hoten
      ngaysinh
      gioitinh
      diachi
      cccd
      bhyt
      user {
        phoneNumber
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
  }
}
    `;

/**
 * __useGetAllNgayVaPhongQuery__
 *
 * To run a query within a React component, call `useGetAllNgayVaPhongQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllNgayVaPhongQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllNgayVaPhongQuery({
 *   variables: {
 *      ngaykham: // value for 'ngaykham'
 *      phongIds: // value for 'phongIds'
 *   },
 * });
 */
export function useGetAllNgayVaPhongQuery(baseOptions: Apollo.QueryHookOptions<GetAllNgayVaPhongQuery, GetAllNgayVaPhongQueryVariables> & ({ variables: GetAllNgayVaPhongQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllNgayVaPhongQuery, GetAllNgayVaPhongQueryVariables>(GetAllNgayVaPhongDocument, options);
      }
export function useGetAllNgayVaPhongLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllNgayVaPhongQuery, GetAllNgayVaPhongQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllNgayVaPhongQuery, GetAllNgayVaPhongQueryVariables>(GetAllNgayVaPhongDocument, options);
        }
export function useGetAllNgayVaPhongSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllNgayVaPhongQuery, GetAllNgayVaPhongQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllNgayVaPhongQuery, GetAllNgayVaPhongQueryVariables>(GetAllNgayVaPhongDocument, options);
        }
export type GetAllNgayVaPhongQueryHookResult = ReturnType<typeof useGetAllNgayVaPhongQuery>;
export type GetAllNgayVaPhongLazyQueryHookResult = ReturnType<typeof useGetAllNgayVaPhongLazyQuery>;
export type GetAllNgayVaPhongSuspenseQueryHookResult = ReturnType<typeof useGetAllNgayVaPhongSuspenseQuery>;
export type GetAllNgayVaPhongQueryResult = Apollo.QueryResult<GetAllNgayVaPhongQuery, GetAllNgayVaPhongQueryVariables>;