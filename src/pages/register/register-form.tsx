import { FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
/* import { useNavigate } from "react-router-dom"; */
/* import { useRegisterMutation } from "../../graphql-definition/graphql"; */
function RegisterForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    /* const navigate = useNavigate(); */

    /* const [register, _] = useRegisterMutation(); */
    
    const onSubmit = async(event: FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        /* const response = await register({variables: {input: {username, password, email}}})

        if(response.data?.register){
            JWTManager.setToken(response?.data?.register?.access_token as string);
            navigate('..');
        }
        else{
            console.log('Error', response?.errors);
        } */
    }

    return (<>
        <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={event => setEmail(event.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username"value={username} onChange={event => setUsername(event.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </>);
}

export default RegisterForm;