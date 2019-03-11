import React, { Component } from 'react'

export default class ContactList extends Component {
    state = {
        contact: {
            name: '',
            email: '',
            phone: '',
            id: 0
        },
        contactList: [],
        id: 0
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState(prevState => {
            return {
                contact: {
                    ...prevState.contact,
                    [name]: value
                }
            }
        })
    }

    resetContactState = () => {
        this.setState({
            contact: {
                name: '',
                email: '',
                phone: ''
            }
        })
    }

    resetForm = (e) => {
        e.preventDefault();
        this.resetContactState();
    }

    submitForm = (e) => {
        e.preventDefault();
        this.setState(prevState => {
            return {
                contactList: [...prevState.contactList, {...prevState.contact, id: prevState.id }],
                id: prevState.id + 1
            }
        })
        this.resetContactState();
    }

    removeContactFromList = (id) => {
        let index = this.state.contactList.findIndex(item => item.id === id)
        this.setState(prevState => {
            return {
                contactList: [...prevState.contactList.slice(0, index), ...prevState.contactList.slice(index+1)]
            }
        })
    }

    editContact = (contact) => {
        this.setState({
            contact: {
                name: contact.name,
                email: contact.email,
                phone: contact.phone,
                id: contact.id
            }
        })
    }

    updateContact = () => {
        let index = this.state.contactList.findIndex(item => item.id === this.state.contact.id)
        this.setState(prevState => {
            return {
                contactList: [
                    ...prevState.contactList.slice(0, index),
                    prevState.contact,
                    ...prevState.contactList.slice(index+1)
                ]
            }
        })
        this.resetContactState();
    }

    render() {
        return (
            <div className="container">
                <h1>Contact List</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input
                                    className="form-control"
                                    type="text"
                                    value={this.state.contact.name}
                                    name="name"
                                    placeholder="Name"
                                    onChange={this.handleChange}
                                />
                            </td>
                            <td>
                                <input
                                    className="form-control"
                                    type="email"
                                    value={this.state.contact.email}
                                    name="email"
                                    placeholder="Email"
                                    onChange={this.handleChange}
                                />
                            </td>
                            <td>
                                <input
                                    className="form-control"
                                    type="tel"
                                    value={this.state.contact.phone}
                                    name="phone"
                                    placeholder="Phone number"
                                    onChange={this.handleChange}
                                />
                            </td>
                            <td><button className="btn btn-primary" onClick={this.submitForm}>Add Contact</button></td>
                            <td>
                                <button className="btn btn-info" onClick={this.updateContact}>Update</button>
                                &nbsp;&nbsp;
                                <button 
                                    disabled={!this.state.contact.name && !this.state.contact.email && !this.state.contact.phone} 
                                    className="btn btn-info" 
                                    onClick={this.resetForm}
                                >
                                    Clear
                                </button>
                            </td>
                        </tr>
                        {
                            this.state.contactList.map(item => {
                                return <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td><button className="btn btn-danger" onClick={this.removeContactFromList.bind(null, item.id)}>Remove</button></td>
                                    <td><button className="btn btn-warning" onClick={this.editContact.bind(null, item)}>Edit</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
