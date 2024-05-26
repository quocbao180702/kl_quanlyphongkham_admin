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
  lichkham?: Maybe<Scalars['String']['output']>;
  ngayBD: Scalars['DateTime']['output'];
  ngaysinh: Scalars['DateTime']['output'];
  phongs: Array<Phong>;
  sodienthoai: Scalars['String']['output'];
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
  ngaysinh: Scalars['DateTime']['output'];
  sinhhieu?: Maybe<Sinhhieu>;
  sodienthoai: Scalars['String']['output'];
  user: Users;
};

export type Blog = {
  __typename?: 'Blog';
  _id: Scalars['ID']['output'];
  hinhanh: LinkImage;
  kichhoat: Scalars['Boolean']['output'];
  luotxem: Scalars['Int']['output'];
  ngaytao: Scalars['DateTime']['output'];
  noidung: Scalars['String']['output'];
  tieude: Scalars['String']['output'];
  tomtat?: Maybe<Scalars['String']['output']>;
  user: Users;
};

export type ChiPhi = {
  __typename?: 'ChiPhi';
  bhyt: Scalars['Boolean']['output'];
  gia: Scalars['Float']['output'];
};

export type ChiPhiInput = {
  bhyt: Scalars['Boolean']['input'];
  gia: Scalars['Float']['input'];
};

export type ChuyenKhoa = {
  __typename?: 'ChuyenKhoa';
  _id: Scalars['ID']['output'];
  mota: Scalars['String']['output'];
  tenkhoa: Scalars['String']['output'];
};

export type CreateBlogInput = {
  hinhanh: LinkImageInput;
  noidung: Scalars['String']['input'];
  tieude: Scalars['String']['input'];
  tomtat: Scalars['String']['input'];
  user: Scalars['String']['input'];
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
  bhyt: Scalars['Boolean']['input'];
  ngaytao: Scalars['DateTime']['input'];
};

export type CreateHoadonchidinhcanlamsangInput = {
  benhnhan: Scalars['String']['input'];
  bhyt: Scalars['Boolean']['input'];
  chitietcanlamsang: Array<DichVuInput>;
  idPhieuCLS: Scalars['String']['input'];
};

export type CreateKetquacanlamsangInput = {
  loaicanlamsang: Scalars['String']['input'];
};

export type CreateLichkhamInput = {
  ngaykham: Array<PhienkhamInput>;
  ngaynghi: Array<Scalars['DateTime']['input']>;
};

export type CreatePhieuXacNhanInput = {
  benhnhan: Scalars['String']['input'];
  email: Scalars['String']['input'];
  ngaykham: Scalars['DateTime']['input'];
  ngaytao: Scalars['DateTime']['input'];
  phien: PhienInput;
  phongs: Array<Scalars['String']['input']>;
};

export type CreatePhieuchidinhcanlamsangInput = {
  bacsi: Scalars['String']['input'];
  benhnhan: Scalars['String']['input'];
  bhyt: Scalars['Boolean']['input'];
  ngaytao: Scalars['DateTime']['input'];
  phieuxacnhan: Scalars['String']['input'];
  truoc: Scalars['Boolean']['input'];
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

export type CreateTestInput = {
  adress: Scalars['String']['input'];
  age: Scalars['String']['input'];
  name: Scalars['String']['input'];
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

export type CreateVattuyteInput = {
  chiphi: Array<ChiPhiInput>;
  dvt: Scalars['String']['input'];
  soluong: Scalars['Int']['input'];
  tenvattu: Scalars['String']['input'];
};

export type DatLich = {
  __typename?: 'DatLich';
  _id: Scalars['ID']['output'];
  benhnhan: BenhNhan;
  email: Scalars['String']['output'];
  motabenh: Scalars['String']['output'];
  ngaydat: Scalars['DateTime']['output'];
  ngaykham: Scalars['DateTime']['output'];
  trangthai: TrangThaiDatKham;
};

export type DatLichBacSi = {
  __typename?: 'DatLichBacSi';
  _id: Scalars['ID']['output'];
  bacsi: BacSi;
  benhnhan: BenhNhan;
  email: Scalars['String']['output'];
  motabenh: Scalars['String']['output'];
  ngaydat: Scalars['DateTime']['output'];
  ngaykham: Scalars['DateTime']['output'];
  phien: Phiens;
  trangthai: TrangThaiDatKham;
};

export type DichVu = {
  __typename?: 'DichVu';
  gia: Scalars['Float']['output'];
  soluong: Scalars['Int']['output'];
  ten: Scalars['String']['output'];
  thanhtien: Scalars['Float']['output'];
};

export type DichVuInput = {
  gia: Scalars['Float']['input'];
  soluong: Scalars['Int']['input'];
  ten: Scalars['String']['input'];
  thanhtien: Scalars['Float']['input'];
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

export type FetchPagination = {
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};

export type FetchUsersArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};

export type Hoadon = {
  __typename?: 'Hoadon';
  _id: Scalars['ID']['output'];
  benhnhan: BenhNhan;
  bhyt: Scalars['Boolean']['output'];
  ngaytao: Scalars['DateTime']['output'];
  thanhtien: Scalars['Float']['output'];
  thuocs: Array<DichVu>;
  trangthai: Scalars['Boolean']['output'];
  vattuyte: Array<DichVu>;
};

export type Hoadonchidinhcanlamsang = {
  __typename?: 'Hoadonchidinhcanlamsang';
  _id: Scalars['ID']['output'];
  benhnhan: BenhNhan;
  bhyt: Scalars['Boolean']['output'];
  chitietcanlamsang: Array<DichVu>;
  idPhieuCLS?: Maybe<Scalars['String']['output']>;
  ngaytao: Scalars['DateTime']['output'];
  thanhtien: Scalars['Float']['output'];
  tinhtrang: Scalars['Boolean']['output'];
};

export type KetQuaCanLamSang = {
  __typename?: 'KetQuaCanLamSang';
  _id: Scalars['ID']['output'];
  hinhanh?: Maybe<Array<LinkImage>>;
  ketluan?: Maybe<Scalars['String']['output']>;
  loaicanlamsang: LoaiCanLamSang;
  thietbi?: Maybe<Scalars['String']['output']>;
};

export type Lichkham = {
  __typename?: 'Lichkham';
  _id: Scalars['ID']['output'];
  ngaykham: Array<Phienkham>;
  ngaynghi: Array<Scalars['DateTime']['output']>;
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
  loaicanlamsang: Scalars['String']['output'];
  mota: Scalars['String']['output'];
  tenxetnghiem: Scalars['String']['output'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  access_token: Scalars['String']['output'];
  code: Scalars['Int']['output'];
  success: Scalars['Boolean']['output'];
};

export type LoginUserInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type MongthRange = {
  __typename?: 'MongthRange';
  month: Scalars['Float']['output'];
  tongtien: Scalars['Float']['output'];
};

export type MonthRange = {
  __typename?: 'MonthRange';
  count: Scalars['Float']['output'];
  month: Scalars['Float']['output'];
};

export type MonthRangeCls = {
  __typename?: 'MonthRangeCLS';
  month: Scalars['Float']['output'];
  tongtien: Scalars['Float']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBacSi: BacSi;
  createBenh: Benh;
  createBenhNhan: BenhNhan;
  createBlog: Blog;
  createChuyenKhoa: ChuyenKhoa;
  createDatLich?: Maybe<DatLich>;
  createDatlichBacSi: DatLichBacSi;
  createDichvu: Dichvu;
  createHoadon: Hoadon;
  createHoadonchidinhcanlamsang: Hoadonchidinhcanlamsang;
  createKetquacanlamsang: KetQuaCanLamSang;
  createLichKham: Lichkham;
  createLoaicanlamsang: LoaiCanLamSang;
  createNhanVien: NhanVien;
  createPhieuXacNhan: PhieuXacNhan;
  createPhieuchidinhcanlamsang: Phieuchidinhcanlamsang;
  createPhong: Phong;
  createSinhhieu: Sinhhieu;
  createSobenh: Sobenh;
  createTest: Test;
  createThuoc: Thuoc;
  createToathuoc: Toathuoc;
  createUser: Users;
  createVatTuYTe: Vattuyte;
  deleteBacSi: Scalars['Boolean']['output'];
  deleteBenh: Scalars['Boolean']['output'];
  deleteBenhNhan: Scalars['Boolean']['output'];
  deleteBlog: Scalars['Boolean']['output'];
  deleteChuyenKhoa: Scalars['Boolean']['output'];
  deleteDatLich: Scalars['Boolean']['output'];
  deleteDatLichBacSi: Scalars['Boolean']['output'];
  deleteDichvu: Dichvu;
  deleteHoadon: Scalars['Boolean']['output'];
  deleteLichKham: Scalars['Boolean']['output'];
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
  deleteVatTuYTe: Scalars['Boolean']['output'];
  login: LoginResponse;
  loginwithGoogleCallback: LoginResponse;
  logout?: Maybe<Scalars['Boolean']['output']>;
  registerUser: Users;
  updateBacSi: BacSi;
  updateBenh: Benh;
  updateBenhNhan: BenhNhan;
  updateBlog: Blog;
  updateChuyenKhoa: ChuyenKhoa;
  updateDatLich: DatLich;
  updateDatlichBacSi: DatLichBacSi;
  updateDichvu: Dichvu;
  updateHoadon: Hoadon;
  updateKetquacanlamsang: KetQuaCanLamSang;
  updateKichHoat: Scalars['Boolean']['output'];
  updateLichKham: Lichkham;
  updateLoaicanlamsang: LoaiCanLamSang;
  updateNhanVien: NhanVien;
  updatePhieuXacNhan: PhieuXacNhan;
  updatePhieuchidinhcanlamsang: Phieuchidinhcanlamsang;
  updatePhong: Phong;
  updateSinhhieu: Sinhhieu;
  updateSobenh: Sobenh;
  updateSoluongThuoc: Thuoc;
  updateThuoc: Thuoc;
  updateTinhTrangHoaDonCLS: Hoadonchidinhcanlamsang;
  updateToathuoc: Toathuoc;
  updateTrangThaiCanLamSang: Phieuchidinhcanlamsang;
  updateTrangThaiDatLich: DatLich;
  updateTrangThaiDatLichBacSi: DatLichBacSi;
  updateTrangThaiHoaDon: Hoadon;
  updateTrangThaiKham: PhieuXacNhan;
  updateTrangThaiThongTinUser: Users;
  updateUser: Users;
  updateUserbySoDienThoai?: Maybe<BenhNhan>;
  updateUuTien: Phieuchidinhcanlamsang;
  updateVatTuYTe: Vattuyte;
  xulyKhoa: Users;
};


export type MutationCreateBacSiArgs = {
  createLichkham: CreateLichkhamInput;
  newBacSiInput: NewBacSiInput;
};


export type MutationCreateBenhArgs = {
  newBenhInput: NewBenhInput;
};


export type MutationCreateBenhNhanArgs = {
  newBenhNhanInput: NewBenhNhanInput;
};


export type MutationCreateBlogArgs = {
  createBlogInput: CreateBlogInput;
};


export type MutationCreateChuyenKhoaArgs = {
  newChuyenKhoaInput: NewChuyenKhoaInput;
};


export type MutationCreateDatLichArgs = {
  newDatLichInput: NewDatLichInput;
};


export type MutationCreateDatlichBacSiArgs = {
  createDatlichBacSi: NewDatLichBacSiInput;
};


export type MutationCreateDichvuArgs = {
  createDichvuInput: CreateDichvuInput;
};


export type MutationCreateHoadonArgs = {
  createHoadonInput: CreateHoadonInput;
};


export type MutationCreateHoadonchidinhcanlamsangArgs = {
  createHoadonchidinhcanlamsang: CreateHoadonchidinhcanlamsangInput;
};


export type MutationCreateKetquacanlamsangArgs = {
  createKetquacanlamsangInput: CreateKetquacanlamsangInput;
};


export type MutationCreateLichKhamArgs = {
  createLichKham: CreateLichkhamInput;
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
  createKetQuaCLSList: Array<CreateKetquacanlamsangInput>;
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


export type MutationCreateTestArgs = {
  createTestInput: CreateTestInput;
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


export type MutationCreateVatTuYTeArgs = {
  createDichvuInput: CreateVattuyteInput;
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


export type MutationDeleteBlogArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteChuyenKhoaArgs = {
  _id: Scalars['String']['input'];
};


export type MutationDeleteDatLichArgs = {
  _id: Scalars['String']['input'];
};


export type MutationDeleteDatLichBacSiArgs = {
  _id: Scalars['String']['input'];
};


export type MutationDeleteDichvuArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteHoadonArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteLichKhamArgs = {
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


export type MutationDeleteVatTuYTeArgs = {
  id: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationRegisterUserArgs = {
  registerInput: RegisterInput;
};


export type MutationUpdateBacSiArgs = {
  input: UpdateBacSiInput;
};


export type MutationUpdateBenhArgs = {
  input: UpdateBenhInput;
};


export type MutationUpdateBenhNhanArgs = {
  input: UpdateBenhNhanInput;
};


export type MutationUpdateBlogArgs = {
  updateBlogInput: UpdateBlogInput;
};


export type MutationUpdateChuyenKhoaArgs = {
  updateChuyenKhoaInput: UpdateChuyenKhoaInput;
};


export type MutationUpdateDatLichArgs = {
  input: UpdateDatLichInput;
};


export type MutationUpdateDatlichBacSiArgs = {
  updateDatlichBacSi: UpdateDatLichBacSiInput;
};


export type MutationUpdateDichvuArgs = {
  updateDichvuInput: UpdateDichvuInput;
};


export type MutationUpdateHoadonArgs = {
  updateHoadonInput: UpdateHoadonInput;
};


export type MutationUpdateKetquacanlamsangArgs = {
  updateKetquacanlamsangInput: UpdateKetquacanlamsangInput;
};


export type MutationUpdateKichHoatArgs = {
  _id: Scalars['String']['input'];
};


export type MutationUpdateLichKhamArgs = {
  updateLichkham: UpdateLichkhamInput;
};


export type MutationUpdateLoaicanlamsangArgs = {
  updateLoaicanlamsangInput: UpdateLoaicanlamsangInput;
};


export type MutationUpdateNhanVienArgs = {
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


export type MutationUpdateTinhTrangHoaDonClsArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateToathuocArgs = {
  updateToathuocInput: UpdateToathuocInput;
};


export type MutationUpdateTrangThaiCanLamSangArgs = {
  id: Scalars['String']['input'];
  trangthai: Scalars['String']['input'];
};


export type MutationUpdateTrangThaiDatLichArgs = {
  id: Scalars['String']['input'];
  trangthai: Scalars['String']['input'];
};


export type MutationUpdateTrangThaiDatLichBacSiArgs = {
  id: Scalars['String']['input'];
  trangthai: Scalars['String']['input'];
};


export type MutationUpdateTrangThaiHoaDonArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateTrangThaiKhamArgs = {
  id: Scalars['String']['input'];
  trangthai: Scalars['String']['input'];
};


export type MutationUpdateTrangThaiThongTinUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationUpdateUserbySoDienThoaiArgs = {
  sodienthoai: Scalars['String']['input'];
  user: Scalars['String']['input'];
};


export type MutationUpdateUuTienArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateVatTuYTeArgs = {
  updateDichvuInput: UpdateVattuyteInput;
};


export type MutationXulyKhoaArgs = {
  id: Scalars['String']['input'];
};

export type NewBacSiInput = {
  cccd: Scalars['String']['input'];
  chuyenkhoa: Scalars['ID']['input'];
  diachi: Scalars['String']['input'];
  gioitinh: Scalars['Boolean']['input'];
  hoten: Scalars['String']['input'];
  ngayBD: Scalars['DateTime']['input'];
  ngaysinh: Scalars['DateTime']['input'];
  phongs: Array<Scalars['ID']['input']>;
  sodienthoai: Scalars['String']['input'];
  username: Scalars['String']['input'];
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
  sodienthoai: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type NewChuyenKhoaInput = {
  mota: Scalars['String']['input'];
  tenkhoa: Scalars['String']['input'];
};

export type NewDatLichBacSiInput = {
  bacsi: Scalars['String']['input'];
  cccd: Scalars['String']['input'];
  email: Scalars['String']['input'];
  gioitinh: Scalars['Boolean']['input'];
  hoten: Scalars['String']['input'];
  motabenh: Scalars['String']['input'];
  ngaydat: Scalars['DateTime']['input'];
  ngaykham: Scalars['DateTime']['input'];
  ngaysinh: Scalars['DateTime']['input'];
  phien: PhienInput;
  sodienthoai: Scalars['String']['input'];
  trangthai?: InputMaybe<Scalars['String']['input']>;
};

export type NewDatLichInput = {
  cccd: Scalars['String']['input'];
  email: Scalars['String']['input'];
  gioitinh: Scalars['Boolean']['input'];
  hoten: Scalars['String']['input'];
  motabenh: Scalars['String']['input'];
  ngaydat: Scalars['DateTime']['input'];
  ngaykham: Scalars['DateTime']['input'];
  ngaysinh: Scalars['DateTime']['input'];
  sodienthoai: Scalars['String']['input'];
};

export type NewLoaiCanLamSangInput = {
  gia: Scalars['Float']['input'];
  loaicanlamsang: Scalars['String']['input'];
  mota: Scalars['String']['input'];
  tenxetnghiem: Scalars['String']['input'];
};

export type NewNhanVienInput = {
  cccd: Scalars['String']['input'];
  chucvu: Scalars['String']['input'];
  diachi: Scalars['String']['input'];
  gioitinh: Scalars['Boolean']['input'];
  hoten: Scalars['String']['input'];
  ngayBD: Scalars['DateTime']['input'];
  ngaysinh: Scalars['DateTime']['input'];
  phongs: Array<Scalars['String']['input']>;
  sodienthoai: Scalars['String']['input'];
  username: Scalars['String']['input'];
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
  giaBHYT: Scalars['Float']['input'];
  giaKhongBHYT: Scalars['Float']['input'];
  hamluong: Scalars['Float']['input'];
  hansudung: Scalars['String']['input'];
  nhasanxuat: Scalars['String']['input'];
  soluong: Scalars['Int']['input'];
  tenPhoBien: Scalars['String']['input'];
  tenthuoc: Scalars['String']['input'];
};

export type NewUserInput = {
  avatar?: InputMaybe<LinkImageInput>;
  email: Scalars['String']['input'];
  isLocked: Scalars['Boolean']['input'];
  password: Scalars['String']['input'];
  role: UserRole;
  username: Scalars['String']['input'];
};

export type NhanVien = {
  __typename?: 'NhanVien';
  _id: Scalars['ID']['output'];
  cccd: Scalars['String']['output'];
  chucvu: Scalars['String']['output'];
  diachi: Scalars['String']['output'];
  gioitinh: Scalars['Boolean']['output'];
  hoten: Scalars['String']['output'];
  ngayBD: Scalars['DateTime']['output'];
  ngaysinh: Scalars['DateTime']['output'];
  phongs: Array<Phong>;
  sodienthoai: Scalars['String']['output'];
  user: Users;
};

export type OnlyUser = BacSi | BenhNhan | NhanVien | Users;

export type PhienInput = {
  batdau: Scalars['String']['input'];
  ketthuc: Scalars['String']['input'];
  soluongToiDa: Scalars['Float']['input'];
  trangthai: Scalars['Boolean']['input'];
};

export type Phienkham = {
  __typename?: 'Phienkham';
  ngaytrongtuan: Scalars['String']['output'];
  phiens: Array<Phiens>;
};

export type PhienkhamInput = {
  ngaytrongtuan: Scalars['String']['input'];
  phiens: Array<PhienInput>;
};

export type Phiens = {
  __typename?: 'Phiens';
  batdau: Scalars['String']['output'];
  ketthuc: Scalars['String']['output'];
  soluongToiDa: Scalars['Float']['output'];
  trangthai: Scalars['Boolean']['output'];
};

export type PhieuXacNhan = {
  __typename?: 'PhieuXacNhan';
  _id: Scalars['ID']['output'];
  benhnhan: BenhNhan;
  ngaykham: Scalars['DateTime']['output'];
  ngaytao: Scalars['DateTime']['output'];
  phien: Phiens;
  phieuchidinhcanlamsang?: Maybe<Phieuchidinhcanlamsang>;
  phongs: Array<Phong>;
  sothutu: Scalars['Int']['output'];
  trangthai: TrangThaiKham;
};

export type Phieuchidinhcanlamsang = {
  __typename?: 'Phieuchidinhcanlamsang';
  _id: Scalars['ID']['output'];
  bacsi: BacSi;
  benhnhan: BenhNhan;
  bhyt: Scalars['Boolean']['output'];
  ketquacanlamsangs: Array<KetQuaCanLamSang>;
  ngaytao: Scalars['DateTime']['output'];
  phieuxacnhan: PhieuXacNhan;
  trangthai: TrangThaiCls;
  truoc: Scalars['Boolean']['output'];
};

export type Phong = {
  __typename?: 'Phong';
  _id: Scalars['ID']['output'];
  chuyenkhoa?: Maybe<ChuyenKhoa>;
  mota: Scalars['String']['output'];
  tenphong: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  CountBacSi: Scalars['Float']['output'];
  CountBenhNhan: Scalars['Float']['output'];
  CountChuyenKhoa: Scalars['Float']['output'];
  CountHoadon: Scalars['Float']['output'];
  CountHoadonchidinhcanlamsang: Scalars['Float']['output'];
  CountNhanVien: Scalars['Float']['output'];
  CountPhieuCLS: Scalars['Float']['output'];
  CountPhong: Scalars['Float']['output'];
  CountThuoc: Scalars['Float']['output'];
  CountToaThuocbyBacSi: Scalars['Float']['output'];
  countBlogs: Scalars['Float']['output'];
  countPhieuXacNhanByDate: Scalars['Float']['output'];
  countUser: Scalars['Float']['output'];
  findAllRelatedKetQuaCanLamSang?: Maybe<Array<KetQuaCanLamSang>>;
  get: Test;
  getAllBacSi: Array<BacSi>;
  getAllBenh: Array<Benh>;
  getAllBenhNhan: Array<BenhNhan>;
  getAllBenhNhanNoPagination: Array<BenhNhan>;
  getAllBlog: Array<Blog>;
  getAllByNgayVaPhong: Array<PhieuXacNhan>;
  getAllChuyenKhoa: Array<ChuyenKhoa>;
  getAllDatLich?: Maybe<Array<DatLich>>;
  getAllDatLichBacSiByBacSi?: Maybe<Array<DatLichBacSi>>;
  getAllDatLichBacSiByTrangThai?: Maybe<Array<DatLichBacSi>>;
  getAllDatLichbyTrangThai?: Maybe<Array<DatLich>>;
  getAllDatlichBacSi?: Maybe<Array<DatLichBacSi>>;
  getAllDichVu: Array<Dichvu>;
  getAllHoaDonPhieuCanLamSang: Array<Hoadonchidinhcanlamsang>;
  getAllHoadon: Array<Hoadon>;
  getAllHoadonByBenhNhan: Array<Hoadon>;
  getAllLich: Array<Lichkham>;
  getAllLoaiCLS: Array<LoaiCanLamSang>;
  getAllNhanVien: Array<NhanVien>;
  getAllPhieuCLS: Array<Phieuchidinhcanlamsang>;
  getAllPhieuCLSbyNgay: Array<Phieuchidinhcanlamsang>;
  getAllPhieuXacNhan: Array<PhieuXacNhan>;
  getAllPhieuXacNhanDaXetNgiem?: Maybe<Array<PhieuXacNhan>>;
  getAllPhong: Array<Phong>;
  getAllSinhHieuByBenhNhan: Sinhhieu;
  getAllSinhhieu: Array<Sinhhieu>;
  getAllSoBenh: Array<Sobenh>;
  getAllThuoc: Array<Thuoc>;
  getAllToaThuoc: Array<Toathuoc>;
  getAllToaThuocbyBacSi: Array<Toathuoc>;
  getAllToaThuocbyBenhNhan: Array<Toathuoc>;
  getAllUsers: Array<Users>;
  getAllVatTuYTe: Array<Vattuyte>;
  getBacSibyId?: Maybe<BacSi>;
  getBacSibyUserId?: Maybe<BacSi>;
  getBenhNhanbyHoten?: Maybe<Array<BenhNhan>>;
  getBenhNhanbyId: BenhNhan;
  getBenhNhanbySodienthoai?: Maybe<BenhNhan>;
  getBenhNhanbyUserId?: Maybe<BenhNhan>;
  getBlogbyId: Blog;
  getHoaDonCLSbyBenhNhan: Array<Hoadonchidinhcanlamsang>;
  getHoaDonbyNgay: Array<Hoadon>;
  getLastestBlog: Array<Blog>;
  getLichKham: Lichkham;
  getNhanVienbyId?: Maybe<NhanVien>;
  getNhanVienbyUserId?: Maybe<NhanVien>;
  getPhieuCanLamSangbyPhieuXacNhanId?: Maybe<Phieuchidinhcanlamsang>;
  getStartAndEndOfMonth: Array<MonthRange>;
  getThuocPagination: Array<Thuoc>;
  getThuocbyIds: Array<Thuoc>;
  getTongTienbyMonth: Array<MongthRange>;
  getTongTienbyMonthCLS: Array<MonthRangeCls>;
  getTotalThanhTienByDate: Scalars['Float']['output'];
  getTotalThanhTienCLSByDate: Scalars['Float']['output'];
  getUserByEmail: Users;
  getUserById?: Maybe<Users>;
  getUserByUsername?: Maybe<Users>;
  onlyUser?: Maybe<OnlyUser>;
};


export type QueryCountToaThuocbyBacSiArgs = {
  bacsiId: Scalars['String']['input'];
};


export type QueryCountPhieuXacNhanByDateArgs = {
  end: Scalars['DateTime']['input'];
  start: Scalars['DateTime']['input'];
};


export type QueryFindAllRelatedKetQuaCanLamSangArgs = {
  ketQuaIds: Array<Scalars['String']['input']>;
};


export type QueryGetArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetAllBacSiArgs = {
  fetchPagination: FetchPagination;
};


export type QueryGetAllBenhNhanArgs = {
  fetchPagination: FetchPagination;
};


export type QueryGetAllBlogArgs = {
  fetchPagination: FetchPagination;
};


export type QueryGetAllByNgayVaPhongArgs = {
  ngaykham: Scalars['String']['input'];
  phongIds: Scalars['String']['input'];
  trangthai: Scalars['String']['input'];
};


export type QueryGetAllDatLichBacSiByBacSiArgs = {
  bacsi: Scalars['String']['input'];
};


export type QueryGetAllDatLichBacSiByTrangThaiArgs = {
  trangthai: Scalars['String']['input'];
};


export type QueryGetAllDatLichbyTrangThaiArgs = {
  trangthai: Scalars['String']['input'];
};


export type QueryGetAllHoaDonPhieuCanLamSangArgs = {
  fetchPagination: FetchPagination;
};


export type QueryGetAllHoadonArgs = {
  fetchPagination: FetchPagination;
};


export type QueryGetAllHoadonByBenhNhanArgs = {
  benhnhanId: Scalars['String']['input'];
};


export type QueryGetAllNhanVienArgs = {
  fetchPagination: FetchPagination;
};


export type QueryGetAllPhieuClSbyNgayArgs = {
  ngaytao: Scalars['DateTime']['input'];
  trangthai: Scalars['String']['input'];
};


export type QueryGetAllPhieuXacNhanDaXetNgiemArgs = {
  ngaykham: Scalars['String']['input'];
  phongIds: Scalars['String']['input'];
};


export type QueryGetAllSinhHieuByBenhNhanArgs = {
  benhnhanId: Scalars['String']['input'];
};


export type QueryGetAllToaThuocbyBacSiArgs = {
  bacsiId: Scalars['String']['input'];
  fetchPagination: FetchPagination;
};


export type QueryGetAllToaThuocbyBenhNhanArgs = {
  benhnhanId: Scalars['String']['input'];
};


export type QueryGetAllUsersArgs = {
  fetchUsersArgs: FetchUsersArgs;
};


export type QueryGetBacSibyIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetBacSibyUserIdArgs = {
  user: Scalars['String']['input'];
};


export type QueryGetBenhNhanbyHotenArgs = {
  hoten: Scalars['String']['input'];
};


export type QueryGetBenhNhanbyIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetBenhNhanbySodienthoaiArgs = {
  sodienthoai: Scalars['String']['input'];
};


export type QueryGetBenhNhanbyUserIdArgs = {
  user: Scalars['String']['input'];
};


export type QueryGetBlogbyIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetHoaDonClSbyBenhNhanArgs = {
  idbenhnhan: Scalars['String']['input'];
};


export type QueryGetHoaDonbyNgayArgs = {
  ngaykham: Scalars['String']['input'];
};


export type QueryGetLastestBlogArgs = {
  limit: Scalars['Float']['input'];
};


export type QueryGetLichKhamArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetNhanVienbyIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetNhanVienbyUserIdArgs = {
  user: Scalars['String']['input'];
};


export type QueryGetPhieuCanLamSangbyPhieuXacNhanIdArgs = {
  phieuxacnhan: Scalars['String']['input'];
};


export type QueryGetStartAndEndOfMonthArgs = {
  year: Scalars['Float']['input'];
};


export type QueryGetThuocPaginationArgs = {
  fetchPagination: FetchPagination;
};


export type QueryGetThuocbyIdsArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type QueryGetTongTienbyMonthArgs = {
  year: Scalars['Float']['input'];
};


export type QueryGetTongTienbyMonthClsArgs = {
  year: Scalars['Float']['input'];
};


export type QueryGetTotalThanhTienByDateArgs = {
  end: Scalars['DateTime']['input'];
  start: Scalars['DateTime']['input'];
};


export type QueryGetTotalThanhTienClsByDateArgs = {
  end: Scalars['DateTime']['input'];
  start: Scalars['DateTime']['input'];
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

export type RegisterInput = {
  avatar?: InputMaybe<LinkImageInput>;
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
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

export type Subscription = {
  __typename?: 'Subscription';
  newDatLich: DatLich;
  newHoaDon: Hoadon;
  newHoaDonCLS: Hoadonchidinhcanlamsang;
  newPhieuXacNhan: PhieuXacNhan;
  updateCLSDaXetNghiem: Phieuchidinhcanlamsang;
  updateCLSThanhToan: Phieuchidinhcanlamsang;
};

export type Test = {
  __typename?: 'Test';
  _id: Scalars['ID']['output'];
  adress: Scalars['String']['output'];
  age: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type Thuoc = {
  __typename?: 'Thuoc';
  _id: Scalars['ID']['output'];
  bhyt: Scalars['Boolean']['output'];
  dangthuoc: Scalars['String']['output'];
  donvi: Scalars['String']['output'];
  giaBHYT: Scalars['Float']['output'];
  giaKhongBHYT: Scalars['Float']['output'];
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

export enum TrangThaiCls {
  Chokham = 'CHOKHAM',
  Daxetnghiem = 'DAXETNGHIEM',
  Thanhtoan = 'THANHTOAN'
}

export enum TrangThaiDatKham {
  Dangxet = 'DANGXET',
  Huy = 'HUY',
  Xacnhan = 'XACNHAN'
}

export enum TrangThaiKham {
  Chokham = 'CHOKHAM',
  Choxetngiem = 'CHOXETNGIEM',
  Daxetnghiem = 'DAXETNGHIEM',
  Hoantat = 'HOANTAT'
}

export enum TypeImage {
  File = 'FILE',
  Link = 'LINK'
}

export type UpdateBacSiInput = {
  cccd?: InputMaybe<Scalars['String']['input']>;
  chuyenkhoa?: InputMaybe<Scalars['ID']['input']>;
  diachi?: InputMaybe<Scalars['String']['input']>;
  gioitinh?: InputMaybe<Scalars['Boolean']['input']>;
  hoten?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  ngayBD?: InputMaybe<Scalars['DateTime']['input']>;
  ngaysinh?: InputMaybe<Scalars['DateTime']['input']>;
  phongs?: InputMaybe<Array<Scalars['ID']['input']>>;
  sodienthoai?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
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
  sodienthoai?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateBlogInput = {
  hinhanh?: InputMaybe<LinkImageInput>;
  id: Scalars['String']['input'];
  noidung?: InputMaybe<Scalars['String']['input']>;
  tieude?: InputMaybe<Scalars['String']['input']>;
  tomtat?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateChuyenKhoaInput = {
  id: Scalars['String']['input'];
  mota?: InputMaybe<Scalars['String']['input']>;
  tenkhoa?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateDatLichBacSiInput = {
  bacsi?: InputMaybe<Scalars['String']['input']>;
  cccd?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  gioitinh?: InputMaybe<Scalars['Boolean']['input']>;
  hoten?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  motabenh?: InputMaybe<Scalars['String']['input']>;
  ngaydat?: InputMaybe<Scalars['DateTime']['input']>;
  ngaykham?: InputMaybe<Scalars['DateTime']['input']>;
  ngaysinh?: InputMaybe<Scalars['DateTime']['input']>;
  phien?: InputMaybe<PhienInput>;
  sodienthoai?: InputMaybe<Scalars['String']['input']>;
  trangthai?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateDatLichInput = {
  cccd?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  gioitinh?: InputMaybe<Scalars['Boolean']['input']>;
  hoten?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  motabenh?: InputMaybe<Scalars['String']['input']>;
  ngaydat?: InputMaybe<Scalars['DateTime']['input']>;
  ngaykham?: InputMaybe<Scalars['DateTime']['input']>;
  ngaysinh?: InputMaybe<Scalars['DateTime']['input']>;
  sodienthoai?: InputMaybe<Scalars['String']['input']>;
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
  bhyt?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  ngaytao?: InputMaybe<Scalars['DateTime']['input']>;
  thuocs: Array<DichVuInput>;
  vattuyte: Array<DichVuInput>;
};

export type UpdateKetquacanlamsangInput = {
  hinhanh: Array<LinkImageInput>;
  id: Scalars['String']['input'];
  ketluan: Scalars['String']['input'];
  loaicanlamsang?: InputMaybe<Scalars['String']['input']>;
  thietbi: Scalars['String']['input'];
};

export type UpdateLichkhamInput = {
  id: Scalars['String']['input'];
  ngaykham?: InputMaybe<Array<PhienkhamInput>>;
  ngaynghi?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type UpdateLoaicanlamsangInput = {
  gia?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['String']['input'];
  loaicanlamsang?: InputMaybe<Scalars['String']['input']>;
  mota?: InputMaybe<Scalars['String']['input']>;
  tenxetnghiem?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateNhanVienInput = {
  cccd?: InputMaybe<Scalars['String']['input']>;
  chucvu?: InputMaybe<Scalars['String']['input']>;
  diachi?: InputMaybe<Scalars['String']['input']>;
  gioitinh?: InputMaybe<Scalars['Boolean']['input']>;
  hoten?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  ngayBD?: InputMaybe<Scalars['DateTime']['input']>;
  ngaysinh?: InputMaybe<Scalars['DateTime']['input']>;
  phongs?: InputMaybe<Array<Scalars['String']['input']>>;
  sodienthoai?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePhieuXacNhanInput = {
  benhnhan?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  ngaykham?: InputMaybe<Scalars['DateTime']['input']>;
  ngaytao?: InputMaybe<Scalars['DateTime']['input']>;
  phien?: InputMaybe<PhienInput>;
  phongs?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UpdatePhieuchidinhcanlamsangInput = {
  bacsi?: InputMaybe<Scalars['String']['input']>;
  benhnhan?: InputMaybe<Scalars['String']['input']>;
  bhyt?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  ngaytao?: InputMaybe<Scalars['DateTime']['input']>;
  phieuxacnhan?: InputMaybe<Scalars['String']['input']>;
  truoc?: InputMaybe<Scalars['Boolean']['input']>;
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
  giaBHYT?: InputMaybe<Scalars['Float']['input']>;
  giaKhongBHYT?: InputMaybe<Scalars['Float']['input']>;
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
  role: UserRole;
  username: Scalars['String']['input'];
};

export type UpdateVattuyteInput = {
  chiphi?: InputMaybe<Array<ChiPhiInput>>;
  dvt?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  soluong?: InputMaybe<Scalars['Int']['input']>;
  tenvattu?: InputMaybe<Scalars['String']['input']>;
};

export enum UserRole {
  Admin = 'ADMIN',
  Doctor = 'DOCTOR',
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
  refreshToken: Scalars['String']['output'];
  role: UserRole;
  thongtin: Scalars['Boolean']['output'];
  username: Scalars['String']['output'];
};

export type Vattuyte = {
  __typename?: 'Vattuyte';
  _id: Scalars['ID']['output'];
  chiphi: Array<ChiPhi>;
  dvt: Scalars['String']['output'];
  soluong: Scalars['Int']['output'];
  tenvattu: Scalars['String']['output'];
};

export type LoginMutationVariables = Exact<{
  input: LoginUserInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', access_token: string } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout?: boolean | null };

export type CreateUserMutationVariables = Exact<{
  input: NewUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'Users', _id: string } };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: boolean };

export type UpdateUserMutationVariables = Exact<{
  update: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'Users', _id: string, username: string, email: string, password: string, role: UserRole, isLocked: boolean, avatar: { __typename?: 'LinkImage', url: string, fileName: string, type: TypeImage } } };

export type XulyKhoaMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type XulyKhoaMutation = { __typename?: 'Mutation', xulyKhoa: { __typename?: 'Users', isLocked: boolean } };

export type CreateToaThuocMutationVariables = Exact<{
  input: CreateToathuocInput;
}>;


export type CreateToaThuocMutation = { __typename?: 'Mutation', createToathuoc: { __typename?: 'Toathuoc', _id: string, soluongs: Array<number>, bhyt: boolean, ngaytaikham: any, ngaytao: any, benhnhan: { __typename?: 'BenhNhan', hoten: string }, bacsi: { __typename?: 'BacSi', hoten: string }, thuocs: Array<{ __typename?: 'Thuoc', tenthuoc: string, tenPhoBien: string, hamluong: number, dangthuoc: string, donvi: string }>, benhs: Array<{ __typename?: 'Benh', tenbenh: string }> } };

export type UpdateSinhhieuMutationVariables = Exact<{
  input: UpdateSinhhieuInput;
}>;


export type UpdateSinhhieuMutation = { __typename?: 'Mutation', updateSinhhieu: { __typename?: 'Sinhhieu', _id: string, mach: number, nhietdo: number, ha: string, chieucao: number, cannang: number, bmi: number, benhmangtinh: boolean } };

export type CreatePhieuchidinhcanlamsangMutationVariables = Exact<{
  phieuchidinh: CreatePhieuchidinhcanlamsangInput;
  ketqua: Array<CreateKetquacanlamsangInput> | CreateKetquacanlamsangInput;
}>;


export type CreatePhieuchidinhcanlamsangMutation = { __typename?: 'Mutation', createPhieuchidinhcanlamsang: { __typename?: 'Phieuchidinhcanlamsang', _id: string, ketquacanlamsangs: Array<{ __typename?: 'KetQuaCanLamSang', loaicanlamsang: { __typename?: 'LoaiCanLamSang', tenxetnghiem: string, gia: number, loaicanlamsang: string } }> } };

export type UpdateKetquacanlamsangMutationVariables = Exact<{
  input: UpdateKetquacanlamsangInput;
}>;


export type UpdateKetquacanlamsangMutation = { __typename?: 'Mutation', updateKetquacanlamsang: { __typename?: 'KetQuaCanLamSang', _id: string, ketluan?: string | null, thietbi?: string | null } };

export type CreateBacSiMutationVariables = Exact<{
  newBacSiInput: NewBacSiInput;
  createLichkham: CreateLichkhamInput;
}>;


export type CreateBacSiMutation = { __typename?: 'Mutation', createBacSi: { __typename?: 'BacSi', _id: string } };

export type UpdateBacSiMutationVariables = Exact<{
  input: UpdateBacSiInput;
}>;


export type UpdateBacSiMutation = { __typename?: 'Mutation', updateBacSi: { __typename?: 'BacSi', _id: string } };

export type DeleteBacSiMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteBacSiMutation = { __typename?: 'Mutation', deleteBacSi: boolean };

export type CreateBenhNhanMutationVariables = Exact<{
  input: NewBenhNhanInput;
}>;


export type CreateBenhNhanMutation = { __typename?: 'Mutation', createBenhNhan: { __typename?: 'BenhNhan', _id: string } };

export type UpdateBenhNhanMutationVariables = Exact<{
  input: UpdateBenhNhanInput;
}>;


export type UpdateBenhNhanMutation = { __typename?: 'Mutation', updateBenhNhan: { __typename?: 'BenhNhan', _id: string } };

export type DeleteBenhNhanMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteBenhNhanMutation = { __typename?: 'Mutation', deleteBenhNhan: boolean };

export type CreateThuocMutationVariables = Exact<{
  input: NewThuocInput;
}>;


export type CreateThuocMutation = { __typename?: 'Mutation', createThuoc: { __typename?: 'Thuoc', _id: string } };

export type UpdateThuocMutationVariables = Exact<{
  input: UpdateThuocInput;
}>;


export type UpdateThuocMutation = { __typename?: 'Mutation', updateThuoc: { __typename?: 'Thuoc', _id: string } };

export type DeleteThuocMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteThuocMutation = { __typename?: 'Mutation', deleteThuoc: boolean };

export type CreateHoaDonMutationVariables = Exact<{
  input: CreateHoadonInput;
}>;


export type CreateHoaDonMutation = { __typename?: 'Mutation', createHoadon: { __typename?: 'Hoadon', _id: string } };

export type UpdateHoaDonMutationVariables = Exact<{
  input: UpdateHoadonInput;
}>;


export type UpdateHoaDonMutation = { __typename?: 'Mutation', updateHoadon: { __typename?: 'Hoadon', _id: string, thanhtien: number } };

export type UpdateTrangThaiHoaDonMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type UpdateTrangThaiHoaDonMutation = { __typename?: 'Mutation', updateTrangThaiHoaDon: { __typename?: 'Hoadon', _id: string, trangthai: boolean } };

export type UpdateTrangThaiCanLamSangMutationVariables = Exact<{
  id: Scalars['String']['input'];
  trangthai: Scalars['String']['input'];
}>;


export type UpdateTrangThaiCanLamSangMutation = { __typename?: 'Mutation', updateTrangThaiCanLamSang: { __typename?: 'Phieuchidinhcanlamsang', _id: string, trangthai: TrangThaiCls } };

export type DeleteHoaDonMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteHoaDonMutation = { __typename?: 'Mutation', deleteHoadon: boolean };

export type CreatePhieuXacNhanMutationVariables = Exact<{
  input: CreatePhieuXacNhanInput;
}>;


export type CreatePhieuXacNhanMutation = { __typename?: 'Mutation', createPhieuXacNhan: { __typename?: 'PhieuXacNhan', _id: string } };

export type UpdateTrangThaiKhamMutationVariables = Exact<{
  id: Scalars['String']['input'];
  trangthai: Scalars['String']['input'];
}>;


export type UpdateTrangThaiKhamMutation = { __typename?: 'Mutation', updateTrangThaiKham: { __typename?: 'PhieuXacNhan', _id: string, trangthai: TrangThaiKham } };

export type UpdateTrangThaiDatLichMutationVariables = Exact<{
  id: Scalars['String']['input'];
  trangthai: Scalars['String']['input'];
}>;


export type UpdateTrangThaiDatLichMutation = { __typename?: 'Mutation', updateTrangThaiDatLich: { __typename?: 'DatLich', _id: string, trangthai: TrangThaiDatKham } };

export type DeleteDatlichMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteDatlichMutation = { __typename?: 'Mutation', deleteDatLich: boolean };

export type CreateNhanVienMutationVariables = Exact<{
  input: NewNhanVienInput;
}>;


export type CreateNhanVienMutation = { __typename?: 'Mutation', createNhanVien: { __typename?: 'NhanVien', _id: string } };

export type UpdateNhanVienMutationVariables = Exact<{
  input: UpdateNhanVienInput;
}>;


export type UpdateNhanVienMutation = { __typename?: 'Mutation', updateNhanVien: { __typename?: 'NhanVien', _id: string } };

export type DeleteNhanVienMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteNhanVienMutation = { __typename?: 'Mutation', deleteNhanVien: boolean };

export type CreateSinhHieuMutationVariables = Exact<{
  input: CreateSinhhieuInput;
}>;


export type CreateSinhHieuMutation = { __typename?: 'Mutation', createSinhhieu: { __typename?: 'Sinhhieu', _id: string } };

export type CreateHoadonchidinhcanlamsangMutationVariables = Exact<{
  input: CreateHoadonchidinhcanlamsangInput;
}>;


export type CreateHoadonchidinhcanlamsangMutation = { __typename?: 'Mutation', createHoadonchidinhcanlamsang: { __typename?: 'Hoadonchidinhcanlamsang', _id: string } };

export type CreateBlogMutationVariables = Exact<{
  input: CreateBlogInput;
}>;


export type CreateBlogMutation = { __typename?: 'Mutation', createBlog: { __typename?: 'Blog', _id: string } };

export type UpdateBlogMutationVariables = Exact<{
  input: UpdateBlogInput;
}>;


export type UpdateBlogMutation = { __typename?: 'Mutation', updateBlog: { __typename?: 'Blog', _id: string } };

export type DeleteBlogMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteBlogMutation = { __typename?: 'Mutation', deleteBlog: boolean };

export type UpdateKichHoatMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type UpdateKichHoatMutation = { __typename?: 'Mutation', updateKichHoat: boolean };

export type UpdateTinhTrangHoaDonClsMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type UpdateTinhTrangHoaDonClsMutation = { __typename?: 'Mutation', updateTinhTrangHoaDonCLS: { __typename?: 'Hoadonchidinhcanlamsang', _id: string } };

export type UpdateTrangThaiDatLichBacSiMutationVariables = Exact<{
  id: Scalars['String']['input'];
  trangthai: Scalars['String']['input'];
}>;


export type UpdateTrangThaiDatLichBacSiMutation = { __typename?: 'Mutation', updateTrangThaiDatLichBacSi: { __typename?: 'DatLichBacSi', _id: string } };

export type CreateTestMutationVariables = Exact<{
  input: CreateTestInput;
}>;


export type CreateTestMutation = { __typename?: 'Mutation', createTest: { __typename?: 'Test', _id: string } };

export type CreateBenhMutationVariables = Exact<{
  input: NewBenhInput;
}>;


export type CreateBenhMutation = { __typename?: 'Mutation', createBenh: { __typename?: 'Benh', _id: string } };

export type UpdateUutienMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type UpdateUutienMutation = { __typename?: 'Mutation', updateUuTien: { __typename?: 'Phieuchidinhcanlamsang', _id: string, truoc: boolean } };

export type OnlyUserQueryVariables = Exact<{ [key: string]: never; }>;


export type OnlyUserQuery = { __typename?: 'Query', onlyUser?: { __typename?: 'BacSi', _id: string, hoten: string, ngaysinh: any, gioitinh: boolean, diachi: string, sodienthoai: string, cccd: string, ngayBD: any, user: { __typename?: 'Users', _id: string, username: string, email: string, role: UserRole, isLocked: boolean, avatar: { __typename?: 'LinkImage', url: string, fileName: string, type: TypeImage } }, phongs: Array<{ __typename?: 'Phong', _id: string, tenphong: string }>, chuyenkhoa: { __typename?: 'ChuyenKhoa', tenkhoa: string } } | { __typename?: 'BenhNhan', _id: string, hoten: string, ngaysinh: any, gioitinh: boolean, diachi: string, sodienthoai: string, cccd: string, bhyt: string, user: { __typename?: 'Users', email: string } } | { __typename?: 'NhanVien', _id: string, hoten: string, ngaysinh: any, gioitinh: boolean, diachi: string, sodienthoai: string, cccd: string, ngayBD: any, chucvu: string, user: { __typename?: 'Users', _id: string, username: string, email: string, role: UserRole, isLocked: boolean, avatar: { __typename?: 'LinkImage', url: string, fileName: string, type: TypeImage } }, phongs: Array<{ __typename?: 'Phong', _id: string, tenphong: string }> } | { __typename?: 'Users', _id: string, username: string, email: string, role: UserRole, isLocked: boolean, avatar: { __typename?: 'LinkImage', url: string, fileName: string, type: TypeImage } } | null };

export type GetAllUserQueryVariables = Exact<{
  input: FetchUsersArgs;
}>;


export type GetAllUserQuery = { __typename?: 'Query', countUser: number, getAllUsers: Array<{ __typename?: 'Users', _id: string, username: string, email: string, password: string, role: UserRole, isLocked: boolean, refreshToken: string, avatar: { __typename?: 'LinkImage', fileName: string, url: string, type: TypeImage } }> };

export type GetAllBacSiQueryVariables = Exact<{
  input: FetchPagination;
}>;


export type GetAllBacSiQuery = { __typename?: 'Query', CountBacSi: number, getAllBacSi: Array<{ __typename?: 'BacSi', _id: string, hoten: string, ngaysinh: any, gioitinh: boolean, diachi: string, sodienthoai: string, cccd: string, lichkham?: string | null, ngayBD: any, phongs: Array<{ __typename?: 'Phong', _id: string, tenphong: string }>, chuyenkhoa: { __typename?: 'ChuyenKhoa', _id: string, tenkhoa: string } }> };

export type CountBacSiQueryVariables = Exact<{ [key: string]: never; }>;


export type CountBacSiQuery = { __typename?: 'Query', CountBacSi: number };

export type CountNhanVienQueryVariables = Exact<{ [key: string]: never; }>;


export type CountNhanVienQuery = { __typename?: 'Query', CountNhanVien: number };

export type CountPhongQueryVariables = Exact<{ [key: string]: never; }>;


export type CountPhongQuery = { __typename?: 'Query', CountPhong: number };

export type CountChuyenKhoaQueryVariables = Exact<{ [key: string]: never; }>;


export type CountChuyenKhoaQuery = { __typename?: 'Query', CountChuyenKhoa: number };

export type GetAllBenhNhanQueryVariables = Exact<{
  input: FetchPagination;
}>;


export type GetAllBenhNhanQuery = { __typename?: 'Query', CountBenhNhan: number, getAllBenhNhan: Array<{ __typename?: 'BenhNhan', _id: string, hoten: string, ngaysinh: any, gioitinh: boolean, diachi: string, sodienthoai: string, cccd: string, bhyt: string }> };

export type GetAllBenhNhanNoPaginationQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllBenhNhanNoPaginationQuery = { __typename?: 'Query', getAllBenhNhanNoPagination: Array<{ __typename?: 'BenhNhan', _id: string, hoten: string, ngaysinh: any, gioitinh: boolean, diachi: string, sodienthoai: string, cccd: string, bhyt: string }> };

export type GetThuocPaginationQueryVariables = Exact<{
  input: FetchPagination;
}>;


export type GetThuocPaginationQuery = { __typename?: 'Query', CountThuoc: number, getThuocPagination: Array<{ __typename?: 'Thuoc', _id: string, tenthuoc: string, tenPhoBien: string, dangthuoc: string, donvi: string, giaBHYT: number, giaKhongBHYT: number, hamluong: number, bhyt: boolean, nhasanxuat: string, hansudung: string, soluong: number }> };

export type GetAllThuocQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllThuocQuery = { __typename?: 'Query', getAllThuoc: Array<{ __typename?: 'Thuoc', _id: string, tenthuoc: string, tenPhoBien: string, dangthuoc: string, donvi: string, giaBHYT: number, giaKhongBHYT: number, hamluong: number, bhyt: boolean, nhasanxuat: string, hansudung: string, soluong: number }> };

export type GetAllSinhHieuByBenhNhanQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetAllSinhHieuByBenhNhanQuery = { __typename?: 'Query', getAllSinhHieuByBenhNhan: { __typename?: 'Sinhhieu', _id: string, mach: number, nhietdo: number, ha: string, chieucao: number, cannang: number, bmi: number, benhmangtinh: boolean } };

export type GetAllBenhQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllBenhQuery = { __typename?: 'Query', getAllBenh: Array<{ __typename?: 'Benh', tenbenh: string, motabenh: string, _id: string, maICD: string, chuongbenh: string }> };

export type GetAllNgayVaPhongQueryVariables = Exact<{
  ngaykham: Scalars['String']['input'];
  phongIds: Scalars['String']['input'];
  trangthai: Scalars['String']['input'];
}>;


export type GetAllNgayVaPhongQuery = { __typename?: 'Query', getAllByNgayVaPhong: Array<{ __typename?: 'PhieuXacNhan', _id: string, trangthai: TrangThaiKham, sothutu: number, ngaytao: any, ngaykham: any, benhnhan: { __typename?: 'BenhNhan', _id: string, hoten: string, ngaysinh: any, gioitinh: boolean, diachi: string, sodienthoai: string, cccd: string, bhyt: string, sinhhieu?: { __typename?: 'Sinhhieu', _id: string, mach: number, nhietdo: number, ha: string, chieucao: number, cannang: number, bmi: number, benhmangtinh: boolean } | null }, phongs: Array<{ __typename?: 'Phong', _id: string, tenphong: string }>, phien: { __typename?: 'Phiens', batdau: string, ketthuc: string, trangthai: boolean } }> };

export type GetAllLoaiClsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllLoaiClsQuery = { __typename?: 'Query', getAllLoaiCLS: Array<{ __typename?: 'LoaiCanLamSang', _id: string, tenxetnghiem: string, gia: number, loaicanlamsang: string, mota: string }> };

export type GetAllPhieuClSbyNgayQueryVariables = Exact<{
  ngaytao: Scalars['DateTime']['input'];
  trangthai: Scalars['String']['input'];
}>;


export type GetAllPhieuClSbyNgayQuery = { __typename?: 'Query', getAllPhieuCLSbyNgay: Array<{ __typename?: 'Phieuchidinhcanlamsang', _id: string, bhyt: boolean, truoc: boolean, benhnhan: { __typename?: 'BenhNhan', hoten: string, ngaysinh: any, gioitinh: boolean, sodienthoai: string }, bacsi: { __typename?: 'BacSi', hoten: string, ngaysinh: any, gioitinh: boolean, sodienthoai: string }, ketquacanlamsangs: Array<{ __typename?: 'KetQuaCanLamSang', _id: string, ketluan?: string | null, thietbi?: string | null, loaicanlamsang: { __typename?: 'LoaiCanLamSang', tenxetnghiem: string, gia: number, loaicanlamsang: string }, hinhanh?: Array<{ __typename?: 'LinkImage', fileName: string, url: string, type: TypeImage }> | null }> }> };

export type GetAllPhongQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPhongQuery = { __typename?: 'Query', getAllPhong: Array<{ __typename?: 'Phong', _id: string, tenphong: string, mota: string, chuyenkhoa?: { __typename?: 'ChuyenKhoa', tenkhoa: string } | null }> };

export type GetAllChuyenKhoaQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllChuyenKhoaQuery = { __typename?: 'Query', getAllChuyenKhoa: Array<{ __typename?: 'ChuyenKhoa', _id: string, tenkhoa: string, mota: string }> };

export type FindAllRelatedKetQuaCanLamSangQueryVariables = Exact<{
  input: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type FindAllRelatedKetQuaCanLamSangQuery = { __typename?: 'Query', findAllRelatedKetQuaCanLamSang?: Array<{ __typename?: 'KetQuaCanLamSang', _id: string, thietbi?: string | null, ketluan?: string | null, loaicanlamsang: { __typename?: 'LoaiCanLamSang', tenxetnghiem: string, loaicanlamsang: string }, hinhanh?: Array<{ __typename?: 'LinkImage', url: string, fileName: string, type: TypeImage }> | null }> | null };

export type GetAllHoaDonQueryVariables = Exact<{
  input: FetchPagination;
}>;


export type GetAllHoaDonQuery = { __typename?: 'Query', CountHoadon: number, getAllHoadon: Array<{ __typename?: 'Hoadon', _id: string, trangthai: boolean, ngaytao: any, bhyt: boolean, thanhtien: number, benhnhan: { __typename?: 'BenhNhan', hoten: string, ngaysinh: any, gioitinh: boolean, sodienthoai: string }, thuocs: Array<{ __typename?: 'DichVu', ten: string, gia: number, soluong: number, thanhtien: number }>, vattuyte: Array<{ __typename?: 'DichVu', ten: string, gia: number, soluong: number, thanhtien: number }> }> };

export type GetAllDatLichbyTrangThaiQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetAllDatLichbyTrangThaiQuery = { __typename?: 'Query', getAllDatLichbyTrangThai?: Array<{ __typename?: 'DatLich', _id: string, motabenh: string, ngaydat: any, ngaykham: any, trangthai: TrangThaiDatKham, email: string, benhnhan: { __typename?: 'BenhNhan', _id: string, hoten: string, ngaysinh: any, sodienthoai: string, diachi: string } }> | null };

export type GetAllPhieuXacNhanDaXetNghiemQueryVariables = Exact<{
  ngaykham: Scalars['String']['input'];
  phongIds: Scalars['String']['input'];
}>;


export type GetAllPhieuXacNhanDaXetNghiemQuery = { __typename?: 'Query', getAllPhieuXacNhanDaXetNgiem?: Array<{ __typename?: 'PhieuXacNhan', _id: string, trangthai: TrangThaiKham, sothutu: number, ngaytao: any, ngaykham: any, benhnhan: { __typename?: 'BenhNhan', _id: string, hoten: string, ngaysinh: any, gioitinh: boolean, diachi: string, sodienthoai: string, cccd: string, bhyt: string, sinhhieu?: { __typename?: 'Sinhhieu', _id: string, mach: number, nhietdo: number, ha: string, chieucao: number, cannang: number, bmi: number, benhmangtinh: boolean } | null }, phongs: Array<{ __typename?: 'Phong', _id: string, tenphong: string }>, phien: { __typename?: 'Phiens', batdau: string, ketthuc: string, trangthai: boolean }, phieuchidinhcanlamsang?: { __typename?: 'Phieuchidinhcanlamsang', _id: string, bhyt: boolean, ngaytao: any, trangthai: TrangThaiCls, bacsi: { __typename?: 'BacSi', _id: string, hoten: string }, ketquacanlamsangs: Array<{ __typename?: 'KetQuaCanLamSang', ketluan?: string | null, thietbi?: string | null, loaicanlamsang: { __typename?: 'LoaiCanLamSang', _id: string, tenxetnghiem: string, loaicanlamsang: string }, hinhanh?: Array<{ __typename?: 'LinkImage', url: string, fileName: string, type: TypeImage }> | null }> } | null }> | null };

export type GetAllNhanVienQueryVariables = Exact<{
  input: FetchPagination;
}>;


export type GetAllNhanVienQuery = { __typename?: 'Query', CountNhanVien: number, getAllNhanVien: Array<{ __typename?: 'NhanVien', _id: string, hoten: string, ngaysinh: any, gioitinh: boolean, diachi: string, sodienthoai: string, cccd: string, ngayBD: any, chucvu: string, phongs: Array<{ __typename?: 'Phong', _id: string, tenphong: string }> }> };

export type GetAllHoaDonPhieuCanLamSangQueryVariables = Exact<{
  input: FetchPagination;
}>;


export type GetAllHoaDonPhieuCanLamSangQuery = { __typename?: 'Query', CountHoadonchidinhcanlamsang: number, getAllHoaDonPhieuCanLamSang: Array<{ __typename?: 'Hoadonchidinhcanlamsang', _id: string, bhyt: boolean, thanhtien: number, tinhtrang: boolean, ngaytao: any, idPhieuCLS?: string | null, benhnhan: { __typename?: 'BenhNhan', hoten: string, ngaysinh: any, gioitinh: boolean, sodienthoai: string }, chitietcanlamsang: Array<{ __typename?: 'DichVu', ten: string, gia: number, soluong: number, thanhtien: number }> }> };

export type GetAllVattuyteQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllVattuyteQuery = { __typename?: 'Query', getAllVatTuYTe: Array<{ __typename?: 'Vattuyte', tenvattu: string, _id: string, soluong: number, dvt: string, chiphi: Array<{ __typename?: 'ChiPhi', bhyt: boolean, gia: number }> }> };

export type GetAllBlogsQueryVariables = Exact<{
  input: FetchPagination;
}>;


export type GetAllBlogsQuery = { __typename?: 'Query', countBlogs: number, getAllBlog: Array<{ __typename?: 'Blog', _id: string, tieude: string, tomtat?: string | null, noidung: string, luotxem: number, kichhoat: boolean, ngaytao: any, user: { __typename?: 'Users', username: string }, hinhanh: { __typename?: 'LinkImage', url: string, fileName: string, type: TypeImage } }> };

export type GetBlogbyIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetBlogbyIdQuery = { __typename?: 'Query', getBlogbyId: { __typename?: 'Blog', _id: string, tieude: string, tomtat?: string | null, noidung: string, luotxem: number, ngaytao: any, kichhoat: boolean, user: { __typename?: 'Users', username: string }, hinhanh: { __typename?: 'LinkImage', fileName: string, url: string, type: TypeImage } } };

export type CountPhieuXacNhanByDateQueryVariables = Exact<{
  start: Scalars['DateTime']['input'];
  end: Scalars['DateTime']['input'];
}>;


export type CountPhieuXacNhanByDateQuery = { __typename?: 'Query', countPhieuXacNhanByDate: number };

export type GetTotalThanhTienByDateQueryVariables = Exact<{
  start: Scalars['DateTime']['input'];
  end: Scalars['DateTime']['input'];
}>;


export type GetTotalThanhTienByDateQuery = { __typename?: 'Query', getTotalThanhTienByDate: number };

export type GetTotalThanhTienClsByDateQueryVariables = Exact<{
  start: Scalars['DateTime']['input'];
  end: Scalars['DateTime']['input'];
}>;


export type GetTotalThanhTienClsByDateQuery = { __typename?: 'Query', getTotalThanhTienCLSByDate: number };

export type GetStartAndEndOfMonthQueryVariables = Exact<{
  year: Scalars['Float']['input'];
}>;


export type GetStartAndEndOfMonthQuery = { __typename?: 'Query', getStartAndEndOfMonth: Array<{ __typename?: 'MonthRange', month: number, count: number }> };

export type GetTongTienbyMonthQueryVariables = Exact<{
  year: Scalars['Float']['input'];
}>;


export type GetTongTienbyMonthQuery = { __typename?: 'Query', getTongTienbyMonth: Array<{ __typename?: 'MongthRange', month: number, tongtien: number }> };

export type GetTongTienbyMonthClsQueryVariables = Exact<{
  year: Scalars['Float']['input'];
}>;


export type GetTongTienbyMonthClsQuery = { __typename?: 'Query', getTongTienbyMonthCLS: Array<{ __typename?: 'MonthRangeCLS', month: number, tongtien: number }> };

export type GetAllDatlichBacSiQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllDatlichBacSiQuery = { __typename?: 'Query', getAllDatlichBacSi?: Array<{ __typename?: 'DatLichBacSi', _id: string, motabenh: string, ngaydat: any, ngaykham: any, email: string, trangthai: TrangThaiDatKham, bacsi: { __typename?: 'BacSi', hoten: string, chuyenkhoa: { __typename?: 'ChuyenKhoa', tenkhoa: string }, phongs: Array<{ __typename?: 'Phong', tenphong: string }> }, benhnhan: { __typename?: 'BenhNhan', hoten: string, ngaysinh: any, gioitinh: boolean, sodienthoai: string, diachi: string, cccd: string }, phien: { __typename?: 'Phiens', batdau: string, ketthuc: string, soluongToiDa: number, trangthai: boolean } }> | null };

export type GetAllDatLichBacSiByTrangThaiQueryVariables = Exact<{
  trangthai: Scalars['String']['input'];
}>;


export type GetAllDatLichBacSiByTrangThaiQuery = { __typename?: 'Query', getAllDatLichBacSiByTrangThai?: Array<{ __typename?: 'DatLichBacSi', _id: string, motabenh: string, ngaydat: any, ngaykham: any, email: string, trangthai: TrangThaiDatKham, bacsi: { __typename?: 'BacSi', _id: string, hoten: string, chuyenkhoa: { __typename?: 'ChuyenKhoa', tenkhoa: string }, phongs: Array<{ __typename?: 'Phong', _id: string, tenphong: string }> }, benhnhan: { __typename?: 'BenhNhan', _id: string, hoten: string, sodienthoai: string, ngaysinh: any, gioitinh: boolean, diachi: string, cccd: string }, phien: { __typename?: 'Phiens', batdau: string, ketthuc: string, soluongToiDa: number, trangthai: boolean } }> | null };

export type GetLichKhamQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetLichKhamQuery = { __typename?: 'Query', getLichKham: { __typename?: 'Lichkham', _id: string, ngaynghi: Array<any>, ngaykham: Array<{ __typename?: 'Phienkham', ngaytrongtuan: string, phiens: Array<{ __typename?: 'Phiens', batdau: string, ketthuc: string, trangthai: boolean, soluongToiDa: number }> }> } };

export type GetAllDatLichBacSiByBacSiQueryVariables = Exact<{
  bacsi: Scalars['String']['input'];
}>;


export type GetAllDatLichBacSiByBacSiQuery = { __typename?: 'Query', getAllDatLichBacSiByBacSi?: Array<{ __typename?: 'DatLichBacSi', _id: string, motabenh: string, ngaydat: any, ngaykham: any, email: string, trangthai: TrangThaiDatKham, bacsi: { __typename?: 'BacSi', _id: string, hoten: string, chuyenkhoa: { __typename?: 'ChuyenKhoa', tenkhoa: string }, phongs: Array<{ __typename?: 'Phong', _id: string, tenphong: string }> }, benhnhan: { __typename?: 'BenhNhan', _id: string, hoten: string, sodienthoai: string, ngaysinh: any, gioitinh: boolean, diachi: string, cccd: string }, phien: { __typename?: 'Phiens', batdau: string, ketthuc: string, soluongToiDa: number, trangthai: boolean } }> | null };

export type GetAllToaThuocbyBacSiQueryVariables = Exact<{
  id: Scalars['String']['input'];
  input: FetchPagination;
}>;


export type GetAllToaThuocbyBacSiQuery = { __typename?: 'Query', CountToaThuocbyBacSi: number, getAllToaThuocbyBacSi: Array<{ __typename?: 'Toathuoc', _id: string, soluongs: Array<number>, bhyt: boolean, ngaytaikham: any, ngaytao: any, benhnhan: { __typename?: 'BenhNhan', hoten: string, ngaysinh: any, gioitinh: boolean, diachi: string, sinhhieu?: { __typename?: 'Sinhhieu', cannang: number } | null }, bacsi: { __typename?: 'BacSi', hoten: string }, thuocs: Array<{ __typename?: 'Thuoc', tenthuoc: string }>, benhs: Array<{ __typename?: 'Benh', tenbenh: string }> }> };

export type GetAllHinhAnhQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetAllHinhAnhQuery = { __typename?: 'Query', get: { __typename?: 'Test', _id: string } };

export type GetNhanVienIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetNhanVienIdQuery = { __typename?: 'Query', getNhanVienbyId?: { __typename?: 'NhanVien', _id: string, hoten: string, ngaysinh: any, gioitinh: boolean, diachi: string, sodienthoai: string, cccd: string, ngayBD: any, chucvu: string, user: { __typename?: 'Users', _id: string, username: string, email: string, role: UserRole, isLocked: boolean, avatar: { __typename?: 'LinkImage', url: string, fileName: string, type: TypeImage } }, phongs: Array<{ __typename?: 'Phong', _id: string, tenphong: string }> } | null };

export type GetBacSiIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetBacSiIdQuery = { __typename?: 'Query', getBacSibyId?: { __typename?: 'BacSi', _id: string, hoten: string, ngaysinh: any, gioitinh: boolean, diachi: string, sodienthoai: string, cccd: string, ngayBD: any, user: { __typename?: 'Users', _id: string, username: string, email: string, role: UserRole, isLocked: boolean, avatar: { __typename?: 'LinkImage', url: string, fileName: string, type: TypeImage } }, phongs: Array<{ __typename?: 'Phong', _id: string, tenphong: string }>, chuyenkhoa: { __typename?: 'ChuyenKhoa', tenkhoa: string } } | null };

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetUserByIdQuery = { __typename?: 'Query', getUserById?: { __typename?: 'Users', _id: string, username: string, email: string, role: UserRole, isLocked: boolean, avatar: { __typename?: 'LinkImage', url: string, fileName: string, type: TypeImage } } | null };

export type GetAllPhieuCanLamSangQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPhieuCanLamSangQuery = { __typename?: 'Query', CountPhieuCLS: number, getAllPhieuCLS: Array<{ __typename?: 'Phieuchidinhcanlamsang', _id: string, bhyt: boolean, truoc: boolean, benhnhan: { __typename?: 'BenhNhan', hoten: string, ngaysinh: any, gioitinh: boolean, sodienthoai: string, diachi: string }, bacsi: { __typename?: 'BacSi', hoten: string, ngaysinh: any, gioitinh: boolean, sodienthoai: string }, ketquacanlamsangs: Array<{ __typename?: 'KetQuaCanLamSang', _id: string, ketluan?: string | null, thietbi?: string | null, loaicanlamsang: { __typename?: 'LoaiCanLamSang', tenxetnghiem: string, gia: number, loaicanlamsang: string }, hinhanh?: Array<{ __typename?: 'LinkImage', fileName: string, url: string, type: TypeImage }> | null }> }> };

export type NewDatLichSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NewDatLichSubscription = { __typename?: 'Subscription', newDatLich: { __typename?: 'DatLich', _id: string, motabenh: string, ngaydat: any, ngaykham: any, email: string, benhnhan: { __typename?: 'BenhNhan', _id: string, hoten: string, ngaysinh: any, sodienthoai: string, diachi: string } } };

export type NewPhieuXacNhanSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NewPhieuXacNhanSubscription = { __typename?: 'Subscription', newPhieuXacNhan: { __typename?: 'PhieuXacNhan', _id: string, trangthai: TrangThaiKham, sothutu: number, ngaytao: any, ngaykham: any, benhnhan: { __typename?: 'BenhNhan', _id: string, hoten: string, ngaysinh: any, gioitinh: boolean, diachi: string, sodienthoai: string, cccd: string, bhyt: string, sinhhieu?: { __typename?: 'Sinhhieu', _id: string, mach: number, nhietdo: number, ha: string, chieucao: number, cannang: number, bmi: number, benhmangtinh: boolean } | null }, phongs: Array<{ __typename?: 'Phong', _id: string, tenphong: string }> } };

export type UpdateClsThanhToanSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type UpdateClsThanhToanSubscription = { __typename?: 'Subscription', updateCLSThanhToan: { __typename?: 'Phieuchidinhcanlamsang', _id: string } };

export type UpdateClsDaXetNghiemSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type UpdateClsDaXetNghiemSubscription = { __typename?: 'Subscription', updateCLSDaXetNghiem: { __typename?: 'Phieuchidinhcanlamsang', _id: string } };

export type NewHoaDonClsSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NewHoaDonClsSubscription = { __typename?: 'Subscription', newHoaDonCLS: { __typename?: 'Hoadonchidinhcanlamsang', _id: string, bhyt: boolean, thanhtien: number, tinhtrang: boolean, ngaytao: any, idPhieuCLS?: string | null, benhnhan: { __typename?: 'BenhNhan', hoten: string, ngaysinh: any, gioitinh: boolean, sodienthoai: string }, chitietcanlamsang: Array<{ __typename?: 'DichVu', ten: string, gia: number, soluong: number, thanhtien: number }> } };

export type NewHoaDonSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NewHoaDonSubscription = { __typename?: 'Subscription', newHoaDon: { __typename?: 'Hoadon', _id: string } };


export const LoginDocument = gql`
    mutation login($input: LoginUserInput!) {
  login(loginUserInput: $input) {
    access_token
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
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($input: NewUserInput!) {
  createUser(newUserInput: $input) {
    _id
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
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
export const CreatePhieuchidinhcanlamsangDocument = gql`
    mutation CreatePhieuchidinhcanlamsang($phieuchidinh: CreatePhieuchidinhcanlamsangInput!, $ketqua: [CreateKetquacanlamsangInput!]!) {
  createPhieuchidinhcanlamsang(
    createPhieuchidinhcanlamsangInput: $phieuchidinh
    createKetQuaCLSList: $ketqua
  ) {
    _id
    ketquacanlamsangs {
      loaicanlamsang {
        tenxetnghiem
        gia
        loaicanlamsang
      }
    }
  }
}
    `;
export type CreatePhieuchidinhcanlamsangMutationFn = Apollo.MutationFunction<CreatePhieuchidinhcanlamsangMutation, CreatePhieuchidinhcanlamsangMutationVariables>;

/**
 * __useCreatePhieuchidinhcanlamsangMutation__
 *
 * To run a mutation, you first call `useCreatePhieuchidinhcanlamsangMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePhieuchidinhcanlamsangMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPhieuchidinhcanlamsangMutation, { data, loading, error }] = useCreatePhieuchidinhcanlamsangMutation({
 *   variables: {
 *      phieuchidinh: // value for 'phieuchidinh'
 *      ketqua: // value for 'ketqua'
 *   },
 * });
 */
export function useCreatePhieuchidinhcanlamsangMutation(baseOptions?: Apollo.MutationHookOptions<CreatePhieuchidinhcanlamsangMutation, CreatePhieuchidinhcanlamsangMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePhieuchidinhcanlamsangMutation, CreatePhieuchidinhcanlamsangMutationVariables>(CreatePhieuchidinhcanlamsangDocument, options);
      }
export type CreatePhieuchidinhcanlamsangMutationHookResult = ReturnType<typeof useCreatePhieuchidinhcanlamsangMutation>;
export type CreatePhieuchidinhcanlamsangMutationResult = Apollo.MutationResult<CreatePhieuchidinhcanlamsangMutation>;
export type CreatePhieuchidinhcanlamsangMutationOptions = Apollo.BaseMutationOptions<CreatePhieuchidinhcanlamsangMutation, CreatePhieuchidinhcanlamsangMutationVariables>;
export const UpdateKetquacanlamsangDocument = gql`
    mutation UpdateKetquacanlamsang($input: UpdateKetquacanlamsangInput!) {
  updateKetquacanlamsang(updateKetquacanlamsangInput: $input) {
    _id
    ketluan
    thietbi
  }
}
    `;
export type UpdateKetquacanlamsangMutationFn = Apollo.MutationFunction<UpdateKetquacanlamsangMutation, UpdateKetquacanlamsangMutationVariables>;

/**
 * __useUpdateKetquacanlamsangMutation__
 *
 * To run a mutation, you first call `useUpdateKetquacanlamsangMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateKetquacanlamsangMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateKetquacanlamsangMutation, { data, loading, error }] = useUpdateKetquacanlamsangMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateKetquacanlamsangMutation(baseOptions?: Apollo.MutationHookOptions<UpdateKetquacanlamsangMutation, UpdateKetquacanlamsangMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateKetquacanlamsangMutation, UpdateKetquacanlamsangMutationVariables>(UpdateKetquacanlamsangDocument, options);
      }
export type UpdateKetquacanlamsangMutationHookResult = ReturnType<typeof useUpdateKetquacanlamsangMutation>;
export type UpdateKetquacanlamsangMutationResult = Apollo.MutationResult<UpdateKetquacanlamsangMutation>;
export type UpdateKetquacanlamsangMutationOptions = Apollo.BaseMutationOptions<UpdateKetquacanlamsangMutation, UpdateKetquacanlamsangMutationVariables>;
export const CreateBacSiDocument = gql`
    mutation CreateBacSi($newBacSiInput: NewBacSiInput!, $createLichkham: CreateLichkhamInput!) {
  createBacSi(newBacSiInput: $newBacSiInput, createLichkham: $createLichkham) {
    _id
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
 *      newBacSiInput: // value for 'newBacSiInput'
 *      createLichkham: // value for 'createLichkham'
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
export const UpdateBacSiDocument = gql`
    mutation UpdateBacSi($input: UpdateBacSiInput!) {
  updateBacSi(input: $input) {
    _id
  }
}
    `;
export type UpdateBacSiMutationFn = Apollo.MutationFunction<UpdateBacSiMutation, UpdateBacSiMutationVariables>;

/**
 * __useUpdateBacSiMutation__
 *
 * To run a mutation, you first call `useUpdateBacSiMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBacSiMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBacSiMutation, { data, loading, error }] = useUpdateBacSiMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateBacSiMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBacSiMutation, UpdateBacSiMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBacSiMutation, UpdateBacSiMutationVariables>(UpdateBacSiDocument, options);
      }
export type UpdateBacSiMutationHookResult = ReturnType<typeof useUpdateBacSiMutation>;
export type UpdateBacSiMutationResult = Apollo.MutationResult<UpdateBacSiMutation>;
export type UpdateBacSiMutationOptions = Apollo.BaseMutationOptions<UpdateBacSiMutation, UpdateBacSiMutationVariables>;
export const DeleteBacSiDocument = gql`
    mutation DeleteBacSi($id: String!) {
  deleteBacSi(_id: $id)
}
    `;
export type DeleteBacSiMutationFn = Apollo.MutationFunction<DeleteBacSiMutation, DeleteBacSiMutationVariables>;

/**
 * __useDeleteBacSiMutation__
 *
 * To run a mutation, you first call `useDeleteBacSiMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBacSiMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBacSiMutation, { data, loading, error }] = useDeleteBacSiMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteBacSiMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBacSiMutation, DeleteBacSiMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteBacSiMutation, DeleteBacSiMutationVariables>(DeleteBacSiDocument, options);
      }
export type DeleteBacSiMutationHookResult = ReturnType<typeof useDeleteBacSiMutation>;
export type DeleteBacSiMutationResult = Apollo.MutationResult<DeleteBacSiMutation>;
export type DeleteBacSiMutationOptions = Apollo.BaseMutationOptions<DeleteBacSiMutation, DeleteBacSiMutationVariables>;
export const CreateBenhNhanDocument = gql`
    mutation CreateBenhNhan($input: NewBenhNhanInput!) {
  createBenhNhan(newBenhNhanInput: $input) {
    _id
  }
}
    `;
export type CreateBenhNhanMutationFn = Apollo.MutationFunction<CreateBenhNhanMutation, CreateBenhNhanMutationVariables>;

/**
 * __useCreateBenhNhanMutation__
 *
 * To run a mutation, you first call `useCreateBenhNhanMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBenhNhanMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBenhNhanMutation, { data, loading, error }] = useCreateBenhNhanMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateBenhNhanMutation(baseOptions?: Apollo.MutationHookOptions<CreateBenhNhanMutation, CreateBenhNhanMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBenhNhanMutation, CreateBenhNhanMutationVariables>(CreateBenhNhanDocument, options);
      }
export type CreateBenhNhanMutationHookResult = ReturnType<typeof useCreateBenhNhanMutation>;
export type CreateBenhNhanMutationResult = Apollo.MutationResult<CreateBenhNhanMutation>;
export type CreateBenhNhanMutationOptions = Apollo.BaseMutationOptions<CreateBenhNhanMutation, CreateBenhNhanMutationVariables>;
export const UpdateBenhNhanDocument = gql`
    mutation UpdateBenhNhan($input: UpdateBenhNhanInput!) {
  updateBenhNhan(input: $input) {
    _id
  }
}
    `;
export type UpdateBenhNhanMutationFn = Apollo.MutationFunction<UpdateBenhNhanMutation, UpdateBenhNhanMutationVariables>;

/**
 * __useUpdateBenhNhanMutation__
 *
 * To run a mutation, you first call `useUpdateBenhNhanMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBenhNhanMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBenhNhanMutation, { data, loading, error }] = useUpdateBenhNhanMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateBenhNhanMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBenhNhanMutation, UpdateBenhNhanMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBenhNhanMutation, UpdateBenhNhanMutationVariables>(UpdateBenhNhanDocument, options);
      }
export type UpdateBenhNhanMutationHookResult = ReturnType<typeof useUpdateBenhNhanMutation>;
export type UpdateBenhNhanMutationResult = Apollo.MutationResult<UpdateBenhNhanMutation>;
export type UpdateBenhNhanMutationOptions = Apollo.BaseMutationOptions<UpdateBenhNhanMutation, UpdateBenhNhanMutationVariables>;
export const DeleteBenhNhanDocument = gql`
    mutation DeleteBenhNhan($id: String!) {
  deleteBenhNhan(_id: $id)
}
    `;
export type DeleteBenhNhanMutationFn = Apollo.MutationFunction<DeleteBenhNhanMutation, DeleteBenhNhanMutationVariables>;

/**
 * __useDeleteBenhNhanMutation__
 *
 * To run a mutation, you first call `useDeleteBenhNhanMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBenhNhanMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBenhNhanMutation, { data, loading, error }] = useDeleteBenhNhanMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteBenhNhanMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBenhNhanMutation, DeleteBenhNhanMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteBenhNhanMutation, DeleteBenhNhanMutationVariables>(DeleteBenhNhanDocument, options);
      }
export type DeleteBenhNhanMutationHookResult = ReturnType<typeof useDeleteBenhNhanMutation>;
export type DeleteBenhNhanMutationResult = Apollo.MutationResult<DeleteBenhNhanMutation>;
export type DeleteBenhNhanMutationOptions = Apollo.BaseMutationOptions<DeleteBenhNhanMutation, DeleteBenhNhanMutationVariables>;
export const CreateThuocDocument = gql`
    mutation CreateThuoc($input: NewThuocInput!) {
  createThuoc(newThuocInput: $input) {
    _id
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
export const UpdateThuocDocument = gql`
    mutation UpdateThuoc($input: UpdateThuocInput!) {
  updateThuoc(input: $input) {
    _id
  }
}
    `;
export type UpdateThuocMutationFn = Apollo.MutationFunction<UpdateThuocMutation, UpdateThuocMutationVariables>;

/**
 * __useUpdateThuocMutation__
 *
 * To run a mutation, you first call `useUpdateThuocMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateThuocMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateThuocMutation, { data, loading, error }] = useUpdateThuocMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateThuocMutation(baseOptions?: Apollo.MutationHookOptions<UpdateThuocMutation, UpdateThuocMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateThuocMutation, UpdateThuocMutationVariables>(UpdateThuocDocument, options);
      }
export type UpdateThuocMutationHookResult = ReturnType<typeof useUpdateThuocMutation>;
export type UpdateThuocMutationResult = Apollo.MutationResult<UpdateThuocMutation>;
export type UpdateThuocMutationOptions = Apollo.BaseMutationOptions<UpdateThuocMutation, UpdateThuocMutationVariables>;
export const DeleteThuocDocument = gql`
    mutation DeleteThuoc($id: String!) {
  deleteThuoc(_id: $id)
}
    `;
export type DeleteThuocMutationFn = Apollo.MutationFunction<DeleteThuocMutation, DeleteThuocMutationVariables>;

/**
 * __useDeleteThuocMutation__
 *
 * To run a mutation, you first call `useDeleteThuocMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteThuocMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteThuocMutation, { data, loading, error }] = useDeleteThuocMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteThuocMutation(baseOptions?: Apollo.MutationHookOptions<DeleteThuocMutation, DeleteThuocMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteThuocMutation, DeleteThuocMutationVariables>(DeleteThuocDocument, options);
      }
export type DeleteThuocMutationHookResult = ReturnType<typeof useDeleteThuocMutation>;
export type DeleteThuocMutationResult = Apollo.MutationResult<DeleteThuocMutation>;
export type DeleteThuocMutationOptions = Apollo.BaseMutationOptions<DeleteThuocMutation, DeleteThuocMutationVariables>;
export const CreateHoaDonDocument = gql`
    mutation CreateHoaDon($input: CreateHoadonInput!) {
  createHoadon(createHoadonInput: $input) {
    _id
  }
}
    `;
export type CreateHoaDonMutationFn = Apollo.MutationFunction<CreateHoaDonMutation, CreateHoaDonMutationVariables>;

/**
 * __useCreateHoaDonMutation__
 *
 * To run a mutation, you first call `useCreateHoaDonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateHoaDonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createHoaDonMutation, { data, loading, error }] = useCreateHoaDonMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateHoaDonMutation(baseOptions?: Apollo.MutationHookOptions<CreateHoaDonMutation, CreateHoaDonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateHoaDonMutation, CreateHoaDonMutationVariables>(CreateHoaDonDocument, options);
      }
export type CreateHoaDonMutationHookResult = ReturnType<typeof useCreateHoaDonMutation>;
export type CreateHoaDonMutationResult = Apollo.MutationResult<CreateHoaDonMutation>;
export type CreateHoaDonMutationOptions = Apollo.BaseMutationOptions<CreateHoaDonMutation, CreateHoaDonMutationVariables>;
export const UpdateHoaDonDocument = gql`
    mutation UpdateHoaDon($input: UpdateHoadonInput!) {
  updateHoadon(updateHoadonInput: $input) {
    _id
    thanhtien
  }
}
    `;
export type UpdateHoaDonMutationFn = Apollo.MutationFunction<UpdateHoaDonMutation, UpdateHoaDonMutationVariables>;

/**
 * __useUpdateHoaDonMutation__
 *
 * To run a mutation, you first call `useUpdateHoaDonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateHoaDonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateHoaDonMutation, { data, loading, error }] = useUpdateHoaDonMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateHoaDonMutation(baseOptions?: Apollo.MutationHookOptions<UpdateHoaDonMutation, UpdateHoaDonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateHoaDonMutation, UpdateHoaDonMutationVariables>(UpdateHoaDonDocument, options);
      }
export type UpdateHoaDonMutationHookResult = ReturnType<typeof useUpdateHoaDonMutation>;
export type UpdateHoaDonMutationResult = Apollo.MutationResult<UpdateHoaDonMutation>;
export type UpdateHoaDonMutationOptions = Apollo.BaseMutationOptions<UpdateHoaDonMutation, UpdateHoaDonMutationVariables>;
export const UpdateTrangThaiHoaDonDocument = gql`
    mutation UpdateTrangThaiHoaDon($id: String!) {
  updateTrangThaiHoaDon(id: $id) {
    _id
    trangthai
  }
}
    `;
export type UpdateTrangThaiHoaDonMutationFn = Apollo.MutationFunction<UpdateTrangThaiHoaDonMutation, UpdateTrangThaiHoaDonMutationVariables>;

/**
 * __useUpdateTrangThaiHoaDonMutation__
 *
 * To run a mutation, you first call `useUpdateTrangThaiHoaDonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTrangThaiHoaDonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTrangThaiHoaDonMutation, { data, loading, error }] = useUpdateTrangThaiHoaDonMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateTrangThaiHoaDonMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTrangThaiHoaDonMutation, UpdateTrangThaiHoaDonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTrangThaiHoaDonMutation, UpdateTrangThaiHoaDonMutationVariables>(UpdateTrangThaiHoaDonDocument, options);
      }
export type UpdateTrangThaiHoaDonMutationHookResult = ReturnType<typeof useUpdateTrangThaiHoaDonMutation>;
export type UpdateTrangThaiHoaDonMutationResult = Apollo.MutationResult<UpdateTrangThaiHoaDonMutation>;
export type UpdateTrangThaiHoaDonMutationOptions = Apollo.BaseMutationOptions<UpdateTrangThaiHoaDonMutation, UpdateTrangThaiHoaDonMutationVariables>;
export const UpdateTrangThaiCanLamSangDocument = gql`
    mutation UpdateTrangThaiCanLamSang($id: String!, $trangthai: String!) {
  updateTrangThaiCanLamSang(id: $id, trangthai: $trangthai) {
    _id
    trangthai
  }
}
    `;
export type UpdateTrangThaiCanLamSangMutationFn = Apollo.MutationFunction<UpdateTrangThaiCanLamSangMutation, UpdateTrangThaiCanLamSangMutationVariables>;

/**
 * __useUpdateTrangThaiCanLamSangMutation__
 *
 * To run a mutation, you first call `useUpdateTrangThaiCanLamSangMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTrangThaiCanLamSangMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTrangThaiCanLamSangMutation, { data, loading, error }] = useUpdateTrangThaiCanLamSangMutation({
 *   variables: {
 *      id: // value for 'id'
 *      trangthai: // value for 'trangthai'
 *   },
 * });
 */
export function useUpdateTrangThaiCanLamSangMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTrangThaiCanLamSangMutation, UpdateTrangThaiCanLamSangMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTrangThaiCanLamSangMutation, UpdateTrangThaiCanLamSangMutationVariables>(UpdateTrangThaiCanLamSangDocument, options);
      }
export type UpdateTrangThaiCanLamSangMutationHookResult = ReturnType<typeof useUpdateTrangThaiCanLamSangMutation>;
export type UpdateTrangThaiCanLamSangMutationResult = Apollo.MutationResult<UpdateTrangThaiCanLamSangMutation>;
export type UpdateTrangThaiCanLamSangMutationOptions = Apollo.BaseMutationOptions<UpdateTrangThaiCanLamSangMutation, UpdateTrangThaiCanLamSangMutationVariables>;
export const DeleteHoaDonDocument = gql`
    mutation DeleteHoaDon($id: String!) {
  deleteHoadon(id: $id)
}
    `;
export type DeleteHoaDonMutationFn = Apollo.MutationFunction<DeleteHoaDonMutation, DeleteHoaDonMutationVariables>;

/**
 * __useDeleteHoaDonMutation__
 *
 * To run a mutation, you first call `useDeleteHoaDonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteHoaDonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteHoaDonMutation, { data, loading, error }] = useDeleteHoaDonMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteHoaDonMutation(baseOptions?: Apollo.MutationHookOptions<DeleteHoaDonMutation, DeleteHoaDonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteHoaDonMutation, DeleteHoaDonMutationVariables>(DeleteHoaDonDocument, options);
      }
export type DeleteHoaDonMutationHookResult = ReturnType<typeof useDeleteHoaDonMutation>;
export type DeleteHoaDonMutationResult = Apollo.MutationResult<DeleteHoaDonMutation>;
export type DeleteHoaDonMutationOptions = Apollo.BaseMutationOptions<DeleteHoaDonMutation, DeleteHoaDonMutationVariables>;
export const CreatePhieuXacNhanDocument = gql`
    mutation CreatePhieuXacNhan($input: CreatePhieuXacNhanInput!) {
  createPhieuXacNhan(newPhieuXacNhanInput: $input) {
    _id
  }
}
    `;
export type CreatePhieuXacNhanMutationFn = Apollo.MutationFunction<CreatePhieuXacNhanMutation, CreatePhieuXacNhanMutationVariables>;

/**
 * __useCreatePhieuXacNhanMutation__
 *
 * To run a mutation, you first call `useCreatePhieuXacNhanMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePhieuXacNhanMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPhieuXacNhanMutation, { data, loading, error }] = useCreatePhieuXacNhanMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePhieuXacNhanMutation(baseOptions?: Apollo.MutationHookOptions<CreatePhieuXacNhanMutation, CreatePhieuXacNhanMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePhieuXacNhanMutation, CreatePhieuXacNhanMutationVariables>(CreatePhieuXacNhanDocument, options);
      }
export type CreatePhieuXacNhanMutationHookResult = ReturnType<typeof useCreatePhieuXacNhanMutation>;
export type CreatePhieuXacNhanMutationResult = Apollo.MutationResult<CreatePhieuXacNhanMutation>;
export type CreatePhieuXacNhanMutationOptions = Apollo.BaseMutationOptions<CreatePhieuXacNhanMutation, CreatePhieuXacNhanMutationVariables>;
export const UpdateTrangThaiKhamDocument = gql`
    mutation UpdateTrangThaiKham($id: String!, $trangthai: String!) {
  updateTrangThaiKham(id: $id, trangthai: $trangthai) {
    _id
    trangthai
  }
}
    `;
export type UpdateTrangThaiKhamMutationFn = Apollo.MutationFunction<UpdateTrangThaiKhamMutation, UpdateTrangThaiKhamMutationVariables>;

/**
 * __useUpdateTrangThaiKhamMutation__
 *
 * To run a mutation, you first call `useUpdateTrangThaiKhamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTrangThaiKhamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTrangThaiKhamMutation, { data, loading, error }] = useUpdateTrangThaiKhamMutation({
 *   variables: {
 *      id: // value for 'id'
 *      trangthai: // value for 'trangthai'
 *   },
 * });
 */
export function useUpdateTrangThaiKhamMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTrangThaiKhamMutation, UpdateTrangThaiKhamMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTrangThaiKhamMutation, UpdateTrangThaiKhamMutationVariables>(UpdateTrangThaiKhamDocument, options);
      }
export type UpdateTrangThaiKhamMutationHookResult = ReturnType<typeof useUpdateTrangThaiKhamMutation>;
export type UpdateTrangThaiKhamMutationResult = Apollo.MutationResult<UpdateTrangThaiKhamMutation>;
export type UpdateTrangThaiKhamMutationOptions = Apollo.BaseMutationOptions<UpdateTrangThaiKhamMutation, UpdateTrangThaiKhamMutationVariables>;
export const UpdateTrangThaiDatLichDocument = gql`
    mutation UpdateTrangThaiDatLich($id: String!, $trangthai: String!) {
  updateTrangThaiDatLich(id: $id, trangthai: $trangthai) {
    _id
    trangthai
  }
}
    `;
export type UpdateTrangThaiDatLichMutationFn = Apollo.MutationFunction<UpdateTrangThaiDatLichMutation, UpdateTrangThaiDatLichMutationVariables>;

/**
 * __useUpdateTrangThaiDatLichMutation__
 *
 * To run a mutation, you first call `useUpdateTrangThaiDatLichMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTrangThaiDatLichMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTrangThaiDatLichMutation, { data, loading, error }] = useUpdateTrangThaiDatLichMutation({
 *   variables: {
 *      id: // value for 'id'
 *      trangthai: // value for 'trangthai'
 *   },
 * });
 */
export function useUpdateTrangThaiDatLichMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTrangThaiDatLichMutation, UpdateTrangThaiDatLichMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTrangThaiDatLichMutation, UpdateTrangThaiDatLichMutationVariables>(UpdateTrangThaiDatLichDocument, options);
      }
export type UpdateTrangThaiDatLichMutationHookResult = ReturnType<typeof useUpdateTrangThaiDatLichMutation>;
export type UpdateTrangThaiDatLichMutationResult = Apollo.MutationResult<UpdateTrangThaiDatLichMutation>;
export type UpdateTrangThaiDatLichMutationOptions = Apollo.BaseMutationOptions<UpdateTrangThaiDatLichMutation, UpdateTrangThaiDatLichMutationVariables>;
export const DeleteDatlichDocument = gql`
    mutation DeleteDatlich($id: String!) {
  deleteDatLich(_id: $id)
}
    `;
export type DeleteDatlichMutationFn = Apollo.MutationFunction<DeleteDatlichMutation, DeleteDatlichMutationVariables>;

/**
 * __useDeleteDatlichMutation__
 *
 * To run a mutation, you first call `useDeleteDatlichMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDatlichMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDatlichMutation, { data, loading, error }] = useDeleteDatlichMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteDatlichMutation(baseOptions?: Apollo.MutationHookOptions<DeleteDatlichMutation, DeleteDatlichMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteDatlichMutation, DeleteDatlichMutationVariables>(DeleteDatlichDocument, options);
      }
export type DeleteDatlichMutationHookResult = ReturnType<typeof useDeleteDatlichMutation>;
export type DeleteDatlichMutationResult = Apollo.MutationResult<DeleteDatlichMutation>;
export type DeleteDatlichMutationOptions = Apollo.BaseMutationOptions<DeleteDatlichMutation, DeleteDatlichMutationVariables>;
export const CreateNhanVienDocument = gql`
    mutation CreateNhanVien($input: NewNhanVienInput!) {
  createNhanVien(newNhanVienInput: $input) {
    _id
  }
}
    `;
export type CreateNhanVienMutationFn = Apollo.MutationFunction<CreateNhanVienMutation, CreateNhanVienMutationVariables>;

/**
 * __useCreateNhanVienMutation__
 *
 * To run a mutation, you first call `useCreateNhanVienMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNhanVienMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNhanVienMutation, { data, loading, error }] = useCreateNhanVienMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateNhanVienMutation(baseOptions?: Apollo.MutationHookOptions<CreateNhanVienMutation, CreateNhanVienMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateNhanVienMutation, CreateNhanVienMutationVariables>(CreateNhanVienDocument, options);
      }
export type CreateNhanVienMutationHookResult = ReturnType<typeof useCreateNhanVienMutation>;
export type CreateNhanVienMutationResult = Apollo.MutationResult<CreateNhanVienMutation>;
export type CreateNhanVienMutationOptions = Apollo.BaseMutationOptions<CreateNhanVienMutation, CreateNhanVienMutationVariables>;
export const UpdateNhanVienDocument = gql`
    mutation UpdateNhanVien($input: UpdateNhanVienInput!) {
  updateNhanVien(input: $input) {
    _id
  }
}
    `;
export type UpdateNhanVienMutationFn = Apollo.MutationFunction<UpdateNhanVienMutation, UpdateNhanVienMutationVariables>;

/**
 * __useUpdateNhanVienMutation__
 *
 * To run a mutation, you first call `useUpdateNhanVienMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateNhanVienMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateNhanVienMutation, { data, loading, error }] = useUpdateNhanVienMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateNhanVienMutation(baseOptions?: Apollo.MutationHookOptions<UpdateNhanVienMutation, UpdateNhanVienMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateNhanVienMutation, UpdateNhanVienMutationVariables>(UpdateNhanVienDocument, options);
      }
export type UpdateNhanVienMutationHookResult = ReturnType<typeof useUpdateNhanVienMutation>;
export type UpdateNhanVienMutationResult = Apollo.MutationResult<UpdateNhanVienMutation>;
export type UpdateNhanVienMutationOptions = Apollo.BaseMutationOptions<UpdateNhanVienMutation, UpdateNhanVienMutationVariables>;
export const DeleteNhanVienDocument = gql`
    mutation DeleteNhanVien($id: String!) {
  deleteNhanVien(_id: $id)
}
    `;
export type DeleteNhanVienMutationFn = Apollo.MutationFunction<DeleteNhanVienMutation, DeleteNhanVienMutationVariables>;

/**
 * __useDeleteNhanVienMutation__
 *
 * To run a mutation, you first call `useDeleteNhanVienMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteNhanVienMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteNhanVienMutation, { data, loading, error }] = useDeleteNhanVienMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteNhanVienMutation(baseOptions?: Apollo.MutationHookOptions<DeleteNhanVienMutation, DeleteNhanVienMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteNhanVienMutation, DeleteNhanVienMutationVariables>(DeleteNhanVienDocument, options);
      }
export type DeleteNhanVienMutationHookResult = ReturnType<typeof useDeleteNhanVienMutation>;
export type DeleteNhanVienMutationResult = Apollo.MutationResult<DeleteNhanVienMutation>;
export type DeleteNhanVienMutationOptions = Apollo.BaseMutationOptions<DeleteNhanVienMutation, DeleteNhanVienMutationVariables>;
export const CreateSinhHieuDocument = gql`
    mutation CreateSinhHieu($input: CreateSinhhieuInput!) {
  createSinhhieu(createSinhhieuInput: $input) {
    _id
  }
}
    `;
export type CreateSinhHieuMutationFn = Apollo.MutationFunction<CreateSinhHieuMutation, CreateSinhHieuMutationVariables>;

/**
 * __useCreateSinhHieuMutation__
 *
 * To run a mutation, you first call `useCreateSinhHieuMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSinhHieuMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSinhHieuMutation, { data, loading, error }] = useCreateSinhHieuMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSinhHieuMutation(baseOptions?: Apollo.MutationHookOptions<CreateSinhHieuMutation, CreateSinhHieuMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSinhHieuMutation, CreateSinhHieuMutationVariables>(CreateSinhHieuDocument, options);
      }
export type CreateSinhHieuMutationHookResult = ReturnType<typeof useCreateSinhHieuMutation>;
export type CreateSinhHieuMutationResult = Apollo.MutationResult<CreateSinhHieuMutation>;
export type CreateSinhHieuMutationOptions = Apollo.BaseMutationOptions<CreateSinhHieuMutation, CreateSinhHieuMutationVariables>;
export const CreateHoadonchidinhcanlamsangDocument = gql`
    mutation CreateHoadonchidinhcanlamsang($input: CreateHoadonchidinhcanlamsangInput!) {
  createHoadonchidinhcanlamsang(createHoadonchidinhcanlamsang: $input) {
    _id
  }
}
    `;
export type CreateHoadonchidinhcanlamsangMutationFn = Apollo.MutationFunction<CreateHoadonchidinhcanlamsangMutation, CreateHoadonchidinhcanlamsangMutationVariables>;

/**
 * __useCreateHoadonchidinhcanlamsangMutation__
 *
 * To run a mutation, you first call `useCreateHoadonchidinhcanlamsangMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateHoadonchidinhcanlamsangMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createHoadonchidinhcanlamsangMutation, { data, loading, error }] = useCreateHoadonchidinhcanlamsangMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateHoadonchidinhcanlamsangMutation(baseOptions?: Apollo.MutationHookOptions<CreateHoadonchidinhcanlamsangMutation, CreateHoadonchidinhcanlamsangMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateHoadonchidinhcanlamsangMutation, CreateHoadonchidinhcanlamsangMutationVariables>(CreateHoadonchidinhcanlamsangDocument, options);
      }
export type CreateHoadonchidinhcanlamsangMutationHookResult = ReturnType<typeof useCreateHoadonchidinhcanlamsangMutation>;
export type CreateHoadonchidinhcanlamsangMutationResult = Apollo.MutationResult<CreateHoadonchidinhcanlamsangMutation>;
export type CreateHoadonchidinhcanlamsangMutationOptions = Apollo.BaseMutationOptions<CreateHoadonchidinhcanlamsangMutation, CreateHoadonchidinhcanlamsangMutationVariables>;
export const CreateBlogDocument = gql`
    mutation CreateBlog($input: CreateBlogInput!) {
  createBlog(createBlogInput: $input) {
    _id
  }
}
    `;
export type CreateBlogMutationFn = Apollo.MutationFunction<CreateBlogMutation, CreateBlogMutationVariables>;

/**
 * __useCreateBlogMutation__
 *
 * To run a mutation, you first call `useCreateBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBlogMutation, { data, loading, error }] = useCreateBlogMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateBlogMutation(baseOptions?: Apollo.MutationHookOptions<CreateBlogMutation, CreateBlogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBlogMutation, CreateBlogMutationVariables>(CreateBlogDocument, options);
      }
export type CreateBlogMutationHookResult = ReturnType<typeof useCreateBlogMutation>;
export type CreateBlogMutationResult = Apollo.MutationResult<CreateBlogMutation>;
export type CreateBlogMutationOptions = Apollo.BaseMutationOptions<CreateBlogMutation, CreateBlogMutationVariables>;
export const UpdateBlogDocument = gql`
    mutation UpdateBlog($input: UpdateBlogInput!) {
  updateBlog(updateBlogInput: $input) {
    _id
  }
}
    `;
export type UpdateBlogMutationFn = Apollo.MutationFunction<UpdateBlogMutation, UpdateBlogMutationVariables>;

/**
 * __useUpdateBlogMutation__
 *
 * To run a mutation, you first call `useUpdateBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBlogMutation, { data, loading, error }] = useUpdateBlogMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateBlogMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBlogMutation, UpdateBlogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBlogMutation, UpdateBlogMutationVariables>(UpdateBlogDocument, options);
      }
export type UpdateBlogMutationHookResult = ReturnType<typeof useUpdateBlogMutation>;
export type UpdateBlogMutationResult = Apollo.MutationResult<UpdateBlogMutation>;
export type UpdateBlogMutationOptions = Apollo.BaseMutationOptions<UpdateBlogMutation, UpdateBlogMutationVariables>;
export const DeleteBlogDocument = gql`
    mutation DeleteBlog($id: String!) {
  deleteBlog(id: $id)
}
    `;
export type DeleteBlogMutationFn = Apollo.MutationFunction<DeleteBlogMutation, DeleteBlogMutationVariables>;

/**
 * __useDeleteBlogMutation__
 *
 * To run a mutation, you first call `useDeleteBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBlogMutation, { data, loading, error }] = useDeleteBlogMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteBlogMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBlogMutation, DeleteBlogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteBlogMutation, DeleteBlogMutationVariables>(DeleteBlogDocument, options);
      }
export type DeleteBlogMutationHookResult = ReturnType<typeof useDeleteBlogMutation>;
export type DeleteBlogMutationResult = Apollo.MutationResult<DeleteBlogMutation>;
export type DeleteBlogMutationOptions = Apollo.BaseMutationOptions<DeleteBlogMutation, DeleteBlogMutationVariables>;
export const UpdateKichHoatDocument = gql`
    mutation UpdateKichHoat($id: String!) {
  updateKichHoat(_id: $id)
}
    `;
export type UpdateKichHoatMutationFn = Apollo.MutationFunction<UpdateKichHoatMutation, UpdateKichHoatMutationVariables>;

/**
 * __useUpdateKichHoatMutation__
 *
 * To run a mutation, you first call `useUpdateKichHoatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateKichHoatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateKichHoatMutation, { data, loading, error }] = useUpdateKichHoatMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateKichHoatMutation(baseOptions?: Apollo.MutationHookOptions<UpdateKichHoatMutation, UpdateKichHoatMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateKichHoatMutation, UpdateKichHoatMutationVariables>(UpdateKichHoatDocument, options);
      }
export type UpdateKichHoatMutationHookResult = ReturnType<typeof useUpdateKichHoatMutation>;
export type UpdateKichHoatMutationResult = Apollo.MutationResult<UpdateKichHoatMutation>;
export type UpdateKichHoatMutationOptions = Apollo.BaseMutationOptions<UpdateKichHoatMutation, UpdateKichHoatMutationVariables>;
export const UpdateTinhTrangHoaDonClsDocument = gql`
    mutation UpdateTinhTrangHoaDonCLS($id: String!) {
  updateTinhTrangHoaDonCLS(id: $id) {
    _id
  }
}
    `;
export type UpdateTinhTrangHoaDonClsMutationFn = Apollo.MutationFunction<UpdateTinhTrangHoaDonClsMutation, UpdateTinhTrangHoaDonClsMutationVariables>;

/**
 * __useUpdateTinhTrangHoaDonClsMutation__
 *
 * To run a mutation, you first call `useUpdateTinhTrangHoaDonClsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTinhTrangHoaDonClsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTinhTrangHoaDonClsMutation, { data, loading, error }] = useUpdateTinhTrangHoaDonClsMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateTinhTrangHoaDonClsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTinhTrangHoaDonClsMutation, UpdateTinhTrangHoaDonClsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTinhTrangHoaDonClsMutation, UpdateTinhTrangHoaDonClsMutationVariables>(UpdateTinhTrangHoaDonClsDocument, options);
      }
export type UpdateTinhTrangHoaDonClsMutationHookResult = ReturnType<typeof useUpdateTinhTrangHoaDonClsMutation>;
export type UpdateTinhTrangHoaDonClsMutationResult = Apollo.MutationResult<UpdateTinhTrangHoaDonClsMutation>;
export type UpdateTinhTrangHoaDonClsMutationOptions = Apollo.BaseMutationOptions<UpdateTinhTrangHoaDonClsMutation, UpdateTinhTrangHoaDonClsMutationVariables>;
export const UpdateTrangThaiDatLichBacSiDocument = gql`
    mutation UpdateTrangThaiDatLichBacSi($id: String!, $trangthai: String!) {
  updateTrangThaiDatLichBacSi(id: $id, trangthai: $trangthai) {
    _id
  }
}
    `;
export type UpdateTrangThaiDatLichBacSiMutationFn = Apollo.MutationFunction<UpdateTrangThaiDatLichBacSiMutation, UpdateTrangThaiDatLichBacSiMutationVariables>;

/**
 * __useUpdateTrangThaiDatLichBacSiMutation__
 *
 * To run a mutation, you first call `useUpdateTrangThaiDatLichBacSiMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTrangThaiDatLichBacSiMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTrangThaiDatLichBacSiMutation, { data, loading, error }] = useUpdateTrangThaiDatLichBacSiMutation({
 *   variables: {
 *      id: // value for 'id'
 *      trangthai: // value for 'trangthai'
 *   },
 * });
 */
export function useUpdateTrangThaiDatLichBacSiMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTrangThaiDatLichBacSiMutation, UpdateTrangThaiDatLichBacSiMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTrangThaiDatLichBacSiMutation, UpdateTrangThaiDatLichBacSiMutationVariables>(UpdateTrangThaiDatLichBacSiDocument, options);
      }
export type UpdateTrangThaiDatLichBacSiMutationHookResult = ReturnType<typeof useUpdateTrangThaiDatLichBacSiMutation>;
export type UpdateTrangThaiDatLichBacSiMutationResult = Apollo.MutationResult<UpdateTrangThaiDatLichBacSiMutation>;
export type UpdateTrangThaiDatLichBacSiMutationOptions = Apollo.BaseMutationOptions<UpdateTrangThaiDatLichBacSiMutation, UpdateTrangThaiDatLichBacSiMutationVariables>;
export const CreateTestDocument = gql`
    mutation CreateTest($input: CreateTestInput!) {
  createTest(createTestInput: $input) {
    _id
  }
}
    `;
export type CreateTestMutationFn = Apollo.MutationFunction<CreateTestMutation, CreateTestMutationVariables>;

/**
 * __useCreateTestMutation__
 *
 * To run a mutation, you first call `useCreateTestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTestMutation, { data, loading, error }] = useCreateTestMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTestMutation(baseOptions?: Apollo.MutationHookOptions<CreateTestMutation, CreateTestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTestMutation, CreateTestMutationVariables>(CreateTestDocument, options);
      }
export type CreateTestMutationHookResult = ReturnType<typeof useCreateTestMutation>;
export type CreateTestMutationResult = Apollo.MutationResult<CreateTestMutation>;
export type CreateTestMutationOptions = Apollo.BaseMutationOptions<CreateTestMutation, CreateTestMutationVariables>;
export const CreateBenhDocument = gql`
    mutation CreateBenh($input: NewBenhInput!) {
  createBenh(newBenhInput: $input) {
    _id
  }
}
    `;
export type CreateBenhMutationFn = Apollo.MutationFunction<CreateBenhMutation, CreateBenhMutationVariables>;

/**
 * __useCreateBenhMutation__
 *
 * To run a mutation, you first call `useCreateBenhMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBenhMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBenhMutation, { data, loading, error }] = useCreateBenhMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateBenhMutation(baseOptions?: Apollo.MutationHookOptions<CreateBenhMutation, CreateBenhMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBenhMutation, CreateBenhMutationVariables>(CreateBenhDocument, options);
      }
export type CreateBenhMutationHookResult = ReturnType<typeof useCreateBenhMutation>;
export type CreateBenhMutationResult = Apollo.MutationResult<CreateBenhMutation>;
export type CreateBenhMutationOptions = Apollo.BaseMutationOptions<CreateBenhMutation, CreateBenhMutationVariables>;
export const UpdateUutienDocument = gql`
    mutation UpdateUutien($id: String!) {
  updateUuTien(id: $id) {
    _id
    truoc
  }
}
    `;
export type UpdateUutienMutationFn = Apollo.MutationFunction<UpdateUutienMutation, UpdateUutienMutationVariables>;

/**
 * __useUpdateUutienMutation__
 *
 * To run a mutation, you first call `useUpdateUutienMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUutienMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUutienMutation, { data, loading, error }] = useUpdateUutienMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateUutienMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUutienMutation, UpdateUutienMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUutienMutation, UpdateUutienMutationVariables>(UpdateUutienDocument, options);
      }
export type UpdateUutienMutationHookResult = ReturnType<typeof useUpdateUutienMutation>;
export type UpdateUutienMutationResult = Apollo.MutationResult<UpdateUutienMutation>;
export type UpdateUutienMutationOptions = Apollo.BaseMutationOptions<UpdateUutienMutation, UpdateUutienMutationVariables>;
export const OnlyUserDocument = gql`
    query OnlyUser {
  onlyUser {
    ... on Users {
      _id
      username
      email
      role
      avatar {
        url
        fileName
        type
      }
      isLocked
    }
    ... on BacSi {
      _id
      hoten
      ngaysinh
      gioitinh
      diachi
      sodienthoai
      cccd
      ngayBD
      user {
        _id
        username
        email
        role
        avatar {
          url
          fileName
          type
        }
        isLocked
      }
      phongs {
        _id
        tenphong
      }
      chuyenkhoa {
        tenkhoa
      }
    }
    ... on BenhNhan {
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
    }
    ... on NhanVien {
      _id
      hoten
      ngaysinh
      gioitinh
      diachi
      sodienthoai
      cccd
      ngayBD
      chucvu
      user {
        _id
        username
        email
        role
        avatar {
          url
          fileName
          type
        }
        isLocked
      }
      phongs {
        _id
        tenphong
      }
    }
  }
}
    `;

/**
 * __useOnlyUserQuery__
 *
 * To run a query within a React component, call `useOnlyUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useOnlyUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnlyUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useOnlyUserQuery(baseOptions?: Apollo.QueryHookOptions<OnlyUserQuery, OnlyUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OnlyUserQuery, OnlyUserQueryVariables>(OnlyUserDocument, options);
      }
export function useOnlyUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OnlyUserQuery, OnlyUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OnlyUserQuery, OnlyUserQueryVariables>(OnlyUserDocument, options);
        }
export function useOnlyUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<OnlyUserQuery, OnlyUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<OnlyUserQuery, OnlyUserQueryVariables>(OnlyUserDocument, options);
        }
export type OnlyUserQueryHookResult = ReturnType<typeof useOnlyUserQuery>;
export type OnlyUserLazyQueryHookResult = ReturnType<typeof useOnlyUserLazyQuery>;
export type OnlyUserSuspenseQueryHookResult = ReturnType<typeof useOnlyUserSuspenseQuery>;
export type OnlyUserQueryResult = Apollo.QueryResult<OnlyUserQuery, OnlyUserQueryVariables>;
export const GetAllUserDocument = gql`
    query GetAllUser($input: FetchUsersArgs!) {
  countUser
  getAllUsers(fetchUsersArgs: $input) {
    _id
    username
    email
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
 * __useGetAllUserQuery__
 *
 * To run a query within a React component, call `useGetAllUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUserQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllUserQuery(baseOptions: Apollo.QueryHookOptions<GetAllUserQuery, GetAllUserQueryVariables> & ({ variables: GetAllUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUserQuery, GetAllUserQueryVariables>(GetAllUserDocument, options);
      }
export function useGetAllUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUserQuery, GetAllUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUserQuery, GetAllUserQueryVariables>(GetAllUserDocument, options);
        }
export function useGetAllUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllUserQuery, GetAllUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllUserQuery, GetAllUserQueryVariables>(GetAllUserDocument, options);
        }
export type GetAllUserQueryHookResult = ReturnType<typeof useGetAllUserQuery>;
export type GetAllUserLazyQueryHookResult = ReturnType<typeof useGetAllUserLazyQuery>;
export type GetAllUserSuspenseQueryHookResult = ReturnType<typeof useGetAllUserSuspenseQuery>;
export type GetAllUserQueryResult = Apollo.QueryResult<GetAllUserQuery, GetAllUserQueryVariables>;
export const GetAllBacSiDocument = gql`
    query GetAllBacSi($input: FetchPagination!) {
  CountBacSi
  getAllBacSi(fetchPagination: $input) {
    _id
    hoten
    ngaysinh
    gioitinh
    diachi
    sodienthoai
    cccd
    lichkham
    ngayBD
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
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllBacSiQuery(baseOptions: Apollo.QueryHookOptions<GetAllBacSiQuery, GetAllBacSiQueryVariables> & ({ variables: GetAllBacSiQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
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
export const CountBacSiDocument = gql`
    query CountBacSi {
  CountBacSi
}
    `;

/**
 * __useCountBacSiQuery__
 *
 * To run a query within a React component, call `useCountBacSiQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountBacSiQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountBacSiQuery({
 *   variables: {
 *   },
 * });
 */
export function useCountBacSiQuery(baseOptions?: Apollo.QueryHookOptions<CountBacSiQuery, CountBacSiQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountBacSiQuery, CountBacSiQueryVariables>(CountBacSiDocument, options);
      }
export function useCountBacSiLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountBacSiQuery, CountBacSiQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountBacSiQuery, CountBacSiQueryVariables>(CountBacSiDocument, options);
        }
export function useCountBacSiSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CountBacSiQuery, CountBacSiQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CountBacSiQuery, CountBacSiQueryVariables>(CountBacSiDocument, options);
        }
export type CountBacSiQueryHookResult = ReturnType<typeof useCountBacSiQuery>;
export type CountBacSiLazyQueryHookResult = ReturnType<typeof useCountBacSiLazyQuery>;
export type CountBacSiSuspenseQueryHookResult = ReturnType<typeof useCountBacSiSuspenseQuery>;
export type CountBacSiQueryResult = Apollo.QueryResult<CountBacSiQuery, CountBacSiQueryVariables>;
export const CountNhanVienDocument = gql`
    query CountNhanVien {
  CountNhanVien
}
    `;

/**
 * __useCountNhanVienQuery__
 *
 * To run a query within a React component, call `useCountNhanVienQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountNhanVienQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountNhanVienQuery({
 *   variables: {
 *   },
 * });
 */
export function useCountNhanVienQuery(baseOptions?: Apollo.QueryHookOptions<CountNhanVienQuery, CountNhanVienQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountNhanVienQuery, CountNhanVienQueryVariables>(CountNhanVienDocument, options);
      }
export function useCountNhanVienLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountNhanVienQuery, CountNhanVienQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountNhanVienQuery, CountNhanVienQueryVariables>(CountNhanVienDocument, options);
        }
export function useCountNhanVienSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CountNhanVienQuery, CountNhanVienQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CountNhanVienQuery, CountNhanVienQueryVariables>(CountNhanVienDocument, options);
        }
export type CountNhanVienQueryHookResult = ReturnType<typeof useCountNhanVienQuery>;
export type CountNhanVienLazyQueryHookResult = ReturnType<typeof useCountNhanVienLazyQuery>;
export type CountNhanVienSuspenseQueryHookResult = ReturnType<typeof useCountNhanVienSuspenseQuery>;
export type CountNhanVienQueryResult = Apollo.QueryResult<CountNhanVienQuery, CountNhanVienQueryVariables>;
export const CountPhongDocument = gql`
    query CountPhong {
  CountPhong
}
    `;

/**
 * __useCountPhongQuery__
 *
 * To run a query within a React component, call `useCountPhongQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountPhongQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountPhongQuery({
 *   variables: {
 *   },
 * });
 */
export function useCountPhongQuery(baseOptions?: Apollo.QueryHookOptions<CountPhongQuery, CountPhongQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountPhongQuery, CountPhongQueryVariables>(CountPhongDocument, options);
      }
export function useCountPhongLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountPhongQuery, CountPhongQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountPhongQuery, CountPhongQueryVariables>(CountPhongDocument, options);
        }
export function useCountPhongSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CountPhongQuery, CountPhongQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CountPhongQuery, CountPhongQueryVariables>(CountPhongDocument, options);
        }
export type CountPhongQueryHookResult = ReturnType<typeof useCountPhongQuery>;
export type CountPhongLazyQueryHookResult = ReturnType<typeof useCountPhongLazyQuery>;
export type CountPhongSuspenseQueryHookResult = ReturnType<typeof useCountPhongSuspenseQuery>;
export type CountPhongQueryResult = Apollo.QueryResult<CountPhongQuery, CountPhongQueryVariables>;
export const CountChuyenKhoaDocument = gql`
    query CountChuyenKhoa {
  CountChuyenKhoa
}
    `;

/**
 * __useCountChuyenKhoaQuery__
 *
 * To run a query within a React component, call `useCountChuyenKhoaQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountChuyenKhoaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountChuyenKhoaQuery({
 *   variables: {
 *   },
 * });
 */
export function useCountChuyenKhoaQuery(baseOptions?: Apollo.QueryHookOptions<CountChuyenKhoaQuery, CountChuyenKhoaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountChuyenKhoaQuery, CountChuyenKhoaQueryVariables>(CountChuyenKhoaDocument, options);
      }
export function useCountChuyenKhoaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountChuyenKhoaQuery, CountChuyenKhoaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountChuyenKhoaQuery, CountChuyenKhoaQueryVariables>(CountChuyenKhoaDocument, options);
        }
export function useCountChuyenKhoaSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CountChuyenKhoaQuery, CountChuyenKhoaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CountChuyenKhoaQuery, CountChuyenKhoaQueryVariables>(CountChuyenKhoaDocument, options);
        }
export type CountChuyenKhoaQueryHookResult = ReturnType<typeof useCountChuyenKhoaQuery>;
export type CountChuyenKhoaLazyQueryHookResult = ReturnType<typeof useCountChuyenKhoaLazyQuery>;
export type CountChuyenKhoaSuspenseQueryHookResult = ReturnType<typeof useCountChuyenKhoaSuspenseQuery>;
export type CountChuyenKhoaQueryResult = Apollo.QueryResult<CountChuyenKhoaQuery, CountChuyenKhoaQueryVariables>;
export const GetAllBenhNhanDocument = gql`
    query getAllBenhNhan($input: FetchPagination!) {
  CountBenhNhan
  getAllBenhNhan(fetchPagination: $input) {
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
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllBenhNhanQuery(baseOptions: Apollo.QueryHookOptions<GetAllBenhNhanQuery, GetAllBenhNhanQueryVariables> & ({ variables: GetAllBenhNhanQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
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
export const GetAllBenhNhanNoPaginationDocument = gql`
    query GetAllBenhNhanNoPagination {
  getAllBenhNhanNoPagination {
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
    `;

/**
 * __useGetAllBenhNhanNoPaginationQuery__
 *
 * To run a query within a React component, call `useGetAllBenhNhanNoPaginationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBenhNhanNoPaginationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBenhNhanNoPaginationQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllBenhNhanNoPaginationQuery(baseOptions?: Apollo.QueryHookOptions<GetAllBenhNhanNoPaginationQuery, GetAllBenhNhanNoPaginationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllBenhNhanNoPaginationQuery, GetAllBenhNhanNoPaginationQueryVariables>(GetAllBenhNhanNoPaginationDocument, options);
      }
export function useGetAllBenhNhanNoPaginationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllBenhNhanNoPaginationQuery, GetAllBenhNhanNoPaginationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllBenhNhanNoPaginationQuery, GetAllBenhNhanNoPaginationQueryVariables>(GetAllBenhNhanNoPaginationDocument, options);
        }
export function useGetAllBenhNhanNoPaginationSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllBenhNhanNoPaginationQuery, GetAllBenhNhanNoPaginationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllBenhNhanNoPaginationQuery, GetAllBenhNhanNoPaginationQueryVariables>(GetAllBenhNhanNoPaginationDocument, options);
        }
export type GetAllBenhNhanNoPaginationQueryHookResult = ReturnType<typeof useGetAllBenhNhanNoPaginationQuery>;
export type GetAllBenhNhanNoPaginationLazyQueryHookResult = ReturnType<typeof useGetAllBenhNhanNoPaginationLazyQuery>;
export type GetAllBenhNhanNoPaginationSuspenseQueryHookResult = ReturnType<typeof useGetAllBenhNhanNoPaginationSuspenseQuery>;
export type GetAllBenhNhanNoPaginationQueryResult = Apollo.QueryResult<GetAllBenhNhanNoPaginationQuery, GetAllBenhNhanNoPaginationQueryVariables>;
export const GetThuocPaginationDocument = gql`
    query GetThuocPagination($input: FetchPagination!) {
  CountThuoc
  getThuocPagination(fetchPagination: $input) {
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
    `;

/**
 * __useGetThuocPaginationQuery__
 *
 * To run a query within a React component, call `useGetThuocPaginationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetThuocPaginationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetThuocPaginationQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetThuocPaginationQuery(baseOptions: Apollo.QueryHookOptions<GetThuocPaginationQuery, GetThuocPaginationQueryVariables> & ({ variables: GetThuocPaginationQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetThuocPaginationQuery, GetThuocPaginationQueryVariables>(GetThuocPaginationDocument, options);
      }
export function useGetThuocPaginationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetThuocPaginationQuery, GetThuocPaginationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetThuocPaginationQuery, GetThuocPaginationQueryVariables>(GetThuocPaginationDocument, options);
        }
export function useGetThuocPaginationSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetThuocPaginationQuery, GetThuocPaginationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetThuocPaginationQuery, GetThuocPaginationQueryVariables>(GetThuocPaginationDocument, options);
        }
export type GetThuocPaginationQueryHookResult = ReturnType<typeof useGetThuocPaginationQuery>;
export type GetThuocPaginationLazyQueryHookResult = ReturnType<typeof useGetThuocPaginationLazyQuery>;
export type GetThuocPaginationSuspenseQueryHookResult = ReturnType<typeof useGetThuocPaginationSuspenseQuery>;
export type GetThuocPaginationQueryResult = Apollo.QueryResult<GetThuocPaginationQuery, GetThuocPaginationQueryVariables>;
export const GetAllThuocDocument = gql`
    query GetAllThuoc {
  getAllThuoc {
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
    query GetAllNgayVaPhong($ngaykham: String!, $phongIds: String!, $trangthai: String!) {
  getAllByNgayVaPhong(
    ngaykham: $ngaykham
    phongIds: $phongIds
    trangthai: $trangthai
  ) {
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
    phien {
      batdau
      ketthuc
      trangthai
    }
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
 *      trangthai: // value for 'trangthai'
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
export const GetAllLoaiClsDocument = gql`
    query GetAllLoaiCLS {
  getAllLoaiCLS {
    _id
    tenxetnghiem
    gia
    loaicanlamsang
    mota
  }
}
    `;

/**
 * __useGetAllLoaiClsQuery__
 *
 * To run a query within a React component, call `useGetAllLoaiClsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllLoaiClsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllLoaiClsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllLoaiClsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllLoaiClsQuery, GetAllLoaiClsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllLoaiClsQuery, GetAllLoaiClsQueryVariables>(GetAllLoaiClsDocument, options);
      }
export function useGetAllLoaiClsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllLoaiClsQuery, GetAllLoaiClsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllLoaiClsQuery, GetAllLoaiClsQueryVariables>(GetAllLoaiClsDocument, options);
        }
export function useGetAllLoaiClsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllLoaiClsQuery, GetAllLoaiClsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllLoaiClsQuery, GetAllLoaiClsQueryVariables>(GetAllLoaiClsDocument, options);
        }
export type GetAllLoaiClsQueryHookResult = ReturnType<typeof useGetAllLoaiClsQuery>;
export type GetAllLoaiClsLazyQueryHookResult = ReturnType<typeof useGetAllLoaiClsLazyQuery>;
export type GetAllLoaiClsSuspenseQueryHookResult = ReturnType<typeof useGetAllLoaiClsSuspenseQuery>;
export type GetAllLoaiClsQueryResult = Apollo.QueryResult<GetAllLoaiClsQuery, GetAllLoaiClsQueryVariables>;
export const GetAllPhieuClSbyNgayDocument = gql`
    query GetAllPhieuCLSbyNgay($ngaytao: DateTime!, $trangthai: String!) {
  getAllPhieuCLSbyNgay(ngaytao: $ngaytao, trangthai: $trangthai) {
    _id
    benhnhan {
      hoten
      ngaysinh
      gioitinh
      sodienthoai
    }
    bacsi {
      hoten
      ngaysinh
      gioitinh
      sodienthoai
    }
    bhyt
    truoc
    ketquacanlamsangs {
      _id
      loaicanlamsang {
        tenxetnghiem
        gia
        loaicanlamsang
      }
      hinhanh {
        fileName
        url
        type
      }
      ketluan
      thietbi
    }
  }
}
    `;

/**
 * __useGetAllPhieuClSbyNgayQuery__
 *
 * To run a query within a React component, call `useGetAllPhieuClSbyNgayQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPhieuClSbyNgayQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPhieuClSbyNgayQuery({
 *   variables: {
 *      ngaytao: // value for 'ngaytao'
 *      trangthai: // value for 'trangthai'
 *   },
 * });
 */
export function useGetAllPhieuClSbyNgayQuery(baseOptions: Apollo.QueryHookOptions<GetAllPhieuClSbyNgayQuery, GetAllPhieuClSbyNgayQueryVariables> & ({ variables: GetAllPhieuClSbyNgayQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPhieuClSbyNgayQuery, GetAllPhieuClSbyNgayQueryVariables>(GetAllPhieuClSbyNgayDocument, options);
      }
export function useGetAllPhieuClSbyNgayLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPhieuClSbyNgayQuery, GetAllPhieuClSbyNgayQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPhieuClSbyNgayQuery, GetAllPhieuClSbyNgayQueryVariables>(GetAllPhieuClSbyNgayDocument, options);
        }
export function useGetAllPhieuClSbyNgaySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllPhieuClSbyNgayQuery, GetAllPhieuClSbyNgayQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllPhieuClSbyNgayQuery, GetAllPhieuClSbyNgayQueryVariables>(GetAllPhieuClSbyNgayDocument, options);
        }
export type GetAllPhieuClSbyNgayQueryHookResult = ReturnType<typeof useGetAllPhieuClSbyNgayQuery>;
export type GetAllPhieuClSbyNgayLazyQueryHookResult = ReturnType<typeof useGetAllPhieuClSbyNgayLazyQuery>;
export type GetAllPhieuClSbyNgaySuspenseQueryHookResult = ReturnType<typeof useGetAllPhieuClSbyNgaySuspenseQuery>;
export type GetAllPhieuClSbyNgayQueryResult = Apollo.QueryResult<GetAllPhieuClSbyNgayQuery, GetAllPhieuClSbyNgayQueryVariables>;
export const GetAllPhongDocument = gql`
    query GetAllPhong {
  getAllPhong {
    _id
    tenphong
    mota
    chuyenkhoa {
      tenkhoa
    }
  }
}
    `;

/**
 * __useGetAllPhongQuery__
 *
 * To run a query within a React component, call `useGetAllPhongQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPhongQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPhongQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPhongQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPhongQuery, GetAllPhongQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPhongQuery, GetAllPhongQueryVariables>(GetAllPhongDocument, options);
      }
export function useGetAllPhongLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPhongQuery, GetAllPhongQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPhongQuery, GetAllPhongQueryVariables>(GetAllPhongDocument, options);
        }
export function useGetAllPhongSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllPhongQuery, GetAllPhongQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllPhongQuery, GetAllPhongQueryVariables>(GetAllPhongDocument, options);
        }
export type GetAllPhongQueryHookResult = ReturnType<typeof useGetAllPhongQuery>;
export type GetAllPhongLazyQueryHookResult = ReturnType<typeof useGetAllPhongLazyQuery>;
export type GetAllPhongSuspenseQueryHookResult = ReturnType<typeof useGetAllPhongSuspenseQuery>;
export type GetAllPhongQueryResult = Apollo.QueryResult<GetAllPhongQuery, GetAllPhongQueryVariables>;
export const GetAllChuyenKhoaDocument = gql`
    query GetAllChuyenKhoa {
  getAllChuyenKhoa {
    _id
    tenkhoa
    mota
  }
}
    `;

/**
 * __useGetAllChuyenKhoaQuery__
 *
 * To run a query within a React component, call `useGetAllChuyenKhoaQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllChuyenKhoaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllChuyenKhoaQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllChuyenKhoaQuery(baseOptions?: Apollo.QueryHookOptions<GetAllChuyenKhoaQuery, GetAllChuyenKhoaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllChuyenKhoaQuery, GetAllChuyenKhoaQueryVariables>(GetAllChuyenKhoaDocument, options);
      }
export function useGetAllChuyenKhoaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllChuyenKhoaQuery, GetAllChuyenKhoaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllChuyenKhoaQuery, GetAllChuyenKhoaQueryVariables>(GetAllChuyenKhoaDocument, options);
        }
export function useGetAllChuyenKhoaSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllChuyenKhoaQuery, GetAllChuyenKhoaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllChuyenKhoaQuery, GetAllChuyenKhoaQueryVariables>(GetAllChuyenKhoaDocument, options);
        }
export type GetAllChuyenKhoaQueryHookResult = ReturnType<typeof useGetAllChuyenKhoaQuery>;
export type GetAllChuyenKhoaLazyQueryHookResult = ReturnType<typeof useGetAllChuyenKhoaLazyQuery>;
export type GetAllChuyenKhoaSuspenseQueryHookResult = ReturnType<typeof useGetAllChuyenKhoaSuspenseQuery>;
export type GetAllChuyenKhoaQueryResult = Apollo.QueryResult<GetAllChuyenKhoaQuery, GetAllChuyenKhoaQueryVariables>;
export const FindAllRelatedKetQuaCanLamSangDocument = gql`
    query FindAllRelatedKetQuaCanLamSang($input: [String!]!) {
  findAllRelatedKetQuaCanLamSang(ketQuaIds: $input) {
    _id
    loaicanlamsang {
      tenxetnghiem
      loaicanlamsang
    }
    hinhanh {
      url
      fileName
      type
    }
    thietbi
    ketluan
  }
}
    `;

/**
 * __useFindAllRelatedKetQuaCanLamSangQuery__
 *
 * To run a query within a React component, call `useFindAllRelatedKetQuaCanLamSangQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllRelatedKetQuaCanLamSangQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllRelatedKetQuaCanLamSangQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFindAllRelatedKetQuaCanLamSangQuery(baseOptions: Apollo.QueryHookOptions<FindAllRelatedKetQuaCanLamSangQuery, FindAllRelatedKetQuaCanLamSangQueryVariables> & ({ variables: FindAllRelatedKetQuaCanLamSangQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllRelatedKetQuaCanLamSangQuery, FindAllRelatedKetQuaCanLamSangQueryVariables>(FindAllRelatedKetQuaCanLamSangDocument, options);
      }
export function useFindAllRelatedKetQuaCanLamSangLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllRelatedKetQuaCanLamSangQuery, FindAllRelatedKetQuaCanLamSangQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllRelatedKetQuaCanLamSangQuery, FindAllRelatedKetQuaCanLamSangQueryVariables>(FindAllRelatedKetQuaCanLamSangDocument, options);
        }
export function useFindAllRelatedKetQuaCanLamSangSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindAllRelatedKetQuaCanLamSangQuery, FindAllRelatedKetQuaCanLamSangQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindAllRelatedKetQuaCanLamSangQuery, FindAllRelatedKetQuaCanLamSangQueryVariables>(FindAllRelatedKetQuaCanLamSangDocument, options);
        }
export type FindAllRelatedKetQuaCanLamSangQueryHookResult = ReturnType<typeof useFindAllRelatedKetQuaCanLamSangQuery>;
export type FindAllRelatedKetQuaCanLamSangLazyQueryHookResult = ReturnType<typeof useFindAllRelatedKetQuaCanLamSangLazyQuery>;
export type FindAllRelatedKetQuaCanLamSangSuspenseQueryHookResult = ReturnType<typeof useFindAllRelatedKetQuaCanLamSangSuspenseQuery>;
export type FindAllRelatedKetQuaCanLamSangQueryResult = Apollo.QueryResult<FindAllRelatedKetQuaCanLamSangQuery, FindAllRelatedKetQuaCanLamSangQueryVariables>;
export const GetAllHoaDonDocument = gql`
    query GetAllHoaDon($input: FetchPagination!) {
  CountHoadon
  getAllHoadon(fetchPagination: $input) {
    _id
    benhnhan {
      hoten
      ngaysinh
      gioitinh
      sodienthoai
    }
    trangthai
    ngaytao
    bhyt
    thanhtien
    thuocs {
      ten
      gia
      soluong
      thanhtien
    }
    vattuyte {
      ten
      gia
      soluong
      thanhtien
    }
  }
}
    `;

/**
 * __useGetAllHoaDonQuery__
 *
 * To run a query within a React component, call `useGetAllHoaDonQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllHoaDonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllHoaDonQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllHoaDonQuery(baseOptions: Apollo.QueryHookOptions<GetAllHoaDonQuery, GetAllHoaDonQueryVariables> & ({ variables: GetAllHoaDonQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllHoaDonQuery, GetAllHoaDonQueryVariables>(GetAllHoaDonDocument, options);
      }
export function useGetAllHoaDonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllHoaDonQuery, GetAllHoaDonQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllHoaDonQuery, GetAllHoaDonQueryVariables>(GetAllHoaDonDocument, options);
        }
export function useGetAllHoaDonSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllHoaDonQuery, GetAllHoaDonQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllHoaDonQuery, GetAllHoaDonQueryVariables>(GetAllHoaDonDocument, options);
        }
export type GetAllHoaDonQueryHookResult = ReturnType<typeof useGetAllHoaDonQuery>;
export type GetAllHoaDonLazyQueryHookResult = ReturnType<typeof useGetAllHoaDonLazyQuery>;
export type GetAllHoaDonSuspenseQueryHookResult = ReturnType<typeof useGetAllHoaDonSuspenseQuery>;
export type GetAllHoaDonQueryResult = Apollo.QueryResult<GetAllHoaDonQuery, GetAllHoaDonQueryVariables>;
export const GetAllDatLichbyTrangThaiDocument = gql`
    query GetAllDatLichbyTrangThai($input: String!) {
  getAllDatLichbyTrangThai(trangthai: $input) {
    _id
    benhnhan {
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
}
    `;

/**
 * __useGetAllDatLichbyTrangThaiQuery__
 *
 * To run a query within a React component, call `useGetAllDatLichbyTrangThaiQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllDatLichbyTrangThaiQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllDatLichbyTrangThaiQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllDatLichbyTrangThaiQuery(baseOptions: Apollo.QueryHookOptions<GetAllDatLichbyTrangThaiQuery, GetAllDatLichbyTrangThaiQueryVariables> & ({ variables: GetAllDatLichbyTrangThaiQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllDatLichbyTrangThaiQuery, GetAllDatLichbyTrangThaiQueryVariables>(GetAllDatLichbyTrangThaiDocument, options);
      }
export function useGetAllDatLichbyTrangThaiLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllDatLichbyTrangThaiQuery, GetAllDatLichbyTrangThaiQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllDatLichbyTrangThaiQuery, GetAllDatLichbyTrangThaiQueryVariables>(GetAllDatLichbyTrangThaiDocument, options);
        }
export function useGetAllDatLichbyTrangThaiSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllDatLichbyTrangThaiQuery, GetAllDatLichbyTrangThaiQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllDatLichbyTrangThaiQuery, GetAllDatLichbyTrangThaiQueryVariables>(GetAllDatLichbyTrangThaiDocument, options);
        }
export type GetAllDatLichbyTrangThaiQueryHookResult = ReturnType<typeof useGetAllDatLichbyTrangThaiQuery>;
export type GetAllDatLichbyTrangThaiLazyQueryHookResult = ReturnType<typeof useGetAllDatLichbyTrangThaiLazyQuery>;
export type GetAllDatLichbyTrangThaiSuspenseQueryHookResult = ReturnType<typeof useGetAllDatLichbyTrangThaiSuspenseQuery>;
export type GetAllDatLichbyTrangThaiQueryResult = Apollo.QueryResult<GetAllDatLichbyTrangThaiQuery, GetAllDatLichbyTrangThaiQueryVariables>;
export const GetAllPhieuXacNhanDaXetNghiemDocument = gql`
    query GetAllPhieuXacNhanDaXetNghiem($ngaykham: String!, $phongIds: String!) {
  getAllPhieuXacNhanDaXetNgiem(ngaykham: $ngaykham, phongIds: $phongIds) {
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
    phien {
      batdau
      ketthuc
      trangthai
    }
    phieuchidinhcanlamsang {
      _id
      bacsi {
        _id
        hoten
      }
      bhyt
      ngaytao
      trangthai
      ketquacanlamsangs {
        loaicanlamsang {
          _id
          tenxetnghiem
          loaicanlamsang
        }
        ketluan
        thietbi
        hinhanh {
          url
          fileName
          type
        }
      }
    }
  }
}
    `;

/**
 * __useGetAllPhieuXacNhanDaXetNghiemQuery__
 *
 * To run a query within a React component, call `useGetAllPhieuXacNhanDaXetNghiemQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPhieuXacNhanDaXetNghiemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPhieuXacNhanDaXetNghiemQuery({
 *   variables: {
 *      ngaykham: // value for 'ngaykham'
 *      phongIds: // value for 'phongIds'
 *   },
 * });
 */
export function useGetAllPhieuXacNhanDaXetNghiemQuery(baseOptions: Apollo.QueryHookOptions<GetAllPhieuXacNhanDaXetNghiemQuery, GetAllPhieuXacNhanDaXetNghiemQueryVariables> & ({ variables: GetAllPhieuXacNhanDaXetNghiemQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPhieuXacNhanDaXetNghiemQuery, GetAllPhieuXacNhanDaXetNghiemQueryVariables>(GetAllPhieuXacNhanDaXetNghiemDocument, options);
      }
export function useGetAllPhieuXacNhanDaXetNghiemLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPhieuXacNhanDaXetNghiemQuery, GetAllPhieuXacNhanDaXetNghiemQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPhieuXacNhanDaXetNghiemQuery, GetAllPhieuXacNhanDaXetNghiemQueryVariables>(GetAllPhieuXacNhanDaXetNghiemDocument, options);
        }
export function useGetAllPhieuXacNhanDaXetNghiemSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllPhieuXacNhanDaXetNghiemQuery, GetAllPhieuXacNhanDaXetNghiemQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllPhieuXacNhanDaXetNghiemQuery, GetAllPhieuXacNhanDaXetNghiemQueryVariables>(GetAllPhieuXacNhanDaXetNghiemDocument, options);
        }
export type GetAllPhieuXacNhanDaXetNghiemQueryHookResult = ReturnType<typeof useGetAllPhieuXacNhanDaXetNghiemQuery>;
export type GetAllPhieuXacNhanDaXetNghiemLazyQueryHookResult = ReturnType<typeof useGetAllPhieuXacNhanDaXetNghiemLazyQuery>;
export type GetAllPhieuXacNhanDaXetNghiemSuspenseQueryHookResult = ReturnType<typeof useGetAllPhieuXacNhanDaXetNghiemSuspenseQuery>;
export type GetAllPhieuXacNhanDaXetNghiemQueryResult = Apollo.QueryResult<GetAllPhieuXacNhanDaXetNghiemQuery, GetAllPhieuXacNhanDaXetNghiemQueryVariables>;
export const GetAllNhanVienDocument = gql`
    query GetAllNhanVien($input: FetchPagination!) {
  CountNhanVien
  getAllNhanVien(fetchPagination: $input) {
    _id
    hoten
    ngaysinh
    gioitinh
    diachi
    sodienthoai
    cccd
    phongs {
      _id
      tenphong
    }
    ngayBD
    chucvu
  }
}
    `;

/**
 * __useGetAllNhanVienQuery__
 *
 * To run a query within a React component, call `useGetAllNhanVienQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllNhanVienQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllNhanVienQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllNhanVienQuery(baseOptions: Apollo.QueryHookOptions<GetAllNhanVienQuery, GetAllNhanVienQueryVariables> & ({ variables: GetAllNhanVienQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllNhanVienQuery, GetAllNhanVienQueryVariables>(GetAllNhanVienDocument, options);
      }
export function useGetAllNhanVienLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllNhanVienQuery, GetAllNhanVienQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllNhanVienQuery, GetAllNhanVienQueryVariables>(GetAllNhanVienDocument, options);
        }
export function useGetAllNhanVienSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllNhanVienQuery, GetAllNhanVienQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllNhanVienQuery, GetAllNhanVienQueryVariables>(GetAllNhanVienDocument, options);
        }
export type GetAllNhanVienQueryHookResult = ReturnType<typeof useGetAllNhanVienQuery>;
export type GetAllNhanVienLazyQueryHookResult = ReturnType<typeof useGetAllNhanVienLazyQuery>;
export type GetAllNhanVienSuspenseQueryHookResult = ReturnType<typeof useGetAllNhanVienSuspenseQuery>;
export type GetAllNhanVienQueryResult = Apollo.QueryResult<GetAllNhanVienQuery, GetAllNhanVienQueryVariables>;
export const GetAllHoaDonPhieuCanLamSangDocument = gql`
    query GetAllHoaDonPhieuCanLamSang($input: FetchPagination!) {
  CountHoadonchidinhcanlamsang
  getAllHoaDonPhieuCanLamSang(fetchPagination: $input) {
    _id
    bhyt
    benhnhan {
      hoten
      ngaysinh
      gioitinh
      sodienthoai
    }
    chitietcanlamsang {
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
}
    `;

/**
 * __useGetAllHoaDonPhieuCanLamSangQuery__
 *
 * To run a query within a React component, call `useGetAllHoaDonPhieuCanLamSangQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllHoaDonPhieuCanLamSangQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllHoaDonPhieuCanLamSangQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllHoaDonPhieuCanLamSangQuery(baseOptions: Apollo.QueryHookOptions<GetAllHoaDonPhieuCanLamSangQuery, GetAllHoaDonPhieuCanLamSangQueryVariables> & ({ variables: GetAllHoaDonPhieuCanLamSangQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllHoaDonPhieuCanLamSangQuery, GetAllHoaDonPhieuCanLamSangQueryVariables>(GetAllHoaDonPhieuCanLamSangDocument, options);
      }
export function useGetAllHoaDonPhieuCanLamSangLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllHoaDonPhieuCanLamSangQuery, GetAllHoaDonPhieuCanLamSangQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllHoaDonPhieuCanLamSangQuery, GetAllHoaDonPhieuCanLamSangQueryVariables>(GetAllHoaDonPhieuCanLamSangDocument, options);
        }
export function useGetAllHoaDonPhieuCanLamSangSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllHoaDonPhieuCanLamSangQuery, GetAllHoaDonPhieuCanLamSangQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllHoaDonPhieuCanLamSangQuery, GetAllHoaDonPhieuCanLamSangQueryVariables>(GetAllHoaDonPhieuCanLamSangDocument, options);
        }
export type GetAllHoaDonPhieuCanLamSangQueryHookResult = ReturnType<typeof useGetAllHoaDonPhieuCanLamSangQuery>;
export type GetAllHoaDonPhieuCanLamSangLazyQueryHookResult = ReturnType<typeof useGetAllHoaDonPhieuCanLamSangLazyQuery>;
export type GetAllHoaDonPhieuCanLamSangSuspenseQueryHookResult = ReturnType<typeof useGetAllHoaDonPhieuCanLamSangSuspenseQuery>;
export type GetAllHoaDonPhieuCanLamSangQueryResult = Apollo.QueryResult<GetAllHoaDonPhieuCanLamSangQuery, GetAllHoaDonPhieuCanLamSangQueryVariables>;
export const GetAllVattuyteDocument = gql`
    query GetAllVattuyte {
  getAllVatTuYTe {
    tenvattu
    _id
    tenvattu
    chiphi {
      bhyt
      gia
    }
    soluong
    dvt
  }
}
    `;

/**
 * __useGetAllVattuyteQuery__
 *
 * To run a query within a React component, call `useGetAllVattuyteQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllVattuyteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllVattuyteQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllVattuyteQuery(baseOptions?: Apollo.QueryHookOptions<GetAllVattuyteQuery, GetAllVattuyteQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllVattuyteQuery, GetAllVattuyteQueryVariables>(GetAllVattuyteDocument, options);
      }
export function useGetAllVattuyteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllVattuyteQuery, GetAllVattuyteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllVattuyteQuery, GetAllVattuyteQueryVariables>(GetAllVattuyteDocument, options);
        }
export function useGetAllVattuyteSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllVattuyteQuery, GetAllVattuyteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllVattuyteQuery, GetAllVattuyteQueryVariables>(GetAllVattuyteDocument, options);
        }
export type GetAllVattuyteQueryHookResult = ReturnType<typeof useGetAllVattuyteQuery>;
export type GetAllVattuyteLazyQueryHookResult = ReturnType<typeof useGetAllVattuyteLazyQuery>;
export type GetAllVattuyteSuspenseQueryHookResult = ReturnType<typeof useGetAllVattuyteSuspenseQuery>;
export type GetAllVattuyteQueryResult = Apollo.QueryResult<GetAllVattuyteQuery, GetAllVattuyteQueryVariables>;
export const GetAllBlogsDocument = gql`
    query GetAllBlogs($input: FetchPagination!) {
  countBlogs
  getAllBlog(fetchPagination: $input) {
    _id
    user {
      username
    }
    hinhanh {
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
}
    `;

/**
 * __useGetAllBlogsQuery__
 *
 * To run a query within a React component, call `useGetAllBlogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBlogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBlogsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllBlogsQuery(baseOptions: Apollo.QueryHookOptions<GetAllBlogsQuery, GetAllBlogsQueryVariables> & ({ variables: GetAllBlogsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllBlogsQuery, GetAllBlogsQueryVariables>(GetAllBlogsDocument, options);
      }
export function useGetAllBlogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllBlogsQuery, GetAllBlogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllBlogsQuery, GetAllBlogsQueryVariables>(GetAllBlogsDocument, options);
        }
export function useGetAllBlogsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllBlogsQuery, GetAllBlogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllBlogsQuery, GetAllBlogsQueryVariables>(GetAllBlogsDocument, options);
        }
export type GetAllBlogsQueryHookResult = ReturnType<typeof useGetAllBlogsQuery>;
export type GetAllBlogsLazyQueryHookResult = ReturnType<typeof useGetAllBlogsLazyQuery>;
export type GetAllBlogsSuspenseQueryHookResult = ReturnType<typeof useGetAllBlogsSuspenseQuery>;
export type GetAllBlogsQueryResult = Apollo.QueryResult<GetAllBlogsQuery, GetAllBlogsQueryVariables>;
export const GetBlogbyIdDocument = gql`
    query GetBlogbyId($id: String!) {
  getBlogbyId(id: $id) {
    _id
    user {
      username
    }
    tieude
    tomtat
    noidung
    hinhanh {
      fileName
      url
      type
    }
    luotxem
    ngaytao
    kichhoat
  }
}
    `;

/**
 * __useGetBlogbyIdQuery__
 *
 * To run a query within a React component, call `useGetBlogbyIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlogbyIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlogbyIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBlogbyIdQuery(baseOptions: Apollo.QueryHookOptions<GetBlogbyIdQuery, GetBlogbyIdQueryVariables> & ({ variables: GetBlogbyIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBlogbyIdQuery, GetBlogbyIdQueryVariables>(GetBlogbyIdDocument, options);
      }
export function useGetBlogbyIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBlogbyIdQuery, GetBlogbyIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBlogbyIdQuery, GetBlogbyIdQueryVariables>(GetBlogbyIdDocument, options);
        }
export function useGetBlogbyIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetBlogbyIdQuery, GetBlogbyIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBlogbyIdQuery, GetBlogbyIdQueryVariables>(GetBlogbyIdDocument, options);
        }
export type GetBlogbyIdQueryHookResult = ReturnType<typeof useGetBlogbyIdQuery>;
export type GetBlogbyIdLazyQueryHookResult = ReturnType<typeof useGetBlogbyIdLazyQuery>;
export type GetBlogbyIdSuspenseQueryHookResult = ReturnType<typeof useGetBlogbyIdSuspenseQuery>;
export type GetBlogbyIdQueryResult = Apollo.QueryResult<GetBlogbyIdQuery, GetBlogbyIdQueryVariables>;
export const CountPhieuXacNhanByDateDocument = gql`
    query CountPhieuXacNhanByDate($start: DateTime!, $end: DateTime!) {
  countPhieuXacNhanByDate(start: $start, end: $end)
}
    `;

/**
 * __useCountPhieuXacNhanByDateQuery__
 *
 * To run a query within a React component, call `useCountPhieuXacNhanByDateQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountPhieuXacNhanByDateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountPhieuXacNhanByDateQuery({
 *   variables: {
 *      start: // value for 'start'
 *      end: // value for 'end'
 *   },
 * });
 */
export function useCountPhieuXacNhanByDateQuery(baseOptions: Apollo.QueryHookOptions<CountPhieuXacNhanByDateQuery, CountPhieuXacNhanByDateQueryVariables> & ({ variables: CountPhieuXacNhanByDateQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountPhieuXacNhanByDateQuery, CountPhieuXacNhanByDateQueryVariables>(CountPhieuXacNhanByDateDocument, options);
      }
export function useCountPhieuXacNhanByDateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountPhieuXacNhanByDateQuery, CountPhieuXacNhanByDateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountPhieuXacNhanByDateQuery, CountPhieuXacNhanByDateQueryVariables>(CountPhieuXacNhanByDateDocument, options);
        }
export function useCountPhieuXacNhanByDateSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CountPhieuXacNhanByDateQuery, CountPhieuXacNhanByDateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CountPhieuXacNhanByDateQuery, CountPhieuXacNhanByDateQueryVariables>(CountPhieuXacNhanByDateDocument, options);
        }
export type CountPhieuXacNhanByDateQueryHookResult = ReturnType<typeof useCountPhieuXacNhanByDateQuery>;
export type CountPhieuXacNhanByDateLazyQueryHookResult = ReturnType<typeof useCountPhieuXacNhanByDateLazyQuery>;
export type CountPhieuXacNhanByDateSuspenseQueryHookResult = ReturnType<typeof useCountPhieuXacNhanByDateSuspenseQuery>;
export type CountPhieuXacNhanByDateQueryResult = Apollo.QueryResult<CountPhieuXacNhanByDateQuery, CountPhieuXacNhanByDateQueryVariables>;
export const GetTotalThanhTienByDateDocument = gql`
    query GetTotalThanhTienByDate($start: DateTime!, $end: DateTime!) {
  getTotalThanhTienByDate(start: $start, end: $end)
}
    `;

/**
 * __useGetTotalThanhTienByDateQuery__
 *
 * To run a query within a React component, call `useGetTotalThanhTienByDateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTotalThanhTienByDateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTotalThanhTienByDateQuery({
 *   variables: {
 *      start: // value for 'start'
 *      end: // value for 'end'
 *   },
 * });
 */
export function useGetTotalThanhTienByDateQuery(baseOptions: Apollo.QueryHookOptions<GetTotalThanhTienByDateQuery, GetTotalThanhTienByDateQueryVariables> & ({ variables: GetTotalThanhTienByDateQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTotalThanhTienByDateQuery, GetTotalThanhTienByDateQueryVariables>(GetTotalThanhTienByDateDocument, options);
      }
export function useGetTotalThanhTienByDateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTotalThanhTienByDateQuery, GetTotalThanhTienByDateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTotalThanhTienByDateQuery, GetTotalThanhTienByDateQueryVariables>(GetTotalThanhTienByDateDocument, options);
        }
export function useGetTotalThanhTienByDateSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTotalThanhTienByDateQuery, GetTotalThanhTienByDateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTotalThanhTienByDateQuery, GetTotalThanhTienByDateQueryVariables>(GetTotalThanhTienByDateDocument, options);
        }
export type GetTotalThanhTienByDateQueryHookResult = ReturnType<typeof useGetTotalThanhTienByDateQuery>;
export type GetTotalThanhTienByDateLazyQueryHookResult = ReturnType<typeof useGetTotalThanhTienByDateLazyQuery>;
export type GetTotalThanhTienByDateSuspenseQueryHookResult = ReturnType<typeof useGetTotalThanhTienByDateSuspenseQuery>;
export type GetTotalThanhTienByDateQueryResult = Apollo.QueryResult<GetTotalThanhTienByDateQuery, GetTotalThanhTienByDateQueryVariables>;
export const GetTotalThanhTienClsByDateDocument = gql`
    query getTotalThanhTienCLSByDate($start: DateTime!, $end: DateTime!) {
  getTotalThanhTienCLSByDate(start: $start, end: $end)
}
    `;

/**
 * __useGetTotalThanhTienClsByDateQuery__
 *
 * To run a query within a React component, call `useGetTotalThanhTienClsByDateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTotalThanhTienClsByDateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTotalThanhTienClsByDateQuery({
 *   variables: {
 *      start: // value for 'start'
 *      end: // value for 'end'
 *   },
 * });
 */
export function useGetTotalThanhTienClsByDateQuery(baseOptions: Apollo.QueryHookOptions<GetTotalThanhTienClsByDateQuery, GetTotalThanhTienClsByDateQueryVariables> & ({ variables: GetTotalThanhTienClsByDateQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTotalThanhTienClsByDateQuery, GetTotalThanhTienClsByDateQueryVariables>(GetTotalThanhTienClsByDateDocument, options);
      }
export function useGetTotalThanhTienClsByDateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTotalThanhTienClsByDateQuery, GetTotalThanhTienClsByDateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTotalThanhTienClsByDateQuery, GetTotalThanhTienClsByDateQueryVariables>(GetTotalThanhTienClsByDateDocument, options);
        }
export function useGetTotalThanhTienClsByDateSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTotalThanhTienClsByDateQuery, GetTotalThanhTienClsByDateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTotalThanhTienClsByDateQuery, GetTotalThanhTienClsByDateQueryVariables>(GetTotalThanhTienClsByDateDocument, options);
        }
export type GetTotalThanhTienClsByDateQueryHookResult = ReturnType<typeof useGetTotalThanhTienClsByDateQuery>;
export type GetTotalThanhTienClsByDateLazyQueryHookResult = ReturnType<typeof useGetTotalThanhTienClsByDateLazyQuery>;
export type GetTotalThanhTienClsByDateSuspenseQueryHookResult = ReturnType<typeof useGetTotalThanhTienClsByDateSuspenseQuery>;
export type GetTotalThanhTienClsByDateQueryResult = Apollo.QueryResult<GetTotalThanhTienClsByDateQuery, GetTotalThanhTienClsByDateQueryVariables>;
export const GetStartAndEndOfMonthDocument = gql`
    query getStartAndEndOfMonth($year: Float!) {
  getStartAndEndOfMonth(year: $year) {
    month
    count
  }
}
    `;

/**
 * __useGetStartAndEndOfMonthQuery__
 *
 * To run a query within a React component, call `useGetStartAndEndOfMonthQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStartAndEndOfMonthQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStartAndEndOfMonthQuery({
 *   variables: {
 *      year: // value for 'year'
 *   },
 * });
 */
export function useGetStartAndEndOfMonthQuery(baseOptions: Apollo.QueryHookOptions<GetStartAndEndOfMonthQuery, GetStartAndEndOfMonthQueryVariables> & ({ variables: GetStartAndEndOfMonthQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStartAndEndOfMonthQuery, GetStartAndEndOfMonthQueryVariables>(GetStartAndEndOfMonthDocument, options);
      }
export function useGetStartAndEndOfMonthLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStartAndEndOfMonthQuery, GetStartAndEndOfMonthQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStartAndEndOfMonthQuery, GetStartAndEndOfMonthQueryVariables>(GetStartAndEndOfMonthDocument, options);
        }
export function useGetStartAndEndOfMonthSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetStartAndEndOfMonthQuery, GetStartAndEndOfMonthQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetStartAndEndOfMonthQuery, GetStartAndEndOfMonthQueryVariables>(GetStartAndEndOfMonthDocument, options);
        }
export type GetStartAndEndOfMonthQueryHookResult = ReturnType<typeof useGetStartAndEndOfMonthQuery>;
export type GetStartAndEndOfMonthLazyQueryHookResult = ReturnType<typeof useGetStartAndEndOfMonthLazyQuery>;
export type GetStartAndEndOfMonthSuspenseQueryHookResult = ReturnType<typeof useGetStartAndEndOfMonthSuspenseQuery>;
export type GetStartAndEndOfMonthQueryResult = Apollo.QueryResult<GetStartAndEndOfMonthQuery, GetStartAndEndOfMonthQueryVariables>;
export const GetTongTienbyMonthDocument = gql`
    query GetTongTienbyMonth($year: Float!) {
  getTongTienbyMonth(year: $year) {
    month
    tongtien
  }
}
    `;

/**
 * __useGetTongTienbyMonthQuery__
 *
 * To run a query within a React component, call `useGetTongTienbyMonthQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTongTienbyMonthQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTongTienbyMonthQuery({
 *   variables: {
 *      year: // value for 'year'
 *   },
 * });
 */
export function useGetTongTienbyMonthQuery(baseOptions: Apollo.QueryHookOptions<GetTongTienbyMonthQuery, GetTongTienbyMonthQueryVariables> & ({ variables: GetTongTienbyMonthQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTongTienbyMonthQuery, GetTongTienbyMonthQueryVariables>(GetTongTienbyMonthDocument, options);
      }
export function useGetTongTienbyMonthLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTongTienbyMonthQuery, GetTongTienbyMonthQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTongTienbyMonthQuery, GetTongTienbyMonthQueryVariables>(GetTongTienbyMonthDocument, options);
        }
export function useGetTongTienbyMonthSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTongTienbyMonthQuery, GetTongTienbyMonthQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTongTienbyMonthQuery, GetTongTienbyMonthQueryVariables>(GetTongTienbyMonthDocument, options);
        }
export type GetTongTienbyMonthQueryHookResult = ReturnType<typeof useGetTongTienbyMonthQuery>;
export type GetTongTienbyMonthLazyQueryHookResult = ReturnType<typeof useGetTongTienbyMonthLazyQuery>;
export type GetTongTienbyMonthSuspenseQueryHookResult = ReturnType<typeof useGetTongTienbyMonthSuspenseQuery>;
export type GetTongTienbyMonthQueryResult = Apollo.QueryResult<GetTongTienbyMonthQuery, GetTongTienbyMonthQueryVariables>;
export const GetTongTienbyMonthClsDocument = gql`
    query GetTongTienbyMonthCLS($year: Float!) {
  getTongTienbyMonthCLS(year: $year) {
    month
    tongtien
  }
}
    `;

/**
 * __useGetTongTienbyMonthClsQuery__
 *
 * To run a query within a React component, call `useGetTongTienbyMonthClsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTongTienbyMonthClsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTongTienbyMonthClsQuery({
 *   variables: {
 *      year: // value for 'year'
 *   },
 * });
 */
export function useGetTongTienbyMonthClsQuery(baseOptions: Apollo.QueryHookOptions<GetTongTienbyMonthClsQuery, GetTongTienbyMonthClsQueryVariables> & ({ variables: GetTongTienbyMonthClsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTongTienbyMonthClsQuery, GetTongTienbyMonthClsQueryVariables>(GetTongTienbyMonthClsDocument, options);
      }
export function useGetTongTienbyMonthClsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTongTienbyMonthClsQuery, GetTongTienbyMonthClsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTongTienbyMonthClsQuery, GetTongTienbyMonthClsQueryVariables>(GetTongTienbyMonthClsDocument, options);
        }
export function useGetTongTienbyMonthClsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTongTienbyMonthClsQuery, GetTongTienbyMonthClsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTongTienbyMonthClsQuery, GetTongTienbyMonthClsQueryVariables>(GetTongTienbyMonthClsDocument, options);
        }
export type GetTongTienbyMonthClsQueryHookResult = ReturnType<typeof useGetTongTienbyMonthClsQuery>;
export type GetTongTienbyMonthClsLazyQueryHookResult = ReturnType<typeof useGetTongTienbyMonthClsLazyQuery>;
export type GetTongTienbyMonthClsSuspenseQueryHookResult = ReturnType<typeof useGetTongTienbyMonthClsSuspenseQuery>;
export type GetTongTienbyMonthClsQueryResult = Apollo.QueryResult<GetTongTienbyMonthClsQuery, GetTongTienbyMonthClsQueryVariables>;
export const GetAllDatlichBacSiDocument = gql`
    query GetAllDatlichBacSi {
  getAllDatlichBacSi {
    _id
    bacsi {
      hoten
      chuyenkhoa {
        tenkhoa
      }
      phongs {
        tenphong
      }
    }
    benhnhan {
      hoten
      ngaysinh
      gioitinh
      sodienthoai
      diachi
      cccd
    }
    motabenh
    phien {
      batdau
      ketthuc
      soluongToiDa
      trangthai
    }
    ngaydat
    ngaykham
    email
    trangthai
  }
}
    `;

/**
 * __useGetAllDatlichBacSiQuery__
 *
 * To run a query within a React component, call `useGetAllDatlichBacSiQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllDatlichBacSiQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllDatlichBacSiQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllDatlichBacSiQuery(baseOptions?: Apollo.QueryHookOptions<GetAllDatlichBacSiQuery, GetAllDatlichBacSiQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllDatlichBacSiQuery, GetAllDatlichBacSiQueryVariables>(GetAllDatlichBacSiDocument, options);
      }
export function useGetAllDatlichBacSiLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllDatlichBacSiQuery, GetAllDatlichBacSiQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllDatlichBacSiQuery, GetAllDatlichBacSiQueryVariables>(GetAllDatlichBacSiDocument, options);
        }
export function useGetAllDatlichBacSiSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllDatlichBacSiQuery, GetAllDatlichBacSiQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllDatlichBacSiQuery, GetAllDatlichBacSiQueryVariables>(GetAllDatlichBacSiDocument, options);
        }
export type GetAllDatlichBacSiQueryHookResult = ReturnType<typeof useGetAllDatlichBacSiQuery>;
export type GetAllDatlichBacSiLazyQueryHookResult = ReturnType<typeof useGetAllDatlichBacSiLazyQuery>;
export type GetAllDatlichBacSiSuspenseQueryHookResult = ReturnType<typeof useGetAllDatlichBacSiSuspenseQuery>;
export type GetAllDatlichBacSiQueryResult = Apollo.QueryResult<GetAllDatlichBacSiQuery, GetAllDatlichBacSiQueryVariables>;
export const GetAllDatLichBacSiByTrangThaiDocument = gql`
    query GetAllDatLichBacSiByTrangThai($trangthai: String!) {
  getAllDatLichBacSiByTrangThai(trangthai: $trangthai) {
    _id
    bacsi {
      _id
      hoten
      chuyenkhoa {
        tenkhoa
      }
      phongs {
        _id
        tenphong
      }
    }
    benhnhan {
      _id
      hoten
      sodienthoai
      ngaysinh
      gioitinh
      diachi
      cccd
    }
    motabenh
    phien {
      batdau
      ketthuc
      soluongToiDa
      trangthai
    }
    ngaydat
    ngaykham
    email
    trangthai
  }
}
    `;

/**
 * __useGetAllDatLichBacSiByTrangThaiQuery__
 *
 * To run a query within a React component, call `useGetAllDatLichBacSiByTrangThaiQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllDatLichBacSiByTrangThaiQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllDatLichBacSiByTrangThaiQuery({
 *   variables: {
 *      trangthai: // value for 'trangthai'
 *   },
 * });
 */
export function useGetAllDatLichBacSiByTrangThaiQuery(baseOptions: Apollo.QueryHookOptions<GetAllDatLichBacSiByTrangThaiQuery, GetAllDatLichBacSiByTrangThaiQueryVariables> & ({ variables: GetAllDatLichBacSiByTrangThaiQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllDatLichBacSiByTrangThaiQuery, GetAllDatLichBacSiByTrangThaiQueryVariables>(GetAllDatLichBacSiByTrangThaiDocument, options);
      }
export function useGetAllDatLichBacSiByTrangThaiLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllDatLichBacSiByTrangThaiQuery, GetAllDatLichBacSiByTrangThaiQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllDatLichBacSiByTrangThaiQuery, GetAllDatLichBacSiByTrangThaiQueryVariables>(GetAllDatLichBacSiByTrangThaiDocument, options);
        }
export function useGetAllDatLichBacSiByTrangThaiSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllDatLichBacSiByTrangThaiQuery, GetAllDatLichBacSiByTrangThaiQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllDatLichBacSiByTrangThaiQuery, GetAllDatLichBacSiByTrangThaiQueryVariables>(GetAllDatLichBacSiByTrangThaiDocument, options);
        }
export type GetAllDatLichBacSiByTrangThaiQueryHookResult = ReturnType<typeof useGetAllDatLichBacSiByTrangThaiQuery>;
export type GetAllDatLichBacSiByTrangThaiLazyQueryHookResult = ReturnType<typeof useGetAllDatLichBacSiByTrangThaiLazyQuery>;
export type GetAllDatLichBacSiByTrangThaiSuspenseQueryHookResult = ReturnType<typeof useGetAllDatLichBacSiByTrangThaiSuspenseQuery>;
export type GetAllDatLichBacSiByTrangThaiQueryResult = Apollo.QueryResult<GetAllDatLichBacSiByTrangThaiQuery, GetAllDatLichBacSiByTrangThaiQueryVariables>;
export const GetLichKhamDocument = gql`
    query GetLichKham($id: String!) {
  getLichKham(id: $id) {
    _id
    ngaykham {
      ngaytrongtuan
      phiens {
        batdau
        ketthuc
        trangthai
        soluongToiDa
      }
    }
    ngaynghi
  }
}
    `;

/**
 * __useGetLichKhamQuery__
 *
 * To run a query within a React component, call `useGetLichKhamQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLichKhamQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLichKhamQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetLichKhamQuery(baseOptions: Apollo.QueryHookOptions<GetLichKhamQuery, GetLichKhamQueryVariables> & ({ variables: GetLichKhamQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLichKhamQuery, GetLichKhamQueryVariables>(GetLichKhamDocument, options);
      }
export function useGetLichKhamLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLichKhamQuery, GetLichKhamQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLichKhamQuery, GetLichKhamQueryVariables>(GetLichKhamDocument, options);
        }
export function useGetLichKhamSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetLichKhamQuery, GetLichKhamQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLichKhamQuery, GetLichKhamQueryVariables>(GetLichKhamDocument, options);
        }
export type GetLichKhamQueryHookResult = ReturnType<typeof useGetLichKhamQuery>;
export type GetLichKhamLazyQueryHookResult = ReturnType<typeof useGetLichKhamLazyQuery>;
export type GetLichKhamSuspenseQueryHookResult = ReturnType<typeof useGetLichKhamSuspenseQuery>;
export type GetLichKhamQueryResult = Apollo.QueryResult<GetLichKhamQuery, GetLichKhamQueryVariables>;
export const GetAllDatLichBacSiByBacSiDocument = gql`
    query GetAllDatLichBacSiByBacSi($bacsi: String!) {
  getAllDatLichBacSiByBacSi(bacsi: $bacsi) {
    _id
    bacsi {
      _id
      hoten
      chuyenkhoa {
        tenkhoa
      }
      phongs {
        _id
        tenphong
      }
    }
    benhnhan {
      _id
      hoten
      sodienthoai
      ngaysinh
      gioitinh
      diachi
      cccd
    }
    motabenh
    phien {
      batdau
      ketthuc
      soluongToiDa
      trangthai
    }
    ngaydat
    ngaykham
    email
    trangthai
  }
}
    `;

/**
 * __useGetAllDatLichBacSiByBacSiQuery__
 *
 * To run a query within a React component, call `useGetAllDatLichBacSiByBacSiQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllDatLichBacSiByBacSiQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllDatLichBacSiByBacSiQuery({
 *   variables: {
 *      bacsi: // value for 'bacsi'
 *   },
 * });
 */
export function useGetAllDatLichBacSiByBacSiQuery(baseOptions: Apollo.QueryHookOptions<GetAllDatLichBacSiByBacSiQuery, GetAllDatLichBacSiByBacSiQueryVariables> & ({ variables: GetAllDatLichBacSiByBacSiQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllDatLichBacSiByBacSiQuery, GetAllDatLichBacSiByBacSiQueryVariables>(GetAllDatLichBacSiByBacSiDocument, options);
      }
export function useGetAllDatLichBacSiByBacSiLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllDatLichBacSiByBacSiQuery, GetAllDatLichBacSiByBacSiQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllDatLichBacSiByBacSiQuery, GetAllDatLichBacSiByBacSiQueryVariables>(GetAllDatLichBacSiByBacSiDocument, options);
        }
export function useGetAllDatLichBacSiByBacSiSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllDatLichBacSiByBacSiQuery, GetAllDatLichBacSiByBacSiQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllDatLichBacSiByBacSiQuery, GetAllDatLichBacSiByBacSiQueryVariables>(GetAllDatLichBacSiByBacSiDocument, options);
        }
export type GetAllDatLichBacSiByBacSiQueryHookResult = ReturnType<typeof useGetAllDatLichBacSiByBacSiQuery>;
export type GetAllDatLichBacSiByBacSiLazyQueryHookResult = ReturnType<typeof useGetAllDatLichBacSiByBacSiLazyQuery>;
export type GetAllDatLichBacSiByBacSiSuspenseQueryHookResult = ReturnType<typeof useGetAllDatLichBacSiByBacSiSuspenseQuery>;
export type GetAllDatLichBacSiByBacSiQueryResult = Apollo.QueryResult<GetAllDatLichBacSiByBacSiQuery, GetAllDatLichBacSiByBacSiQueryVariables>;
export const GetAllToaThuocbyBacSiDocument = gql`
    query GetAllToaThuocbyBacSi($id: String!, $input: FetchPagination!) {
  CountToaThuocbyBacSi(bacsiId: $id)
  getAllToaThuocbyBacSi(bacsiId: $id, fetchPagination: $input) {
    _id
    benhnhan {
      hoten
      ngaysinh
      gioitinh
      diachi
      sinhhieu {
        cannang
      }
    }
    bacsi {
      hoten
    }
    thuocs {
      tenthuoc
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

/**
 * __useGetAllToaThuocbyBacSiQuery__
 *
 * To run a query within a React component, call `useGetAllToaThuocbyBacSiQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllToaThuocbyBacSiQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllToaThuocbyBacSiQuery({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllToaThuocbyBacSiQuery(baseOptions: Apollo.QueryHookOptions<GetAllToaThuocbyBacSiQuery, GetAllToaThuocbyBacSiQueryVariables> & ({ variables: GetAllToaThuocbyBacSiQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllToaThuocbyBacSiQuery, GetAllToaThuocbyBacSiQueryVariables>(GetAllToaThuocbyBacSiDocument, options);
      }
export function useGetAllToaThuocbyBacSiLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllToaThuocbyBacSiQuery, GetAllToaThuocbyBacSiQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllToaThuocbyBacSiQuery, GetAllToaThuocbyBacSiQueryVariables>(GetAllToaThuocbyBacSiDocument, options);
        }
export function useGetAllToaThuocbyBacSiSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllToaThuocbyBacSiQuery, GetAllToaThuocbyBacSiQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllToaThuocbyBacSiQuery, GetAllToaThuocbyBacSiQueryVariables>(GetAllToaThuocbyBacSiDocument, options);
        }
export type GetAllToaThuocbyBacSiQueryHookResult = ReturnType<typeof useGetAllToaThuocbyBacSiQuery>;
export type GetAllToaThuocbyBacSiLazyQueryHookResult = ReturnType<typeof useGetAllToaThuocbyBacSiLazyQuery>;
export type GetAllToaThuocbyBacSiSuspenseQueryHookResult = ReturnType<typeof useGetAllToaThuocbyBacSiSuspenseQuery>;
export type GetAllToaThuocbyBacSiQueryResult = Apollo.QueryResult<GetAllToaThuocbyBacSiQuery, GetAllToaThuocbyBacSiQueryVariables>;
export const GetAllHinhAnhDocument = gql`
    query GetAllHinhAnh($id: String!) {
  get(id: $id) {
    _id
  }
}
    `;

/**
 * __useGetAllHinhAnhQuery__
 *
 * To run a query within a React component, call `useGetAllHinhAnhQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllHinhAnhQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllHinhAnhQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAllHinhAnhQuery(baseOptions: Apollo.QueryHookOptions<GetAllHinhAnhQuery, GetAllHinhAnhQueryVariables> & ({ variables: GetAllHinhAnhQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllHinhAnhQuery, GetAllHinhAnhQueryVariables>(GetAllHinhAnhDocument, options);
      }
export function useGetAllHinhAnhLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllHinhAnhQuery, GetAllHinhAnhQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllHinhAnhQuery, GetAllHinhAnhQueryVariables>(GetAllHinhAnhDocument, options);
        }
export function useGetAllHinhAnhSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllHinhAnhQuery, GetAllHinhAnhQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllHinhAnhQuery, GetAllHinhAnhQueryVariables>(GetAllHinhAnhDocument, options);
        }
export type GetAllHinhAnhQueryHookResult = ReturnType<typeof useGetAllHinhAnhQuery>;
export type GetAllHinhAnhLazyQueryHookResult = ReturnType<typeof useGetAllHinhAnhLazyQuery>;
export type GetAllHinhAnhSuspenseQueryHookResult = ReturnType<typeof useGetAllHinhAnhSuspenseQuery>;
export type GetAllHinhAnhQueryResult = Apollo.QueryResult<GetAllHinhAnhQuery, GetAllHinhAnhQueryVariables>;
export const GetNhanVienIdDocument = gql`
    query GetNhanVienId($id: String!) {
  getNhanVienbyId(id: $id) {
    _id
    hoten
    ngaysinh
    gioitinh
    diachi
    sodienthoai
    cccd
    ngayBD
    chucvu
    user {
      _id
      username
      email
      role
      avatar {
        url
        fileName
        type
      }
      isLocked
    }
    phongs {
      _id
      tenphong
    }
  }
}
    `;

/**
 * __useGetNhanVienIdQuery__
 *
 * To run a query within a React component, call `useGetNhanVienIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNhanVienIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNhanVienIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetNhanVienIdQuery(baseOptions: Apollo.QueryHookOptions<GetNhanVienIdQuery, GetNhanVienIdQueryVariables> & ({ variables: GetNhanVienIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNhanVienIdQuery, GetNhanVienIdQueryVariables>(GetNhanVienIdDocument, options);
      }
export function useGetNhanVienIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNhanVienIdQuery, GetNhanVienIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNhanVienIdQuery, GetNhanVienIdQueryVariables>(GetNhanVienIdDocument, options);
        }
export function useGetNhanVienIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetNhanVienIdQuery, GetNhanVienIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetNhanVienIdQuery, GetNhanVienIdQueryVariables>(GetNhanVienIdDocument, options);
        }
export type GetNhanVienIdQueryHookResult = ReturnType<typeof useGetNhanVienIdQuery>;
export type GetNhanVienIdLazyQueryHookResult = ReturnType<typeof useGetNhanVienIdLazyQuery>;
export type GetNhanVienIdSuspenseQueryHookResult = ReturnType<typeof useGetNhanVienIdSuspenseQuery>;
export type GetNhanVienIdQueryResult = Apollo.QueryResult<GetNhanVienIdQuery, GetNhanVienIdQueryVariables>;
export const GetBacSiIdDocument = gql`
    query GetBacSiId($id: String!) {
  getBacSibyId(id: $id) {
    _id
    hoten
    ngaysinh
    gioitinh
    diachi
    sodienthoai
    cccd
    ngayBD
    user {
      _id
      username
      email
      role
      avatar {
        url
        fileName
        type
      }
      isLocked
    }
    phongs {
      _id
      tenphong
    }
    chuyenkhoa {
      tenkhoa
    }
  }
}
    `;

/**
 * __useGetBacSiIdQuery__
 *
 * To run a query within a React component, call `useGetBacSiIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBacSiIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBacSiIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBacSiIdQuery(baseOptions: Apollo.QueryHookOptions<GetBacSiIdQuery, GetBacSiIdQueryVariables> & ({ variables: GetBacSiIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBacSiIdQuery, GetBacSiIdQueryVariables>(GetBacSiIdDocument, options);
      }
export function useGetBacSiIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBacSiIdQuery, GetBacSiIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBacSiIdQuery, GetBacSiIdQueryVariables>(GetBacSiIdDocument, options);
        }
export function useGetBacSiIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetBacSiIdQuery, GetBacSiIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBacSiIdQuery, GetBacSiIdQueryVariables>(GetBacSiIdDocument, options);
        }
export type GetBacSiIdQueryHookResult = ReturnType<typeof useGetBacSiIdQuery>;
export type GetBacSiIdLazyQueryHookResult = ReturnType<typeof useGetBacSiIdLazyQuery>;
export type GetBacSiIdSuspenseQueryHookResult = ReturnType<typeof useGetBacSiIdSuspenseQuery>;
export type GetBacSiIdQueryResult = Apollo.QueryResult<GetBacSiIdQuery, GetBacSiIdQueryVariables>;
export const GetUserByIdDocument = gql`
    query GetUserById($id: String!) {
  getUserById(_id: $id) {
    _id
    username
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
    `;

/**
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserByIdQuery(baseOptions: Apollo.QueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables> & ({ variables: GetUserByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
      }
export function useGetUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
export function useGetUserByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<typeof useGetUserByIdLazyQuery>;
export type GetUserByIdSuspenseQueryHookResult = ReturnType<typeof useGetUserByIdSuspenseQuery>;
export type GetUserByIdQueryResult = Apollo.QueryResult<GetUserByIdQuery, GetUserByIdQueryVariables>;
export const GetAllPhieuCanLamSangDocument = gql`
    query GetAllPhieuCanLamSang {
  CountPhieuCLS
  getAllPhieuCLS {
    _id
    benhnhan {
      hoten
      ngaysinh
      gioitinh
      sodienthoai
      diachi
    }
    bacsi {
      hoten
      ngaysinh
      gioitinh
      sodienthoai
    }
    bhyt
    truoc
    ketquacanlamsangs {
      _id
      loaicanlamsang {
        tenxetnghiem
        gia
        loaicanlamsang
      }
      hinhanh {
        fileName
        url
        type
      }
      ketluan
      thietbi
    }
  }
}
    `;

/**
 * __useGetAllPhieuCanLamSangQuery__
 *
 * To run a query within a React component, call `useGetAllPhieuCanLamSangQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPhieuCanLamSangQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPhieuCanLamSangQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPhieuCanLamSangQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPhieuCanLamSangQuery, GetAllPhieuCanLamSangQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPhieuCanLamSangQuery, GetAllPhieuCanLamSangQueryVariables>(GetAllPhieuCanLamSangDocument, options);
      }
export function useGetAllPhieuCanLamSangLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPhieuCanLamSangQuery, GetAllPhieuCanLamSangQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPhieuCanLamSangQuery, GetAllPhieuCanLamSangQueryVariables>(GetAllPhieuCanLamSangDocument, options);
        }
export function useGetAllPhieuCanLamSangSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllPhieuCanLamSangQuery, GetAllPhieuCanLamSangQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllPhieuCanLamSangQuery, GetAllPhieuCanLamSangQueryVariables>(GetAllPhieuCanLamSangDocument, options);
        }
export type GetAllPhieuCanLamSangQueryHookResult = ReturnType<typeof useGetAllPhieuCanLamSangQuery>;
export type GetAllPhieuCanLamSangLazyQueryHookResult = ReturnType<typeof useGetAllPhieuCanLamSangLazyQuery>;
export type GetAllPhieuCanLamSangSuspenseQueryHookResult = ReturnType<typeof useGetAllPhieuCanLamSangSuspenseQuery>;
export type GetAllPhieuCanLamSangQueryResult = Apollo.QueryResult<GetAllPhieuCanLamSangQuery, GetAllPhieuCanLamSangQueryVariables>;
export const NewDatLichDocument = gql`
    subscription NewDatLich {
  newDatLich {
    _id
    benhnhan {
      _id
      hoten
      ngaysinh
      sodienthoai
      diachi
    }
    motabenh
    ngaydat
    ngaykham
    email
  }
}
    `;

/**
 * __useNewDatLichSubscription__
 *
 * To run a query within a React component, call `useNewDatLichSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewDatLichSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewDatLichSubscription({
 *   variables: {
 *   },
 * });
 */
export function useNewDatLichSubscription(baseOptions?: Apollo.SubscriptionHookOptions<NewDatLichSubscription, NewDatLichSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<NewDatLichSubscription, NewDatLichSubscriptionVariables>(NewDatLichDocument, options);
      }
export type NewDatLichSubscriptionHookResult = ReturnType<typeof useNewDatLichSubscription>;
export type NewDatLichSubscriptionResult = Apollo.SubscriptionResult<NewDatLichSubscription>;
export const NewPhieuXacNhanDocument = gql`
    subscription NewPhieuXacNhan {
  newPhieuXacNhan {
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
  }
}
    `;

/**
 * __useNewPhieuXacNhanSubscription__
 *
 * To run a query within a React component, call `useNewPhieuXacNhanSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewPhieuXacNhanSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewPhieuXacNhanSubscription({
 *   variables: {
 *   },
 * });
 */
export function useNewPhieuXacNhanSubscription(baseOptions?: Apollo.SubscriptionHookOptions<NewPhieuXacNhanSubscription, NewPhieuXacNhanSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<NewPhieuXacNhanSubscription, NewPhieuXacNhanSubscriptionVariables>(NewPhieuXacNhanDocument, options);
      }
export type NewPhieuXacNhanSubscriptionHookResult = ReturnType<typeof useNewPhieuXacNhanSubscription>;
export type NewPhieuXacNhanSubscriptionResult = Apollo.SubscriptionResult<NewPhieuXacNhanSubscription>;
export const UpdateClsThanhToanDocument = gql`
    subscription UpdateCLSThanhToan {
  updateCLSThanhToan {
    _id
  }
}
    `;

/**
 * __useUpdateClsThanhToanSubscription__
 *
 * To run a query within a React component, call `useUpdateClsThanhToanSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUpdateClsThanhToanSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpdateClsThanhToanSubscription({
 *   variables: {
 *   },
 * });
 */
export function useUpdateClsThanhToanSubscription(baseOptions?: Apollo.SubscriptionHookOptions<UpdateClsThanhToanSubscription, UpdateClsThanhToanSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<UpdateClsThanhToanSubscription, UpdateClsThanhToanSubscriptionVariables>(UpdateClsThanhToanDocument, options);
      }
export type UpdateClsThanhToanSubscriptionHookResult = ReturnType<typeof useUpdateClsThanhToanSubscription>;
export type UpdateClsThanhToanSubscriptionResult = Apollo.SubscriptionResult<UpdateClsThanhToanSubscription>;
export const UpdateClsDaXetNghiemDocument = gql`
    subscription UpdateCLSDaXetNghiem {
  updateCLSDaXetNghiem {
    _id
  }
}
    `;

/**
 * __useUpdateClsDaXetNghiemSubscription__
 *
 * To run a query within a React component, call `useUpdateClsDaXetNghiemSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUpdateClsDaXetNghiemSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpdateClsDaXetNghiemSubscription({
 *   variables: {
 *   },
 * });
 */
export function useUpdateClsDaXetNghiemSubscription(baseOptions?: Apollo.SubscriptionHookOptions<UpdateClsDaXetNghiemSubscription, UpdateClsDaXetNghiemSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<UpdateClsDaXetNghiemSubscription, UpdateClsDaXetNghiemSubscriptionVariables>(UpdateClsDaXetNghiemDocument, options);
      }
export type UpdateClsDaXetNghiemSubscriptionHookResult = ReturnType<typeof useUpdateClsDaXetNghiemSubscription>;
export type UpdateClsDaXetNghiemSubscriptionResult = Apollo.SubscriptionResult<UpdateClsDaXetNghiemSubscription>;
export const NewHoaDonClsDocument = gql`
    subscription NewHoaDonCLS {
  newHoaDonCLS {
    _id
    bhyt
    benhnhan {
      hoten
      ngaysinh
      gioitinh
      sodienthoai
    }
    chitietcanlamsang {
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
}
    `;

/**
 * __useNewHoaDonClsSubscription__
 *
 * To run a query within a React component, call `useNewHoaDonClsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewHoaDonClsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewHoaDonClsSubscription({
 *   variables: {
 *   },
 * });
 */
export function useNewHoaDonClsSubscription(baseOptions?: Apollo.SubscriptionHookOptions<NewHoaDonClsSubscription, NewHoaDonClsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<NewHoaDonClsSubscription, NewHoaDonClsSubscriptionVariables>(NewHoaDonClsDocument, options);
      }
export type NewHoaDonClsSubscriptionHookResult = ReturnType<typeof useNewHoaDonClsSubscription>;
export type NewHoaDonClsSubscriptionResult = Apollo.SubscriptionResult<NewHoaDonClsSubscription>;
export const NewHoaDonDocument = gql`
    subscription NewHoaDon {
  newHoaDon {
    _id
  }
}
    `;

/**
 * __useNewHoaDonSubscription__
 *
 * To run a query within a React component, call `useNewHoaDonSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewHoaDonSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewHoaDonSubscription({
 *   variables: {
 *   },
 * });
 */
export function useNewHoaDonSubscription(baseOptions?: Apollo.SubscriptionHookOptions<NewHoaDonSubscription, NewHoaDonSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<NewHoaDonSubscription, NewHoaDonSubscriptionVariables>(NewHoaDonDocument, options);
      }
export type NewHoaDonSubscriptionHookResult = ReturnType<typeof useNewHoaDonSubscription>;
export type NewHoaDonSubscriptionResult = Apollo.SubscriptionResult<NewHoaDonSubscription>;