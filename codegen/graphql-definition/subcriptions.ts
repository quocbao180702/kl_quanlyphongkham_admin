import { gql } from "@apollo/client"

export const newDatLichSubscription = gql`
subscription NewDatLich{
    newDatLich{
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
  }
`