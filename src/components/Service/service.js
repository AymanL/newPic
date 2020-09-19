import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Import Section Title
import SectionTitle from "../common/section-title";
import ServiceBox from "./services-box";

class Process extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services : [
                { icon : "coffee", title : "Manger", desc : "Lorem Ipsum." },
                { icon : "edit", title : "Jeux-vidéos", desc : "If several languages coalesce, the grammar of the language." },
                { icon : "headphones", title : "Jeux de société", desc : "The languages only differ in their grammar their pronunciation" },
                { icon : "layers", title : "Travailler", desc : "Everyone realizes why a new common would be desirable." },
                { icon : "code", title : "Se détendre", desc : "To achieve this, it would be necessary to have uniform." },
                { icon : "drink", title : "Boire", desc : "Their separate existence is a myth. For science, music, etc." },
            ]
        }
    }
    
    render() {
        return (
            <React.Fragment>
        <section className="section bg-light" id="services">
            <Container>
            <SectionTitle
                title="Qu'est-ce qu'on peut faire au Pic ?"
                desc="Le Pic propose une myriade d'activités à faire, seul ou en groupe, à toutes les heures de la journée.
                C'est un endroit de détente où il est simple de rencontrer de nouvelles personnes et passer du bon temps avec celles qu'on connaît déjà."
            />

                <Row>
                    <ServiceBox services={this.state.services} />
                </Row>
                

                <Row className="mt-4">
                    <Col lg={12}>
                        <div className="text-center">
                            <Link to="#" className="btn btn-success">View more</Link>
                        </div>
                    </Col>
                </Row>
                
            </Container>
            
        </section>
            </React.Fragment>
        );
    }
}

export default Process;