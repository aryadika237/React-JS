import React from 'react';
import './App.css';
import { Table, Row, Col } from 'react-bootstrap'

const Tabel = ({bukus, editData, hapusData}) => {
    return (
        <div>
            <Row>
                <Col>
                    <h4 className="col">List Data</h4>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped bordered hover variant="dark">
                        <thead className="text-center">
                            <tr>
                                <th>#</th>
                                <th>Nama Roti</th>
                                <th>Deskripsi</th>
                                <th>Harga Roti</th>
                                <th>QTY</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bukus.map((buku, index) =>{
                                return(
                            <tr key={index}>
                                <td>{index + 1 }</td>
                                <td>{buku.nama}</td>
                                <td>{buku.deskripsi}</td>
                                <td>{buku.harga}</td>
                                <td>{buku.qty}</td>
                                <td>
                                    <button className="btn btn-warning mr-1" onClick={() => editData(buku.id) }>Edit</button>
                                    <button className="btn btn-warning mr-1" onClick={() => hapusData(buku.id) }>Hapus</button>
                                </td>
                            </tr>
                                );
                            })}
                            
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    )
}

export default Tabel