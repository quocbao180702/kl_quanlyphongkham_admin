import { useSubscription } from "@apollo/client";
import {  Table } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';
import moment from "moment";
import { useEffect, useState } from "react";
import { newDatLichSubscription } from "../../../codegen/graphql-definition/subcriptions";

interface DatLichItem {
    _id: string;
    benhnhan: {
        hoten: string;
        ngaysinh: string;
    };
    motabenh: string;
    ngaydat: string;
    ngaykham: string;
    bhyt: boolean;
}

function DatLich() {
    const [datLichData, setDatLichData] = useState<DatLichItem[]>([]);
    const { data, loading, error } = useSubscription(newDatLichSubscription);

    useEffect(() => {
        if (data) {
            setDatLichData((prevData: DatLichItem[]) => [...prevData, data?.newDatLich]);
        }
    }, [data]);

    /* if (loading) {
        return (
            <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    } */

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>Họ Tên</th>
                    <th>Ngày Sinh</th>
                    <th>Mô Tả Bệnh</th>
                    <th>Ngày Đặt</th>
                    <th>Ngày Khám</th>
                    <th>BHYT</th>
                </tr>
            </thead>
            <tbody>
                {loading && (
                    <tr>
                        <td colSpan={6} className="text-center">
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </td>
                    </tr>
                )}
                {datLichData.map((item) => (
                    <tr key={item?._id}>
                        <td>{item?.benhnhan?.hoten}</td>
                        <td>{moment(item?.benhnhan?.ngaysinh).format('YYYY-MM-DD')}</td>
                        <td>{item?.motabenh}</td>
                        <td>{moment(item?.ngaydat).format('YYYY-MM-DD')}</td>
                        <td>{moment(item?.ngaykham).format('YYYY-MM-DD')}</td>
                        <td>{item?.bhyt ? 'Yes' : 'No'}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default DatLich;
