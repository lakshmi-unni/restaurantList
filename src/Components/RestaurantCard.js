import React from 'react'
import {Card} from 'react-bootstrap'
import { FaHeart} from "react-icons/fa";
import {Link} from 'react-router-dom'

function RestaurantCard({item}) {
  return (
    <Link to={`restaurants/${item.id}`} style={{textDecoration:'none'}}>
    <Card className = "my-3 p-3 rounded cards">
  <Card.Img variant="top" src={item.photograph} className="p-3"/>
  <Card.Body>
    <Card.Title>{item.name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{item.cuisine_type}</Card.Subtitle>
    
    <FaHeart/><Card.Text>    
 {item.neighborhood}</Card.Text>
  </Card.Body>
</Card>
    </Link>
  )
}

export default RestaurantCard