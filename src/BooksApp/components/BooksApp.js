import React, { Component } from 'react'
import {
    Button,
    Table,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

export default class BooksApp extends Component {
    state = {
        modal: false
    }

    componentDidMount = async () => {
        let res = await fetch('https://jsonplaceholder.typicode.com/posts')
        let body = await res.json()
        console.log(body)
    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <div className="container">
                <h1>Books App</h1>
                <Button color="primary" onClick={this.toggle}>Add Book</Button>
                <br />
                <br />
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Rating</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>2.5</td>
                            <td>
                                <Button color="success" size="sm" className="mr-2">Edit</Button>
                                <Button color="danger" size="sm">Delete</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Add a new book</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="bookTitle">Title</Label>
                                <Input type="text" name="title" id="bookTitle" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="rating">Rating</Label>
                                <Input type="number" name="rating" id="rating" />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Add Book</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}
