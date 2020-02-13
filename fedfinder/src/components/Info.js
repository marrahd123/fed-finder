import React from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import './Comp.css';
 
class Info extends React.Component {
    state = {
        page: 'Information Hub'
    }

    render () {
        console.log(this.props.hubcontent);

        return (
            <div className="Info-Hub">
                <div className="Hub">
                    <Tabs>
                        <TabList className="Hub-Nav">
                            <Tab className="Tab">Home</Tab>
                            <Tab className="Tab">Descriptor</Tab>
                            <Tab className="Tab">Search</Tab>
                            <Tab className="Tab">Help</Tab>
                        </TabList>

                        <TabPanel className="TabPanel">
                            <div>
                            <h1> Welcome to the FedFinder </h1>
                            <p> This box here is the Information Hub. </p>
                            </div>
                        </TabPanel>
                        <TabPanel className="TabPanel">
                            <div>Descriptor</div>
                        </TabPanel>
                        <TabPanel className="TabPanel">
                            <div>Search</div>
                        </TabPanel>
                        <TabPanel className="TabPanel">
                            <div>Help</div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default Info;