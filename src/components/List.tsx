import { useState } from "react"

interface Props {
    items: string[];
    heading: string;
    onSelectedItem: (item: string) => void;
}

const List = ({items, heading, onSelectedItem} : Props) => {
    
    const[selected, setSelected] = useState(0)
    
    
  return (
    <>
    <div className="container">
    <h1>{heading}</h1>
    {items.length === 0 && <p>no item found</p>}

        <ul className="list-group navbar-nav me-auto mb-2 mb-lg-0">
        {items.map((item, index) => (
            <li className={selected === index? "list-group-item active" : "list-group-item"}
             key={item} 
            onClick={() =>{
                setSelected ( index)
                onSelectedItem(item)
            }}
            
            
            
            
            >
                {item}</li>
                
        ))}
  
</ul>
</div>
    </>
  )
}

export default List