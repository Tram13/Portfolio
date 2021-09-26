import React from "react";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";

class CompetitionsCard extends React.Component {
    render() {
        return (
            <Link to="/competitions" className="card-button">
                <Card style={{width: '22rem', borderRadius: '20px'}}>
                    <Card.Body>
                        <Card.Title>Competitions</Card.Title>
                        <Card.Text>
                            See how I've improved over the years.<br/>(Spoiler: it didn't start great)
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        )
    }
}

export default CompetitionsCard;