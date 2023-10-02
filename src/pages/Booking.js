import React from "react";
import Header from "../components/Header";
import Cabin from "../components/Cabin";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function Booking() {
  return (
    <>
    <Header isHomepage={false} />
    <div className="container bookingContainer">
      <div className="center">
        <Tabs>
          <TabList>
            <Tab>Cabin One</Tab>
            <Tab>Cabin Two</Tab>
          </TabList>
          <TabPanel>
            <Cabin cabinOne={true} />
          </TabPanel>
          <TabPanel>
            <Cabin cabinOne={false} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
    </>
    
  );
}