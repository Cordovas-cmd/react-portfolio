import React from 'react';
import Fade from 'react-reveal/Fade';
 

function Projects() {

    return (
       <Fade left>
        <section className="portfoliobg">
       
        <h2 className= "portfolio" id= "portfolio" style={{fontSize:"25px"}}>My Projects</h2>
        <div className="row">
            <div className="col col-md-4">
              
                <div className="card" >
                    <img src={process.env.PUBLIC_URL + "/assets/images/Notetaker.png"} className="card-img-top" alt="send-foodz-screenshot"/>
                        <div className="card-body">
                            <h5 className="card-title">Note Taker</h5>
                            <p className="card-text">An app that takes notes for you and your busy schedule.</p>
                            <a role="button" href="github goes here" target="__blank" className="projbtn">Repository</a>
                            <a role="button" href="deployement goes here" target="__blank" className="projbtn">Webpage</a>
                        </div>
                </div>
                
            </div>
            <div className="col col-md-4">
              
                <div className="card" >
                    <img src={process.env.PUBLIC_URL + "/assets/images/Notetaker.png"} className="card-img-top" alt="send-foodz-screenshot"/>
                        <div className="card-body">
                            <h5 className="card-title">Lorecraft</h5>
                            <p className="card-text">A WIP app that allows you to create an account, post, and view lore of some of your favorite games.</p>
                            <a role="button" href="github goes here" target="__blank" className="projbtn">Repository</a>
                            <a role="button" href="deployement goes here" target="__blank" className="projbtn">Webpage</a>
                        </div>
                </div>
                
            </div>
            <div className="col col-md-4">
              
                <div className="card" >
                    <img src={process.env.PUBLIC_URL + "/assets/images/Notetaker.png"} className="card-img-top" alt="send-foodz-screenshot"/>
                        <div className="card-body">
                            <h5 className="card-title">buget tracker</h5>
                            <p className="card-text">A digital budget tracker to easily keep track of funds and expenses.</p>
                            <a role="button" href="github goes here" target="__blank" className="projbtn">Repository</a>
                            <a role="button" href="deployement goes here" target="__blank" className="projbtn">Webpage</a>
                        </div>
                </div>
                
            </div>
            <div className="col col-md-4">
                <div className="card">
                    <img src={process.env.PUBLIC_URL+"/assets/images/TeamProfile.png"} className="card-img-top" alt="stellar-sonic-screenshot" />
                        <div className="card-body">
                            <h5 className="card-title">workout tracker</h5>
                            <p className="card-text">Tracks your workout routine so you can keep track and reach your goals :)</p>
                            <a role="button" href="github goes here" target="__blank" className="projbtn  ">Repository</a>
                            <a href="deployement goes here" target="__blank" className="projbtn  ">Webpage</a>
                            
                        </div>
                </div>
            </div>
            <div className="col col-md-4">
                <div className="card">
                    <img src={process.env.PUBLIC_URL+"/assets/images/WorkdayScheduler.png"} className="card-img-top" alt="employee-directory-screenshot" />
                        <div className="card-body">
                            <h5 className="card-title">Work Day Scheduler</h5>
                            <p className="card-text">Creates a schedule for your busy workday.</p>
                            <a role="button" href="github goes here" target="__blank" className="projbtn  ">Repository</a>
                            <a href="deployement goes here" target="__blank" className="projbtn  ">Webpage</a>
                            
                        </div>
                </div>
            </div>
       
        </div>
        </section>
        </Fade>
      
    )
}

export default Projects;
