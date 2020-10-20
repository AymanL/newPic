import React, { Component } from 'react';
import { Row } from "reactstrap";

//Import Blog Box
import CounterBox from "./counter-box";

class Counter extends Component {
    state = {
        counters: [
            { icon: "bookmark", title: "Membres surmotivés", start: 1, end: 23 },
            { icon: "user-plus", title: "Amitiés nouées", start: 2, end: 567 },
            { icon: "shopping-cart", title: "Cups of coffee", start: 608, end: 128 },
            { icon: "award", title: "Awards", start: 6, end: 47 },
        ],
    }
    render() {
        return (
            <React.Fragment>
                <Row id="counter">
                    <CounterBox counters={this.state.counters} />
                </Row>
            </React.Fragment>
        );
    }
}

export default Counter;