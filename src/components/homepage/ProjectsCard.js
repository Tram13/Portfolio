import React from "react";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";

class ProjectsCard extends React.Component {
    render() {
        return (
            <Link to="/projects" className="card-button">
                <Card style={{width: '22rem', borderRadius: '20px'}}>
                    <Card.Body>
                        <Card.Title>Projects</Card.Title>
                        <Card.Text>
                            Check out my projects to find out some of the things I've worked on!
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        )
    }
}

export default ProjectsCard;
