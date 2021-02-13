import React, { useState, useEffect, Component } from 'react';
import Row from 'react-bootstrap/Row';
import CustomSideBar from '../components/sidebar';
import workspace from '../redux/actions/workspace'
import Workspace from '../components/workspace';
import { Container, Col } from 'react-bootstrap';
import useToken from '../functions/useToken';
import { connect } from 'react-redux';

const methods = require('../functions/server');

class MainClient extends Component {
    
    // useEffect(async () => {
    //     if(workspace){
    //         let response = await methods.workspaces(token.user);
    //         setWorkspace(prev => [...prev, response]);
    //     }
    //     setLoading(false);
    // }, []);

    // const logOut = () => {
    //     localStorage.clear();
    // };

    componentDidMount(){
        this.props.getWorkspace();
    }

    render(){
        console.log(this.props)
        return(
            <div style={{ height: '100%' }} className={'bg-secondary'}>
                <Container style={{ height: '100%' }} className={'mx-0 px-0'}>
                    <Row  style={{ height: '100%' }}>
                        <Col>
                            {/* <CustomSideBar className='fill-window'
                                workspaces={ workspace }
                                onClick={ logOut }
                            /> */}
                        </Col>
                        <Col md={8}>
                            <Workspace />
                        </Col>
                    </Row>
                </Container>
            </div> 
        )
    }
}

const mapStateToProps = (reducers) => {
    return reducers.reducer;
};

export default connect(mapStateToProps, getWorkspace)(MainClient);

// const methods = require('../functions/server');

// export default function MainClient() {
//     const {token, setToken} = useToken();
//     const [isLoading, setLoading] = useState(true);
//     const [workspace, setWorkspace] = useState([]);
    
//     useEffect(async () => {
//         if(workspace){
//             let response = await methods.workspaces(token.user);
//             setWorkspace(prev => [...prev, response]);
//         }
//         setLoading(false);
//     }, []);

//     const logOut = () => {
//         localStorage.clear();
//     }

//     if (isLoading){
//         return <div> Loading... </div>
//     }
//     else
//         return (
//             <div style={{ height: '100%' }} className={'bg-secondary'}>
//                 <Container style={{ height: '100%' }} className={'mx-0 px-0'}>
//                     <Row  style={{ height: '100%' }}>
//                         <Col>
//                             <CustomSideBar className='fill-window'
//                                 workspaces={ workspace }
//                                 onClick={ logOut }
//                             />
//                         </Col>
//                         <Col md={8}>
//                             <Workspace />
//                         </Col>
//                     </Row>
//                 </Container>
//             </div> 
//         );
// }