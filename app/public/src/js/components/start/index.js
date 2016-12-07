import React from 'react';

class Start extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    openDialog() {
        electron.remote.dialog.showOpenDialog({properties: ['openDirectory']}, (filePaths) => {
            let dir = filePaths[0];
            this.setState({ dir });
        });
    }

    componentDidMount() {
        setTimeout(() => this.setState({ visible: true }), 0);
    }

    prettyDir(dir) {
        if(!dir) return null;
        let items = this.state.dir.split('/');
        return `/${items[items.length - 1]}`;
    }

    render() {
        return (
			<div id="start" className={`container center-align animate fade ${this.state.visible ? 'in':''}`}>
                <div>
                    <h3>Welcome to Cerebro<span className="sub">, the mutation visualization tool.</span></h3>
                </div>
                <div id="dir-chooser" className="container">
                    <ul>
                        <li>
                            <button className="primary" onClick={() => this.openDialog()}>
                                {this.prettyDir(this.state.dir) || 'Choose Directory'}
                            </button>
                        </li>
                        <li>then...</li>
                        <li>
                            <button 
                                className="secondary"
                                onClick={() => this.props.onChooseDirectory(this.state.dir)}
                                disabled={!this.state.dir}>
                                Visualize
                            </button>
                        </li>
                    </ul>
                </div>
			</div>
		);
    }
}

export default Start;
