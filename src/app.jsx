/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-len */
import React from 'react';
import appData from './AppData';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { appData, currentCommand: appData.groups[0].commands[0], currentInstance: appData.groups[0].commands[0].instances[0], currentGroup: appData.groups[0] };
  }
  componentDidMount() {
    // this.showSubPanel(0);
  }
  render() {
    this.toggleModal = (id) => {
      if (document.getElementById(id).style.display !== 'block') document.getElementById(id).style.display = 'block';
      else document.getElementById(id).style.display = 'none';
    };
    this.selectInstance = (gIndex, cIndex, inInstance) => {
      this.setState({
        currentInstance: this.state.appData.groups[gIndex].commands[cIndex].instances[inInstance],
      });
    };
    this.selectCMD = (gIndex, cIndex) => {
      this.setState({
        currentCommand: this.state.appData.groups[gIndex].commands[cIndex],
        currentInstance: this.state.appData.groups[gIndex].commands[cIndex].instances[0],
      });
    };
    this.showSubPanel = (index) => {
      if (document.getElementById(`subPanel_${index}`).style.display !== 'block') document.getElementById(`subPanel_${index}`).style.display = 'block';
      else document.getElementById(`subPanel_${index}`).style.display = 'none';

      this.state.appData.groups.forEach((group, innerindex) => {
        if (innerindex !== index) document.getElementById(`subPanel_${innerindex}`).style.display = 'none';
      });
      this.setState({
        currentGroup: this.state.appData.groups[index],
        currentCommand: this.state.appData.groups[index].commands[0],
        currentInstance: this.state.appData.groups[index].commands[0].instances[0],
      });
    };

    return (<div>
      <header className="w3-container">
        <h2>Cli Assist</h2>
        <p>Execute, Save & Share Commands :)</p>
      </header>
      <div className="w3-container">
        <div className="w3-cell-row" style={{ maxWidth: '100%' }}>
          <div className="w3-container w3-cell w3-padding w3-mobile" style={{ width: '50%' }}>
            <ul className="w3-ul w3-card-2">
              { this.state.appData && this.state.appData.groups &&
                this.state.appData.groups.map((group, index) =>
                  (<li key={`groupKey${index}`} className="w3-bar">
                    <div className="w3-cell-row" >
                      <div className="w3-cell" onClick={() => { this.showSubPanel(index); }} style={{ cursor: 'pointer' }}>
                        <img src={group.logo} className="w3-bar-item w3-hide-small" style={{ width: '85px' }} alt=":(" />
                        <div className="w3-bar-item">
                          <span className="w3-large">{group.name}</span><br />
                          <span>{group.commands.length === 1 ? ('1 Command') : (`${group.commands.length} Commands`) }</span><br />
                          <span className="w3-codespan">{group.cmd}</span>
                        </div>
                      </div>
                      <div className="w3-cell w3-right">
                        <button id={`execGroupKey${index}`} className="w3-button w3-white w3-border  w3-round-large" onClick={() => { this.toggleModal('DeleteGroupModal'); }}><i className="fa fa-code" /></button>
                        <button id={`removeGroupKey${index}`} className="w3-button w3-white w3-border  w3-round-large" onClick={() => { this.toggleModal('DeleteGroupModal'); }}><i className="fa fa-trash" /></button>
                        <button id={`editGroupKey${index}`} className="w3-button w3-white w3-border  w3-round-large" onClick={() => { this.toggleModal('AddGroupModal'); }}><i className="fa fa-pencil" /></button>
                        <button id={`addGroupKey${index}`} className="w3-button w3-white w3-border  w3-round-large" onClick={() => { this.toggleModal('AddGroupModal'); }}><i className="fa fa-plus" /></button>
                      </div>
                    </div>
                    <div id={`subPanel_${index}`} className="w3-panel w3-display-container" style={{ display: 'none' }}>
                      <span className="w3-codespan">Commands</span>
                      <table className="w3-table-all w3-hoverable">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>cmd</th>
                            <th>Description</th>
                            <th>Instances</th>
                          </tr>
                        </thead>
                        <tbody>
                          { group.commands &&
                            group.commands.map((cmd, cmdindex) => (
                              <tr key={`cmdKey${cmdindex}`} onClick={() => { this.selectCMD(index, cmdindex); }}>
                                <td>{cmd.name}</td>
                                <td><span className="w3-codespan">{`${group.cmd}  ${cmd.cmd}`}</span></td>
                                <td>{cmd.desc}</td>
                                <td>{cmd.instances.length}</td>
                              </tr>
                            ))
                          }
                        </tbody>
                      </table>
                      <span className="w3-codespan">Instances</span>
                      <table className="w3-table-all w3-hoverable">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>cmd</th>
                          </tr>
                        </thead>
                        <tbody>
                          { this.state.currentCommand && this.state.currentCommand.instances &&
                            this.state.currentCommand.instances.map((instance, instindex) => (
                              <tr key={`instKey${instindex}`}>
                                <td>{instance.name}</td>
                                <td><span className="w3-codespan">{`${this.state.currentGroup.cmd} ${this.state.currentCommand.cmd}  ${instance.params.join(' ')}`}</span></td>
                              </tr>
                            ))
                          }
                        </tbody>
                      </table>
                    </div>
                  </li>),
              )
              }
            </ul>
          </div>
          <div className="w3-container w3-cell w3-padding w3-mobile" style={{ width: '50%' }}>
            <div className="w3-card-4 w3-black w3-text-white w3-border w3-border-white w3-padding">
              <code className="w3-codespan w3-black w3-text-green">24/05/2019 12:00:1 Success!</code><br />
              <code className="w3-codespan w3-black w3-text-red">24/05/2019 12:00:1 Failed!</code><br />
              <code className="w3-codespan w3-black w3-text-grey">24/05/2019 12:00:1 Logs!</code><br />
              <code className="w3-codespan w3-black w3-text-grey">24/05/2019 12:00:1 Logs!</code><br />
              <code className="w3-codespan w3-black w3-text-grey">24/05/2019 12:00:1 Logs!</code><br />
              <code className="w3-codespan w3-black w3-text-grey">24/05/2019 12:00:1 Logs!</code><br />
              <code className="w3-codespan w3-black w3-text-grey">24/05/2019 12:00:1 Logs!</code><br />
              <code className="w3-codespan w3-black w3-text-green">24/05/2019 12:00:1 Success!</code><br />
              <code className="w3-codespan w3-black w3-text-green">24/05/2019 12:00:1 Success!</code><br />
              <code className="w3-codespan w3-black w3-text-red">24/05/2019 12:00:1 Failed!</code><br />
              <code className="w3-codespan w3-black w3-text-green">24/05/2019 12:00:1 Success!</code><br />
            </div>
          </div>
        </div>
      </div>
      <div id="AddGroupModal" className="w3-modal">
        <div className="w3-modal-content w3-card-4" style={{ maxWidth: '300px' }}>

          <div className="w3-center"><br />
            <span onClick={() => { this.toggleModal('AddGroupModal'); }} className="w3-button w3-xlarge w3-hover-red w3-display-topright" title="Close Modal">&times;</span>
          </div>

          <form className="w3-container" action="/action_page.php">
            <div className="w3-section">
              <label><b>Name</b></label>
              <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="Enter Group Name" name="name" required />
              <label><b>Logo</b></label>
              <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="Enter Logo Url" name="url" required />
              <label><b>Cmd</b></label>
              <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="Enter root cmd" name="cmd" required />


            </div>
          </form>

          <div className="w3-container w3-border-top w3-padding-16 w3-light-grey">
            <button type="button" onClick={() => { this.toggleModal('AddGroupModal'); }} className="w3-button w3-red w3-text-white w3-section w3-padding">Cancel</button>
            <button className="w3-button w3-black w3-text-white w3-right w3-section w3-padding" type="submit">Save</button>
          </div>

        </div>
      </div>

      <div id="DeleteGroupModal" className="w3-modal w3-modal-sm">
        <div className="w3-modal-content  w3-modal-sm w3-card-4" style={{ maxWidth: '400px' }}>

          <div className="w3-center"><br />
            <span onClick={() => { this.toggleModal('DeleteGroupModal'); }} className="w3-button w3-xlarge w3-hover-red w3-display-topright" title="Close Modal">&times;</span>
          </div>

          <form className="w3-container" action="/action_page.php">
            <div className="w3-section">
              <label><b>Are you sure, do you want to delete the group ?</b></label>


            </div>
          </form>

          <div className="w3-container w3-border-top w3-padding-16 w3-light-grey">
            <button type="button" onClick={() => { this.toggleModal('DeleteGroupModal'); }} className="w3-button w3-red w3-text-white w3-section w3-padding">No</button>
            <button className="w3-button w3-black w3-text-white w3-right w3-section w3-padding" type="submit">Yes</button>
          </div>

        </div>
      </div>
    </div>);
  }
}
