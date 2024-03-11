import { FormEvent, useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useLoginMutation } from "../../graphql-definition/graphql";
import {  useNavigate } from "react-router-dom";
import { setJwtToken } from '../../utils/jwt';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [login, _] = useLoginMutation();
    
    const onSubmit = async(event: FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        const response = await login({variables: {input: {username, password}}})
        navigate('..');

        if(response.data?.login){
            setJwtToken(response?.data?.login?.access_token as string);
            navigate('..');
        }
        else{
            console.log('Error', response?.errors);
        }
    }

    return (
        <>
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" value={username} onChange={event => setUsername(event.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}

export default LoginForm;