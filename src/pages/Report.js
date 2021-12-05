import React from 'react'
import "../Report.css"
const Report = () => {
    return (
        <>
            <div class="registration-container mb-5">
                <div class="title mt-4">Report a Corruption</div>
                <div class="content">
                    <form action="#">
                        <div class="user-details">
                            <div class="input-box-full">
                                <span class="details">Full Name</span>
                                <input type="text" placeholder="Enter your name" required />
                            </div>
                            <div class="input-box">
                                <span class="details">Email</span>
                                <input type="text" placeholder="Enter your email" required />
                            </div>
                            <div class="input-box">
                                <span class="details">Phone Number</span>
                                <input type="text" placeholder="Enter your number" required />
                            </div>
                            <div class="input-box">
                                <span class="details">City</span>
                                <input type="text" placeholder="Enter City name" required />
                            </div>
                            <div class="input-box">
                                <span class="details">State</span>
                                <input type="text" placeholder="Enter State name" required />
                            </div>
                            <div class="input-box">
                                <span class="details">Description</span>
                                <textarea rows="5" cols="40" placeholder="Describe the problem" required />
                            </div>
                            <div class="input-screenshot">
                                <span class="details">Images</span>
                                <input id="screenshot" type="file" accept="image/*" required />
                            </div>
                        </div>
                        <button className="btn bg-warning">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Report
