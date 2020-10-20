import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, CardHeader } from "reactstrap";
import { Link } from "react-router-dom";

//Import Section Title
import SectionTitle from "../common/section-title";
import FeatureBox from "./feature-box";

//Import Images
import feature1 from "../../assets/images/features/img-1.png";
import feature2 from "../../assets/images/features/img-3.png";


class Features extends Component {
    constructor(props) {
        super(props);
        this.state = {
            smallFeatures1 : [
                { title : "13 novembre" },
                { title : "0€" },
            ],
            smallFeatures2 : [
                { title : "20 novembre" },
                { title : "0€" },
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
        <section className="section" id="features">
            <Container>
            <SectionTitle
                title="Les anims du mois de septembre"
                desc="Venez découvrir les animations du Pic'Asso"
            />               

                <Row>
                    <Col lg={5}>
                        <div>
                            <FeatureBox icon="paw" title="Lavage de chien" smallFeatures={this.state.smallFeatures1} desc="Les cousins de Guillermin reviennent du bled, et ils ont apporté la masse de boue sur leurs pattes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae lacinia turpis. Mauris facilisis lectus orci, eu pellentesque elit faucibus sit amet. Quisque dapibus nunc et ultrices feugiat. Nulla eget ante at lorem tristique molestie eu eu libero." link="#" />
                        </div>
                    </Col>

                    <Col lg={5} sm={8} className="ml-lg-auto">
                                <div className="box-shadow">
                                    <img src={feature1} alt="" className="img-fluid mx-auto d-block"/>
                                </div>
                    </Col>
                </Row>
                

                <Row className="mt-5 pt-5">
                    <Col lg={5} sm={8}>
                                <div className="box-shadow">
                                    <img src={feature2} alt="" className="img-fluid mx-auto d-block"/>
                                </div>
                    </Col>
                    <Col lg={5} className="ml-lg-auto">
                        <div className="mt-4 mt-lg-0">
                        <FeatureBox icon="brain" title="Révisiathon" smallFeatures={this.state.smallFeatures2} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae lacinia turpis. Mauris facilisis lectus orci, eu pellentesque elit faucibus sit amet. Quisque dapibus nunc et ultrices feugiat. Nulla eget ante at lorem tristique molestie eu eu libero." link="#" />
                        </div>
                    </Col>

                </Row>

                <br/>
                <Row className="mt-4">
                    <Col lg={12}>
                        <div className="text-center">
                            <Link to="#" className="btn btn-success">Voir le calendrier des perms</Link>
                        </div>
                    </Col>
                </Row>
                
            </Container>
            
        </section>
            </React.Fragment>
        );
    }
}

export default Features;