import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { toast } from "react-toastify";

const RecommendationForm = () => {
  const [diseases, setDiseases] = useState([]);
  const [relatedDepartment, setRelatedDepartment] = useState(""); 
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchDiseases = async () => {
      try {
        console.log("Fetching Diseases Data");
        const { data } = await axios.get(
          "https://mern-stack-hospital-management-system-so1i.onrender.com/api/v1/disease/getall",
          { withCredentials: true }
        );
        setDiseases(data.diseases); 
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    fetchDiseases();
  }, []);

  useEffect(() => {
    const fetchDoctors = async () => {
      const { data } = await axios.get(
        "https://mern-stack-hospital-management-system-so1i.onrender.com/api/v1/user/doctors",
        { withCredentials: true }
      );
      setDoctors(data.doctors);
      console.log(data.doctors);
    };
    fetchDoctors();
  }, []);

  const handleSymptomChange = (e) => {
    const selectedDepartmentValue = e.target.value;
    setRelatedDepartment(selectedDepartmentValue);
  };

  const handleBookAppointment = () => {
    navigate("/appointment");
  };

  return (
    <div className="container form-component appointment-form">
      <h2>Disease/Symptoms</h2>
      <form>
        <div>
          <label><h4>Select Disease</h4></label>
          <select onChange={handleSymptomChange}>
            <option value="">Select Symptom</option>
            {diseases.map((d) => (
              <option value={d.department} key={d._id}>
                {d.symptom}
              </option>
            ))}
          </select>
        </div>

        <h2>Our Recommended Doctors</h2>
        <div
          className="doctor-cards-container"
          style={{
            display: "flex",
            flexWrap: "wrap", 
            gap: "10px", 
          }}
        >
          {doctors
            .filter((doctor) => doctor.doctorDepartment === relatedDepartment)
            .map((doctor, index) => (
              <div
                className="doctor-card"
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  padding: "20px",
                  width: "250px",
                  textAlign: "center",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  display: "flex", 
                  flexDirection: "column", 
                  alignItems: "center", 
                  backgroundColor: "white",
                }}
                key={index}
              >
                <img
                  src={doctor.docAvatar && doctor.docAvatar.url}
                  alt={`${doctor.firstName} ${doctor.lastName}`}
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginBottom: "10px",
                  }}
                />

                <h3>
                  Dr. {doctor.firstName} {doctor.lastName}
                </h3>

                <p>
                  <strong>Department:</strong> {doctor.doctorDepartment}
                </p>

                <p>{doctor.docDescription || "No description available"}</p>

                
              </div>
            ))}
        </div>
        <button
                  type="button" 
                  onClick={handleBookAppointment} 
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Book Appointment
                </button>
      </form>
    </div>
  );
};

export default RecommendationForm;
