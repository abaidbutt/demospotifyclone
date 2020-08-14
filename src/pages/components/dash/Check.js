import React from 'react'
import './signin.css'
import { FormGroup, Label, Input, Button } from 'reactstrap'
export const Check = () => {
    return (
        <div>
            <form className="form-signin">
                <div className="text-center mb-4">
                    <h1 className="h3 mb-3 font-weight-normal"><i className='fa fa-spotify fa-fw'></i>Spotify</h1>
                    <hr></hr>
                    <h4 class="mb-3">Payment</h4>

                </div>

                <hr class="mb-4" />



                <div class="d-block my-3">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="cc-name">Name on card</label>
                            <input
                                type="text"
                                class="form-control"
                                id="cc-name"
                                placeholder=""
                                required
                            />
                            <small class="text-muted">Full name as displayed on card</small>
                            <div class="invalid-feedback">
                                Name on card is required
                </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="cc-number">Credit card number</label>
                            <input
                                type="text"
                                class="form-control"
                                id="cc-number"
                                placeholder=""
                                required
                            />
                            <div class="invalid-feedback">
                                Credit card number is required
                </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="cc-expiration">Expiration</label>
                            <input
                                type="text"
                                class="form-control"
                                id="cc-expiration"
                                placeholder=""
                                required
                            />
                            <div class="invalid-feedback">
                                Expiration date required
                </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="cc-cvv">CVV</label>
                            <input
                                type="text"
                                class="form-control"
                                id="cc-cvv"
                                placeholder=""
                                required
                            />
                            <div class="invalid-feedback">
                                Security code required
                </div>
                        </div>
                    </div>
                </div>



                <Button className="btn btn-lg btn-success btn-block rounded-pill mt-3" type="submit">Subscribe</Button>
                <Button className="btn btn-lg btn-primary btn-block rounded-pill mt-3" type="submit">Cancel</Button>

            </form>

        </div>
    )
}
