import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'

const useCreatePost = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState([{
        title: '',
        location: '',
        imageUrl: '',
        description: '',

    }]);

    const handleChange = (e) => { 
        const {name, value} = e.target;
        setValues({...values, [name]: value});
    }

    const handleSubmit = e => { 
        e.preventDefault();
        handlePost(values);
        navigate('/posts');


}

    return {handleChange, values, handleSubmit}
}

function handlePost(values) {
    const postData = {
        title: values.title,
        location: values.location,
        img_url: values.imageUrl,
        description: values.description,
    };
    console.log(postData)

    fetch('/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData) })   
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))

}

export default useCreatePost;