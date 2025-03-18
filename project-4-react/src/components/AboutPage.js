import React, { useEffect, useState } from 'react';
import '../css/About.css'

function AboutPage({isLoggedIn}) {
    const [countdown, setCountdown] = useState('');

    useEffect(() => {
        // Set the date we're counting down to
        const countDownDate = new Date("Apr 25, 2024 19:00:00").getTime();

        // Update the count down every 1 second
        const x = setInterval(function () {
            // Get today's date and time
            const now = new Date().getTime();

            // Find the distance between now and the count down date
            const distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result
            setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                setCountdown("It's Started!");
            }
        }, 1000);

        return () => clearInterval(x);
    }, []);

    return (
            <div>
                <div className="col-sm-4">
                    <div className="well">
                        <p></p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <h1 className="well" style={{
                        fontSize: 'xxx-large',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>Draft Day</h1>
                    <p1 className="well" id="DraftDay" style={{
                        fontSize: 'xxx-large',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>{countdown}</p1>
                </div>
                <div className="col-sm-4">
                <div className="well">
                        <p></p>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;