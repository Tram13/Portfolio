import React from "react";
import Card from "react-bootstrap/Card";
import arno from "../../images/homepage/arno.png"
import {Link} from "react-router-dom";
import Table from "react-bootstrap/Table";

class AboutCard extends React.Component {
    render() {
        return (
            <Card style={{width: '22rem', borderRadius: '20px'}}>
                <Card.Body>
                    <Card.Title>About Me</Card.Title>
                    <Card.Text>
                        I am a Computer Science student at Ghent University. I got my Bachelor's degree in 2021 and now
                        I'm working hard to get my Master's in 2023.
                        <br/>
                    </Card.Text>
                    <Table responsive="sm" borderless="true">
                        <tbody>
                        <tr>
                            <td><a className="btn btn-secondary" rel="noopener noreferrer"
                                   href="https://github.com/tram13"
                                   target="_blank">GitHub</a></td>
                            <td/>
                            <td/>
                            <td/>
                            <td/>
                            <td><Link className="btn btn-secondary" to="/download/cv_vermotearno.pdf" target="_blank"
                                      download>Curriculum
                                Vitae</Link></td>
                        </tr>
                        </tbody>
                    </Table>
                </Card.Body>
                <Card.Img variant="bottom" src={arno}
                          style={{borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px'}}
                          alt="A picture of me."/>
            </Card>
        )
    }
}

export default AboutCard;