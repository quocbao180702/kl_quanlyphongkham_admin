import { Upload } from 'antd'
import { useCallback, useEffect, useState } from 'react'
import { LinkImage, TypeImage } from '../../graphql-definition/graphql'
import { backendUrlFile, getUrlImage, uploadFile } from '../../utils/uploadFile'
import { IoAddSharp } from "react-icons/io5";

interface UploadImageProps {
    linkImage?: LinkImage
    handleUploadCallback?: Function
    sizeHeight?: string | number
    sizeWidth?: string | number
}

function UploadImage({
    linkImage,
    handleUploadCallback,
    sizeHeight = 60,
    sizeWidth = '100%'
}: UploadImageProps) {
    const [imageUrl, setImageUrl] = useState<LinkImage>()
    const handleUpload = useCallback(
        (file: any) => {
            if (file) {
                uploadFile('image', [file], (err: any, res: any) => {
                    try {
                        if (!res || err) throw new Error('Upload image error')
                        const newLinkImage: LinkImage = {
                            url: `${backendUrlFile.image}/${res?.[0]?.filename}`,
                            fileName: res?.[0]?.filename,
                            type: TypeImage.File
                        }
                        setImageUrl(newLinkImage)
                        handleUploadCallback?.(newLinkImage)
                    } catch (error) {
                        console.log(error)
                        // messageToast.error({
                        //   message: 'Tải ảnh lên thất bại'
                        // })
                    }
                }).catch((error) => {
                    console.log(error);
                    // messageToast.error({
                    //   message: 'Tải ảnh lên thất bại'
                    // })
                })
            }
        },
        [handleUploadCallback]
    )

    useEffect(() => {
        setImageUrl(linkImage)
    }, [linkImage])

    return (
        <Upload
            action=''
            name='avatar'
            showUploadList={false}
            listType='picture-card'
            accept='.png,.jpg,.jpeg'
            beforeUpload={handleUpload}
            capture={false}
            hasControlInside={false}
        >
            <div
                style={{
                    height: sizeHeight,
                    width: sizeWidth,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid #D9D9D9'
                }}
            >
                {imageUrl ? (
                    <img
                        alt='img'
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'fill'
                            // borderRadius: 10
                        }}
                        src={getUrlImage(imageUrl)}
                    />
                ) : (
                    <IoAddSharp />
                )}
            </div>
        </Upload>
    )
}

export default UploadImage
