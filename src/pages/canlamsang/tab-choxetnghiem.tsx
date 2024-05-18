import { Table } from "react-bootstrap";
import { Phieuchidinhcanlamsang, useUpdateUutienMutation } from "../../graphql-definition/graphql";
import moment from "moment";
import { message } from "antd";
import { BiUpArrowCircle } from "react-icons/bi";
import { IoArrowDownCircleOutline } from "react-icons/io5";

function ChoXetNghiem({ data, loading, error, selected, refetchData }: any) {
    const handleRowSelect = (phieuchidinh: Phieuchidinhcanlamsang) => {
        selected(phieuchidinh);
        console.log('row selected is:', phieuchidinh);
    };

    const [updateUutien] = useUpdateUutienMutation();
    const handleUuTien = async (id: string) => {
        try {
            if (id) {
                const result = await updateUutien({
                    variables: {
                        id: id
                    }
                })
                /* console.log('data', id); */
                refetchData();
            }
            else {
                message.error('Không thể ưu tiên')
            }
        } catch (error) {
            console.log(error);
        }
    }

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
            <Table responsive hover >
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Họ tên</th>
                        <th>Ngày sinh</th>
                        <th>Giới tính</th>
                        <th>BHYT</th>
                        <th>SĐT</th>
                        <th> Ưu Tiên </th>
                    </tr>
                </thead>
                <tbody>
                    {data?.getAllPhieuCLSbyNgay?.map((phieuchidinh: any, index: number) => (
                        <tr key={phieuchidinh._id} onClick={() => handleRowSelect(phieuchidinh)}>
                            <td className="align-middle">{index + 1}</td>
                            <td className="align-middle">{phieuchidinh?.benhnhan?.hoten}</td>
                            <td className="align-middle">{moment(phieuchidinh?.benhnhan?.ngaysinh).format('YYYY/MM/DD')}</td>
                            <td className="align-middle">{phieuchidinh?.benhnhan?.gioitinh ? 'Nam' : 'Nữ'}</td>
                            <td className="align-middle">{phieuchidinh?.bhyt ? "Yes" : 'No'}</td>
                            <td className="align-middle">{phieuchidinh?.benhnhan?.sodienthoai}</td>
                            <td className="align-middle">{ phieuchidinh?.truoc == true ? <BiUpArrowCircle size={30} onClick={() => handleUuTien(phieuchidinh?._id)}/> : <IoArrowDownCircleOutline size={30} onClick={() => handleUuTien(phieuchidinh?._id)}/>}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}

export default ChoXetNghiem;