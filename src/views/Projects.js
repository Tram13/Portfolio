import React from "react";
import Card from "react-bootstrap/Card";

class Projects extends React.Component {

    constructor(props) {
        super(props);
        this.state = {cardWidth: window.innerWidth};
    }

    componentDidMount() {
        this.updateWidth();
        window.addEventListener('resize', this.updateWidth);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWidth);
    }

    getWidth = () => {
        if (window.innerWidth < 800) {
            return "22rem";
        } else if (window.innerWidth < 1300) {
            return "35rem";
        } else {
            return "50rem";
        }
    }

    updateWidth = () => {
        this.setState({cardWidth: this.getWidth()});
    }


    render() {
        return (<div className="content">
                <a href="https://github.com/Tram13/masterthesis" className="card-button" rel="noopener noreferrer"
                   target="_blank">
                    <Card style={{width: this.state.cardWidth, borderRadius: '20px'}}>
                        <Card.Body>
                            <Card.Title>Master's Thesis (2023)</Card.Title>
                            <Card.Text>
                                My Master's thesis "Design of a machine learning algorithm for restaurant
                                recommendations based on labeled and textual data", in collaboration with Arnoud De
                                Jonge. It describes an implementation of a recommender system based on both textual and
                                labeled data. Benchmarks show that it outperforms state of the art implementations that
                                utilize only one data source.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </a>
                <br/>
                <Card style={{width: this.state.cardWidth, borderRadius: '20px'}}>
                    <Card.Body>
                        <a href="https://github.com/Tram13/ProjectSEL2" className="card-button"
                           rel="noopener noreferrer" target="_blank">
                            <Card.Title>Project Bachelor's Degree (2021)</Card.Title>
                            <Card.Text>
                                Not counting my internship, this is my biggest project to date. This project aims to
                                simulate a software development
                                company. Coding, planning and communication are all aspects of the project.<br/>The
                                assignment was to create a web application for the Flemish Government in which users
                                could register and apply for services offered by the government.
                            </Card.Text>
                        </a>
                        <br/>
                        <a className="btn btn-secondary" rel="noopener noreferrer"
                           href="https://informatica.ugent.be/bachelor/SEL2.html" target="_blank">Extra info: Ghent
                            University</a>
                    </Card.Body>
                </Card>
                <br/>
                <a href="https://github.com/Tram13/ProjectLogProg" className="card-button" rel="noopener noreferrer"
                   target="_blank">
                    <Card style={{width: this.state.cardWidth, borderRadius: '20px'}}>
                        <Card.Body>
                            <Card.Title>Chess AI (2021)</Card.Title>
                            <Card.Text>
                                A command line chess AI, written in Prolog. It can compute the best move using a game
                                tree of up to 4 moves deep.<br/><i>Technically it can search deeper, but if time is
                                money,
                                you'd be broke.</i>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </a>
                <br/>
                <a href="https://github.com/Tram13/ProjectAI" className="card-button" rel="noopener noreferrer"
                   target="_blank">
                    <Card style={{width: this.state.cardWidth, borderRadius: '20px'}}>
                        <Card.Body>
                            <Card.Title>NLP Recommender System (2020)</Card.Title>
                            <Card.Text>
                                A Python program which takes an input court case and returns a top 10 of other related
                                cases, based on unstructured legal documents.
                                We improved an existing recommender system by implementing Word2Vec and BERT techniques.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </a>
                <br/>
                <a href="https://github.com/Tram13/ProjectAD3" className="card-button" rel="noopener noreferrer"
                   target="_blank">
                    <Card style={{width: this.state.cardWidth, borderRadius: '20px'}}>
                        <Card.Body>
                            <Card.Title>OpenSeekMap (2020)</Card.Title>
                            <Card.Text>
                                OpenSeekMap is a tool that matches a (misspelled) address with the intended address with
                                much attention to time and space complexity, written in C. It works by using fuzzy
                                string matching
                                and an optional "estimated location" parameter.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </a>
            </div>)
    }
}

export default Projects;
