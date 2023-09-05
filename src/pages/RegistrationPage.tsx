import React, { useState } from "react"
import Navbar from "../components/Navbar"
import Carousel from "../components/AppCarousel"
import { Button } from "@chakra-ui/react"
import AppTabs from "../components/AppTabs"
import Home from "../components/Home"
const btnArr = [
    {
        id: 1,
        btnName: 'registration',
    },
    {
        id: 2,
        btnName: 'logins'
    },
    {
        id: 2,
        btnName: 'save'
    },

]

const RegistrationPage = () => {
    const [itemValues, setItemValues] = useState <string>('')
    const handleClick=(val: any) => {
        setItemValues(val.btnName)
    }

  return  <React.Fragment>
<Navbar/>
<Carousel/>
<div className="container mt-4">
    {
        btnArr.map((btn: any) => (
            <Button className={`btn btn-secondary ms-2 ${itemValues === btn.btnName ? "btn-color" : ""}`}
            onClick ={() => handleClick(btn)}
            >
               
                {btn.btnName}</Button>
        ))
    }
</div>
<div className="container mt-5">
    <h4>{itemValues}</h4>
    <AppTabs tabName= {itemValues} />
    <Home />
</div>
    </React.Fragment>
  
}

export default RegistrationPage