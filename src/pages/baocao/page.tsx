import { Button, Col, Container, Row } from "react-bootstrap";
import { FaUserDoctor, FaUserNurse } from "react-icons/fa6";
import { FcConferenceCall, FcDepartment, FcLike, FcOrganization } from "react-icons/fc";
import { MonthRange, useCountBacSiQuery, useCountChuyenKhoaQuery, useCountNhanVienQuery, useCountPhieuXacNhanByDateQuery, useCountPhongQuery, useGetAllBacSiQuery, useGetStartAndEndOfMonthLazyQuery, useGetStartAndEndOfMonthQuery, useGetTongTienbyMonthClsLazyQuery, useGetTongTienbyMonthLazyQuery } from "../../graphql-definition/graphql";
import dayjs, { Dayjs } from 'dayjs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import moment from "moment";
import { ChangeEvent, useEffect, useState } from "react";
import { PieChart, pieArcLabelClasses  } from '@mui/x-charts/PieChart';
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import CountUp from 'react-countup';


function BaoCao() {

    const { data: dataPhieu, loading: loadingPhieu, error: errorPhieu } = useCountPhieuXacNhanByDateQuery({
        variables: {
            start: dayjs().format('YYYY-MM-DD'),
            end: dayjs().format('YYYY-MM-DD')
        }
    })

    const [data, setData] = useState<{ name: string, pv: number }[]>([])
    const [dataHoaDon, setDataHoaDon] = useState<{ name: string, pv: number }[]>([])
    const [dataCLS, setDataCLS] = useState<{ name: string, pv: number }[]>([])

    const [year, setYear] = useState(2024);
    const [yearHd, setYearHd] = useState(2024);
    const [yearCLS, setYearCLS] = useState(2024);

    const [getData, { data: dataSoPhieu, loading: loadingSoPhieu, error: errorSoPhieu }] = useGetStartAndEndOfMonthLazyQuery();
    const [getDataHd, { data: data_hoadon_year, loading: loading_hoadon_year, error: error_hoadon_year }] = useGetTongTienbyMonthLazyQuery();
    const [getCSL, { data: data_CLS_year, loading: loadingCLS, error: errorCLS }] = useGetTongTienbyMonthClsLazyQuery();


    useEffect(() => {
        getData({
            variables: {
                year: year
            }
        })
    }, [year])


    useEffect(() => {
        getDataHd({
            variables: {
                year: yearHd
            }
        })
    }, [yearHd])


    useEffect(() => {
        getCSL({
            variables: {
                year: yearCLS
            }
        })
    }, [yearCLS])


    useEffect(() => {
        if (data_hoadon_year) {
            const newData = data_hoadon_year?.getTongTienbyMonth.map(item => ({
                name: item?.month.toString(),
                pv: item?.tongtien
            }))
            setDataHoaDon(newData);
        }
    }, [data_hoadon_year])

    useEffect(() => {
        if (data_CLS_year) {
            const newData = data_CLS_year?.getTongTienbyMonthCLS.map(item => ({
                name: item?.month.toString(),
                pv: item?.tongtien
            }))
            setDataCLS(newData);
        }
    }, [data_CLS_year])

    useEffect(() => {
        if (dataSoPhieu) {
            const newData = dataSoPhieu.getStartAndEndOfMonth.map(item => ({
                name: item.month.toString(),
                pv: item.count
            }));
            setData(newData);
        }
    }, [dataSoPhieu]);


    const { data: dataBacSi, loading: loadingBacSi, error: errorBacSi } = useCountBacSiQuery()
    const { data: dataNhanVien, loading: loadingNhanVien, error: errorNhanVien } = useCountNhanVienQuery()
    const { data: dataPhong, loading: loadingPhong, error: errorPhong } = useCountPhongQuery()
    const { data: dataChuyenKhoa, loading: loadingChuyenKhoa, error: errorChuyenKhoa } = useCountChuyenKhoaQuery()

    const handleYearChange = (event: SelectChangeEvent<number>) => {
        setYear(Number(event.target.value));
    };

    const handleYearChangeHD = (event: SelectChangeEvent<number>) => {
        setYearHd(Number(event.target.value));
    };

    const handleYearChangeCLS = (event: SelectChangeEvent<number>) => {
        setYearCLS(Number(event.target.value));
    };

    return (
        <Container>
            <Row className="mt-5">
                <Col lg={4} sm={4}>
                    <div className="w-100 border d-flex align-items-center justify-content-around" style={{ height: '150px', padding: "5px" }}>
                        <div>
                            <h4>Bác Sĩ</h4>
                            <div className="text-center"><h4><CountUp start={0} end={Number(dataBacSi?.CountBacSi)} /> </h4></div>
                        </div>
                        <FaUserDoctor size={72} color="blue" />
                    </div>
                </Col>
                <Col lg={4} sm={4}>
                    <div className="w-100 border d-flex align-items-center justify-content-around" style={{ height: '150px', padding: "5px" }}>
                        <div>
                            <h4>Nhân Viên Y Tế</h4>
                            <div className="text-center"><h4><CountUp start={0} end={Number(dataNhanVien?.CountNhanVien)} /></h4></div>
                        </div>
                        <FaUserNurse color="red" size={72} />
                    </div>
                </Col>
                <Col lg={4} sm={4}>
                    <div className="w-100 border d-flex align-items-center justify-content-around" style={{ height: '150px', padding: "5px" }}>
                        <div>
                            <h4>Lượt Khám Hôm Nay</h4>
                            <div className="text-center"><h4><CountUp start={0} end={Number(dataPhieu?.countPhieuXacNhanByDate)} /></h4></div>
                        </div>
                        <FcLike size={65} />
                    </div>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col lg={6} sm={6}>
                    <div className="w-100 border d-flex align-items-center justify-content-around" style={{ height: '150px', padding: "5px" }}>
                        <div>
                            <h4>Phòng</h4>
                            <div className="text-center"><h4><CountUp start={0} end={Number(dataPhong?.CountPhong)} /></h4></div>
                        </div>
                        <FcDepartment size={72} />
                    </div>
                </Col>
                <Col lg={6} sm={6}>
                    <div className="w-100 border d-flex align-items-center justify-content-around" style={{ height: '150px', padding: "5px" }}>
                        <div>
                            <h4>Chuyên Khoa</h4>
                            <div className="text-center"><h4><CountUp start={0} end={Number(dataChuyenKhoa?.CountChuyenKhoa)} /></h4></div>
                        </div>
                        <FcConferenceCall size={72} />
                    </div>
                </Col>
            </Row>
            <Row className="mt-3 justify-content-end">
                <div style={{ paddingRight: "15px" }}>
                    <Button className="btn btn-outline-primary mb-5">Xuất Báo Cáo</Button>
                </div>
            </Row>
            <Row className="mt-3">
                <div className="w-100 d-flex justify-content-between">
                    <h3 className="text-center w-100">Số Lượt Bệnh Nhân</h3>
                    <div>
                        <Select
                            size="small"
                            value={year}
                            onChange={handleYearChange}
                        >
                            <MenuItem value={2022}>2022</MenuItem>
                            <MenuItem value={2023}>2023</MenuItem>
                            <MenuItem value={2024}>2024</MenuItem>
                        </Select>
                    </div>
                </div>
                <div className="w-100 d-flex justify-content-center">
                    <BarChart
                        width={1000}
                        height={400}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        barSize={20}
                    >
                        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
                    </BarChart>
                </div>
            </Row>
            <Row className="mt-3">
                <Col lg={6} sm={6}>
                    <div className="w-100 d-flex justify-content-between">
                        <h3 className="text-center w-100">Doanh Thu Hóa Đơn</h3>
                        <div>
                            <Select
                                size="small"
                                value={yearHd}
                                onChange={handleYearChangeHD}
                            >
                                <MenuItem value={2022}>2022</MenuItem>
                                <MenuItem value={2023}>2023</MenuItem>
                                <MenuItem value={2024}>2024</MenuItem>
                            </Select>
                        </div>
                    </div>
                    {/* <h3 className="text-center w-100">Doanh Thu Hóa Đơn</h3> */}
                    <div className="w-100 d-flex justify-content-center">
                        <BarChart
                            width={500}
                            height={400}
                            data={dataHoaDon}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                            barSize={20}
                        >
                            <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
                        </BarChart>
                    </div>
                </Col>
                <Col lg={6} sm={6}>
                    <div className="w-100 d-flex justify-content-between">
                        <h3 className="text-center w-100">Doanh Thu Cận Lâm Sàng</h3>
                        <div>
                            <Select
                                size="small"
                                value={yearCLS}
                                onChange={handleYearChangeCLS}
                            >
                                <MenuItem value={2022}>2022</MenuItem>
                                <MenuItem value={2023}>2023</MenuItem>
                                <MenuItem value={2024}>2024</MenuItem>
                            </Select>
                        </div>
                    </div>
                    {/* <h3 className="text-center w-100">Doanh Thu Cận Lâm Sàn</h3> */}
                    <div className="w-100 d-flex justify-content-center">
                        <BarChart
                            width={500}
                            height={400}
                            data={dataCLS}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                            barSize={20}
                        >
                            <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
                        </BarChart>
                    </div>
                </Col>
            </Row>
            <Row className="mt-4">
                <h3 className="text-center w-100">Cơ Cấu Nhân Sự</h3>
                <div className="w-100 d-flex justify-content-center">
                    <PieChart
                        series={[
                            {
                                arcLabel: (item) => `${item.label} (${item.value})`,
                                arcLabelMinAngle: 45,
                                data: [
                                    { id: 0, value: Number(dataBacSi?.CountBacSi), label: 'Số Lượng Bác Sĩ' },
                                    { id: 1, value: Number(dataNhanVien?.CountNhanVien), label: 'Số Lượng Nhân Viên Y Tế' },
                                ]
                            },
                        ]}
                        sx={{
                            [`& .${pieArcLabelClasses.root}`]: {
                                fill: 'white',
                                fontWeight: 'bold',
                            },
                        }}
                        width={600}
                        height={600}
                    />
                </div>
            </Row>
        </Container>
    );
}

export default BaoCao;