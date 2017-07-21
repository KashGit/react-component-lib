import React from 'react';
import styled from 'styled-components';
import { SideNav } from 'k-react/SideNav';
import { Nav, NavIcon, NavText } from 'k-react/Nav';
import SvgIcon from 'react-icons-kit';
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';
import { ic_business_center } from 'react-icons-kit/md/ic_business_center';
import { ic_format_list_bulleted } from 'react-icons-kit/md/ic_format_list_bulleted';
import { ic_people } from 'react-icons-kit/md/ic_people';

const Icon20 = props => <SvgIcon size={props.size || 20} icon={props.icon} />;

const BaseContainerResponsive = styled.div`
            display: inline-block;
            paddingTop: 16;
            paddingBottom: 16;
            fontFamily: Roboto;
            width: 240;
            background: #FFF;
            color: #444;
            boxShadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)
`;

const Title = styled.div`
    padding: 12px;
`;

const Separator = styled.div`
    padding-right: 12px;
`;

const SeparatorTitleContainer = styled.div`
    font-size: 14px;
    color: #AAA;
    margin: 10px 12px;
    padding: 4px 12px 2px;
    @media (max-width: 768px) {
		display: none;
	}
`;

const SeparatorTitle = props => {
    return (
        <SeparatorTitleContainer>
            {props.children}
            <hr style={{ border: 0, borderTop: '1px solid #E5E5E5' }} />
        </SeparatorTitleContainer>
    );
};

const BaseContainer = props => {
    return (
        <BaseContainerResponsive>
        {props.children}
        </BaseContainerResponsive>
    )
}

const NavMain = {
    dashboard: { title: 'Dashboard', icon: ic_aspect_ratio },
    templates: { title: 'App Templates', icon: ic_business_center },
    containers: { title: 'Containers', icon: ic_format_list_bulleted }
};

const BasicSideNavLite = () =>
    <SideNav
        highlightBgColor="#eee"
        defaultSelected="products"
        highlightColor="#E91E63"
    >
        <SeparatorTitle><div>ENDPOINT ACTIONS</div></SeparatorTitle>
        {Object.keys(NavMain).map(key => {
            //dynamically created the navs
            return (
                <Nav key={key} id={key}>
                    <NavIcon><Icon20 icon={NavMain[key].icon} /></NavIcon>
                    <NavText> {NavMain[key].title} </NavText>
                </Nav>
            );
        })}
        <SeparatorTitle>
            <div> SETTINGS</div>
        </SeparatorTitle>
        <Nav id="customers">
            <NavIcon><Icon20 icon={ic_people} /></NavIcon>
            <NavText> User Management </NavText>
            <Nav id="dashboard2">
                <NavIcon><Icon20 size={16} icon={ic_aspect_ratio} /></NavIcon>
                <NavText> Search </NavText>
            </Nav>
            <Nav id="sales2">
                <NavIcon><Icon20 size={16} icon={ic_business} /></NavIcon>
                <NavText> History </NavText>
            </Nav>
        </Nav>
        <Nav id="sales">
            <NavIcon><Icon20 icon={ic_business} /></NavIcon><NavText> Registries </NavText>
        </Nav>
    </SideNav>;


export default () => <div style={{ display: 'flex' }}>
    <Separator />
    <BaseContainer>
        <BasicSideNavLite />
    </BaseContainer>
</div>;