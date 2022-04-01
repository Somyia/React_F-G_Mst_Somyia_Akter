import React from 'react';
import { Col, Container, Row, Tab, Tabs, InputGroup, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './Home.css';
import Form from '../Form/Form';
import ShowTable from '../ShowTable/ShowTable';

const Home = () => {
    const [key, setKey] = useState('form');
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col md={12} xs={12}>
                        <div style={{ border: '1px solid #f8f8fa' }}>
                            <Tabs
                                id="controlled-tab-example"
                                activeKey={key}
                                onSelect={(k) => setKey(k)}
                            >
                                <Tab eventKey="form" title="Form">
                                    <div className="form-area">
                                        <div>
                                            <h4>Aromatic Bar</h4>
                                            <p>We are committed to providing you with the best dining experience possible, so we welcome your comments. Please fill out this questionnaire. Thank you.</p>
                                        </div>
                                        <div>
                                            <Form />
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="table" title="Table">
                                    <div>
                                        <ShowTable />
                                    </div>
                                </Tab>

                            </Tabs>
                        </div>
                    </Col>
                </Row >
            </Container >
        </div >
    );
};

export default Home;