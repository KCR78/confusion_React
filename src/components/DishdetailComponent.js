import React, { Component } from'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

class Dishdetail extends Component {

    renderCommets(comments) {
        if (comments == null) {
            return (<div></div>);
        }

        const cmnts = comments.map(comment => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>
                        -- {comment.author}
                        &nbsp;
                        {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit'
                        }).format(new Date(Date.parse(comment.date)))}
                    </p>
                </li>
            );
        })

        return (
            <div>
                <h4>Comments</h4>
                <ul className='list-unstyled'>
                    {cmnts}
                </ul>
            </div>
        );
    }

    renderDish(dish) {
            if (dish != null) {
                return(
                    <div>
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
            else {
                return(
                    <div></div>
                );
            }
        }

    render () {

            const dish = this.props.dish
            if (dish == null) {
                return <div></div>
            }

            const dishItem = this.renderDish(dish)
            const commentItem = this.renderCommets(dish.comments)

            return (
                <div className = "container">
                    <div className = "row">
                        <div className='col-12 col-md-5 m-1'>{dishItem}</div>
                        <div className='col-12 col-md-5 m-1'>{commentItem}</div>                    
                    </div>
                </div>
        );
    }
}

export default Dishdetail;