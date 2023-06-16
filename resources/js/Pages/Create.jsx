import {useState} from "react";

const Create = () => {
  const [image, setImage] = useState('default-placeholder.png');

  const displayUploadedImage = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  }

  return (
    <div className="create-item">
      <header>
      </header>
      <main>
        <section className="form">
          <h1>Create new item!</h1>
          <form id="item-form" action="#">
            <div className="form-left">
              <div className="form-row">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name"/>
              </div>
              <div className="form-row">
                <label htmlFor="price">Price</label>
                <input type="number" id="price" name="price" placeholder="€" />
              </div>
              <div className="form-row">
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" cols="30" rows="10"></textarea>
              </div>
            </div>
            <div className="form-right">
              <img src={image} alt="placeholder image" id="display-image"/>
              <label htmlFor="picture-upload" className="button bright-button">Upload a picture</label>
              <input type="file" id="picture-upload" name="picture" onChange={displayUploadedImage}/>
            </div>
          </form>
          <div className="buttons">
            <a href="/" className="button dim-button">Cancel</a>
            <button form="item-form" className="button bright-button">Create</button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Create;