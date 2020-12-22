import React, { useEffect } from 'react';
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
import { FaPlusCircle } from 'react-icons/fa';

import styles from '../css/index.module.css';
import 'react-pro-sidebar/dist/css/styles.css';

import useWorkspace from '../functions/useWorkspace';


export default function CustomSideBar(props){
    
    const array = props.workspaces[0];
    const {workspace, setWorkspace} = useWorkspace();

    if(!workspace){
        setWorkspace(array[0]);
    }
    console.log(workspace);
    
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
                        {
                            array.map(item => {
                                return <MenuItem
                                            onClick={() => setWorkspace(item)}
                                        >
                                            {item}
                                        </MenuItem>
                            })
                        }
                        <MenuItem>Database 1</MenuItem>
                        <MenuItem>Database 2</MenuItem>
                    </SubMenu>
                    <MenuItem
                        icon={<FaPlusCircle />}
                    >
                        Nueva Base de Datos
                    </MenuItem>
                    <MenuItem
                        icon={<FiLogOut/>}
                        onClick={ () => props.onClick() }
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
