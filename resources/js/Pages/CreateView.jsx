import {useState} from "react";
import { Link, useForm, usePage } from "@inertiajs/inertia-react";
import NavigationBar from "../Components/NavigationBar";
import Popup from "../Components/Popup";

const CreateView = () => {
  const { flash } = usePage().props;
  const [errorMessage, setErrorMessage] = useState('');
  const [imgurLink, setImgurLink] = useState('default-placeholder.png');
  const { data, setData, errors, processing, post, transform } = useForm({
    title: '',
    price: '',
    description: '',
  });

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

  const displayUploadedImage = async (event) => {
    if(validateImageSize(event)) {      
      const image = event.target.files[0];

      const clientIdKey = import.meta.env.VITE_REACT_APP_CLIENT_ID;
      const auth = `Client-ID ${clientIdKey}`;

      const response = await fetch('https://api.imgur.com/3/image', {
        method: "POST",
        body: image,
        headers: {
          Authorization: auth,
          Accept: "application/json" 
        }
      });

      const responseData = await response.json();
      const link = responseData['data']['link'];
      setImgurLink(link);
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

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrorMessage('');
    const valid = event.target.checkValidity();

    if(valid) {
      // Set image link
      transform((data) => ({
        ...data,
        picture_url: imgurLink,
      }))
      // Pass form data to the server
      post('/new');
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
                <label htmlFor="title">Title<span className="required">*</span></label>
                <input type="text" id="title" placeholder="Enter item title (e.g., Vintage Leather Jacket)" maxLength={120} required onInvalid={handleInvalid} value={data.title} onChange={event => setData('title', event.target.value)} />
                {errors.title && <div className="error-message">{errors.title}</div>}
              </div>
              <div className="form-row">
                <label htmlFor="price">Price (€)<span className="required">*</span></label>
                <input type="number" id="price" name="price" placeholder="Enter price (e.g., 19.99)" required onInvalid={handleInvalid} min={0} step={0.01} value={data.price} onChange={event => setData('price', event.target.value)}/>
                {errors.price && <div className="error-message">{errors.price}</div>}
              </div>
              <div className="form-row">
                <label htmlFor="description">Description<span className="required">*</span></label>
                <textarea name="description" id="description" cols="50" rows="10" maxLength={1000} placeholder="Enter item description (e.g., A stylish vintage leather jacket in excellent condition, size M)" required onInvalid={handleInvalid} value={data.description} onChange={event => setData('description', event.target.value)}></textarea>
                {errors.description && <div className="error-message">{errors.description}</div>}
              </div>
            </div>
            <div className="form-right">
              <img src={imgurLink} alt="placeholder image" id="display-image"/>
              <label htmlFor="picture-upload" className="button bright-button">Upload a picture</label>
              <p className="alert">Please note: Your image file size should not exceed 5MB</p>
              <input type="file" accept="image/jpeg, image/png" id="picture-upload" name="picture" onChange={displayUploadedImage} />
            </div>
            {errorMessage && (
              <p className="error-message">{errorMessage}</p>
            )}
          </form>
          <div className="buttons">
            <Link href="/" className="button dim-button">Cancel</Link>
            <button form="item-form" onSubmit={handleFormSubmit} disabled={processing} className="button bright-button">Create</button>
          </div>
        </div>
        <Popup message={flash.message} />
      </main>
    </div>
  )
}

export default CreateView;