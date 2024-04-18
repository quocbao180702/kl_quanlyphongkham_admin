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