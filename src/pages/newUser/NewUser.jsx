import React from 'react';
import './newUser.css'

const NewUser = () => {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label htmlFor="">UserName</label>
                    <input type="text" placeholder="manish"  />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Full Name</label>
                    <input type="text" placeholder="Manish Yadav"  />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="manish26@gmail.com"  />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="password"  />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Phone</label>
                    <input type="text" placeholder="+91 7206151901"  />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Address</label>
                    <input type="text" placeholder="Bhiwani | India"  />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Gender</label>
                    <div className="newUserGender">
                    <input type="radio" name="gender" id="male" value="male"  />
                    <label htmlFor="male">Male</label>
                    <input type="radio" name="gender" id="female" value="female"  />
                    <label htmlFor="female">Female</label>
                    <input type="radio" name="gender" id="other" value="other"  />
                    <label htmlFor="other">Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Active</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                <button className="newUserButton">Create</button>
                </div>
            </form>

        </div>
    )
}

export default NewUser
