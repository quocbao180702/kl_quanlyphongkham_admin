import { gql } from "@apollo/client"

export const newDatLichSubscription = gql`
subscription NewDatLich{
    newDatLich{
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
      email
    }
  }
`

export const newPhieuXacNhanSubscription = gql`
subscription NewPhieuXacNhan{
  newPhieuXacNhan{
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
}`


export const UpdateCLSThanhToanSubcription = gql`
subscription UpdateCLSThanhToan{
  updateCLSThanhToan{
    _id
  }
}` 


export const UpdateCLSDaXetNghiemSubcription = gql`
subscription UpdateCLSDaXetNghiem{
  updateCLSDaXetNghiem{
    _id
  }
}`


export const NewHoaDonCLSSubcription = gql`
subscription NewHoaDonCLS{
  newHoaDonCLS{
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


export const NewHoaDonSubcription = gql`
subscription NewHoaDon{
  newHoaDon{
     _id
  }
}`