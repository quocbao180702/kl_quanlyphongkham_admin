import { Table } from 'react-bootstrap';
import { BenhNhan, useGetAllNgayVaPhongQuery } from '../../graphql-definition/graphql';
import moment from 'moment';
import { useEffect } from 'react';

function ChoKham({ data, loading, error, selected }: any) {
    /* const [selectedRow, setSelectedRow] = useState(''); */

    const handleRowSelect = (benhnhan: BenhNhan, id: string) => {
        selected(benhnhan, id);
        console.log('row selected is:', benhnhan);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error...{error.message}</div>;

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
                    {data?.getAllByNgayVaPhong && data.getAllByNgayVaPhong.length > 0 && data.getAllByNgayVaPhong.map((kb: any) => (
                        <tr className='rowSelected' key={kb._id} onClick={() => handleRowSelect(kb?.benhnhan, kb?._id)}>
                            <td>{kb?.sothutu}</td>
                            <td>{kb?.benhnhan?.hoten}</td>
                            <td>{moment(kb?.benhnhan?.ngaysinh).format('YYYY/MM/DD')}</td>
                            <td>{kb?.benhnhan?.gioitinh ? 'Nam' : 'Nữ'}</td>
                            <td>{kb?.benhnhan?.bhyt ? "Yes" : 'No'}</td>
                            <td>{kb?.benhnhan?.user?.phoneNumber}</td>
                        </tr>
                    ))}
                    {data?.getAllPhieuXacNhanDaXetNgiem && data.getAllPhieuXacNhanDaXetNgiem.length > 0 && data.getAllPhieuXacNhanDaXetNgiem.map((kb: any) => (
                        <tr className='rowSelected' key={kb._id} onClick={() => handleRowSelect(kb?.benhnhan, kb?._id)}>
                            <td>{kb?.sothutu}</td>
                            <td>{kb?.benhnhan?.hoten}</td>
                            <td>{moment(kb?.benhnhan?.ngaysinh).format('YYYY/MM/DD')}</td>
                            <td>{kb?.benhnhan?.gioitinh ? 'Nam' : 'Nữ'}</td>
                            <td>{kb?.benhnhan?.bhyt ? "Yes" : 'No'}</td>
                            <td>{kb?.benhnhan?.user?.phoneNumber}</td>
                        </tr>
                    ))}
                </tbody>

            </Table>
        </>
    );
}

export default ChoKham;
