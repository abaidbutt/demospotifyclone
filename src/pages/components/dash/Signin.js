import React from 'react'
import './signin.css'
import { FormGroup, Label, Input, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
export const Signin = () => {
    return (
        <div>
            <form className="form-signin">
                <div className="text-center mb-4">
                    <h1 className="h3 mb-3 font-weight-normal"><i className='fa fa-spotify fa-fw'></i>Spotify</h1>
                    <hr></hr>
                    <h5>To continue, log in to Spotify</h5>
                </div>
<FormGroup className='form-label-group'>
                    <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        className='form-control'
                        placeholder="with a placeholder"
                    />
                    <Label for="exampleEmail">Email address</Label>
                </FormGroup>
<FormGroup className='form-label-group'>
                    <Input
                        type="password"
                        name="password"
                        className='form-control'
                        id="examplePassword"
                        placeholder="password placeholder"
                    />
                    <Label for="examplePassword">Password</Label>
                </FormGroup>
                <FormGroup check className='m-1'>
                    <Label check>
                        <Input type="checkbox" />{' '}
                        Remember me
                    </Label>
                </FormGroup>
                <Button className="btn btn-lg btn-success btn-block rounded-pill mt-3" type="submit" >
                    
                        LOG IN
                    
                </Button>
                <p className="mt-4 mb-3 text-muted text-center">Don't have an account?</p>
                <Button className="btn btn-lg btn-outline-primary text-white btn-block rounded-pill mt-3" type="submit">SIGN UP FOR SPOTIFY</Button>
            </form>

        </div>
    )
}
