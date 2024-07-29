import React, { useEffect, useState } from 'react';
import { useAuth } from '../storeContext/authContext';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';

const Service = () => {
  const { userdata } = useAuth();
  const { AuthorizationToken } = useAuth();
  const [servicedata, setServicedata] = useState([]);

  const ServiceDataProvider = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/services', {
        method: 'GET',
      });

      if (response.ok) {
        const data = await response.json();
        setServicedata(data);
      } else {
        toast.error('Failed to fetch services');
      }
    } catch (err) {
      console.log(err);
      toast.error('An error occurred while fetching services');
    }
  };

  useEffect(() => {
    ServiceDataProvider();
  }, []);

  const deleteService = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/service/delete/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: AuthorizationToken,
        },
      });

      if (response.ok) {
        ServiceDataProvider();
        toast.success('Service deleted successfully');
      } else {
        toast.error("Service couldn't be deleted");
      }
    } catch (err) {
      console.log(err);
      toast.error('An error occurred while deleting the service');
    }
  };

  return (
    <div className="services">
      <h1>My Services & Blogs</h1>
      <div className="service-container">
        {servicedata.map((individualDoc, index) => (
          <div className="service-card" key={index}>
            <img style={{backgroundColor:"skyblue"}}src="https://img.icons8.com/?size=160&id=2sn1K3KsBPH3&format=png" alt={individualDoc.topic} />
            <div className="ser-card-info">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h3 style={{ color: 'orange', fontSize: '1.5vw' }}>{individualDoc.topic}</h3>
                <a style={{ color: 'pink', textDecoration: 'none' }} href={individualDoc.link}>
                  Link
                </a>
              </div>
              {userdata && userdata.isAdmin ? (
                <>
                  <NavLink to="/serviceUpdate"><button

                    
                    style={{
                      width: '100%',
                      backgroundColor: 'green',
                      color: 'white',
                      borderRadius: '5px',
                      border: 'none',
                      padding: '1vh 1vw',
                      marginTop: '2vh',
                    }}
                  >
                    Update
                  </button></NavLink>
                  <button
                    onClick={() => deleteService(individualDoc._id)}
                    style={{
                      width: '100%',
                      backgroundColor: 'red',
                      color: 'white',
                      borderRadius: '5px',
                      border: 'none',
                      padding: '1vh 1vw',
                      marginTop: '2vh',
                    }}
                  >
                    Delete
                  </button>
                </>
              ) : (
                <>
                  <p style={{ height: '7vh' }}>{individualDoc.desc}</p>
                  <button
                    style={{
                      width: '100%',
                      backgroundColor: 'green',
                      color: 'white',
                      borderRadius: '5px',
                      border: 'none',
                      padding: '1vh 1vw',
                      marginTop: '2vh',
                    }}
                  >
                    ₹ {individualDoc.cost}
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
