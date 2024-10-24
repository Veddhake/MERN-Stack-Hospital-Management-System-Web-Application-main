import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); 

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/user/doctors",
          { withCredentials: true }
        );
        setDoctors(data.doctors);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    fetchDoctors();
  }, []);

  const handleRemove = async (props) => {
    const formData = new FormData();
    formData.append("email", props.target.value);

    await axios
      .post("http://localhost:4000/api/v1/user/doctor/remove", formData, {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
    window.location.reload(false);
  };

  const filteredDoctors = doctors.filter((doctor) => {
    const fullName = `${doctor.firstName} ${doctor.lastName}`.toLowerCase();
    return fullName.includes(searchQuery.toLowerCase());
  });

  return (
    <section className="page doctors">
      <h1>DOCTORS</h1>

      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search by first or last name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />
      </div>

      <div className="banner">
        {filteredDoctors && filteredDoctors.length > 0 ? (
          filteredDoctors.map((element) => {
            return (
              <div className="card" key={element.email}>
                <img
                  src={element.docAvatar && element.docAvatar.url}
                  alt="doctor avatar"
                />
                <h4>{`${element.firstName} ${element.lastName}`}</h4>
                <div className="details">
                  <p>
                    Email: <span>{element.email}</span>
                  </p>
                  <p>
                    Phone: <span>{element.phone}</span>
                  </p>
                  <p>
                    DOB: <span>{element.dob.substring(0, 10)}</span>
                  </p>
                  <p>
                    Department: <span>{element.doctorDepartment}</span>
                  </p>
                  <p>
                    Government ID: <span>{element.nic}</span>
                  </p>
                  <p>
                    Gender: <span>{element.gender}</span>
                  </p>
                  <p>
                    Description: <span>{element.docDescription}</span>
                  </p>
                </div>

                <div style={{ justifyContent: "center", alignItems: "center" }}>
                  <button
                    className="removeBtn"
                    value={element.email}
                    onClick={handleRemove}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <h1>No Registered Doctors Found!</h1>
        )}
      </div>
    </section>
  );
};

export default Doctors;
