import React from 'react'

export const Footer = () => {
    return (
        <div className='bg-dark text-white'>
            <footer className="section-footer border-top ">
                <div className="container mt-3">
                    <section className="footer-top padding-y">
                        <div className="row">
                            <aside className="col-md-4">
                                <article className="mr-3">
                                    <h1> <i className='fa fa-spotify fa-fw'></i>Spotify</h1>
                                    {/* <p className="mt-3">Some short text about company like You might remember the Dell computer commercials in which a youth reports this exciting news to his friends.</p> */}
                                    
                                </article>
                            </aside>
                            <aside className="col-sm-3 col-md-2">
                                <h6 className="title">COMPANIES</h6>
                                <ul className="list-unstyled text-small">
                                    <li><a className="text-muted" href="#">Business</a></li>
                                    <li><a className="text-muted" href="#">Education</a></li>
                                    <li><a className="text-muted" href="#">Government</a></li>
                                    <li><a className="text-muted" href="#">Gaming</a></li>
                                </ul>
                            </aside>
                            <aside className="col-sm-3 col-md-2">
                                <h6 className="title">COMMUNITIES</h6>
                                <ul className="list-unstyled">
                                    <li> <a className="text-muted" href="#">Help center</a></li>
                                    <li> <a className="text-muted" href="#">Money refund</a></li>
                                    <li> <a className="text-muted" href="#">Terms and Policy</a></li>
                                    <li> <a  className="text-muted"href="#">Open dispute</a></li>
                                </ul>
                            </aside>
                            <aside className="col-sm-3  col-md-2">
                            <h6 className="title">FOR USER</h6>
                                <ul className="list-unstyled">
                                    <li> <a href="#"className="text-muted"> User Login </a></li>
                                    <li> <a href="#"className="text-muted"> User register </a></li>
                                    <li> <a href="#"className="text-muted"> Account Setting </a></li>
                                    <li> <a href="#"className="text-muted"> My Orders </a></li>
                                    <li> <a href="#"className="text-muted"> My Wishlist </a></li>
                                </ul>
                            </aside>
                            <aside className="col-sm-2  col-md-2">
                                <h6 className="title">USEFUL LINKS</h6>
                                <ul className="list-unstyled text-small">
                                    <li> <a className='btn btn-icon btn-light rounded-circle m-1' title='Facebook' target='_blank' href='https://www.facebook.com'><i className='fa fa-facebook-f'></i></a>Facebook</li>
                                    <li> <a className='btn btn-icon btn-light rounded-circle m-1' title='Facebook' target='_blank' href='https://www.facebook.com'><i className='fa fa-twitter'></i></a>Twitter</li>
                                    <li> <a className='btn btn-icon btn-light rounded-circle m-1' title='Facebook' target='_blank' href='https://www.facebook.com'><i className='fa fa-instagram'></i></a>Insta</li>
                                    {/* <li> <a className='btn btn-icon btn-light rounded-circle m-1' title='Facebook' target='_blank' href='https://www.facebook.com'><i className='fa fa-google-plus'></i></a>Mail</li>
                                    <li> <a className='btn btn-icon btn-light rounded-circle m-1' title='Facebook' target='_blank' href='https://www.facebook.com'><i className='fa fa-linkedin'></i></a>Linkdln</li> */}
                                    
                                </ul>
                                
                            </aside>
                        </div>
                    </section>

                    {/* <section className="footer-copyright border-top">
                        <p className="float-left text-muted"> © 2019 Company  All rights resetved </p>
                        <p target="_blank" className="float-right text-muted">
                            <a href="#">Privacy &amp; Cookies</a> &nbsp;   &nbsp;
					<a href="#">Accessibility</a>
                        </p>
                    </section> */}
                </div>
            </footer>
        </div>
    )
}
{/* <footer class="container py-5">
        <div class="row">
          <div class="col-12 col-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mb-2" role="img" viewBox="0 0 24 24" focusable="false"><title>Product</title><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg>
            <small class="d-block mb-3 text-muted">&copy; 2017-2020</small>
          </div>
          
          <div class="col-6 col-md">
            <h5>Features</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Cool stuff</a></li>
              <li><a class="text-muted" href="#">Random feature</a></li>
              <li><a class="text-muted" href="#">Team feature</a></li>
              <li><a class="text-muted" href="#">Stuff for developers</a></li>
              <li><a class="text-muted" href="#">Another one</a></li>
              <li><a class="text-muted" href="#">Last time</a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>Resources</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Resource</a></li>
              <li><a class="text-muted" href="#">Resource name</a></li>
              <li><a class="text-muted" href="#">Another resource</a></li>
              <li><a class="text-muted" href="#">Final resource</a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>Resources</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Business</a></li>
              <li><a class="text-muted" href="#">Education</a></li>
              <li><a class="text-muted" href="#">Government</a></li>
              <li><a class="text-muted" href="#">Gaming</a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>About</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Team</a></li>
              <li><a class="text-muted" href="#">Locations</a></li>
              <li><a class="text-muted" href="#">Privacy</a></li>
              <li><a class="text-muted" href="#">Terms</a></li>
            </ul>
          </div>
        </div>
        <p class="float-right">
            <a href="#">Back to top</a>
          </p>
      </footer> */}