import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import data from '../Data';
import "../components/courseDetails.css";
import { ToastContainer,toast } from 'react-toastify';

function CourseDetails() {
    const { id } = useParams(); // Get the course id from the URL
    const course = data.find(course => course.id === parseInt(id)); // Find the matching course data

    if (!course) {
        return <div>Course not found</div>; // If no course is found, display a message
    }

    // Initialize form state
    const [formData, setFormData] = useState({
        fullName: '',
        fatherName: '',
        email: '',
        mobileno: '',
        altno: '',
        dateTime: '',
        gender: '',
        qualification: '',
        aadhaarNo: '',
        course: '',
        houseNo: '',
        city: '',
        locality: '',
        state: '',
        pincode: '',
        District: "",
    });

    function handleChange(event) {
        setFormData(priviousData => {
            return {
                ...priviousData,
                [event.target.name]: event.target.value



            }

        })
    }

    const submitHandler = async (event) => {
        event.preventDefault();
    
        const validateData = {
            fullName: "Full Name is required",
            fatherName: "Father's Name is required",
            email: "Email is required",
            mobileno: "Mobile Number is required",
            altno: "Alternate Number is required",
            dateTime: "Date and Time is required",
            gender: "Gender is required",
            qualification: "Qualification is required",
            aadhaarNo: "Aadhaar Number is required",
            course: "Course is required",
            houseNo: "House Number is required",
            city: "City is required",
            locality: "Locality is required",
            state: "State is required",
            pincode: "Pincode is required",
            District: "District is required",
        };
    
        let isValid = true;
    
        // Validation Loop
        for (const key in validateData) {
            if (!formData[key]) { // Agar field empty hai toh toast.error call hoga
                toast.error(validateData[key]);
                isValid = false;
            }
        }
    
        if (!isValid) return; // Agar koi error hai toh submission roko
    
        try {
            // Send data to backend
            const response = await fetch("https://api.botwaviation.com/courseDetails/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
    
            if (response.ok) {
                const result = await response.json();
                toast.success("Data has been submitted successfully!");
                console.log("Data submitted successfully:", result);
            } else {
                const errorData = await response.json();
                toast.error(errorData.message || "Server error occurred");
            }
        } catch (error) {
            toast.error("An error occurred while submitting the form");
            console.error("An error occurred:", error);
        } finally {
            // Reset form
            setFormData({
                fullName: '',
                fatherName: '',
                email: '',
                mobileno: '',
                altno: '',
                dateTime: '',
                gender: '',
                qualification: '',
                aadhaarNo: '',
                course: course.title, // Automatically set course title
                houseNo: '',
                city: '',
                locality: '',
                state: '',
                pincode: '',
                District: '',
            });
        }
    };
    

    function resetHandeler() {

        setFormData({
            fullName: '',
            fatherName: '',
            email: '',
            mobileno: '',
            altno: '',
            dateTime: '',
            gender: '',
            qualification: '',
            aadhaarNo: '',
            course: '',
            houseNo: '',
            city: '',
            locality: '',
            state: '',
            pincode: '',
            District: "",

        })
    }



    return (
        <div>
            <div className='top'>
                <div className='course-details'>
                    <div className='course-details-content'>
                        <div className='course-details-img'>
                            <img src={course.image} alt={course.title} style={{ height: "200px", objectFit: "cover" }} />
                        </div>
                        <div className='course-details-heading'>
                            <h1>{course.title}</h1>
                        </div>
                        <div className='course-details-para'>
                            <p>{course.description}</p>
                        </div>
                        <div className='overview'>
                            <h1>Program Overview</h1>
                            <p>{course.overview}</p>
                        </div>
                        <div className='points'>
                            <li>{course.pointsMessages.pointone}</li>
                            <li>{course.pointsMessages.pointtow}</li>
                            <li>{course.pointsMessages.pointThree}</li>
                            <li>{course.pointsMessages.pointFour}</li>
                            <li>{course.pointsMessages.pointFive}</li>
                        </div>
                    </div>

                    <div className='form'>
                        <h1>REGISTRATION FOR {course.title}</h1>
                        <form onSubmit={submitHandler} >
                            <input
                                type='text'
                                name='fullName'
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder='Full Name *'
                            />
                            <input
                                type='text'
                                name='fatherName'
                                value={formData.fatherName}
                                onChange={handleChange}
                                placeholder='Father Name'
                            />
                            <input
                                type='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='Email ID *'
                            />
                            
                            <input
                                type='text' // Use 'text' instead of 'number'
                                name='mobileno'
                                value={formData.mobileno}
                                onChange={handleChange}
                                placeholder='Mobile No. *'
                            />
                            <input
                                type='text' // Use 'text' instead of 'number'
                                name='altno'
                                value={formData.altno}
                                onChange={handleChange}
                                placeholder='Alternate Mobile No.'
                            />

                            <input
                                className='dt'
                                name='dateTime'
                                type='datetime-local'
                                value={formData.dateTime}
                                onChange={handleChange}
                                placeholder='Date of Birth'
                            />

                            <select
                                name='gender'
                                value={formData.gender}
                                onChange={handleChange}
                            >
                                <option value="" disabled>Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>

                            <select
                                name='qualification'
                                value={formData.qualification}
                                onChange={handleChange}
                            >
                                <option value="" disabled>Select Highest Qualification</option>
                                <option value="10th">10th</option>
                                <option value="12th">12th</option>
                                <option value="ug">Graduation</option>
                                <option value="pg">Post Graduation</option>
                            </select>

                            <input
                                type='number'
                                name='aadhaarNo'
                                value={formData.aadhaarNo}
                                onChange={handleChange}
                                placeholder='Aadhaar Card No *'
                            />

                            <select
                                name='course'
                                value={formData.course}
                                onChange={handleChange}
                            >
                                <option value="" disabled>Select Course</option>
                                <option value="aviation">Aviation</option>
                                <option value="cruise">Cruise</option>
                                <option value="airport">Airport Management</option>
                                <option value="hotel">Hotel Management</option>
                                <option value="airhostess">Air Hostess</option>
                            </select>

                            <input
                                type='text'
                                name='houseNo'
                                value={formData.houseNo}
                                onChange={handleChange}
                                placeholder='House No / Gali No'
                            />
                            <input
                                type='text'
                                name='city'
                                value={formData.city}
                                onChange={handleChange}
                                placeholder='Village / Town / City'
                            />
                            <input
                                type='text'
                                name='locality'
                                value={formData.locality}
                                onChange={handleChange}
                                placeholder='Locality / Landmark'
                            />

                            <input
                                type='text'
                                name='District'
                                value={formData.District}
                                onChange={handleChange}
                                placeholder='District'
                            />

                            <select
                                name='state'
                                value={formData.state}
                                onChange={handleChange}
                            >
                                <option value="" disabled>Select State</option>
                                <option value="AP">Andhra Pradesh</option>
                                <option value="AR">Arunachal Pradesh</option>
                                <option value="AS">Assam</option>
                                <option value="BR">Bihar</option>
                                <option value="CT">Chhattisgarh</option>
                                <option value="GA">Goa</option>
                                <option value="HR">Haryana</option>
                                <option value="HP">Himachal Pradesh</option>
                                <option value="JK">Jammu and Kashmir</option>
                                <option value="JH">Jharkhand</option>
                                <option value="KA">Karnataka</option>
                                <option value="KL">Kerala</option>
                                <option value="MP">Madhya Pradesh</option>
                                <option value="MH">Maharashtra</option>
                                <option value="MN">Manipur</option>
                                <option value="ML">Meghalaya</option>
                                <option value="MZ">Mizoram</option>
                                <option value="NL">Nagaland</option>
                                <option value="OR">Odisha</option>
                                <option value="PB">Punjab</option>
                                <option value="RJ">Rajasthan</option>
                                <option value="SK">Sikkim</option>
                                <option value="TN">Tamil Nadu</option>
                                <option value="TG">Telangana</option>
                                <option value="TR">Tripura</option>
                                <option value="UT">Uttarakhand</option>
                                <option value="UP">Uttar Pradesh</option>
                                <option value="WB">West Bengal</option>
                                <option value="AN">Andaman and Nicobar Islands</option>
                                <option value="CH">Chandigarh</option>
                                <option value="DN">Dadra and Nagar Haveli</option>
                                <option value="DD">Daman and Diu</option>
                                <option value="DL">Delhi</option>
                                <option value="LD">Lakshadweep</option>
                                <option value="PY">Puducherry</option>
                            </select>

                            <input
                                type='number'
                                name='pincode'
                                value={formData.pincode}
                                onChange={handleChange}
                                placeholder='Pincode'
                            />
                            <button className='sb btn-en submit' type='submit'>Submit</button>
                        
                            <button className='rt btn-en submit ' onClick={resetHandeler}>Reset</button>
                            <ToastContainer />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseDetails;
