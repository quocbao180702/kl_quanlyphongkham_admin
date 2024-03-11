import RegisterForm from "./register-form";


export default function Register(){

    return(
        <>
            <div className="container h-100">
                <h3 className="text-center"> Đăng Nhập </h3>
                <div className="d-flex flex-row justify-content-center align-items-center h-100">
                    <RegisterForm />
                </div>
            </div>
        </>
    )
}