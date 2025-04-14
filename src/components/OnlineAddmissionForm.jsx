import onlineAddmissionImg from "../images/onlineaddmission.jpg";
import { useState, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';

function OnlineAddmissionForm() {
    const fileRefs = {
        tenthFile: useRef(null),
        twelfthFile: useRef(null),
        graduationFile: useRef(null),
        postGraduationFile: useRef(null)
    };

    const [onlineAddmissionFormData, setOnlineAddmissionFormData] = useState({
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
        tenthFile: "",
        twelfthFile: "",
        graduationFile: "",
        postGraduationFile: ""
    });

    const changeHandler = (event) => {
        setOnlineAddmissionFormData(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }));
    };

    const fileChangeHandler = (event) => {
        const { name, files } = event.target;
        setDocuments(prev => ({
            ...prev,
            [name]: files[0]
        }));
    };

    const isFormValid = () => {
        for (let key in onlineAddmissionFormData) {
            if (!onlineAddmissionFormData[key]) return false;
        }
        return true;
    };

    const resetForm = () => {
        setOnlineAddmissionFormData({
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
            tenthFile:"",
            twelfthFile: "",
            graduationFile: " ",
            postGraduationFile: " "
        });

        // Clear file inputs visually
        Object.values(fileRefs).forEach(ref => {
            if (ref.current) ref.current.value = '';
        });
    };

    const submitHandler = async (event) => {
        event.preventDefault();

        if (!isFormValid()) {
            toast.error("Please fill all the required fields.");
            return;
        }

        const formData = new FormData();
        for (const key in onlineAddmissionFormData) {
            formData.append(key, onlineAddmissionFormData[key]);
        }

        for (const key in documents) {
            if (documents[key]) {
                formData.append(key, documents[key]);
            }
        }

        try {
            const response = await fetch("https://api.botaviation.com/onlineAddmissionDetails", {
                method: "POST",
                body: formData  
            });

            if (response.ok) {
                toast.success("Application Submitted");
                resetForm();
            } else {
                toast.error("Something went wrong. Please try again.");
              

            }

        } catch (error) {
            console.error(error);
            toast.error("Error submitting form.");
        }
    };

    return (
        <div className="online-addmission-form">
            <div className="image">
                <img src={onlineAddmissionImg} alt="Online Admission"  />
            </div>
            <div className="form-online-addmission">
                <div className="heading-application">
                    <h1>ADMISSION FORM</h1>
                    <hr />
                </div>
                <form onSubmit={submitHandler}>
                    <div className="online-addmissio-form">
                        <div className="online-addmissio-form-name">
                            <input type="text" name="firstName" value={onlineAddmissionFormData.firstName} onChange={changeHandler} placeholder="First Name" />
                            <input type="text" name="lastName" value={onlineAddmissionFormData.lastName} onChange={changeHandler} placeholder="Last Name" />
                        </div>

                        <div className="online-addmissio-form-data">
                            <input type="text" name="fatherName" value={onlineAddmissionFormData.fatherName} onChange={changeHandler} placeholder="Father Name" />
                            <input type="email" name="email" value={onlineAddmissionFormData.email} onChange={changeHandler} placeholder="Email" />
                        </div>

                        <div className="online-addmissio-form-personal">
                            <input type="number" name="mobno" value={onlineAddmissionFormData.mobno} onChange={changeHandler} placeholder="Mobile No" />
                            <select name="gender" value={onlineAddmissionFormData.gender} onChange={changeHandler}>
                                <option value="" disabled>Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="online-addmissio-form-option">
                            <select name="course" value={onlineAddmissionFormData.course} onChange={changeHandler}>
                                <option value="" disabled>Select Course</option>
                                <option value="aviation">Aviation</option>
                                <option value="cruise">Cruise</option>
                                <option value="airport">Airport Management</option>
                                <option value="hotel">Hotel Management</option>
                                <option value="airhostess">Air Hostess</option>
                            </select>

                            <select name="qualification" value={onlineAddmissionFormData.qualification} onChange={changeHandler}>
                                <option value="" disabled>Highest Qualification</option>
                                <option value="10th">10th</option>
                                <option value="12th">12th</option>
                                <option value="ug">Graduation</option>
                                <option value="pg">Post Graduation</option>
                            </select>
                        </div>

                        <div className="online-addmissio-form-address">
                            <input type="text" name="address" value={onlineAddmissionFormData.address} onChange={changeHandler} placeholder="Village / Town / City" />
                            <input type="number" name="pincode" value={onlineAddmissionFormData.pincode} onChange={changeHandler} placeholder="Pincode" />
                        </div>
                    </div>

                    <div className="files-uplodes">
                        {["tenthFile", "twelfthFile", "graduationFile", "postGraduationFile"].map((field, i) => (
                            <div key={i} className="file-input-box">
                                <label className="file-label">
                                    {field === "tenthFile" && "10th Class Certificate"}
                                    {field === "twelfthFile" && "12th Class Certificate"}
                                    {field === "graduationFile" && "Graduation Certificate"}
                                    {field === "postGraduationFile" && "Post Graduation Certificate"}
                                </label>
                                <input
                                    type="file"
                                    name={field}
                                    ref={fileRefs[field]}
                                    onChange={fileChangeHandler}
                                    accept=".pdf,.jpg,.jpeg,.png"
                                />
                            </div>
                        ))}
                    </div>

                    <button type="submit" className="online-application-form">Submit Form</button>
                    <ToastContainer />
                </form>
            </div>
        </div>
    );
}

export default OnlineAddmissionForm;
