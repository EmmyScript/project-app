


const SaveItem = () => {
  return (

    <form>
      
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">email
    </label>
    <input 
    type="email"
     className="form-control"
      id="exampleInputEmail1" 
      aria-describedby="emailHelp"
      />
    <div id="emailHelp" className="form-text">

        </div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">birthday
    </label>
    <input 
    type="number"
     className="form-control"
      id="exampleInputEmail1" 
      aria-describedby="emailHelp"
      />
    <div id="emailHelp" className="form-text">

        </div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">password
    </label>
    <input 
    type="number"
     className="form-control"
      id="exampleInputEmail1" 
      aria-describedby="emailHelp"
      />
    <div id="emailHelp" className="form-text">

        </div>
  </div>
    
  
  
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
 

</form>
  )
}

export default SaveItem