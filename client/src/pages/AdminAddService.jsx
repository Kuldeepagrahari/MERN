import React, { useState } from 'react';
import { BsCloudUpload } from 'react-icons/bs';
import { toast } from 'react-toastify';
import { useAuth } from '../storeContext/authContext';

const AdminAddService = () => {

    const {AuthorizationToken} = useAuth()
  const [serviceData, setServiceData] = useState({
    image: '',
    topic: '',
    desc: '',
    cost: '',
    link: '',
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = name === 'image' ? e.target.files[0].name : e.target.value;
    setServiceData({
      ...serviceData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(serviceData);

    // Process form submission, e.g., send data to backend
    const formData = new FormData();
    formData.append('image', serviceData.image);
    formData.append('topic', serviceData.topic);
    formData.append('desc', serviceData.desc);
    formData.append('cost', serviceData.cost);
    formData.append('link', serviceData.link);

    const response = await fetch('http://localhost:5000/api/admin/service/add',{
        method:'POST',
        headers:{
            'Content-Type': "application/json",
             Authorization : AuthorizationToken
        },
        body:JSON.stringify(serviceData)
    })

    if(response.ok){
        toast.success("Service added successfully")
    }else{
        toast.error("Service does not able to added")
    }

    // Add your form submission logic here
  };

  return (
    <div className='add-service-page'>
      <h1>Add a Service</h1>
      <form onSubmit={handleSubmit} id="add-service">
        <div id='upload-service'>
          <label htmlFor="image" className="upload-button">
            <BsCloudUpload /> Upload Service Image
          </label>
          <input
            type="file"
            name="image"
            id="image"
            style={{ display: 'none' }}
            onChange={handleInput}
          />
        </div>
        <div id='topic-cost'>
          <input
            type="text"
            placeholder="Topic"
            name="topic"
            value={serviceData.topic}
            onChange={handleInput}
          />
           <input
            type="text"
            placeholder="Cost"
            name="cost"
            value={serviceData.cost}
            onChange={handleInput}
          />
        </div>
        
        <div>
          <input
            type="text"
            placeholder="Link"
            name="link"
            value={serviceData.link}
            onChange={handleInput}
          />
        </div>
        <div>
          <textarea
            name="desc"
            cols="20"
            rows="5"
            placeholder="Add description"
            value={serviceData.desc}
            onChange={handleInput}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdminAddService;
