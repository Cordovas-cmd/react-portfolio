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
                    </div>
            </section>
        </section>
    </main>

    )
    }

export default Contact