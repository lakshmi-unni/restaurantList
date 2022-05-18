import React from 'react'
import {Card,Button} from 'react-bootstrap'

function Footer() {
  return (
    <Card className="text-center">
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>JOIN OUR EAT WELL,BE WELL CULTURE</Card.Title>
    <Card.Text>
        Stay up-to-date with our new opening,upcoming events ,seasonal speciala,and promotions
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>
  )
}

export default Footer