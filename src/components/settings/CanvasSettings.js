import React from 'react';

class CanvasSettings extends React.Component {

    state = {
        bgColor: this.props.canvas ? this.props.canvas.background : "#FFFFFF"
    };

    componentDidUpdate = (prevProps) => {
        if (prevProps.canvas !== this.props.canvas) {
            this.setState({bgColor: this.props.canvas ? this.props.canvas.background: '#FFFFFF'})
        }
    }

    handleChange = (event) => {
        this.props.changeCanvasBg(event.target.value);
        this.setState({bgColor: event.target.value})
    }

    render () {
        console.log(this.props)
        return (
            <div>
                <h5>Canvas Settings</h5>
                <div>
                    <label>Background color</label>
                    <input type="color" onChange={this.handleChange} value={this.state.bgColor}/>
                </div>
                <h6>
                    Select an object to edit
                </h6>
            </div>
        )
    }
}

export default CanvasSettings;