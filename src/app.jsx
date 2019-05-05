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
    this.state = { appData };
  }
  componentDidMount() {
    this.showSubPanel(0);
  }
  render() {
    this.toggleModal = (id) => {
      if (document.getElementById(id).style.display !== 'block') document.getElementById(id).style.display = 'block';
      else document.getElementById(id).style.display = 'none';
    };

    this.showSubPanel = (index) => {
      this.state.appData.groups.forEach((group, innerindex) => {
        document.getElementById(`subPanel_${innerindex}`).style.display = 'none';
      });
      document.getElementById(`subPanel_${index}`).style.display = 'block';
    };

    return (<div>
      <header className="w3-container">
        <h2>Cli Assist</h2>
        <p>Execute, Save & Share Commands :)</p>
      </header>
      <div className="w3-container">
        <div className="w3-container w3-padding w3-cell w3-mobile">
          <ul className="w3-ul w3-card-4">
            { this.state.appData && this.state.appData.groups &&
              this.state.appData.groups.map((group, index) =>
                (<li key={`groupKey${index}`} className="w3-bar">
                  <button id={`removeGroupKey${index}`} className="w3-button w3-white w3-border  w3-round-large w3-right" onClick={() => { this.toggleModal('DeleteGroupModal'); }}><i className="fa fa-trash" /></button>
                  <button id={`addGroupKey${index}`} className="w3-button w3-white w3-border  w3-round-large w3-right" onClick={() => { this.toggleModal('AddGroupModal'); }}><i className="fa fa-plus" /></button>
                  <img src={group.logo} className="w3-bar-item w3-hide-small" style={{ width: '85px' }} alt=":(" />
                  <div className="w3-bar-item" onClick={() => { this.showSubPanel(index); }}>
                    <span className="w3-large">{group.name}</span><br />
                    <span>{group.commands.length === 1 ? ('1 Command') : (`${group.commands.length} Commands`) }</span><br />
                    <span className="w3-codespan">{group.cmd}</span>
                  </div>
                  <div id={`subPanel_${index}`} className="w3-panel w3-display-container" style={{ display: 'none' }}>
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
                            <tr key={`cmdKey${cmdindex}`}>
                              <td>{cmd.name}</td>
                              <td><span className="w3-codespan">{`${group.cmd}  ${cmd.cmd}`}</span></td>
                              <td>{cmd.desc}</td>
                              <td>{cmd.instances.length}</td>
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
      </div>
      <div style={{ position: 'fixed', width: '100%', bottom: '0px', left: '0px' }} >
        <footer className="w3-container" style={{ position: 'relative' }}>
          <a className="w3-btn w3-xlarge w3-card-4 w3-circle w3-border w3-right" style={{ position: 'absolute', top: '-28px', right: '16px' }}>+</a>
        </footer>

        <div className="w3-container w3-theme-dark w3-xlarge">&nbsp;<span className="w3-right">&nbsp;</span></div>
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
