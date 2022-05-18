import React from 'react'
import  {useState,useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import{Row ,Col ,Image ,ListGroup,Card, ListGroupItem} from 'react-bootstrap'
import Rating from './Rating'
import { useSelector } from 'react-redux'



function RestaurantDetails() {
    // const [details,setDetails] = useState([])
    const{ id } = useParams()
    const restaurantReducer = useSelector(state => state.restaurantReducer)
    const {restaurant} = restaurantReducer
    // useEffect(() => {
    //     const fetchData = async () =>{
    //         await fetch('/restaurants.json')
    //         .then((res) =>res.json())
    //         .then((data) =>setDetails(data.restaurants))

    //     }
    //     fetchData();
      
    // }, [])
const restaurantData = restaurant.find(item => item.id == id)
// console.log(restaurantData);
    
//   console.log("id is",id);
  return (
    <> 
    <Link className='btn btn-outline-dark rounded my-2 btn-sm' to = '/'>Back</Link>

    {restaurantData ? (
        <Row className='my-3'>
            <Col md={3}>
                <Image src={restaurantData.photograph} alt={restaurantData.name} fluid/>
            </Col>

            <Col md={4}>
                <ListGroupItem>
                    <h2>{restaurantData.name}</h2>
                    <p>{restaurantData.neighborhood}</p>
                </ListGroupItem>
                <ListGroupItem>
                    <p>Cuisine Type :{restaurantData.cuisine_type}</p>
                </ListGroupItem>
                <ListGroupItem>
                    <p>Address :{restaurantData.address}</p>
                </ListGroupItem>
            </Col>

            <Col md={4}>
                <ListGroupItem>
                    <h4>Operating Hours :</h4>
                    <p>Monday :{restaurantData.operating_hours.Monday}</p>
                    <p>Tuesday :{restaurantData.operating_hours.Tuesday}</p>
                    <p>Wednesday :{restaurantData.operating_hours.Wednesday}</p>
                    <p>Thursday :{restaurantData.operating_hours.Thursday}</p>
                    <p>Friday :{restaurantData.operating_hours.Friday}</p>
                    <p>Saturday :{restaurantData.operating_hours.Sunday}</p>
                    <p>Sunday :{restaurantData.operating_hours.Sunday}</p>
                    </ListGroupItem>
            </Col>
            <Row>
                <Card className="my-3 mx-3 p-3 rounded cards">
                    <Rating data = {restaurantData.reviews}/>


                </Card>
            </Row>

        </Row>
        
    
) : 'no data'}
    
    </>
  )
}

export default RestaurantDetails