import React from 'react'

export const Premium = () => {
    return (
        <div>
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">Pricing</h1>
                <p className="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
            </div>
            <div className='container'>
            <div class="card-deck mb-3 text-center">
    <div class="card mb-4 shadow-sm">
      <div class="card-header">
        <h4 class="my-0 font-weight-normal">Free</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">$0 <small class="text-muted">/ mo</small></h1>
        <ul class="fa-ul mt-3 mb-4">
          <li><span class="fa-li"><i class="fas fa-check"></i></span>30 users included</li>
          <li><span class="fa-li"><i class="fas fa-check"></i></span>15 GB of storage</li>
          <li><span class="fa-li"><i class="fas fa-check"></i></span>Phone and email support</li>
          <li><span class="fa-li"><i class="fas fa-check"></i></span>Help center access</li>
        </ul>
        <button type="button" class="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
      </div>
    </div>
    <div class="card mb-4 shadow-sm">
      <div class="card-header">
        <h4 class="my-0 font-weight-normal">Pro</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">$15 <small class="text-muted">/ mo</small></h1>
        <ul class="fa-ul mt-3 mb-4">
          <li><span class="fa-li"><i class="fas fa-check"></i></span>30 users included</li>
          <li><span class="fa-li"><i class="fas fa-check"></i></span>15 GB of storage</li>
          <li><span class="fa-li"><i class="fas fa-check"></i></span>Phone and email support</li>
          <li><span class="fa-li"><i class="fas fa-check"></i></span>Help center access</li>
        </ul>
        <button type="button" class="btn btn-lg btn-block btn-primary">Get started</button>
      </div>
    </div>
    <div class="card mb-4 shadow-sm">
      <div class="card-header">
        <h4 class="my-0 font-weight-normal">Enterprise</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">$29 <small class="text-muted">/ mo</small></h1>
        <ul class="fa-ul mt-3 mb-4">
          <li><span class="fa-li"><i class="fas fa-check"></i></span>30 users included</li>
          <li><span class="fa-li"><i class="fas fa-check"></i></span>15 GB of storage</li>
          <li><span class="fa-li"><i class="fas fa-check"></i></span>Phone and email support</li>
          <li><span class="fa-li"><i class="fas fa-check"></i></span>Help center access</li>
        </ul>
        <button type="button" class="btn btn-lg btn-block btn-primary">Contact us</button>
      </div>
    </div>
  </div>
            </div>
        </div>
    )
}
