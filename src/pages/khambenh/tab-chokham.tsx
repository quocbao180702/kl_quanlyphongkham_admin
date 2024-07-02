import { Table } from 'react-bootstrap';
import { BenhNhan } from '../../graphql-definition/graphql';
import moment from 'moment';

function ChoKham({ data, loading, error, selected }: any) {

    const handleRowSelect = (benhnhan: BenhNhan, id: string, cls: any) => {
        selected(benhnhan, id, cls);
        console.log('row selected is:', benhnhan, cls);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error...{error.message}</div>;

    return (
        <div className=''>
            <Table responsive hover >
                <thead>
                    <tr>
                        <th style={{whiteSpace: "nowrap"}} className='align-middle'>Phiên khám</th>
                        <th style={{whiteSpace: "nowrap"}} className='align-middle'>Họ tên</th>
                        <th style={{whiteSpace: "nowrap"}} className='align-middle'>Ngày sinh</th>
                        <th style={{whiteSpace: "nowrap"}} className='align-middle'>Giới tính</th>
                        <th style={{whiteSpace: "nowrap"}} className='align-middle'>BHYT</th>
                        <th style={{whiteSpace: "nowrap"}} className='align-middle'>SĐT</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.getAllByNgayVaPhong && data.getAllByNgayVaPhong.length > 0 && data.getAllByNgayVaPhong.map((kb: any) => (
                        <tr className='rowSelected' key={kb._id} onClick={() => handleRowSelect(kb?.benhnhan, kb?._id, undefined)}>
                            <td>{kb?.phien?.batdau} - {kb?.phien?.ketthuc}</td>
                            <td style={{whiteSpace: "nowrap"}} className='align-middle'>{kb?.benhnhan?.hoten}</td>
                            <td>{moment(kb?.benhnhan?.ngaysinh).format('YYYY/MM/DD')}</td>
                            <td>{kb?.benhnhan?.gioitinh ? 'Nam' : 'Nữ'}</td>
                            <td>{kb?.benhnhan?.bhyt ? "Yes" : 'No'}</td>
                            <td>{kb?.benhnhan?.sodienthoai}</td>
                        </tr>
                    ))}
                    {data?.getAllPhieuXacNhanDaXetNgiem && data.getAllPhieuXacNhanDaXetNgiem.length > 0 && data.getAllPhieuXacNhanDaXetNgiem.map((kb: any) => (
                        <tr className='rowSelected' key={kb._id} onClick={() => handleRowSelect(kb?.benhnhan, kb?._id, kb?.phieuchidinhcanlamsang)}>
                            <td>{kb?.phien?.batdau} - {kb?.phien?.ketthuc}</td>
                            <td>{kb?.benhnhan?.hoten}</td>
                            <td>{moment(kb?.benhnhan?.ngaysinh).format('YYYY/MM/DD')}</td>
                            <td>{kb?.benhnhan?.gioitinh ? 'Nam' : 'Nữ'}</td>
                            <td>{kb?.benhnhan?.bhyt ? "Yes" : 'No'}</td>
                            <td>{kb?.benhnhan?.sodienthoai}</td>
                        </tr>
                    ))}
                </tbody>

            </Table>
        </div>
    );
}

export default ChoKham;
