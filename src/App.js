import { Component } from "react";
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar";
import appStyles from "./App.module.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <>
        <div className={appStyles.container}>
          <Sidebar />
          <Navbar />
        </div>
      </>
    );
  }

}