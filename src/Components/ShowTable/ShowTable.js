import React from 'react';
import { Table } from 'react-bootstrap';

const ShowTable = () => {
    const getStorage = localStorage.getItem('feedback');
    const store = JSON.parse(getStorage)
    console.log(store)
    console.log("p")
    return (
        <div className="table-area">
            <div>
                <h4>All Feedback</h4>
            </div>
            <div>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Service Quality</th>
                            <th>Beverage Quality</th>
                            <th>Cleaning</th>
                            <th>Experience</th>
                        </tr>
                    </thead>
                    <tbody>

                        {

                            store.map(item => <tr>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.serviceQuality}</td>
                                <td>{item.beverageQuality}</td>
                                <td>{item.cleaning}</td>
                                <td>{item.experience}</td>
                            </tr>)
                        }

                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ShowTable;