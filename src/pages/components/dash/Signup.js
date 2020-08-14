import React from 'react'
import './signin.css'
import { FormGroup, Label, Input, Button } from 'reactstrap'
export const Signup = () => {
    return (
        <div>
            <form className="form-signin">
                <div className="text-center mb-4">
                    <h1 className="h3 mb-3 font-weight-normal"><i className='fa fa-spotify fa-fw'></i>Spotify</h1>
                    <hr></hr>
                    <h5>Register with your email Address</h5>
                </div>
                
                <FormGroup className='form-label-group'>
                    <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        className='form-control'
                        placeholder="with a placeholder"
                    />
                    <Label for="exampleEmail">What is your email?</Label>
                </FormGroup>
                <FormGroup className='form-label-group'>
                    <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        className='form-control'
                        placeholder="with a placeholder"
                    />
                    <Label for="exampleEmail">Confirm Email Address</Label>
                </FormGroup>
                <FormGroup className='form-label-group'>
                    <Input
                        type="password"
                        name="password"
                        className='form-control'
                        id="examplePassword"
                        placeholder="password placeholder"
                    />
                    <Label for="examplePassword">Create a password</Label>
                </FormGroup>
                <FormGroup className='form-label-group'>
                    <Input
                        type="text"
                        name="password"
                        className='form-control'
                        id="examplePassword"
                        placeholder="password placeholder"
                    />
                    <Label for="examplePassword">What shall we call you</Label>
                </FormGroup>
                                   
                <FormGroup >
                    <Input bsSize="lg" type="date" name="date" placeholder="date placeholder" />
                </FormGroup>

                What is your gender?{' '}
                <FormGroup check inline className='m-1'>
                    <Label check>
                        <Input type="radio" name='gender' /> Male
                    </Label>
                </FormGroup>
                <FormGroup check inline>
                    <Label check>
                        <Input type="radio" name='gender' /> Female
                    </Label>
                </FormGroup>
                <FormGroup check inline>
                    <Label check>
                        <Input type="radio" name='gender' /> Other
                    </Label>
                </FormGroup>

                <FormGroup check className='m-1'>
                    <Label check>
                        <Input type="checkbox" />{' '}
          I hereby agree to the Spotify Terms of Use .
                    </Label>
                </FormGroup>



                <Button className="btn btn-lg btn-success btn-block rounded-pill mt-3" type="submit">TO REGISTER</Button>
                <p class="mt-4 mb-3 text-muted text-center">You already have an account? Sign in.</p>
            </form>

        </div>
    )
}
