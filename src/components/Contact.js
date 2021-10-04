import React from 'react';

const Contact = () => {
    return (
<main>
        <section className="row">
            <section className="container-fluid col-12" id="contact"
                >
                <h2 className="heading">Contact Me</h2>
                <br>
                </br>
                <div className="row">
                    <section className="col-md-6">

                        <form>
                            <input type="Text" name="text" require="" placeholder="Name" className="form-control">
                                </input>
                            <br>
                            </br>
                            <input type="Email" name="Email" require="" placeholder="Email" className="form-control">
                                </input>
                            <br>
                            </br>
                            <textarea rows="6" placeholder="Message" className="form-control"></textarea>
                            <br>
                            </br>
                            <button className="btn btn-info" id="contactbtn"
                                >Submit</button>
                        </form>

                    </section>
                    <section className="col-md-6">
                       <div>
                         
                            <a href="https://github.com/Cordovas-cmd" target="__blank" className="projbtn" id="linkbtn" >Github</a>
                            <br></br>
                            <br></br>
                            <a href="https://www.linkedin.com/in/samuel-cordova-0495b5174/" target="__blank" className="projbtn" id="linkbtn">LinkedIn</a>
                            <br></br>
                            <br></br>
                            <p class="email">Email: Cordovas1337@gmail.com</p>
                     
                       </div>
                    </section>
                    </div>
            </section>
        </section>
    </main>

    )
    }

export default Contact