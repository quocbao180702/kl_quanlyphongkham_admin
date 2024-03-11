import LoginForm from "./login-form";


export function Login() {

    return (
        <>
            <div className="container h-100">
                <h3 className="text-center"> Đăng Nhập </h3>
                <div className="d-flex flex-row justify-content-center align-items-center h-100">
                    <LoginForm />
                </div>
            </div>
        </>
    )
}