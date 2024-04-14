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
    }
  }
`