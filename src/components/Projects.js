import React from 'react';
import Fade from 'react-reveal/Fade';
 

function Projects() {

    return (
       <Fade left>
        <section className="portfoliobg">
       
        <h2 className= "Projects" style={{fontSize:"25px"}}>My Projects</h2>
        <div className="row">
            <div className="col col-md-4">
              
                <div className="card" >
                    <img src={process.env.PUBLIC_URL + "/assets/images/Notetaker.png"} className="card-img-top" alt="send-foodz-screenshot"/>
                        <div className="card-body">
                            <h5 className="card-title">Note Taker</h5>
                            <p className="card-text">An application that generates random restaurants based on the inputted city. Also shows the weather of the city on search.</p>
                            <a role="button" href="github goes here" target="__blank" className="projbtn">Repository</a>
                            <a role="button" href="deployement goes here" target="__blank" className="projbtn">Webpage</a>
                        </div>
                </div>
                
            </div>
            <div className="col col-md-4">
                <div className="card">
                    <img src={process.env.PUBLIC_URL+"/assets/images/TeamProfile.png"} className="card-img-top" alt="stellar-sonic-screenshot" />
                        <div className="card-body">
                            <h5 className="card-title">Team Profile Gen</h5>
                            <p className="card-text">A space to share your sound - an application where you can search for songs and add to your personal interactive playlist.</p>
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
                            <p className="card-text">Organizes employees' data in a table and includes a search bar to filter employees. Also includes a sort function that sorts data.</p>
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
