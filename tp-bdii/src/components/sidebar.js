import React, { useEffect, useState } from 'react';
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
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import styles from '../css/index.module.css';
import 'react-pro-sidebar/dist/css/styles.css';

import useWorkspace from '../functions/useWorkspace';
import useToken from '../functions/useToken';
import { createWorkspace, workspaces } from '../functions/server';


export default function CustomSideBar(props){
    
    //let array = props.workspaces[0];
    const {workspace, setWorkspace} = useWorkspace();
    const {token, setToken} = useToken();
    const [show, setShow] = useState(false);
    const [newWorkspace, setNewWorkspace] = useState();
    const [workspaceArray, setWorkspaceArray] = useState(props.workspaces[0]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    if(!workspace){
        setWorkspace(workspaceArray[0]);
    }
    console.log(workspace);

    const callCreateWorksapce = async () => {
        const result = await createWorkspace(token.user);
        const workspace_array = await workspaces(token.user);
        setWorkspaceArray(workspace_array);
        setShow(false);
    }
    
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
                            workspaceArray.map(item => {
                                return <MenuItem
                                            onClick={() => {
                                                setWorkspace(item)
                                                alert(`Se ha cambiado el Workspace a: ${item}`)
                                            }}
                                        >
                                            {item}
                                        </MenuItem>
                            })
                        }
                    </SubMenu>
                    <MenuItem
                        icon={<FaPlusCircle />}
                        onClick={ handleShow }
                    >
                        Nueva Base de Datos
                    </MenuItem>
                    {/* Modal de Creacion de Workspace */}
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Nueva Base de Datos</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <InputGroup size="sm" className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Nombre DB:</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl 
                                    aria-label="Small" 
                                    aria-describedby="inputGroup-sizing-sm"
                                    value={ newWorkspace }
                                    onChange={ e => setNewWorkspace(e.target.value) }
                                />
                            </InputGroup>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button 
                                variant="secondary"
                                onClick={handleClose}
                            >
                                Close
                            </Button>
                            <Button 
                                variant="primary"
                                onClick={ callCreateWorksapce }
                            >
                                Crear
                            </Button>
                        </Modal.Footer>
                    </Modal>
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
