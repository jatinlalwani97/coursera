import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle ,Col} from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state={
            selectedDish: null

        }
        
    }
    onDishSelect(dish){
        this.setState({ selectedDish: dish});
    }

    renderDish(dish){
        if(dish!= null){
            return(
                <Col >
                <Card className="">
                    <CardImg src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>                
                </Col>
            )

        }

        else{
            return(
                <div></div>
            )
        }

    }
    render(){

            const menu = this.props.dishes.map((dish) => {
                return(
                    <div key={dish.id}>
                        <Card onClick={() => this.onDishSelect(dish)}>
                            <CardImg width='auto' src={dish.image} alt={dish.name} />
                            <CardImgOverlay>
                                <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </div>                    
                );
            });

        return(
                <Col xs={12} lg={5} xl={5}>
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
                </Col>
        );
    }
}

export default Menu;