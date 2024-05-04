import { Badge, Calendar } from "antd";
import { Button, Modal } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import { useGetAllDatLichBacSiByBacSiLazyQuery, useGetLichKhamLazyQuery } from "../../graphql-definition/graphql";
import { useEffect, useState } from "react";
import moment from "moment";


interface Event {
    date: string;
    type: 'success' | 'warning' | 'error' | 'default' | 'processing';
    content: string;
}


function LichKham({ show, onHide, idLich, idBacSi }: any) {

    const [getLichKham, { data: dataLichKham, loading: loadingLichKham, error: errorLichKham }] = useGetLichKhamLazyQuery();
    const [getDatLich, { data: dataDatLich, loading: loadingDatLich, error: errorDatlich }] = useGetAllDatLichBacSiByBacSiLazyQuery();

    const [enabledDates, setEnabledDates] = useState<string[] | undefined>(undefined);
    const [phien, SetPhien] = useState([] as any[]);
    const [selectedDate, setSelectedDate] = useState<any>(null);
    const [eventList, setEventList] = useState<Event[]>([]);

    /* const eventList: Event[] = [
        { date: '2024-05-10', type: 'success', content: 'Hội nghị khoa học' },
        { date: '2024-05-15', type: 'warning', content: 'Hạn nộp báo cáo' },
        { date: '2024-05-20', type: 'error', content: 'Kiểm tra định kỳ' },
      ]; */

    const dateCellRender = (value: any) => {
        const dateStr = value.format('YYYY-MM-DD');
        const events = eventList.filter(event => event.date === dateStr);

        return (
            <ul className="events">
                {events.map((event, index) => (
                    <li key={index}>
                        <Badge status={event.type} text={event.content} />
                    </li>
                ))}
            </ul>
        );
    }

    useEffect(() => {
        if (idBacSi) {
            getDatLich({
                variables: {
                    bacsi: idBacSi
                }
            })
        }
    }, [idBacSi])

    useEffect(() => {
        console.log('data đặt lịch: ', dataDatLich?.getAllDatLichBacSiByBacSi)
    }, [dataDatLich?.getAllDatLichBacSiByBacSi])

    useEffect(() => {
        if (dataDatLich?.getAllDatLichBacSiByBacSi) {
            const newEvents: Event[] = dataDatLich.getAllDatLichBacSiByBacSi.map(item => {
                let eventType: Event['type'] = item?.trangthai ? 'success' : 'warning';
    
                return {
                    date: moment(item?.ngaykham).format('YYYY-MM-DD') || '',
                    type: eventType,
                    content: item?.benhnhan?.hoten || ''
                };
            });
            setEventList(newEvents);
        }
    }, [dataDatLich?.getAllDatLichBacSiByBacSi]);
    


    useEffect(() => {
        if (idLich) {
            getLichKham({
                variables: {
                    id: idLich
                }
            })
        }
        console.log('id lịch: ', idLich);
    }, [idLich])

    useEffect(() => {
        const enabledDates = dataLichKham?.getLichKham?.ngaykham.map(date => date.ngaytrongtuan);
        setEnabledDates(enabledDates);
    }, [dataLichKham?.getLichKham])

    const onDateSelect = (date: any) => {
        console.log(date.format('YYYY-MM-DD'));
        setSelectedDate(date);
        const phiens = dataLichKham?.getLichKham?.ngaykham
            .flatMap(ngay => ngay?.ngaytrongtuan === date.format('dddd') ? ngay?.phiens : [])
            .filter(Boolean);
        SetPhien(phiens || []);
    };

    const disabledDate = (current: any) => {
        if (!enabledDates?.includes(current.format('dddd'))) {
            return true
        }
        const ngaynghi = dataLichKham?.getLichKham?.ngaynghi.map(ngay => moment(ngay).format('YYYY-MM-DD'));

        if (ngaynghi) {
            if (ngaynghi.includes(current.format('YYYY-MM-DD'))) {
                return true;
            }
        }

        return false;

    };

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Lịch Khám Của Bác Sĩ
                    </Modal.Title>
                    <Button variant="link" onClick={onHide}>
                        <MdClose style={{ fontSize: '1.5rem' }} />
                    </Button>
                </Modal.Header>
            </Modal.Header>
            <Modal.Body>
                <Calendar disabledDate={disabledDate} onSelect={onDateSelect} cellRender={dateCellRender} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default LichKham;