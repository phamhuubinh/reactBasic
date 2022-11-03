import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from "../../assets/images/7a75b03474b38eedd7a2.jpg";
import { connect } from 'react-redux';

class Home extends React.Component {
    componentDidMount() {
        /* setTimeout(() => {
            this.props.history.push('/todo')
        }, 3000) */
    }

    handleDeleteUser = (user) => {
        this.props.deleteUserRedux(user);
    }

    handleCreateUser = () => {
        this.props.addUserRedux();
    }

    render() {
        console.log('>>> check props redux: ', this.props.dataRedux);
        let listUsers = this.props.dataRedux;

        return (
            <>
                <div>
                    Hello world
                </div>
                <div>
                    <img src={logo} alt="logo" style={{width: '300px', heigh: '300px', marginTop: '20px', borderRadius: '50%'}} />
                </div>
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name} &nbsp; &nbsp;
                                    <span onClick={() => this.handleDeleteUser(item)}>x</span>
                                </div>
                            )
                        })
                    }
                    <button onClick={() => this.handleCreateUser()}>Add new</button>

                </div>
            </>
        )
    }
}

// export default withRouter(Home);

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({type: 'DELETE_USER', payload: userDelete}),
        addUserRedux: () => dispatch({type: 'CREATE_USER'}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));