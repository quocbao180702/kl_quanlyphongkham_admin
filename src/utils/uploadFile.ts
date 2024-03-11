import axios from 'axios'

type TypeFile = 'image' /* | 'video' | 'document' */
export const backendUrlFile = {
    image: 'http://localhost:3000/file-upload/PhongKhamImageUpload',
    /* video:'http://localhost:3000/file-upload/PhongKhamImageUpload',
    document: 'http://localhost:3000/file-upload/PhongKhamImageUpload' */
}

const backendUpload = {
    image: 'http://localhost:3000/file-upload/PhongKhamImageUpload',
   /*  video: 'http://localhost:3000/file-upload/PhongKhamImageUpload',
    document: 'http://localhost:3000/file-upload/PhongKhamImageUpload' */
}

export async function uploadFile(
    typeFile: TypeFile,
    files: any,
    callback: any
) {
    Promise.all(
        files.map(
            (file: any) => new Promise((resolve, reject) => {
                const formData = new FormData()
                formData.append('file', file)
                axios
                    .post(backendUpload[typeFile], formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                            // 'access-token': localStorage.getItem('access-token')
                        }
                    })
                    .then((response) => {
                        resolve(response.data?.[0])
                    })
                    .catch((error) => {
                        reject(error)
                    })
            })
        )
    )
        .then((result) => {
            callback(null, result)
        })
        .catch((error) => {
            callback(error)
        })
}

export async function uploadMultiFile(
    typeFile: TypeFile,
    files: any,
    callback?: any
) {
    const newArr = files?.map((file: any) => (
        file.file
    ))
    const newFile = new Promise((resolve, reject) => {
        const formData = new FormData()
        for (let i = 0; i < newArr.length; i++) {
            formData.append('file', newArr[i])
        }

        axios
            .post(backendUpload[typeFile], formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                   /*  'access-token': localStorage.getItem('access-token') */
                }
            })
            .then((response) => {

                resolve(response.data)
            })
            .catch((error) => {
                reject(error)
            })
    })
    newFile
        .then((result) => {
            callback(null, result)
        })
        .catch((error) => {
            callback(error)
        })
}

export function getUrlImage(linkImage: any) {
    const { url, fileName, type } = linkImage
    if (type === 'file') {
        return `http://localhost:3000/file-upload/PhongKhamImageUpload/${fileName}`
    }
    return url
}
