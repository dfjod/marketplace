import {useState} from "react";
import { Link, useForm } from "@inertiajs/inertia-react";
import NavigationBar from "../Components/NavigationBar";

const CreateView = () => {
  const [image, setImage] = useState('default-placeholder.png');
  const [errorMessage, setErrorMessage] = useState('');

  const validateImageSize = (event) => {
    const image = event.target.files[0];
    if(image.size > 5242880) {
      setErrorMessage('Your image is too large. Please upload an image smaller than 5MB.');
      image.value = '';
      return false;
    } else {
      setErrorMessage('');
    }
    return true;
  }

  const displayUploadedImage = (event) => {
    if(validateImageSize(event)) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  }

  const handleInvalid = (event) => {
  
    const validityState = event.target.validity;

    if(validityState.valueMissing) {
      setErrorMessage('Please fill in all required fields before submitting');
    } else if(validityState.badInput) {
      setErrorMessage('Please enter the data in the format specified');
    } else if(validityState.rangeUnderflow) {
      setErrorMessage('Please enter a price value that is zero or greater. Negative values cannot be used');
    } else {
      setErrorMessage('');
    }
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const inputs = document.querySelectorAll('input, textarea');

    const valid = event.target.checkValidity();

    if(valid) {
      const formData = new FormData(event.target);
      const formObject = Object.fromEntries(formData.entries());

      // Upload image to imgur, return link to the imgae
      const clientIdKey = import.meta.env.VITE_REACT_APP_CLIENT_ID;
      const auth = `Client-ID ${clientIdKey}`;
      const response = await fetch('https://api.imgur.com/3/image', {
        method: "POST",
        body: formObject['picture'],
        headers: {
          Authorization: auth,
          Accept: "application/json" 
        }
      });
      const data = await response.json();
      const pictureLink = data['data']['link'];
      // Change picture value to the link
      formObject['picture'] = pictureLink;
      console.log(formObject);
      // Pass form data to the server
      // await Inertia.post('/new', JSON.stringify(formObject));
    } else {
      console.log("Form not valid")
    }
  }

  return (
    <div className="create-item">
      <NavigationBar profile logout />
      <main>
        <div className="form">
          <h1>Create new item!</h1>
          <form id="item-form" onSubmit={handleFormSubmit} noValidate>
            <div className="form-left">
              <div className="form-row">
                <label htmlFor="name">Name<span className="required">*</span></label>
                <input type="text" id="name" name="name" placeholder="Enter item name (e.g., Vintage Leather Jacket)" maxLength={120} required onInvalid={handleInvalid}/>
              </div>
              <div className="form-row">
                <label htmlFor="price">Price (€)<span className="required">*</span></label>
                <input type="number" id="price" name="price" placeholder="Enter price (e.g., 19.99)" required onInvalid={handleInvalid} min={0} step={0.01}/>
              </div>
              <div className="form-row">
                <label htmlFor="description">Description<span className="required">*</span></label>
                <textarea name="description" id="description" cols="50" rows="10" maxLength={1000} placeholder="Enter item description (e.g., A stylish vintage leather jacket in excellent condition, size M)" required onInvalid={handleInvalid}></textarea>
              </div>
            </div>
            <div className="form-right">
              <img src={image} alt="placeholder image" id="display-image"/>
              <label htmlFor="picture-upload" className="button bright-button">Upload a picture</label>
              <p className="alert">Please note: Your image file size should not exceed 5MB</p>
              <input type="file" accept="image/jpeg, image/png" id="picture-upload" name="picture" onChange={displayUploadedImage}/>
            </div>
            {errorMessage && (
              <p className="error-message">{errorMessage}</p>
            )}
          </form>
          <div className="buttons">
            <Link href="/" className="button dim-button">Cancel</Link>
            <button form="item-form" className="button bright-button" onSubmit={handleFormSubmit}>Create</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CreateView;