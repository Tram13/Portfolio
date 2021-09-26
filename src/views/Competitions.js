import React from "react";
import Card from "react-bootstrap/Card";
import graph from "../images/competitions/graph.png"
import Padding from "../components/Padding";

class Competitions extends React.Component {
    render() {
        return (
            <div className="content">
                <Padding/>
                <Card style={{width: "22rem", borderRadius: '20px'}}>
                    <Card.Body>
                        <Card.Title>Competitions</Card.Title>
                        <Card.Text>
                            I have participated in 3 coding competitions: Google Hash Code 2019, 2020 and 2021. It
                            should be noted that in 2019, I had only learned how to code for 6 months.
                        </Card.Text>
                    </Card.Body>
                    <Card.Img variant="bottom" src={graph}
                              style={{borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px'}}
                              alt="Graph of my qualification results: 5071/6640 in 2019, 2047/10724 in 2020, 3349/9004 in 2021."/>
                </Card>
                <Padding/>
            </div>
        )
    }
}

export default Competitions;