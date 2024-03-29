import { Button, Form } from "react-bootstrap";
import { FormEvent, useContext, useEffect, useMemo, useState } from "react";
import { useCreateSinhHieuMutation, useUpdateSinhhieuMutation } from "../../graphql-definition/graphql";
import { EditContext } from ".";

function SinhHieu({ dataSelected }: any) {

    const { isEditing, setIsEditing }: any = useContext(EditContext);
    const [mach, setMach] = useState<number>(0.0);
    const [nhietdo, setNhietdo] = useState<number>(0.0);
    const [ha1, setHa1] = useState<string>('');
    const [ha2, setHa2] = useState<string>('');
    const [chieucao, setChieucao] = useState<number>(0.0);
    const [cannang, setCannang] = useState<number>(0.0);
    const [bmi, setBmi] = useState<number>(0.0);
    const [isChecked, setIsChecked] = useState<boolean>(false);

    // Sử dụng useMemo để so sánh giá trị mới của dataSelected với giá trị cũ
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
            setBmi(memoizedDataSelected?.sinhhieu?.bmi || 0.0);
            setIsChecked(!!memoizedDataSelected?.sinhhieu?.benhmangtinh);
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
            bmi,
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
                            "bmi": values?.bmi,
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
                                "bmi": values?.bmi,
                                "benhmangtinh": values?.benhmangtinh
                            }
                        }
                    })
                }
                else {
                    console.log('không có id bệnh nhân');
                }
            }
            setIsEditing(true);
        } catch (error) {
            console.log('lỗi là: ', error)
        }
    };
    return (
        <>
            <hr />
            <h5>Sinh hiệu</h5>
            <hr />
            <Form className="row" onSubmit={handleSubmit}>
                <Form.Group className="mr-3" controlId="formGridAddress2">
                    <Form.Label>Mạch </Form.Label>
                    <Form.Control
                        placeholder="mạch..."
                        defaultValue={/* dataSelected?.sinhhieu?. */mach || ''}
                        onChange={(event) => setMach(parseFloat(event.target.value))}
                        disabled={isEditing}
                    />
                </Form.Group>

                <Form.Group className="mr-3" controlId="formGridAddress2">
                    <Form.Label>Nhiệt độ</Form.Label>
                    <Form.Control
                        placeholder="nhiệt độ..."
                        value={/* dataSelected?.sinhhieu?. */nhietdo || ''}
                        onChange={(event) => setNhietdo(parseFloat(event.target.value))}
                        disabled={isEditing}
                    />
                </Form.Group>

                <Form.Group className="mr-3" controlId="formBasicEmail">
                    <Form.Label>HA</Form.Label>
                    <div className="d-flex justify-content-center">
                        <Form.Control
                            type="text"
                            style={{ maxWidth: "100px" }}
                            onChange={(event) => setHa1(event.target.value)}
                            value={/* dataSelected?.sinhhieu?.ha ? dataSelected?.sinhhieu?.ha.split('/')[0] : '' */ ha1 || ''}
                            disabled={isEditing}
                        />
                        <Form.Control
                            type="text"
                            style={{ maxWidth: "100px" }}
                            onChange={(event) => setHa2(event.target.value)}
                            value={/* dataSelected?.sinhhieu?.ha ? dataSelected?.sinhhieu?.ha.split('/')[1] : '' */ ha2 || ''}
                            disabled={isEditing}
                        />
                    </div>
                </Form.Group>

                <Form.Group className="mr-3" controlId="formGridAddress2">
                    <Form.Label>Chiều cao</Form.Label>
                    <Form.Control placeholder="Chiều cao..."
                        defaultValue={/* dataSelected?.sinhhieu?. */chieucao || ''}
                        onChange={(event) => setChieucao(parseFloat(event.target.value))}
                        disabled={isEditing}
                    />
                </Form.Group>

                <Form.Group className="mr-3" controlId="formGridAddress2">
                    <Form.Label>Căn nặng</Form.Label>
                    <Form.Control placeholder="Căn nặng..."
                        defaultValue={/* dataSelected?.sinhhieu?. */cannang || ''}
                        onChange={(event) => setCannang(parseFloat(event.target.value))}
                        disabled={isEditing}
                    />
                </Form.Group>

                <Form.Group className="mr-3" controlId="formGridAddress2">
                    <Form.Label>BMI</Form.Label>
                    <Form.Control placeholder="BMI..."
                        defaultValue={/* dataSelected?.sinhhieu?. */bmi || ''}
                        onChange={(event) => setBmi(parseFloat(event.target.value))}
                        disabled={isEditing}
                    />
                </Form.Group>

                <Form.Group className="ml-3 d-flex justify-content-center align-items-center" controlId="formGridAddress2">
                    <Form.Check
                        type="checkbox"
                        id="autoSizingCheck"
                        className="mb-2"
                        label="Mảng tính"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        disabled={isEditing}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Lưu
                </Button>
            </Form>
        </>
    );
}

export default SinhHieu;
