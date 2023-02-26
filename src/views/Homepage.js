import React from "react";
import Table from "react-bootstrap/Table"
import ProjectsCard from "../components/homepage/ProjectsCard";
import CompetitionsCard from "../components/homepage/CompetitionsCard";
import AboutCard from "../components/homepage/AboutCard";

class Homepage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {width: window.innerWidth};
    }

    componentDidMount() {
        this.updateWidth();
        window.addEventListener('resize', this.updateWidth);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWidth);
    }

    updateWidth = () => {
        this.setState({width: window.innerWidth});
    }


    render() {
        let cards;
        if (this.state.width >= 1280) // Desktop view
            cards =
                <div className="content">
                    <Table responsive="sm" borderless="true">
                        <tbody>
                        <tr>
                            <td><ProjectsCard/></td>
                            <td><AboutCard/></td>
                            <td><CompetitionsCard/></td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
        else { // Mobile view
            cards =
                <div className="content">
                    <AboutCard/>
                    <br/>
                    <ProjectsCard/>
                    <br/>
                    <CompetitionsCard/>
                    <br/>
                </div>
        }
        return cards;
    }
}

export default Homepage;