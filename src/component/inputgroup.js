import React, { useEffect, useState } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import { Button, FormGroup, FormControl, Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Home from "./home";
import { addtodo } from "../store/actions";
import { useDispatch } from "react-redux";


const InputGroupHandler = (props) => {
    const [todo, setTodo] = useState({ title: "", description: "" });
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTodo({ ...todo, [name]: value })
    }


    const handleAdd = () => {
        dispatch(addtodo(todo));
        setTodo({ title: "", description: "" })
    }

    return (
        <>

            <Row>

                <InputGroup className="mt-3 mb-3">
                    <Col xs={12} md={4}>
                        <FormControl
                            placeholder="Add title..."
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            name="title"
                            value={todo.title}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col xs={12} md={7}>
                        <FormControl
                            placeholder="Add description..."
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            name="description"
                            value={todo.description}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col xs={6} md={1}>
                        <Button
                            className=""
                            variant="btn btn-secondary"
                            id="button-addon2"
                            onClick={handleAdd}
                        >
                            Add
                        </Button>
                    </Col>
                </InputGroup>
            </Row>
        </>
    )
}
export default InputGroupHandler;