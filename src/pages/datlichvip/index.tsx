

import { Col, Form, Row, Table } from 'react-bootstrap';
import { Table as TableAntd } from 'antd';
import { Button, Menu, Tabs } from 'antd';
import { Calendar } from 'antd';
import { useEffect, useState } from 'react';
import { FcCalendar } from 'react-icons/fc';
import { BsFillCalendar2HeartFill } from "react-icons/bs";
import moment from "moment";
import dayjs, {Dayjs} from 'dayjs'

import "./style.css";
import { useCreatePhieuXacNhanMutation, useGetAllDatLichBacSiByTrangThaiQuery, useGetAllDatlichBacSiQuery, useUpdateTrangThaiDatLichBacSiMutation } from "../../graphql-definition/graphql";
import Pagination from '../../components/pagination';
import ListBacSi from './listBacSi';
import { from } from '@apollo/client';

interface DatLichBacSi{
    _id: string;
    bacsi: {
      _id: string;
      hoten: string;
      chuyenkhoa: {
        tenkhoa: string;
      };
      phongs: {
        _id: string;
        tenphong: string;
      };
    };
    benhnhan: {
      _id: string;
      hoten: string;
      sodienthoai: string;
      ngaysinh: string;
      gioitinh: string;
      diachi: string;
      cccd: string;
    };
    motabenh: string
    phien: {
      batdau: string;
      ketthuc: string;
      soluongToiDa: number;
      trangthai: boolean;
    }
    ngaydat: Date;
    ngaykham: Date;
    email: string;
    trangthai: string;
}


function DatLichVip() {

    const { TabPane } = Tabs

    const [dataSelected, SetDataSelected] = useState<DatLichBacSi>();
    const [selectedMenuItem, setSelectedMenuItem] = useState('1');
    const [collapsed, setCollapsed] = useState(false);
    const [take, setTake] = useState(10);
    const [skip, setSkip] = useState(0);
    const [page, setPage] = useState(1);
    const handleChangPage = (skip: number, page: number) => {
        setSkip(skip);
        setPage(page)
    }


    /* const { data: dataDatLich, loading: loadingDatLich, error: errorDatlich } = useGetAllDatlichBacSiQuery(); */

    const { data: dataDatLichBacSi, loading: loadingDatLichBacSi, error: errorDatLichBacSi, refetch: refetchDatLichBacSi } = useGetAllDatLichBacSiByTrangThaiQuery({
        variables: {
            trangthai: "DANGXET"
        }
    })

    const { data: dataXacNhanBacSi, loading: loadingXacNhanBacSi, error: errorXacNhanBacSi, refetch: refetcXacNhanBacSi } = useGetAllDatLichBacSiByTrangThaiQuery({
        variables: {
            trangthai: "XACNHAN"
        }
    })

    const { data: dataHuyBacSi, loading: loadingHuyBacSi, error: errorHuyBacSi, refetch: refetcHuyBacSi } = useGetAllDatLichBacSiByTrangThaiQuery({
        variables: {
            trangthai: "HUY"
        }
    })

    const [updateTrangThaiDatLichBacSi] = useUpdateTrangThaiDatLichBacSiMutation();
    const [createPhieuXacNhan] = useCreatePhieuXacNhanMutation();


    const handleXacNhan = async (datlich: any) => {
        try {
            if (datlich?._id) {
                await Promise.all([
                    createPhieuXacNhan({
                        variables: {
                            input: {
                                benhnhan: datlich?.benhnhan?._id,
                                phongs: datlich?.bacsi?.phongs[0]?._id,
                                ngaykham: dayjs(datlich?.ngaykham).format('YYYY-MM-DD'),
                                ngaytao: dayjs().format('YYYY-MM-DD'),
                                email: datlich?.email || '',
                                "phien": {
                                    "batdau": datlich?.phien?.batdau,
                                    "ketthuc": datlich?.phien?.ketthuc,
                                    "soluongToiDa": datlich?.phien?.soluongToiDa,
                                    "trangthai": datlich?.phien?.trangthai
                                }
                            }
                        }
                    }),
                    updateTrangThaiDatLichBacSi({
                        variables: {
                            id: datlich?._id,
                            trangthai: "XACNHAN"
                        }
                    })
                ])
                SetDataSelected(undefined);
                refetchDatLichBacSi()
                refetcXacNhanBacSi()
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleHuy = async (id: string) => {
        try {
            if (id) {
                const result = await updateTrangThaiDatLichBacSi({
                    variables: {
                        id: id,
                        trangthai: "HUY"
                    }
                })
                SetDataSelected(undefined);
                refetchDatLichBacSi()
                refetcHuyBacSi()
            }
        } catch (error) {
            console.log(error)
        }
    }

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    const handleMenuClick = (event: any) => {
        setSelectedMenuItem(event.key);
    };

    const handleSeclect = (datlich: any) => {
        console.log('đặt lịch là: ', datlich)
        SetDataSelected(datlich);
    }

    useEffect(() => {
        console.log('data có đặt lịch thay đổi là: ', dataSelected)
    }, [dataSelected])


    return (
        <>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1, transition: 'width 0.3s' }}>
                    <Menu
                        selectedKeys={[selectedMenuItem]}
                        mode="inline"
                        theme="light"
                        inlineCollapsed={collapsed}
                        onClick={handleMenuClick}
                    >
                        <Menu.Item key="1">
                            <BsFillCalendar2HeartFill /> Lịch Đặt Hẹn
                        </Menu.Item>
                        <Menu.Item key="2">
                            <FcCalendar /> Lịch Làm Việc Bác Sĩ
                        </Menu.Item>
                        <Button
                            type="primary"
                            onClick={toggleCollapsed}
                        >
                            {collapsed ? 'Mở' : 'Thu nhỏ'}
                        </Button>
                    </Menu>
                </div>
                <div style={{ flex: 11 }}>
                    {selectedMenuItem === '1' && <div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <h4 className='text-center'>Thông Tin</h4>
                        </div>
                        <Row className='justify-content-center'>
                            <Col lg={6}>
                                <Form>
                                    <Row>
                                        <Col lg={6}>
                                            <Form.Group>
                                                <Form.Label>Họ Tên</Form.Label>
                                                <Form.Control value={dataSelected?.benhnhan?.hoten}></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Group>
                                                <Form.Label>Địa Chỉ</Form.Label>
                                                <Form.Control value={dataSelected?.benhnhan?.diachi}></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={3}>
                                            <Form.Group>
                                                <Form.Label>Giới Tính</Form.Label>
                                                <Form.Control value={dataSelected?.benhnhan?.gioitinh ? 'NAM': 'NỮ'}></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col lg={5}>
                                            <Form.Group>
                                                <Form.Label>Số Điện Thoại</Form.Label>
                                                <Form.Control value={dataSelected?.benhnhan?.sodienthoai}></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col lg={4}>
                                            <Form.Group>
                                                <Form.Label>Ngày Sinh</Form.Label>
                                                <Form.Control value={dayjs(dataSelected?.benhnhan?.ngaysinh).format('DD-MM-YYYY')}></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={6}>
                                            <Form.Group>
                                                <Form.Label>Bác Sĩ</Form.Label>
                                                <Form.Control value={dataSelected?.bacsi?.hoten}></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col lg={3}>
                                            <Form.Group>
                                                <Form.Label>Phòng</Form.Label>
                                                <Form.Control value={(Array.isArray(dataSelected?.bacsi?.phongs) && dataSelected?.bacsi?.phongs.length > 0) ? dataSelected.bacsi.phongs[0].tenphong : ''}></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col lg={3}>
                                            <Form.Group>
                                                <Form.Label>Chuyên Khoa</Form.Label>
                                                <Form.Control value={dataSelected?.bacsi?.chuyenkhoa?.tenkhoa}></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label>Ngày Khám</Form.Label>
                                                <Form.Control value={dayjs(dataSelected?.ngaykham).format('YYYY-MM-DD')}></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label>Phiên</Form.Label>
                                                <Form.Control value={`${dataSelected?.phien?.batdau} - ${dataSelected?.phien?.ketthuc}`}></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>
                        <div>
                            <Tabs defaultActiveKey="1">
                                <TabPane tab="Bệnh Nhân Mới" key="1">
                                    <div className=' border position-relative w-100' style={{height: 300,  overflowY: "auto" }}>
                                        <Table responsive bordered hover>
                                            <thead>
                                                <tr>
                                                    <th style={{ width: "1%" }}>STT</th>
                                                    <th>Họ Và Tên</th>
                                                    <th>Số Điện Thoại</th>
                                                    <th>Bác Sĩ</th>
                                                    <th>Chuyên Khoa</th>
                                                    <th>Ngày Khám</th>
                                                    <th>Phiên Khám</th>
                                                    <th className='text-center' colSpan={2}>Hành Động</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {dataDatLichBacSi?.getAllDatLichBacSiByTrangThai?.map((datlich: any, index: number) => {
                                                    return (
                                                        <tr key={datlich?._id} onClick={() => handleSeclect(datlich)}>
                                                            <td>{index + 1}</td>
                                                            <td>{datlich?.benhnhan?.hoten}</td>
                                                            <td>{datlich?.benhnhan?.sodienthoai}</td>
                                                            <td>{datlich?.bacsi?.hoten}</td>
                                                            <td>{datlich?.bacsi?.chuyenkhoa?.tenkhoa}</td>
                                                            <td>{moment(datlich?.ngaykham).format('DD-MM-YYYY')}</td>
                                                            <td>{datlich?.phien?.batdau} - {datlich?.phien?.ketthuc}</td>
                                                            <td className='d-flex justify-content-around align-items-center'>
                                                                {/* <Button>Xem</Button> */}
                                                                <Button onClick={() => handleXacNhan(datlich)}>Xác Nhận</Button>
                                                                <Button onClick={() => handleHuy(datlich?._id)}>Hủy</Button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </Table>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <Pagination count={3} take={take} skip={handleChangPage} page={page} />
                                    </div>
                                </TabPane>
                                <TabPane tab="Đã Xác Nhận" key="2">
                                    <div className='position-relative w-100' style={{height: 300,  overflowY: "auto" }}>
                                        <Table responsive bordered hover>
                                            <thead className='sticky-top top-0'>
                                                <tr>
                                                    <th>STT</th>
                                                    <th>Họ Và Tên</th>
                                                    <th>Số Điện Thoại</th>
                                                    <th>Bác Sĩ</th>
                                                    <th>Chuyên Khoa</th>
                                                    <th>Ngày Khám</th>
                                                    <th>Phiên Khám</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {dataXacNhanBacSi?.getAllDatLichBacSiByTrangThai?.map((datlich: any, index: number) => {
                                                    return (
                                                        <tr key={datlich?._id} onClick={() => handleSeclect(datlich)}>
                                                            <td>{index + 1}</td>
                                                            <td>{datlich?.benhnhan?.hoten}</td>
                                                            <td>{datlich?.benhnhan?.sodienthoai}</td>
                                                            <td>{datlich?.bacsi?.hoten}</td>
                                                            <td>{datlich?.bacsi?.chuyenkhoa?.tenkhoa}</td>
                                                            <td>{moment(datlich?.ngaykham).format('DD-MM-YYYY')}</td>
                                                            <td>{datlich?.phien?.batdau} - {datlich?.phien?.ketthuc}</td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </Table>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <Pagination count={3} take={take} skip={handleChangPage} page={page} />
                                    </div>
                                </TabPane>
                                <TabPane tab="Đã Hủy" key="3">
                                    <div className='position-relative w-100' style={{height: 300,  overflowY: "auto" }}>
                                        <Table responsive bordered>
                                            <thead>
                                                <tr>
                                                    <th>STT</th>
                                                    <th>Họ Và Tên</th>
                                                    <th>Số Điện Thoại</th>
                                                    <th>Bác Sĩ</th>
                                                    <th>Chuyên Khoa</th>
                                                    <th>Ngày Khám</th>
                                                    <th>Phiên Khám</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {dataHuyBacSi?.getAllDatLichBacSiByTrangThai?.map((datlich: any, index: number) => {
                                                    return (
                                                        <tr key={datlich?._id} onClick={() => handleSeclect(datlich)}>
                                                            <td>{index + 1}</td>
                                                            <td>{datlich?.benhnhan?.hoten}</td>
                                                            <td>{datlich?.benhnhan?.sodienthoai}</td>
                                                            <td>{datlich?.bacsi?.hoten}</td>
                                                            <td>{datlich?.bacsi?.chuyenkhoa?.tenkhoa}</td>
                                                            <td>{moment(datlich?.ngaykham).format('DD-MM-YYYY')}</td>
                                                            <td>{datlich?.phien?.batdau} - {datlich?.phien?.ketthuc}</td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </Table>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <Pagination count={3} take={take} skip={handleChangPage} page={page} />
                                    </div>
                                </TabPane>
                            </Tabs>
                        </div>
                    </div>}
                    {selectedMenuItem === '2' && <ListBacSi />}

                    {selectedMenuItem === '3' && <div>Nội dung cho Option 3</div>}
                </div>
            </div>
        </>
    );
}

export default DatLichVip;