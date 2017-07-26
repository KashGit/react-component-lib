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
    accounts: { title: 'Accounts', icon: ic_people },
    templates: {
                title: 'APP TEMPLATES', subMenu:
                             { Motif: { title: 'Motif', icon: ic_format_list_bulleted },
                               Plain: { title: 'Plain', icon: ic_business } 
                             }
               },
    containers: { title: 'CONTAINERS', subMenu: 
                            { 
                                Flex: { title: 'Flex', icon: ic_format_list_bulleted } 
                            }
                }
    };

    const BasicSideNavLite = () =>
        <SideNav
            highlightBgColor="#eee"
            defaultSelected="products"
            highlightColor="#E91E63"
        >            
            { Object.keys(NavMain).map(key => {

                //dynamically created the navs
                if (NavMain[key].subMenu) {
                    return (
                        <div>
                            <SeparatorTitle>
                                <div> {NavMain[key].title}</div>
                            </SeparatorTitle>

                            {Object.keys(NavMain[key].subMenu).map(k => {
                                return (<Nav key={k} id={k}>
                                    <NavIcon><Icon20 icon={NavMain[key].subMenu[k].icon} /></NavIcon>
                                    <NavText> {NavMain[key].subMenu[k].title} </NavText>
                                </Nav>
                                );
                            })}
                        </div>
                    );
                }
                else {
                    return (
                        <Nav key={key} id={key}>
                            <NavIcon><Icon20 icon={NavMain[key].icon} /></NavIcon>
                            <NavText> {NavMain[key].title} </NavText>
                        </Nav>
                    );
                }
            })}
        </SideNav>;


    export default () => <div style={{ display: 'flex' }}>
        <Separator />
        <BaseContainer>
            <BasicSideNavLite />
        </BaseContainer>
    </div>;