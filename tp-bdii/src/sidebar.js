import React from 'react';
import { 
    ProSidebar, 
    Menu, 
    MenuItem, 
    SubMenu, 
    SidebarFooter,
    SidebarContent,
    SidebarHeader
} from 'react-pro-sidebar';
import { SiRedis } from 'react-icons/si';
import { FiDatabase, FiMenu, FiLogOut } from 'react-icons/fi';

import styles from './css/index.module.css';
import 'react-pro-sidebar/dist/css/styles.css';

export default class CustomSideBar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            sidebarOpen: true
        }

        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    render() {
        return(
           <ProSidebar style={ styles.sidebar }>
               <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                    REDIS
                    </div>
                </SidebarHeader>

               <SidebarContent>
                    <Menu iconShape='circle'>
                        <MenuItem
                            icon={<FiMenu />}
                        > 
                            Menu
                        </MenuItem>
                        <SubMenu 
                            title='Data Bases'
                            icon={<FiDatabase />}
                        >
                            <MenuItem>Database 1</MenuItem>
                            <MenuItem>Database 2</MenuItem>
                        </SubMenu>
                        <MenuItem
                            icon={<FiLogOut/>}
                            onClick={ () => this.props.onClick() }
                        >
                            Cerrar sesion
                        </MenuItem>
                    </Menu>
               </SidebarContent>
                 
                <SidebarFooter style={{ textAlign: 'center' }}>
                <div
                    className="sidebar-btn-wrapper"
                    style={{
                        padding: '20px 24px',
                    }}
                >
                    <SiRedis />
                    <p> Redis </p>
                </div>
               </SidebarFooter>
           </ProSidebar>
        );
    }
}
