import React from 'react';

import Explorer from './explorer';
import Start from './start';

class AppView extends React.Component {
  constructor(props) {
    super(props);

    this.directoryChosen = this.directoryChosen.bind(this);
  }

  componentWillMount() {
    this.setState({ mutantsDirectory: null });
  }

  directoryChosen(dir) {
    electron.ipcRenderer.send('mutation-dir-chosen', dir);
    electron.ipcRenderer.once('mutation-parse-data', (event, response) => {
      this.setState({ mutantsDirectory: dir, mutationResults: response });
    });
    electron.ipcRenderer.once('mutation-parse-error', (event, error) => {
      let msg = "Error: ";
      console.error(error);
      if(error.code === 'ENOENT') {
        msg += "Could not find mutation results in provided directory";
      }
      else {
        msg += "Could not parse mutation results"
      }
      electron.remote.dialog.showMessageBox({
        message: msg,
        title: 'Mutation Parse Error',
        type: 'error',
        buttons: []
      });
    });
  }

  render() {
    return (
      <div className='view'>
        <div className='window-chrome'></div>

        {this.state.mutantsDirectory == null && <Start onChooseDirectory={this.directoryChosen} />}
        {this.state.mutantsDirectory != null && <Explorer directory={this.state.mutantsDirectory} mutationresults={this.state.mutationResults} />}
      </div>
    );
  }
}

export default AppView;
