import onlineAddmissionImg from "../images/onlineaddmission.jpg";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

function OnlineAddmissionForm() {

    const [onlineAddmissionFomData, setonlineAddmissionFomData] = useState({
        firstName: "",
        lastName: "",
        fatherName: "",
        email: "",
        mobno: "",
        gender: "",
        course: "",
        qualification: "",
        address: "",
        pincode: ""
    });

    const [documents, setDocuments] = useState({
        tenthFile: null,
        twelfthFile: null,
        graduationFile: null,
        postGraduationFile: null
    });

    function changeHandler(event) {
        setonlineAddmissionFomData(previousData => {
            return { ...previousData, [event.target.name]: event.target.value };
        });
    }

    function fileChangeHandler(event) {
        const { name, files } = event.target;
        setDocuments(prevDocs => ({
            ...prevDocs,
            [name]: files[0]
        }));
    }

    async function submitHandler(event) {
        event.preventDefault();

        // Simple validation for required fields
        if (!onlineAddmissionFomData.firstName || !onlineAddmissionFomData.lastName || !onlineAddmissionFomData.email) {
            toast.error("Please fill all the required fields");
            return;
        }

        const formData = new FormData();
        for (const key in onlineAddmissionFomData) {
            formData.append(key, onlineAddmissionFomData[key]);
        }

        for (const key in documents) {
            if (documents[key]) {
                formData.append(key, documents[key]);
            }
        }

        try {
            const response = await fetch("https://api.botwaviation.com/onlineAddmissionDetails/", {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                toast.success("Application Submitted");
            } else {
                toast.error("Something went wrong. Please try again.");
            }

        } catch (error) {
            console.error(error);
            toast.error("Fill form correctly");
        }

        console.log("Form Data:", onlineAddmissionFomData);
        console.log("Uploaded Files:", documents);

        setonlineAddmissionFomData({
            firstName: "",
            lastName: "",
            fatherName: "",
            email: "",
            mobno: "",
            gender: "",
            course: "",
            qualification: "",
            address: "",
            pincode: ""
        });

        setDocuments({
            tenthFile: null,
            twelfthFile: null,
            graduationFile: null,
            postGraduationFile: null
        });
    }

    return (
        <div className="online-addmission-form">
            <div className="image">
                <img src={onlineAddmissionImg} alt="Online Admission" />
            </div>
            <div className="form-online-addmission">
                <div className="heading-application">
                    <h1>ADMISSION FORM</h1>
                    <hr />
                </div>
                <form onSubmit={submitHandler}>
                    <div className="online-addmissio-form">
                        <div className="online-addmissio-form-name">
                            <input type="text" name="firstName" value={onlineAddmissionFomData.firstName} onChange={changeHandler} placeholder="First Name" />
                            <input type="text" name="lastName" value={onlineAddmissionFomData.lastName} onChange={changeHandler} placeholder="Last Name" />
                        </div>

                        <div className="online-addmissio-form-data">
                            <input type="text" name="fatherName" value={onlineAddmissionFomData.fatherName} onChange={changeHandler} placeholder="Father Name" />
                            <input type="email" name="email" value={onlineAddmissionFomData.email} onChange={changeHandler} placeholder="Email" />
                        </div>

                        <div className="online-addmissio-form-personal">
                            <input type="number" name="mobno" value={onlineAddmissionFomData.mobno} onChange={changeHandler} placeholder="Mobile No" />
                            <select name='gender' value={onlineAddmissionFomData.gender} onChange={changeHandler}>
                                <option value="" disabled>Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="online-addmissio-form-option">
                            <select name='course' onChange={changeHandler} value={onlineAddmissionFomData.course}>
                                <option value="" disabled>Select Course</option>
                                <option value="aviation">Aviation</option>
                                <option value="cruise">Cruise</option>
                                <option value="airport">Airport Management</option>
                                <option value="hotel">Hotel Management</option>
                                <option value="airhostess">Air Hostess</option>
                            </select>

                            <select name="qualification" onChange={changeHandler} value={onlineAddmissionFomData.qualification} className='online-addmissio-form-qualification'>
                                <option value="" disabled>Highest Qualification</option>
                                <option value="10th">10th</option>
                                <option value="12th">12th</option>
                                <option value="ug">Graduation</option>
                                <option value="pg">Post Graduation</option>
                            </select>
                        </div>

                        <div className="online-addmissio-form-address">
                            <input type="text" name="address" onChange={changeHandler} value={onlineAddmissionFomData.address} placeholder="Village / Town / City" />
                            <input type="number" name="pincode" onChange={changeHandler} value={onlineAddmissionFomData.pincode} placeholder="Pincode" />
                        </div>
                    </div>

                    {/* File Upload Section */}
                    <div className="files-uplodes">
                        <div className="file-input-box">
                            <label className="file-label">10th Class Certificate</label>
                            <input type="file" name="tenthFile" onChange={fileChangeHandler} accept=".pdf,.jpg,.jpeg,.png" />
                        </div>
                        <div className="file-input-box">
                            <label className="file-label">12th Class Certificate</label>
                            <input type="file" name="twelfthFile" onChange={fileChangeHandler} accept=".pdf,.jpg,.jpeg,.png" />
                        </div>
                        <div className="file-input-box">
                            <label className="file-label">Graduation Certificate</label>
                            <input type="file" name="graduationFile" onChange={fileChangeHandler} accept=".pdf,.jpg,.jpeg,.png" />
                        </div>
                        <div className="file-input-box">
                            <label className="file-label">Post Graduation Certificate</label>
                            <input type="file" name="postGraduationFile" onChange={fileChangeHandler} accept=".pdf,.jpg,.jpeg,.png" />
                        </div>
                    </div>


                    <button type="submit" className="online-application-form">Submit Form</button>
                    <ToastContainer />
                </form>
            </div>
        </div>
    );
}

export default OnlineAddmissionForm;
