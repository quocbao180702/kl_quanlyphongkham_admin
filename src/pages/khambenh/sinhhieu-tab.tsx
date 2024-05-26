import { Button, Col, Form, Row } from "react-bootstrap";
import { FormEvent, useContext, useEffect, useMemo, useState } from "react";
import { useCreateSinhHieuMutation, useUpdateSinhhieuMutation } from "../../graphql-definition/graphql";
import { EditContext } from ".";

function SinhHieu({ dataSelected }: any) {

    const { isEditing, setIsEditing }: any = useContext(EditContext);
    const [editSinhHieu, SetEdingSinhHieu] = useState(false);
    const [mach, setMach] = useState<number>(0.0);
    const [nhietdo, setNhietdo] = useState<number>(0.0);
    const [ha1, setHa1] = useState<string>('');
    const [ha2, setHa2] = useState<string>('');
    const [chieucao, setChieucao] = useState<number>(0.0);
    const [cannang, setCannang] = useState<number>(0.0);
    const [bmi, setBmi] = useState<number>(0.0);
    const [isChecked, setIsChecked] = useState<boolean>(false);

    useEffect(() => {
        SetEdingSinhHieu(isEditing)
    }, [isEditing])

    const memoizedDataSelected = useMemo(() => dataSelected, [dataSelected]);

    useEffect(() => {
        if (memoizedDataSelected?.sinhhieu) {
            setMach(memoizedDataSelected?.sinhhieu?.mach || 0.0);
            setNhietdo(memoizedDataSelected?.sinhhieu?.nhietdo || 0.0);
            const ha = memoizedDataSelected?.sinhhieu?.ha || '';
            const [ha1Val, ha2Val] = ha.split('/');
            setHa1(ha1Val || '');
            setHa2(ha2Val || '');
            setChieucao(memoizedDataSelected?.sinhhieu?.chieucao || 0.0);
            setCannang(memoizedDataSelected?.sinhhieu?.cannang || 0.0);
            setBmi(Number(tinhBMI(memoizedDataSelected?.sinhhieu?.chieucao, memoizedDataSelected?.sinhhieu?.cannang)) || 0.0);
            setIsChecked(!!memoizedDataSelected?.sinhhieu?.benhmangtinh);
        } else {
            setMach(0.0);
            setNhietdo(0.0);
            setHa1('');
            setHa2('');
            setChieucao(0.0);
            setCannang(0.0);
            setBmi(0.0);
            setIsChecked(false);
        }
    }, [memoizedDataSelected]);


    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };


    const [updateSinhhieu] = useUpdateSinhhieuMutation()
    const [createSinhhieu] = useCreateSinhHieuMutation()

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const ha = ha1 + "/" + ha2;
        console.log(ha);
        const values = {
            mach,
            nhietdo,
            ha,
            chieucao,
            cannang,
            benhmangtinh: isChecked
        };
        console.log('values: ', values);

        try {
            if (dataSelected?.sinhhieu?._id) {
                await updateSinhhieu({
                    variables: {
                        "input": {
                            "id": dataSelected?.sinhhieu?._id,
                            "mach": values?.mach,
                            "nhietdo": values?.nhietdo,
                            "ha": values?.ha,
                            "chieucao": values?.chieucao,
                            "cannang": values?.cannang,
                            "bmi": Number(tinhBMI(values?.chieucao, values?.cannang)),
                            "benhmangtinh": values?.benhmangtinh
                        }
                    }
                })
            }
            else {
                if (dataSelected?._id) {
                    await createSinhhieu({
                        variables: {
                            "input": {
                                "benhnhan": dataSelected?._id,
                                "mach": values?.mach,
                                "nhietdo": values?.nhietdo,
                                "ha": values?.ha,
                                "chieucao": values?.chieucao,
                                "cannang": values?.cannang,
                                "bmi": Number(tinhBMI(values?.chieucao, values?.cannang)),
                                "benhmangtinh": values?.benhmangtinh
                            }
                        }
                    })
                }
                else {
                    console.log('không có id bệnh nhân');
                }
            }
            SetEdingSinhHieu(true);
        } catch (error) {
            console.log('lỗi là: ', error)
        }
    };

    const tinhBMI = (chieucao: number, cannang: number) => {
        const bmi = cannang / ((chieucao / 100) * (chieucao / 100));
        return bmi.toFixed(2);
    }

    useEffect(() => {
        setBmi(Number(tinhBMI(Number(chieucao), Number(cannang))))
    }, [chieucao, cannang])

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <hr />
                <h5>Sinh hiệu</h5>
                <hr />
                <Row>
                    <Col md={4}>
                        <Form.Group controlId="formMach">
                            <Form.Label>Mạch</Form.Label>
                            <Form.Control
                                placeholder="Nhập mạch..."
                                defaultValue={mach || ''}
                                onChange={(event) => setMach(parseFloat(event.target.value))}
                                disabled={editSinhHieu}
                            />
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group controlId="formNhietDo">
                            <Form.Label>Nhiệt độ</Form.Label>
                            <Form.Control
                                placeholder="Nhập nhiệt độ..."
                                defaultValue={nhietdo || ''}
                                onChange={(event) => setNhietdo(parseFloat(event.target.value))}
                                disabled={editSinhHieu}
                            />
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group controlId="formHA">
                            <Form.Label>HA</Form.Label>
                            <div className="d-flex">
                                <Form.Control
                                    type="text"
                                    placeholder="HA"
                                    value={ha1 || ''}
                                    onChange={(event) => setHa1(event.target.value)}
                                    disabled={editSinhHieu}
                                />
                                <Form.Control
                                    type="text"
                                    placeholder="HA"
                                    value={ha2 || ''}
                                    onChange={(event) => setHa2(event.target.value)}
                                    disabled={editSinhHieu}
                                />
                            </div>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={4}>
                        <Form.Group controlId="formChieuCao">
                            <Form.Label>Chiều cao</Form.Label>
                            <Form.Control
                                placeholder="Nhập chiều cao..."
                                defaultValue={chieucao || ''}
                                onChange={(event) => setChieucao(parseFloat(event.target.value))}
                                disabled={editSinhHieu}
                            />
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group controlId="formCanNang">
                            <Form.Label>Cân nặng</Form.Label>
                            <Form.Control
                                placeholder="Nhập cân nặng..."
                                defaultValue={cannang || ''}
                                onChange={(event) => setCannang(parseFloat(event.target.value))}
                                disabled={editSinhHieu}
                            />
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group controlId="formBMI">
                            <Form.Label>BMI</Form.Label>
                            <Form.Control
                                placeholder="Nhập BMI..."
                                defaultValue={bmi || ''}
                                /* onChange={(event) => setBmi(parseFloat(event.target.value))} */
                                disabled={true}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="justify-content-center mb-4 mt-3">
                    <Col md={3}>
                        <Form.Group controlId="formAutoSizingCheck">
                            <Form.Check
                                type="checkbox"
                                label="Mảng tính"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                                disabled={editSinhHieu}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="justify-content-md-center">
                    <Button variant="primary" type="submit" disabled={editSinhHieu}>
                        Lưu
                    </Button>
                </Row>
            </Form>
        </>
    );
}

export default SinhHieu;
