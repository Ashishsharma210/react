import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import Moment from 'react-moment';
class DishDetail extends Component{

    constructor(props){
        super(props);
    }

    renderDish(dish){
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />                    
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>    
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    renderComments(comments){

        if(comments == null){
            return(
                <div></div>
            );
        }

        const commentItem = comments.map((comment) => {
            return(
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, <Moment format="MMM D YYYY" withTitle>{comment.date}</Moment></p>
                </li>
            );
        });

        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {commentItem}
                </ul>
            </div>
        );
    }

    render(){

        if(this.props.dish == null){
            return (
                <div></div>
            );
        }

        return (
            <div className="row">
                {this.renderDish(this.props.dish)}
                {this.renderComments(this.props.dish.comments)}
            </div> 
        );
    }
}

export default DishDetail;