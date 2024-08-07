import { Component } from "react";
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar";
import Cards from "./components/Cards";
import Orders from "./components/Order";
import appStyles from "./App.module.css";
import Activity from "./components/Activity";
import Feedback from "./components/Feedback";
import Overview from "./components/Overview";

const dashboard = {
  display: "flex",
  alignItems: "start",
  justifyContent: "start",
  marginLeft: "2rem",
  height: "2rem",
  color: "#cfcfcf",
}

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [
        {
          name: "Total Orders",
          number: "78",
          amount: "2660",
          date: " Aug 07, 2024"
        },
        {
          name: "Total Delivered",
          number: "60",
          amount: "1970",
          date: " Aug 07, 2024"
        },
        {
          name: "Total Revenue",
          number: "179",
          amount: "7660",
          date: " Aug 07, 2024"
        }
      ],
      orders: [
        {
          customer: "Anil",
          orderNo: "1534",
          amount: "700",
          status: "delivered"
        },
        {
          customer: "Shyaam",
          orderNo: "9004",
          amount: "760",
          status: "pending"
        }
        
      ]
    }
  }

  render() {
    return (
      <>
        <div className={appStyles.container}>
          <Sidebar />

          <div className={appStyles.mainContainer}>
            <Navbar />
            <h2 style={dashboard}>Dashboard</h2>
            <div className={appStyles.gridContainer}>
              <div className={appStyles.leftContainer}>
                <div className={appStyles.cardContainer}>
                  {this.state.cards.map((element, index) => (
                    <Cards card={element} key={index}>
                    </Cards>
                  ))}
                </div>
                <div className={appStyles.chart}>
                 <Activity>
                  </Activity>
                  </div>
              <Orders orders={this.state.orders}>
              </Orders>
            </div>
            <div className={appStyles.rightContainer}>
              <div className={appStyles.halfDivs}>
                  <Overview/>
              </div>
              <div className={appStyles.halfDivs}>
                <Feedback/>
              </div>
            </div>
          </div>
        </div>
      </div >
      </>
    );
  }

}