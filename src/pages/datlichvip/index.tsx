/* import { Calendar, momentLocalizer } from 'react-big-calendar' */
import moment from 'moment';

import "react-big-calendar/lib/css/react-big-calendar.css"
import { Col, Form, Row, Table } from 'react-bootstrap';
import { Button, Menu, Tabs } from 'antd';
import { Calendar } from 'antd';
import { useState } from 'react';
/* 
const localizer = momentLocalizer(moment) */

const myEventsList = [
    {
        id: 1,
        title: 'Meeting',
        start: new Date(2024, 3, 25, 10, 0),
        end: new Date(2024, 3, 25, 12, 0),
    },
    {
        id: 2,
        title: 'Lunch',
        start: new Date(2024, 3, 26, 12, 0),
        end: new Date(2024, 3, 26, 13, 0),
    },
    {
        id: 3,
        title: 'Bệnh Nhân Hà Anh Tuấn',
        start: new Date(2024, 3, 26, 12, 0),
        end: new Date(2024, 3, 26, 13, 0)
    }
];

const onChange = (key: string) => {
    console.log(key);
};


function DatLichVip() {


    const items = [
        {
            key: '1',
            label: 'Option 1',
        },
        {
            key: '2',
            label: 'Option 2',
        },
        {
            key: '3',
            label: 'Option 3',
        },
        {
            key: 'sub1',
            label: 'Navigation One',
            children: [
                {
                    key: '5',
                    label: 'Option 5',
                },
                {
                    key: '6',
                    label: 'Option 6',
                },
                {
                    key: '7',
                    label: 'Option 7',
                },
                {
                    key: '8',
                    label: 'Option 8',
                },
            ],
        },
        {
            key: 'sub2',
            label: 'Navigation Two',
            children: [
                {
                    key: '9',
                    label: 'Option 9',
                },
                {
                    key: '10',
                    label: 'Option 10',
                },
                {
                    key: 'sub3',
                    label: 'Submenu',
                    children: [
                        {
                            key: '11',
                            label: 'Option 11',
                        },
                        {
                            key: '12',
                            label: 'Option 12',
                        },
                    ],
                },
            ],
        },
    ];
    const { TabPane } = Tabs

    const [selectedMenuItem, setSelectedMenuItem] = useState('1');
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    const handleMenuClick = (event: any) => {
        setSelectedMenuItem(event.key);
    };

    const renderContent = () => {
        switch (selectedMenuItem) {
            case '1':
                return <div>Nội dung cho Option 1</div>;
            case '2':
                return <div>Nội dung cho Option 2</div>;
            case '3':
                return <div>Nội dung cho Option 3</div>;
            default:
                return null;
        }
    };

    return (
        <>
            {/*  <div style={{ width: 256 }}>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="light"
                    inlineCollapsed={collapsed}
                    onClick={handleMenuClick}
                    selectedKeys={[selectedMenuItem]}
                >
                    <Menu.Item key={"1"}>
                        Option 1
                    </Menu.Item>
                    <Menu.Item key={"2"}>
                        Option 2
                    </Menu.Item>
                    <Menu.Item key={"3"}>
                        Option 3
                    </Menu.Item>
                    <Button
                        type="primary"
                        onClick={toggleCollapsed}
                        style={{ marginBottom: 16 }}
                    >
                        {collapsed ? 'Mở' : 'Tắt'}
                    </Button>
                </Menu>
            </div> */}
            {/* <div style={{ display: 'flex' }}>
                <div style={{ width: 256 }}>
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="light"
                        inlineCollapsed={collapsed}
                        onClick={handleMenuClick}
                        selectedKeys={[selectedMenuItem]}
                    >
                        <Menu.Item key={"1"}>
                            Option 1
                        </Menu.Item>
                        <Menu.Item key={"2"}>
                            Option 2
                        </Menu.Item>
                        <Menu.Item key={"3"}>
                            Option 3
                        </Menu.Item>
                        <Button
                            type="primary"
                            onClick={toggleCollapsed}
                            style={{ marginBottom: 16 }}
                        >
                            {collapsed ? 'Mở' : 'Tắt'}
                        </Button>
                    </Menu>
                </div>
                <div style={{ flex: 1 }}>
                    {renderContent()}
                </div>
            </div> */}
            <div style={{ display: 'flex' }}>
                <div style={{ width: collapsed ? 80 : 256, transition: 'width 0.3s' }}>
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="light"
                        inlineCollapsed={collapsed}
                        onClick={handleMenuClick}
                        selectedKeys={[selectedMenuItem]}
                    >
                        <Menu.Item key={"1"}>
                            Option 1
                        </Menu.Item>
                        <Menu.Item key={"2"}>
                            Option 2
                        </Menu.Item>
                        <Menu.Item key={"3"}>
                            Option 3
                        </Menu.Item>
                        <Button
                            type="primary"
                            onClick={toggleCollapsed}
                            style={{ marginBottom: 16 }}
                        >
                            {collapsed ? 'Mở' : 'Thu nhỏ'}
                        </Button>
                    </Menu>
                </div>
                <div style={{ flex: 1 }}>
                    {/* Nội dung */}
                    {/* Nội dung tùy thuộc vào mục được chọn */}
                    {selectedMenuItem === '1' && <div>
                        <Row>
                            <Col lg={3}>
                                <Tabs defaultActiveKey="1">
                                    <TabPane tab="Tab 1" key="1">
                                        Content of Tab Pane 1
                                    </TabPane>
                                    <TabPane tab="Tab 2" key="2">
                                        <Form>
                                            <Form.Group>
                                                <Form.Label>Họ Tên</Form.Label>
                                                <Form.Control></Form.Control>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Ngày Sinh</Form.Label>
                                                <Form.Control></Form.Control>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Giới Tính</Form.Label>
                                                <Form.Control></Form.Control>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Số Điện Thoại</Form.Label>
                                                <Form.Control></Form.Control>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Phòng</Form.Label>
                                                <Form.Control></Form.Control>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Bác Sĩ</Form.Label>
                                                <Form.Control></Form.Control>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Ngày Khám</Form.Label>
                                                <Form.Control></Form.Control>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Phiên</Form.Label>
                                                <Form.Control></Form.Control>
                                            </Form.Group>
                                        </Form>
                                    </TabPane>
                                    <TabPane tab="Tab 3" key="3">
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
                                                <tr>
                                                    <td>1</td>
                                                    <td>Phạm Dương Hoàn Tuần</td>
                                                    <td>0123456789</td>
                                                    <td>Nguyễn Văn Hoàng</td>
                                                    <td>Khoa Tim Mạch</td>
                                                    <td>30-04-2024</td>
                                                    <td>8:00 - 9:00</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </TabPane>
                                </Tabs>
                            </Col>
                            <Col lg={6}>
                                <h4 className='text-center'>Thông Tin</h4>
                                <Form>
                                    <Form.Group>
                                        <Form.Label>Họ Tên</Form.Label>
                                        <Form.Control></Form.Control>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Ngày Sinh</Form.Label>
                                        <Form.Control></Form.Control>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Giới Tính</Form.Label>
                                        <Form.Control></Form.Control>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Số Điện Thoại</Form.Label>
                                        <Form.Control></Form.Control>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Phòng</Form.Label>
                                        <Form.Control></Form.Control>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Bác Sĩ</Form.Label>
                                        <Form.Control></Form.Control>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Ngày Khám</Form.Label>
                                        <Form.Control></Form.Control>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Phiên</Form.Label>
                                        <Form.Control></Form.Control>
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col lg={3}>
                                <Calendar style={{ width: "100%", height: 400 }} />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={3}>

                            </Col>
                            <Col lg={6}>
                                <Table>
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
                                        <tr>
                                            <td>1</td>
                                            <td>Phạm Dương Hoàn Tuần</td>
                                            <td>0123456789</td>
                                            <td>Nguyễn Văn Hoàng</td>
                                            <td>Khoa Tim Mạch</td>
                                            <td>30-04-2024</td>
                                            <td>8:00 - 9:00</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                            <Col lg={3}>
                            </Col>
                        </Row>
                    </div>}
                    {selectedMenuItem === '2' && <div>Nội dung cho Option 2</div>}
                    {selectedMenuItem === '3' && <div>Nội dung cho Option 3</div>}
                </div>
            </div>
            {/* <div>
                <Row>
                    <Col lg={3}>
                        <Tabs defaultActiveKey="1">
                            <TabPane tab="Tab 1" key="1">
                                Content of Tab Pane 1
                            </TabPane>
                            <TabPane tab="Tab 2" key="2">
                                <Form>
                                    <Form.Group>
                                        <Form.Label>Họ Tên</Form.Label>
                                        <Form.Control></Form.Control>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Ngày Sinh</Form.Label>
                                        <Form.Control></Form.Control>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Giới Tính</Form.Label>
                                        <Form.Control></Form.Control>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Số Điện Thoại</Form.Label>
                                        <Form.Control></Form.Control>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Phòng</Form.Label>
                                        <Form.Control></Form.Control>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Bác Sĩ</Form.Label>
                                        <Form.Control></Form.Control>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Ngày Khám</Form.Label>
                                        <Form.Control></Form.Control>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Phiên</Form.Label>
                                        <Form.Control></Form.Control>
                                    </Form.Group>
                                </Form>
                            </TabPane>
                            <TabPane tab="Tab 3" key="3">
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
                                        <tr>
                                            <td>1</td>
                                            <td>Phạm Dương Hoàn Tuần</td>
                                            <td>0123456789</td>
                                            <td>Nguyễn Văn Hoàng</td>
                                            <td>Khoa Tim Mạch</td>
                                            <td>30-04-2024</td>
                                            <td>8:00 - 9:00</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </TabPane>
                        </Tabs>
                    </Col>
                    <Col lg={6}>
                        <h4 className='text-center'>Thông Tin</h4>
                        <Form>
                            <Form.Group>
                                <Form.Label>Họ Tên</Form.Label>
                                <Form.Control></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Ngày Sinh</Form.Label>
                                <Form.Control></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Giới Tính</Form.Label>
                                <Form.Control></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Số Điện Thoại</Form.Label>
                                <Form.Control></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Phòng</Form.Label>
                                <Form.Control></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Bác Sĩ</Form.Label>
                                <Form.Control></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Ngày Khám</Form.Label>
                                <Form.Control></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Phiên</Form.Label>
                                <Form.Control></Form.Control>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col lg={3}>
                        <Calendar style={{ width: "100%", height: 400 }} />
                    </Col>
                </Row>
                <Row>
                    <Col lg={3}>

                    </Col>
                    <Col lg={6}>
                        <Table>
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
                                <tr>
                                    <td>1</td>
                                    <td>Phạm Dương Hoàn Tuần</td>
                                    <td>0123456789</td>
                                    <td>Nguyễn Văn Hoàng</td>
                                    <td>Khoa Tim Mạch</td>
                                    <td>30-04-2024</td>
                                    <td>8:00 - 9:00</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col lg={3}>
                    </Col>
                </Row>
            </div> */}
        </>
    );
}

export default DatLichVip;