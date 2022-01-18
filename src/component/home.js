import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from "react-redux";
import InputGroupHandler from "./inputgroup";
import { Button } from 'react-bootstrap';
import { deletetodo, editedtodoData } from "../store/actions";
import ModalBox from "./modal";
const Home = () => {
    const allTODO = useSelector(state => state.todoReducer);
    const dispatch = useDispatch();
    const [openModal, setOpenModal] = useState(false)
    const [index, setIndex] = useState(null)

    const editBtn = (index) => {
        setIndex(index)
        setOpenModal(true)

    }

    const handleModalClose = (props) => {
        // console.log(props.editedTODO)
        dispatch(editedtodoData(props.editedTODO, index));
        setOpenModal(false);
        setIndex(null);

    }

    const deleteBtn = (id) => {
        dispatch(deletetodo(id));
        console.log(allTODO);
    }

    return (
        <>
            <div className="container">
                <InputGroupHandler />

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {allTODO.todos ?
                            allTODO.todos.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.title}</td>
                                    <td>{item.description}</td>
                                    <td><Button
                                        variant="btn btn-secondary"
                                        id="button-addon2"
                                        onClick={() => editBtn(index)}
                                    >
                                        Edit
                                    </Button></td>
                                    <td><Button
                                        variant="btn btn-secondary"
                                        id="button-addon2"
                                        onClick={() => deleteBtn(index)}
                                    >
                                        Delete
                                    </Button></td>
                                </tr>
                            ))
                            : null
                        }

                    </tbody>
                </Table>
            </div>
            {index !== null && <ModalBox title={allTODO.todos[index]?.title} description={allTODO.todos[index]?.description} showModal={openModal} handleClose={handleModalClose} />}
        </>
    )
}
export default Home;