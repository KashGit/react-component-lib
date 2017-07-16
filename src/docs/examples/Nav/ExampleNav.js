import React from 'react';
import Nav, { NavIcon, NavText }  from '../../../components/Nav/Nav';
import SvgIcon from 'react-icons-kit';
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';

const Icon20 = props => <SvgIcon size={props.size || 20} icon={props.icon} />;


export default function ExampleNav() {
    return (
    <div> 
        <Nav id="dashboard">
            <NavIcon><Icon20 icon={ic_aspect_ratio} /></NavIcon>
            <NavText> Dashboard </NavText>
        </Nav>
        <Nav id="sales">
            <NavIcon><Icon20 icon={ic_business} /></NavIcon><NavText> Sales </NavText>
        </Nav>
    </div>
    )
}