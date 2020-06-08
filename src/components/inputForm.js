import React from 'react';

const InputForm = props => {

  function fileSelectedHandler(event) {
    console.log(event.target.files[0])
  }
    return (
      <div>
        <form>
            <label>
              File to upload: 
              <input type="file" placeholder="name" onChange={fileSelectedHandler}/>
            </label>
            <div>
              <button>Click here to add item</button>
            </div>
          </form>
      </div>
    )
}

export default InputForm;
