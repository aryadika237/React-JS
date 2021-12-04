import React from 'react';
import './App.css';
import {Row, Col, Form, Button} from 'react-bootstrap';

const Formulir = ({nama, id, deskripsi, qty, harga, handleChange, handleSubmit}) => {
    return (
        <div className="mt-3">
            <Row>
                <Col>
                    <h4 className="col">{id ? "Edit Data" : "Tambah Data"}</h4>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="nama">
                                <Form.Label>Nama Roti</Form.Label>
                                <Form.Control type="text" name="nama" value={nama} onChange={(event) => handleChange(event)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="deskripsi">
                                <Form.Label>Deskripsi</Form.Label>
                                <Form.Control as="textarea" rows="3" name="deskripsi" value={deskripsi} onChange={(event) => handleChange(event)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="harga">
                                <Form.Label>Harga Roti</Form.Label>
                                <Form.Control type="number" name="harga" value={harga} onChange={(event) => handleChange(event)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="qty">
                                <Form.Label>QTY</Form.Label>
                                <Form.Control type="number" name="qty" value={qty} onChange={(event) => handleChange(event)}/>
                            </Form.Group>
                            <Button variant="primary" type="submit" >
                                Submit
                            </Button>
                    </Form>
                </Col>   
            </Row>
        </div>
    )
}
export default Formulir
