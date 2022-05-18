import React from 'react'
import  {useState,useEffect} from 'react'
import {Row ,Col} from 'react-bootstrap'
import RestaurantCard from './RestaurantCard'
import{useDispatch , useSelector} from 'react-redux'
import {listRestaurants} from '../actions/restaurantAction'

function Home() {
    const [filter ,setFilter] = useState("")
    const dispatch = useDispatch()
    const restaurantReducer = useSelector(state => state.restaurantReducer)
    const { restaurant } = restaurantReducer


    useEffect(() => {
        dispatch(listRestaurants())

     
    }, [])
    
    // const [hotels,setHotels] = useState([])
    // useEffect(() => {
    //     const fetchData = async () =>{
    //         await fetch('/restaurants.json')
    //         .then((res) =>res.json())
    //         .then((data) =>setHotels(data.restaurants))

    //     }
    //     fetchData();
    //     console.log("data is",hotels);
      
    // }, [])
    
  return (
    <Row>
        <input 
        value={filter}
        placeholder='Search a place here'
        type='text' 
        onChange={e =>setFilter(e.target.value)}
       
        />

{restaurant ? (
    restaurant.filter(item =>{
        if(filter ==""){
            return item
        }
        else if(item.neighborhood.toLowerCase().includes(filter.toLowerCase())){
            return item
        }
    })
    .map(item => (
        <Col sm={12} md={8} lg={6} xl={3}> 
        <RestaurantCard item = {item}/>
        </Col>
    ))
) : 'no data'}
    </Row>
  )
}

export default Home