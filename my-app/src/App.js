import './App.css';
import React, { Component } from 'react';


import { FaEllipsisH, FaSearch } from 'react-icons/fa';

const element = <FaSearch className="titanium-white" />;
function App() {
  return (
    <div>
      <div className="dark-blue">
        <h2 className="titanium-white">ToDo's</h2>
        <FaEllipsisH           className="titanium-white main-menu" />

        <div className="tabs">
          <Tabs>
            <Tab label="Open">
            </Tab>
            <Tab label="Closed">
            </Tab>
          </Tabs>
        </div>
      </div>

      <div className="darker-blue">
        <form>
          <label>
            <input type="text" name="name" placeholder="Search Todo's" />
            <FaSearch id="search-icon" className="titanium-white" />
          </label>
        </form>
        <div className="dark-blue-underline"></div>

        {/* you got some work to do below */}
        <div className="grid">

<div><FaEllipsisH /></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>


        </div>
        {/* end of grid */}
      </div>
    </div>
  );
}

class Tabs extends React.Component {
  state = {
    activeTab: this.props.children[0].props.label
  };
  changeTab = (tab) => {
    this.setState({ activeTab: tab });
  };
  render() {
    let content;
    let buttons = [];
    return (
      <div>
        {React.Children.map(this.props.children, (child) => {
          buttons.push(child.props.label);
          if (child.props.label === this.state.activeTab)
            content = child.props.children;
        })}

        <TabButtons
          activeTab={this.state.activeTab}
          buttons={buttons}
          changeTab={this.changeTab}
        />
        <div className="tab-content">{content}</div>
      </div>
    );
  }
}

const TabButtons = ({ buttons, changeTab, activeTab }) => {
  return (
    <div className="tab-buttons">
      {buttons.map((button) => {
        return (
          <button
            className={button === activeTab ? "active" : ""}
            onClick={() => changeTab(button)}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
};

const Tab = (props) => {
  return <React.Fragment>{props.children}</React.Fragment>;
};



export default App;
