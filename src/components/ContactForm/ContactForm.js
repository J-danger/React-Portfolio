import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import "./ContactForm.css"
class ContactForm extends Component {

    state = {
        name: '',
        email: '',        
        message: '',
    }

    handleSubmit(e) {
        e.preventDefault()
        const { email, subject, message } = this.state
        let templateParams = {
        from_name: email,
        to_name: 'stevehowe10@gmail.com',
        subject: subject,
        message_html: message,
        }
        emailjs.send(
        'gmail',
        'template_ev3hUnOT',
        templateParams,
        'user_egJ2Yq2EX17y01QPfdCQN'
        )
        this.resetForm()
    }

    resetForm() {
        this.setState({
        name: '',
        email: '',    
        message: '',
        })
    }

    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
    }
    
    render() {
        return (
        <>
            
            
            <FormGroup controlid="formBasicName">
                <Label className="label">Name</Label>
                <Input
                    type="text"
                    name="name"
                    value={this.state.name}                
                    onChange={this.handleChange.bind(this, 'name')}
                    
                />
                </FormGroup>      
            <Form onSubmit={this.handleSubmit.bind(this)}>
                <FormGroup controlid="formBasicEmail">
                <Label className="label">Email address</Label>
                <Input
                    type="email"
                    name="email"
                    value={this.state.email}                
                    onChange={this.handleChange.bind(this, 'email')}
                    
                />
                </FormGroup>
            <FormGroup controlid="formBasicMessage">
                <Label className="label">Message</Label>
                <Input
                    type="textarea"
                    name="message"               
                    value={this.state.message}
                    onChange={this.handleChange.bind(this, 'message')}
                />
                </FormGroup>
            <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>
            
        </>
        )
    }
    }
export default ContactForm