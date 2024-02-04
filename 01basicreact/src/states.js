import React from "react";

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            make: "testCar",
            model:  "testModel",
            year: "2051"
        }
    }

    changeCarYear = () => {
        this.setState({year: "2024"});
    }
    
    render() {
        return(
            <div>
                <h2>My {this.state.make}</h2>
                <p>
                    It's model is {this.state.model} presented in the year {this.state.year}
                </p>

                <button type="button" onClick={this.changeCarYear} className="rounded border-slate-950 border-2 m-2">
                 Change Year
                </button>
            </div>
        )
    }
}

export default Car;