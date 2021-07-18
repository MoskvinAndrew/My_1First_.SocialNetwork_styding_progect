import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Nav from "./components/nav/nav";
import {NavLink, Route, withRouter, Redirect, Switch} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import ChatContainer from "./components/Dialogs/DialogItem/Chat/ChatContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/header/headerContainer";
import Login from "./components/Login/login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeAppTC} from "./Redux/app_reducer_test/app-reducer";
import {RootState} from "./Redux/redux-store";
import {Preloader} from "./components/common/Preloader/preloader";
import {Layout, Menu, Breadcrumb} from 'antd';
import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons';
import navCss from "./components/nav/nav.module.css";
import ChatPage from "./pages/ChatPage";

type AppPropsType = {
    initializeAppTC: () => void,
    isInitialized: boolean,
}

const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;


// const ChatPage = React.lazy(()=> import('./pages/ChatPage'))

class App extends React.Component<AppPropsType> {

    // callAllUnhandledErrors = (promiseRejectionEvent:any) => {
    //       alert('someError');                                    // вместо алерта вставим санку для диспатча ошибки в аппРеддюсер
    //
    // }
    componentDidMount() {
        this.props.initializeAppTC();
        // window.addEventListener("somerejection",this.callAllUnhandledErrors);

    };

    componentWillUnmount() {
        // window.removeEventListener("somerejection",this.callAllUnhandledErrors);
    }

    render() {
        if (!this.props.isInitialized) {
            return <Preloader/>
        }
        return (
            <Layout>
                <Header className="header">
                    <div className="logo"/>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{padding: '0 50px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout className="site-layout-background" style={{padding: '24px 0'}}>
                        <Sider className="site-layout-background" width={200}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{height: '100%'}}
                            >
                                <SubMenu key="sub1" icon={<UserOutlined/>} title="Profile">
                                    <Menu.Item key="1">
                                        <NavLink activeClassName={navCss.active} to='/Profile'>Profile</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key="2">
                                        <NavLink activeClassName={navCss.active} to='/Dialogs'>Messages</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key="3">
                                        <NavLink activeClassName={navCss.active} to='/chat'>Chat</NavLink>
                                    </Menu.Item>
                                    {/*<Menu.Item key="4">option4</Menu.Item>*/}
                                </SubMenu>
                                <SubMenu key="sub2" icon={<LaptopOutlined/>} title="Developers">
                                    <Menu.Item key="5">
                                        <NavLink activeClassName={navCss.active} to='/Users'>Users</NavLink>
                                    </Menu.Item>
                                    {/*<Menu.Item key="6">option6</Menu.Item>*/}
                                    {/*<Menu.Item key="7">option7</Menu.Item>*/}
                                    {/*<Menu.Item key="8">option8</Menu.Item>*/}
                                </SubMenu>
                                {/*<SubMenu key="sub3" icon={<NotificationOutlined/>} title="subnav 3">*/}
                                {/*    <Menu.Item key="9">option9</Menu.Item>*/}
                                {/*    <Menu.Item key="10">option10</Menu.Item>*/}
                                {/*    <Menu.Item key="11">option11</Menu.Item>*/}
                                {/*    <Menu.Item key="12">option12</Menu.Item>*/}
                                {/*</SubMenu>*/}
                            </Menu>
                        </Sider>
                        <Content style={{padding: '0 24px', minHeight: 280}}>
                            <Switch>
                                <Route  path= '/My_1First_.SocialNetwork_styding_progect' render={() => <Redirect to={'/Profile'}/>}/>
                                <Route path='/Profile/:userId?' render={() => <ProfileContainer/>}/>
                                <Route path='/Dialogs' render={() => <DialogsContainer/>}/>
                                <Route path='/News' render={() => <News/>}/>
                                <Route path='/Music' render={() => <Music/>}/>
                                <Route path='/users' render={() => <UsersContainer/>}/>
                                {/*<Route exact path='/Chat' render={() => <ChatContainer/>}/>*/}
                                <Route path='/login' render={() => <Login/>}/>
                                <Route path='/chat' render={() => <ChatPage/>}/> /* Сделай саспенс!!!!*/
                                <Route path='*' render={() => <div>404 not found!</div>}/>
                            </Switch>
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>



            // <div className='mainWrapper'>
            //     <HeaderContainer/>
            //     <div className='navAndMain'>
            //         <div className='navContent'><Nav/></div>
            //         <div className='mainContent'>
            //             <Route path='/Profile/:userId?' render={() => <ProfileContainer/>}/>
            //             <Route path='/Dialogs' render={() => <DialogsContainer/>}/>
            //             <Route path='/News' render={() => <News/>}/>
            //             <Route path='/Music' render={() => <Music/>}/>
            //             <Route exact path='/users' render={() => <UsersContainer/>}/>
            //             <Route exact path='/Chat' render={() => <ChatContainer/>}/>
            //             <Route exact path='/login' render={() => <Login/>}/>
            //
            //         </div>
            //     </div>
            // </div>


        );
    }
}

let mapStateToProps = (state: RootState) => {
    return (
        {
            isInitialized: state.app.initialized,

        })
}


export default compose(
    withRouter,
    connect(mapStateToProps, {initializeAppTC}))(App) as React.ComponentType;
