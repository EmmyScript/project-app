

const Appinput = ({type, name, placeholder, label} : any) => {
  return (
    <div  className="mb-3">
        <label htmlFor={name} className="form-label">
            {label}
        </label>
        <input 
        className="form-control"
        type={type}
        id={name}
        placeholder={placeholder}
        />
    </div>
  )
}

export default Appinput
