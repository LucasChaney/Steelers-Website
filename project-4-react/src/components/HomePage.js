import React from 'react';
import '../css/Home.css'

const HomePage = ({isLoggedIn, userId}) => {
    console.log("IsLoggedIn: " + isLoggedIn)
    return (
        <div>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                </ol>

                <div className="carousel-inner" role="listbox">
                    <div className="item active">
                        <img src="/images/arthur_smith_Steelers_OC.webp" alt="Artur Smith" style={{ width: '100%', margin: 'auto', minHeight: '200px' }} />
                        <div className="carousel-caption">
                            <h3><span>Arthur Smith Hired As Offensive Coordinator</span></h3>
                            <p><span>Star players fear his ability to make anyone look bad!</span></p>
                        </div>
                    </div>

                    <div className="item">
                        <img src="/images/steelers-2024-opponents-schedule.webp" alt="Steelers 2024 home/away schedule" style={{ width: '100%', margin: 'auto', minHeight: '200px' }} />
                        <div className="carousel-caption">
                            <h3><span>Home and Away Games</span></h3>
                            <p><span>Steelers 2024 schedule preview</span></p>
                        </div>
                    </div>
                </div>

                <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            <div className="container text-center">
                <h3>There's Nothing To Do</h3><br />
                <div className="row">
                    <div className="col-sm-4">
                        <img src="/images/2024_NFL_draft.jpg" className="img-responsive" style={{ width: '100%' }} alt="NFL draft shield 2024" />
                        <p>Project 1</p>
                        <p>Waiting for the draft</p>
                    </div>
                    <div className="col-sm-4">
                        <img src="/images/waiting_for_football.jpg" className="img-responsive" style={{ width: '100%' }} alt="Man sitting waiting patiently" />
                        <p>Project 2</p>
                        <p>Waiting for football to start again</p>
                    </div>
                    <div className="col-sm-4">
                        <img src="/images/Le'Veon_Bell.webp" className="img-responsive" style={{ width: '100%' }} alt="Le'Veon Bell in a steelers uniform." />
                        <p>Project 3</p>
                        <p>Missing Le'Veon Bell</p>
                    </div>
                    <div className="col-sm-4">
                        <div className="well" style={{ height: '100%' }}>
                            <p>KENNY PICKET IS GONE HOORAY</p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="well">
                            <p>STEELERS NATION LET'S WELD</p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="well">
                            <p>#1 ON THE FIELD #1 IN MY HEART</p>
                        </div>
                    </div>
                </div>
            </div><br />

            <footer className="container-fluid text-center">
                <a href="https://www.steelers.com/" target="_blank" rel="noopener noreferrer">Steelers Nation</a>
            </footer>
        </div>
    );
};

export default HomePage;