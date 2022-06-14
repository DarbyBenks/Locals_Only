import React from 'react'
import useCreatePost  from './useCreatePost'
import {useNavigate} from 'react-router-dom'


function CreatePost() {
const {handleChange, values, handleSubmit} = useCreatePost();
const navigate = useNavigate();

  return (
    <div className='form-content-right'>
        <form className='form' onSubmit={handleSubmit}>
            <h1> Lets create your post! </h1>
            <div className='form-inputs'>
                <label htmlFor='title' className='form-inputs'> What is it called? </label>
                    <input type='text' name='title' placeholder='Title' className='form-inputs' value={values.title} onChange={handleChange}/>
            </div>
            <div className='form-inputs'>
                <label htmlFor='location' className='form-inputs'> Where is it </label>
                    <input type='text' name='location' placeholder='Location' className='form-inputs' value={values.location} onChange={handleChange}/>
            </div>
            <div className='form-inputs'>
                <label htmlFor='Img url' className='form-inputs'> Lets see it </label>
                    <input type='text' name='imageUrl' placeholder='Image Url' className='form-inputs' value={values.imageUrl} onChange={handleChange}/>
            </div>
            <div className='form-inputs'>
                <label htmlFor='Description' className='form-inputs'> Tell me about it </label>
                    <input type='text' name='description' placeholder='Description' className='form-inputs' value={values.description} onChange={handleChange}/>
            </div>
              <button type='submit' className='form-input-btn'> Submit </button>
        </form>
    </div>
           
  )
}

export default CreatePost