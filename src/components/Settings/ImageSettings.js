import React from 'react';

class ImageSettings extends React.Component {

    state = {
        inputs: {
            fill: this.props.currentElement.fill,
            strokeWidth: this.props.currentElement.strokeWidth,
            stroke: this.props.currentElement.stroke,
            opacity: this.props.currentElement.opacity,
            src: '',
            file: ''
        }
    };

    componentDidUpdate = (prevProps) => {
        if (prevProps.currentElement !== this.props.currentElement) {
            const newAtts = {
                fill: this.props.currentElement.fill,
                strokeWidth: this.props.currentElement.strokeWidth,
                stroke: this.props.currentElement.stroke,
                opacity: this.props.currentElement.opacity,
            };
            this.setState({inputs: newAtts});
        }
    };

    handleChange = (event, type) => {
        let value = event.target.value;
        let newInputs = {...this.state.inputs};
        newInputs[type] = value;
        this.setState({inputs: newInputs});

        if (type === 'opacity' || type === 'strokeWidth') {
            value = +value;
        }
        if (type === 'ry') {
            this.props.elementChange({rx: value, ry: value})
        } else {
            this.props.elementChange({[type]: value})
        }
    };

    handleSrcInputChange = (event) => {
        let newInputs = {...this.state.inputs};
        newInputs.src = event.target.value;
        this.setState({inputs: newInputs})
    }

    handleSrcChange = () => {
        if (this.state.inputs.src) {
            this.props.elementChange({src: this.state.inputs.src})
            let newInputs = {...this.state.inputs};
            newInputs.src = '';
            this.setState({inputs: newInputs})
        }
    }

    handleFileChange = (event) => {
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);
        let newInputs = {...this.state.inputs};
        newInputs.src = url;
        this.setState({inputs: newInputs})
    }

    render() {
        return (
            <div>
                <div className='mb-3 flexInput'>
                    <label>Fill</label>
                    <input
                        type='color'
                        onChange={(_) => this.handleChange(_, 'backgroundColor')}
                        value={this.state.inputs.fill}/>
                </div>
                <div className='mb-3 flexInput'>
                    <label>Stroke Width (px)</label>
                    <input className='field-styling' type='number' step='1' value={this.state.inputs.strokeWidth}
                           onChange={(_) => this.handleChange(_, 'strokeWidth')}/>
                </div>

                <div className='mb-3 flexInput'>
                    <label>Stroke Color</label>
                    <input
                        type='color'
                        onChange={(_) => this.handleChange(_, 'stroke')}
                        value={this.state.inputs.stroke}
                    />
                </div>
                <div className='mb-3 flexInput'>
                    <label>Opacity:</label>
                    <input
                        type='range'
                        name='opacity'
                        min='0'
                        max='1'
                        step='0.05'
                        value={this.state.inputs.opacity}
                        onChange={(_) => this.handleChange(_, 'opacity')}
                    />
                </div>
                <div className='mb-3'>
                    <label className='d-block'>Image source</label>
                    <div>
                        <input type='text' className='field-styling mb-3' onChange={this.handleSrcInputChange}
                               value={this.state.inputs.src}
                               placeholder='Image url'/>
                        <input type='file' className='d-block mb-3' onChange={this.handleFileChange}/>
                        <button onClick={this.handleSrcChange} className='btn btn-primary upload-image-btn'>Update source</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageSettings;
