import React, { useState } from "react"


import { Button } from "@chakra-ui/react"
import AppTabs from "../components/AppTabs"

const btnArr = [
   
    {
        id: 1,
        btnName:"list",
        
    },

    {
        id:2,
        btnName: "image"
    },

    {
        id:3,
        btnName:"read"
    }


]

const App= () => {
    const [itemValues, setItemValues] = useState <string>('')
    const handleClick=(val: any) => {
        setItemValues(val.btnName)
    }

  return  <React.Fragment>


<div className="container mt-4">
    {
        btnArr.map((btn: any) => (
            <Button className={`btn btn-secondary ms-2
             ${itemValues === btn.btnName ? "btn-color" : ""}`}
            onClick ={() => handleClick(btn)}
            key={btn.id}
            >
               
                {btn.btnName}</Button>
        )) 
    }
</div>
<div className="container mt-5">
    <h4>{itemValues}</h4>
    <AppTabs tabName= {itemValues} />

</div>
    </React.Fragment>
  
}

export default App