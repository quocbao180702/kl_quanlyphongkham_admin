import { Image } from "antd";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import "./style.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthContextProvider";
import { useGetBacSiIdLazyQuery, useGetNhanVienIdLazyQuery, useGetUserByIdLazyQuery } from "../../graphql-definition/graphql";
import { IoEllipseSharp } from "react-icons/io5";
import dayjs from "dayjs";
import { getUrlImage } from "../../utils/uploadFile";

function Profile() {

    const { profile } = useContext(AuthContext);
    const [getDataNhanvien, { data: dataNhanVien, error: errorNhanVien }] = useGetNhanVienIdLazyQuery();
    const [getDataBacSi, { data: dataBacSi, error: errorBacSi }] = useGetBacSiIdLazyQuery();
    const [getDataUser, { data: dataUser, error: errorUser }] = useGetUserByIdLazyQuery();

    useEffect(() => {
        if (profile?._id) {
            if (profile?.user?.role === "DOCTOR") {
                getDataBacSi({
                    variables: {
                        id: profile?._id
                    }
                })
            }
            if (profile?.user?.role === "STAFF") {
                getDataNhanvien({
                    variables: {
                        id: profile?._id
                    }
                })
            }
            else {
                getDataUser({
                    variables: {
                        id: profile?._id
                    }
                })
            }
        }
    }, [profile])

    return (
        <>
            <div className="profile-page">
                <Container className="mt-5">
                    <Row className="align-items-center">
                        <Col lg={4}>
                            <Image
                                className="mx-auto"
                                style={{ maxHeight: 300 }}
                                src={dataBacSi?.getBacSibyId?.user?.avatar?.url || dataNhanVien?.getNhanVienbyId?.user?.avatar?.url || dataUser?.getUserById?.avatar?.url}
                            />
                        </Col>
                        <Col lg={8}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Thông Tin Cá Nhân</Card.Title>

                                    <Card.Text>Họ Tên: {dataBacSi?.getBacSibyId?.hoten || dataNhanVien?.getNhanVienbyId?.hoten || dataUser?.getUserById?.username}</Card.Text>
                                    {(dataNhanVien?.getNhanVienbyId || dataBacSi?.getBacSibyId) && (
                                        <>
                                            <Card.Text>Ngày Sinh: {dayjs(dataBacSi?.getBacSibyId?.ngaysinh).format("DD-MM-YYYY") || dayjs(dataNhanVien?.getNhanVienbyId?.ngaysinh).format("DD-MM-YYYY")}</Card.Text>
                                            <Card.Text>CCCD: {dataBacSi?.getBacSibyId?.cccd || dataNhanVien?.getNhanVienbyId?.cccd}</Card.Text>
                                            <Card.Text>Giới Tính: {dataBacSi?.getBacSibyId?.gioitinh ? "NAM" : "NỮ" || dataNhanVien?.getNhanVienbyId?.gioitinh ? "NAM" : "NỮ"}</Card.Text>
                                            <Card.Text>Địa Chỉ: {dataBacSi?.getBacSibyId?.diachi || dataNhanVien?.getNhanVienbyId?.diachi}</Card.Text>
                                        </>
                                    )}

                                    {dataBacSi?.getBacSibyId && (
                                        <>
                                            <Card.Text>Chuyển Khoa: {dataBacSi?.getBacSibyId?.chuyenkhoa?.tenkhoa || ''}</Card.Text>
                                            <Card.Text>Phòng: {dataBacSi?.getBacSibyId?.phongs[0]?.tenphong || ''}</Card.Text>
                                            <Card.Text>Ngày Bắt Đầu: {dayjs(dataBacSi?.getBacSibyId?.ngayBD).format("DD-MM-YYYY") || ''}</Card.Text>
                                        </>
                                    )}
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Profile;