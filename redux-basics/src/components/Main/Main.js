import React from "react";

export class Main extends React.Component {
    
    constructor(props){
        super(props);
        this.handleUserClick = this.handleUserClick.bind(this);
    }

    handleUserClick(name){
        this.props.changeUsername(name)
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>The Main Page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <button
                            className="btn btn-primary"
                            onClick={() => this.handleUserClick('Anna')}>Change the Username</button>
                    </div>
                </div>
            </div>
        );
    }
}