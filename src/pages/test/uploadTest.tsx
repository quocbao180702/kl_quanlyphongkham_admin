import React, { useCallback, useEffect, useRef, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Image, Upload } from 'antd';
import type { GetProp, UploadFile, UploadProps } from 'antd';
import { LinkImage, TypeImage } from '../../graphql-definition/graphql';
import { backendUrlFile, getUrlImage, uploadMultiFile } from '../../utils/uploadFile';
import { isEqual } from 'lodash';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (file: FileType): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

function TestUpload({ handleUploadImage, listImage }: any) {
    const fileListRef = useRef<UploadFile[]>([]);

    useEffect(() => {
            const dataList = listImage.map((data: any) => ({
                uid: data?.fileName,
                name: data?.fileName,
                status: 'done',
                url: data?.url,
            }));
            fileListRef.current = dataList;
            setFileList(dataList);
            handleUploadImage(dataList); // Gọi handleUploadImage nếu có dữ liệu mặc định
    }, [listImage]);

    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as FileType);
        }

        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
    };

    const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    }

    useEffect(() => {
        if (!isEqual(fileList, fileListRef.current)) {
            fileListRef.current = fileList;
            handleUploadImage(fileList);
        }
    }, [fileList, handleUploadImage]);

    const uploadButton = (
        <button style={{ border: 0, background: 'none' }} type="button">
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </button>
    );

    return (
        <>
            <Upload
                listType="picture-card"
                accept='.png,.jpg,.jpeg'
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
                multiple
            >
                {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            {previewImage && (
                <Image
                    wrapperStyle={{ display: 'none' }}
                    preview={{
                        visible: previewOpen,
                        onVisibleChange: (visible) => setPreviewOpen(visible),
                        afterOpenChange: (visible) => !visible && setPreviewImage(''),
                    }}
                    src={
                        getUrlImage(previewImage) ? getUrlImage(previewImage) : previewImage
                    }
                />
            )}
        </>
    );
}

export default TestUpload;

