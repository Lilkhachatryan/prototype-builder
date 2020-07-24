import React from 'react';

class TextSettings extends React.Component {

    state = {
        inputs: {
            fill: '#000000',
            fontSize: 0,
            fontFamily: '',
            fontWeight: 0,
            fontStyle: 'normal',
            textAlign: '',
            textDecoration: '',
            strokeWidth: 0,
            stroke: '#000000',
            lineHeight: 1,
        }
    };

    handleChange = (event, type) => {
        let value = event.target.value;
        let newInputs = { ...this.state.inputs };
        newInputs[type] = value;
        this.setState({ inputs: newInputs });

        if (type === 'fontSize' || type === 'strokeWidth' || type === 'fontWeight' || type === 'lineHeight') {
            value = +value
        }

        this.props.elementChange(type, value)
    };

    render() {
        return (
            <div>
                <div>
                    <label>Text Color</label>
                    <input
                        type="color"
                        onChange={(_) => this.handleChange(_, 'fill')}
                        value={this.state.inputs.fill} />
                </div>
                <div>
                    <label>Font Size (px)</label>
                    <input type="number" value={this.state.inputs.fontSize} onChange={(_) => this.handleChange(_, 'fontSize')} />
                </div>
                <div>
                    <label>Line height (em)</label>
                    <input type="number" step="0.1" value={this.state.inputs.lineHeight} onChange={(_) => this.handleChange(_, 'lineHeight')} />
                </div>
                <div>
                    <label>Font Family</label>
                    <select onChange={(_) => this.handleChange(_, 'fontFamily')} value={this.state.inputs.fontFamily}>
                        <option value="">Choose font family</option>
                        <option value="Arial">Arial</option>
                        <option value="Times New Roman">Times New Roman</option>
                    </select>
                </div>
                <div>
                    <label>Font Weight</label>
                    <select onChange={(_) => this.handleChange(_, 'fontWeight')} value={this.state.inputs.fontWeight}>
                        <option value="0"></option>
                        <option value="300">300</option>
                        <option value="400">400</option>
                        <option value="500">500</option>
                        <option value="600">600</option>
                        <option value="700">700</option>
                        <option value="900">900</option>
                    </select>
                </div>
                <div>
                    <p>Text Align</p>
                    <div>
                        <div>
                            <input
                                type="radio"
                                name="textAlign"
                                value="left"
                                id="left"
                                onChange={(_) => this.handleChange(_, 'textAlign')}
                                checked={this.state.inputs.textAlign === 'left'} />
                            <label htmlFor="left">Left</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="textAlign"
                                value="center"
                                id="center"
                                onChange={(_) => this.handleChange(_, 'textAlign')}
                                checked={this.state.inputs.textAlign === 'center'} />
                            <label htmlFor="center">Center</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="textAlign"
                                value="right"
                                id="right"
                                onChange={(_) => this.handleChange(_, 'textAlign')}
                                checked={this.state.inputs.textAlign === 'right'} />
                            <label htmlFor="right">Right</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="textAlign"
                                value="justify"
                                id="justify"
                                onChange={(_) => this.handleChange(_, 'textAlign')}
                                checked={this.state.inputs.textAlign === 'justify'} />
                            <label htmlFor="justify">Justify</label>
                        </div>
                    </div>
                </div>
                <div>
                    <label>Text Decoration</label>
                    <select onChange={(_) => this.handleChange(_, 'textDecoration')} value={this.state.inputs.textDecoration}>
                        <option value="">Choose decoration</option>
                        <option value="underline">Underline</option>
                        <option value="linethrough">Linethrough</option>
                        <option value="overline">Overline</option>
                    </select>
                </div>
                <div>
                    <label>Font Style</label>
                    <select onChange={(_) => this.handleChange(_, 'fontStyle')} value={this.state.inputs.fontStyle}>
                        <option value="normal">Normal</option>
                        <option value="italic">Italic</option>
                    </select>
                </div>
                <div>
                    <label>Stroke Width (px)</label>
                    <input type="number" step="0.1" value={this.state.inputs.strokeWidth} onChange={(_) => this.handleChange(_, 'strokeWidth')} />
                </div>
                <div>
                    <label>Stroke Color</label>
                    <input
                        type="color"
                        onChange={(_) => this.handleChange(_, 'stroke')}
                        value={this.state.inputs.stroke}
                    />
                </div>
            </div>
        );
    }
}

export default TextSettings;
