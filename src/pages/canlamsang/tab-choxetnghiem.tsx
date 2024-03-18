import { Table } from "react-bootstrap";
import { BenhNhan, Phieuchidinhcanlamsang, useGetAllPhieuClSbyNgayQuery } from "../../graphql-definition/graphql";
import moment from "moment";

function ChoXetNghiem({ dataAgrsChoKham, selected }: any) {


    const { loading, error, data } = useGetAllPhieuClSbyNgayQuery({ variables: { ngaytao: dataAgrsChoKham?.ngaytao } })

    const handleRowSelect = (phieuchidinh: Phieuchidinhcanlamsang) => {
        selected(phieuchidinh);
        console.log('row selected is:', phieuchidinh);
    };

    if (loading) {
        return (<>
            <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div></>)
    }
    if (error) return <div>Error...</div>;


    return (
        <>
            <Table responsive >
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Họ tên</th>
                        <th>Ngày sinh</th>
                        <th>Giới tính</th>
                        <th>BHYT</th>
                        <th>SĐT</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.getAllPhieuCLSbyNgay?.map((phieuchidinh: any, index: number) => (
                        <tr className='rowSelected' key={phieuchidinh._id} onClick={() => handleRowSelect(phieuchidinh)}>
                            <td>{index + 1}</td>
                            <td>{phieuchidinh?.benhnhan?.hoten}</td>
                            <td>{moment(phieuchidinh?.benhnhan?.ngaysinh).format('YYYY/MM/DD')}</td>
                            <td>{phieuchidinh?.benhnhan?.gioitinh ? 'Nam' : 'Nữ'}</td>
                            <td>{phieuchidinh?.bhyt ? "Yes" : 'No'}</td>
                            <td>{phieuchidinh?.benhnhan?.user?.phoneNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}

export default ChoXetNghiem;