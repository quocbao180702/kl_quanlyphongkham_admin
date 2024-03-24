import { gql } from "@apollo/client"

export const newDatLichSubscription = gql`
subscription NewDatLich{
    newDatLich{
      _id
      benhnhan{
        ngaysinh
        hoten
      }
      motabenh
      ngaydat
      ngaykham
      bhyt
    }
  }
`