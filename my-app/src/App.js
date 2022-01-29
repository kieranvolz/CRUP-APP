import "./App.css";
import React from "react";
import { FaEllipsisH, FaSearch, FaCheck } from "react-icons/fa";
function App() {
  return (
    <div>
      <div className="dark-blue">
        <h1 className="titanium-white">ToDo's</h1>
        <FaEllipsisH className="titanium-white main-menu" />

        <div className="tabs">
          <Tabs>
            <Tab label="Open"></Tab>
            <Tab label="Closed"></Tab>
          </Tabs>
        </div>
        <div className="gradient-above-search"></div>
      </div>

      <div className="darker-blue">
        <div className="center">
          <form>
            <label>
              <input type="text" name="name" placeholder="Search Todo's" />
              <FaSearch id="search-icon" className="titanium-white" />
            </label>
          </form>
        </div>
        <div className="dark-blue-underline"></div>

        <div className="scrollable">
          <div className="scroller-top-gradient"></div>

          {/* you got some work to do below */}
          <div className="grid">
            <div className="to-do-card">
              <div className="checked-circle"></div>

              {/* testing checkbox idea */}

              <div class="customcb">
                <input type="checkbox" value="1" id="customcb" name="" />

                <label class="inner" for="customcb">
                  <FaCheck className="check-icon" value="1" />
                </label>
              </div>

              {/* testing checkbox idea */}

              <div className="todo-text titanium-white">UI Design</div>

              {/* <div className="username-box">User: 1</div> */}

              <div className="to-do-menu  ">
                <ul>
                  <li>
                    <a href="#">
                      <FaEllipsisH className="titanium-white" />
                    </a>
                    <ul>
                      <li className="tooltip_link">
                        <a href="#">Edit ToDo</a>
                      </li>
                      <li className="tooltip_link">
                        <a href="#">Mark Completed</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="to-do-card">
              <div className="to-do-menu titanium-white">
                <FaEllipsisH />
              </div>
            </div>
            <div className="to-do-card">
              <div className="to-do-menu titanium-white">
                <FaEllipsisH />
              </div>
            </div>
            <div className="to-do-card">
              <div className="to-do-menu titanium-white">
                <FaEllipsisH />
              </div>
            </div>
            <div className="to-do-card">
              <div className="to-do-menu titanium-white">
                <FaEllipsisH />
              </div>
            </div>
            <div className="to-do-card">
              <div className="to-do-menu titanium-white">
                <FaEllipsisH />
              </div>
            </div>
            <div className="to-do-card">
              <div className="to-do-menu titanium-white">
                <FaEllipsisH />
              </div>
            </div>
            <div className="to-do-card">
              <div className="to-do-menu titanium-white">
                <FaEllipsisH />
              </div>
            </div>
            <div className="to-do-card">
              <div className="to-do-menu titanium-white">
                <FaEllipsisH />
              </div>
            </div>
            <div className="to-do-card">
              <div className="to-do-menu titanium-white">
                <FaEllipsisH />
              </div>
            </div>
            <div className="to-do-card">
              <div className="to-do-menu titanium-white">
                <FaEllipsisH />
              </div>
            </div>
            <div className="to-do-card">
              <div className="to-do-menu titanium-white">
                <FaEllipsisH />
              </div>
            </div>
            <div className="to-do-card">
              <div className="to-do-menu titanium-white">
                <FaEllipsisH />
              </div>
            </div>
            <div className="to-do-card">
              <div className="to-do-menu titanium-white">
                <FaEllipsisH />
              </div>
            </div>
            <div className="to-do-card">
              <div className="to-do-menu titanium-white">
                <FaEllipsisH />
              </div>
            </div>
            <div className="to-do-card">
              <div className="to-do-menu titanium-white">
                <FaEllipsisH />
              </div>
            </div>
            <div className="to-do-card">
              <div className="to-do-menu titanium-white">
                <FaEllipsisH />
              </div>
            </div>
            <div className="to-do-card">
              <div className="to-do-menu titanium-white">
                <FaEllipsisH />
              </div>
            </div>
            <div className="to-do-card">
              <div className="to-do-menu titanium-white">
                <FaEllipsisH />
              </div>
            </div>
            <div className="to-do-card">
              <div className="to-do-menu titanium-white">
                <FaEllipsisH />
              </div>
            </div>
          </div>
          {/* end of grid */}
        </div>
      </div>
    </div>
  );
}

class Tabs extends React.Component {
  // class Tabs  extends React {
  state = {
    activeTab: this.props.children[0].props.label,
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
            className={button === activeTab ? "active" : "not-active"}
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




{/* check out this link for fixing the dropdown menu

  https://codepen.io/ig_design/pen/MWKVrNR?editors=1100

*/}