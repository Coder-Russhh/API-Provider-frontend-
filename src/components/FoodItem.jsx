import React, {useEffect, useState} from 'react'

const FoodItem = () => {
    const [items, setItems] = useState([])

    const fetchItems = async()=>{
        const response = await fetch("http://localhost:5000/api/v2/items")
        const data = await response.json()
        console.log(data);
        setItems(data)
    };

    useEffect(()=>{
        fetchItems()
    }, [])

  return (
    <>
      <h1>Items</h1>
      <ul>
        {items.map((item,index)=>{
           return ( 
           <li key={index}>
            {item.name}
           </li>)
        })}
      </ul>
    </>
  )
}

export default FoodItem
