import onlineAddmissionImg from "../images/onlineaddmission.jpg";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

function EnrollmentForm() {
    const location = useLocation();
    const { courseName } = location.state || { courseName: "Unknown Course" }; // Default if course name is missing

    const [enrollmentFormData, setEnrollmentFormData] = useState({
        firstName: "",
        lastName: "",
        fatherName: "",
        email: "",
        mobno: "",
        gender: "",
        course: courseName, 
        qualification: "",
        address: "",
        pincode: ""
    });

    function changeHandler(event) {
        setEnrollmentFormData(previousData => {
            return { ...previousData, [event.target.name]: event.target.value };
        });
    }

  async function submitHandler(event) {
        event.preventDefault();

        try{

            const responce = await fetch("https://api.botwaviation.com/enroloment/" , {
   
                 method:"POST",
                 headers:{
                    "Content-Type": "application/json",
                 },
                 body: JSON.stringify(enrollmentFormData),


            })

            if (responce.ok){
                console.log("The data is send to the data base ")
            }

        }

        catch(error){

            console.log(error)

        }




        if (!enrollmentFormData.firstName || !enrollmentFormData.lastName || !enrollmentFormData.email) {
            toast.error("Please fill all the required fields");
            return;
        }

        console.log("Enrollment Form Data: ", enrollmentFormData);
        toast.success("Enrollment Form Submitted Successfully");
    }

    return (
        <div className="online-addmission-form">
            <div className="image">
                <img src={onlineAddmissionImg} alt="Enrollment" />
            </div>
            <div className="form-online-addmission">
                <div className="heading-application">
                    <h1>Enrollment for  {courseName}</h1>
                    <hr />
                </div>
                <form onSubmit={submitHandler}>
                    <div className="online-addmissio-form">
                        <div className="online-addmissio-form-name">
                            <input
                                type="text"
                                name="firstName"
                                value={enrollmentFormData.firstName}
                                onChange={changeHandler}
                                placeholder="First Name"
                            />
                            <input
                                type="text"
                                name="lastName"
                                value={enrollmentFormData.lastName}
                                onChange={changeHandler}
                                placeholder="Last Name"
                            />
                        </div>

                        <div className="online-addmissio-form-data">
                            <input
                                type="text"
                                name="fatherName"
                                value={enrollmentFormData.fatherName}
                                onChange={changeHandler}
                                placeholder="Father Name"
                            />
                            <input
                                type="email"
                                name="email"
                                value={enrollmentFormData.email}
                                onChange={changeHandler}
                                placeholder="Email"
                            />
                        </div>

                        <div className="online-addmissio-form-personal">
                            <input
                                type="number"
                                name="mobno"
                                value={enrollmentFormData.mobno}
                                onChange={changeHandler}
                                placeholder="Mobile No"
                            />
                            <select name='gender' value={enrollmentFormData.gender} onChange={changeHandler}>
                                <option value="" disabled>Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="online-addmissio-form-option">
                            {/* Course field removed from dropdown and displayed as read-only */}
                            <input type="text" name="course" value={courseName} readOnly />

                            <select name="qualification" onChange={changeHandler} value={enrollmentFormData.qualification} className='online-addmissio-form-qualification'>
                                <option value="" disabled>Select Highest Qualification</option>
                                <option value="10th">10th</option>
                                <option value="12th">12th</option>
                                <option value="ug">Graduation</option>
                                <option value="pg">Post Graduation</option>
                            </select>
                        </div>

                        <div className="online-addmissio-form-address">
                            <input
                                type="text"
                                name="address"
                                value={enrollmentFormData.address}
                                onChange={changeHandler}
                                placeholder="Village / Town / City"
                            />
                            <input
                                type="number"
                                name="pincode"
                                value={enrollmentFormData.pincode}
                                onChange={changeHandler}
                                placeholder="Pincode"
                            />
                        </div>
                    </div>

                    <button type="submit" className="online-application-form">Submit Form</button>
                    <ToastContainer />
                </form>
            </div>
        </div>
    );
}

export default EnrollmentForm;
