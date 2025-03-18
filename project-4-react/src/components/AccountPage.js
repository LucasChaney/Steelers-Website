import React, {useState} from 'react';
import '../css/Account.css';

function AccountPage({isLoggedIn, userId}) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCityName] = useState("");
    const [state, setStateName] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
const handleAccoutInfo = async (event) => {
    event.preventDefault();

    if (
        firstName === "" ||
        lastName === "" ||
        address1 === "" ||
        city === "" ||
        state === "" ||
        zipCode === "" ||
        phoneNumber === "" ||
        email === ""
    ) {
        alert("Empty Field");
    } else {
        //alert(`First Name: ${firstName}\nLast Name: ${lastName}\nAddress Line 1: ${addressLine1}\nCity: ${cityName}\nState: ${stateName}\nZip Code: ${zipCode}\nPhone Number: ${phoneNumber}\nEmail: ${emailAddress}`)
        const response = await fetch('http://localhost:8080/AccountPage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userId ,firstName, lastName, address1, address2, city, state,zipCode,phoneNumber,email})
        });
        const status = response.status;
        const responseJson = await response.json();
        console.log('responseJson', responseJson);
    }
}
    return (
        <div>
            <form onSubmit={handleAccoutInfo}>
                <div className="container">
                    <label htmlFor="firstname"><b>First Name:</b></label>
                    <input name="firstname" type="text" placeholder="John" id="firstname" value={firstName} onChange={(e)=> setFirstName(e.target.value)} required/>
                    <label htmlFor="lastname"><b>Last Name:</b></label>
                    <input name="lastname" type="text" placeholder="Doe" id="lastname" value={lastName} onChange={(e)=> setLastName(e.target.value)} required/>
                    <label htmlFor="addressline1"><b>Adress Line 1:</b></label>
                    <input name="addressline1" type="text" placeholder="Gateway Arch" id="addressline1" value={address1} onChange={(e)=> setAddress1(e.target.value)} required/>
                    <label htmlFor="addressline2"><b>Adress Line 2:</b></label>
                    <input name="addressline2" type="text" placeholder="123 Sesame Street"  id="addressline2" value={address2} onChange={(e)=> setAddress2(e.target.value)}/>
                    <label htmlFor="city"><b>City:</b></label>
                    <input name="city" type="text" placeholder="St. Louis" id="cityname" value={city} onChange={(e)=> setCityName(e.target.value)} required />
                    <label htmlFor="state"><b>State:</b></label>
                    <select name="state"  id="state" value={state} onChange={(e)=> setStateName(e.target.value)} required>
                        <option value="" selected disabled>Select a State</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                    <label htmlFor="zipcode"><b>Zip Code:</b></label>
                    <input name="zipcode" type="text" placeholder="63102" id="zipcode" value={zipCode} onChange={(e)=> setZipCode(e.target.value)} required />
                    <label htmlFor="phonenumber"><b>Phone Number:</b></label>
                    <input name="phonenumber" type="text" placeholder="(877) 982-1410" id="phonenumber" value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)} required />
                    <label htmlFor="email"><b>Email:</b></label>
                    <input name="email" type="text" placeholder="johndoe@gmail.com" id="email" value={email} onChange={(e)=> setEmail(e.target.value)} required />
                    <button type="submit" className="btn btn-submit">Submit</button>
                </div>
                <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
                    <button type="reset" className="resetbtn">Reset</button>
                </div>
            </form>
        </div>
    );
}

export default AccountPage;