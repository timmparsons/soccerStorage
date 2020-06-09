import React from 'react';
import axios from 'axios';

class InputForm extends React.Component {
  state = {
    selectedFile: null
  }

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }

  uploadFileHandler = () => {
    
  }
  render() {
    return (
      <div>
        <form>
            <label>
              File to upload: 
              <input type="file" placeholder="name" onChange={this.fileSelectedHandler}/>
            </label>
            <div>
              <button onClick={this.uploadFileHandler}>Upload</button>
            </div>
          </form>
      </div>
    )
  }
}


export default InputForm;
