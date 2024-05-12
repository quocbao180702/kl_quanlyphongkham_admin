import React from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import { handleUpload } from '../../utils/uploadFile';

const backendUploadUrl = 'http://localhost:3000/file-upload/PhongKhamDocumentBacSiUpload';;

const Test = () => {


 /*  const customRequest = async (options: any) => {
    const result = await handleUpload("documentbacsi", options);

    if (result === 0) {
      message.success(`uploaded successfully`);
    }
    else {
      message.success('upload failed');
    }
  }; */

  return (
    {/* <Upload
      customRequest={customRequest}
      maxCount={1}
      showUploadList={false}
    >
      <Button icon={<UploadOutlined />}>Upload File</Button>
    </Upload> */}
  );
};

export default Test;
