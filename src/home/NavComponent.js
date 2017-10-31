/**
 * Created by Stoneleee on 2017/10/20.
 * Mail to weflylee@163.com
 */
import React from 'react'
import { Link } from 'react-router-dom'

import './NavComponent.scss'

const List = React.createClass({
    render() {

        const cTab = this.props.cTab;
        const isSelected = this.props.isSelected;

        return (
            <ul>
                {
                    this.props.iconName.map(function(icon, i) {
                        return <ListItem iconName={icon} key={icon + i} cTab={cTab} id={"li" + " " + i} isSelected={icon === isSelected}/>;
                    })
                }
            </ul>
        );
    }
});

const ListItem = React.createClass({
    render() {
        return (
            <li isSelected={this.props.isSelected} className={this.props.isSelected ? "active" : ""} onClick={() => this.props.cTab(this.props.iconName)}>
                <span className={this.props.iconName}>{this.props.iconName}</span>
            </li>
        );
    }
});

const Para = React.createClass({
    render() {
        return (
            <p>{this.props.text}</p>
        );
    }
});

const Head = React.createClass({
    render() {
        return (
            <h2>{this.props.text}</h2>
        );
    }
});

const NavComponent = React.createClass({

    getDefaultProps() {
        return {
            iconName: ["home", "page1", "page2"],
            descriptions: [
                {
                    headline: "Sweet Headline, Bro",
                    paragraph: "Capitalise on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line."
                },
                {
                    headline: "Killer Headline, Dude",
                    paragraph: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring."
                },
                {
                    headline: "Amazing Headline, Guy",
                    paragraph: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring."
                },
            ],
        };
    },

    getInitialState() {
        return {
            isSelected: this.props.iconName[0]
        };
    },

    cTab(icon) {
        this.setState({
            isSelected: icon
        });
    },

    render() {

        //if(isSelected ===   )this.props.descriptions[0].headline
        const iconToTabContentMap = {};

        console.log(this.props);
        iconToTabContentMap[this.props.iconName[0]] = this.props.descriptions[0];
        iconToTabContentMap[this.props.iconName[1]] = this.props.descriptions[1];
        iconToTabContentMap[this.props.iconName[2]] = this.props.descriptions[2];

        return (
            <div>
                <List iconName={this.props.iconName} cTab={this.cTab} isSelected={this.state.isSelected} />
                <div className="content">
                    <Head text={iconToTabContentMap[this.state.isSelected].headline} />
                    <Para text={iconToTabContentMap[this.state.isSelected].paragraph} />
                </div>
            </div>
        );
    }

});

export default NavComponent;