import React, { useState } from 'react';
import { BsCloudUpload } from 'react-icons/bs';
import { toast } from 'react-toastify';
import { useAuth } from '../storeContext/authContext';


const AdminUpdateService = () => {
    const {AuthorizationToken} = useAuth()

    const [serviceData, setServiceData] = useState({
      image: '',
      topic: '',
      desc: '',
      cost: '',
      link: '',
    });
    const handleSubmit = async () => {

    }
    const handleInput = async () => {

    }
  return (
    <div>
       <form onSubmit={handleSubmit} id="add-service">
        <div>
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
        <div>
          <input
            type="text"
            placeholder="Topic"
            name="topic"
            value={serviceData.topic}
            onChange={handleInput}
          />
        </div>
        <div>
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
        <button type="submit">update</button>
      </form>
    </div>
  )
}

export default AdminUpdateService
