import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        return (
            <div className="d-flex p-4">
                <div className="mr-4">
                    <h1 className="display-4">Users</h1>
                    <div className="input-group mb-3">
                        <input type="text" name="new_user" className="form-control" />
                        <button type="button" onClick={this.onAddUser.bind(this)} className="btn btn-primary ml-1">Добавить</button>
                    </div>
                    <ul className="list-group">
                        {
                            this.props.users.map((value, index) => {
                                return <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>{value}
                                    <button type="button" data={value} onClick={this.onRemoveUser.bind(this)} className="btn btn-sm btn-danger">Удалить</button>
                                </li>
                            })
                        }
                    </ul>
                </div>

                <div className="ml-4">
                    <h1 className="display-4">Admins</h1> 
                    <div className="input-group mb-3">
                        <input type="text" name="new_admin" className="form-control" />
                        <button type="button" onClick={this.onAddAdmin.bind(this)} className="btn btn-primary ml-1">Добавить</button>
                    </div>
                    <ul className="list-group">
                        {
                            this.props.admins.map((value, index) => {
                                return <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>{value}
                                    <button type="button" data={value} onClick={this.onRemoveAdmin.bind(this)} className="btn btn-sm btn-danger">Удалить</button>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }

    onAddUser() {
        let name = document.getElementsByName("new_user")[0].value;
        this.props.onAddUser(name);
    }

    onRemoveUser(e) {
        let name = e.target.getAttribute("data");
        this.props.onRemoveUser(name);
    }

    onAddAdmin() {
        let name = document.getElementsByName("new_admin")[0].value;
        this.props.onAddAdmin(name);
    }

    onRemoveAdmin(e) {
        let name = e.target.getAttribute("data");
        this.props.onRemoveAdmin(name);
    }
}

export default connect(
    state => ({
        users: state.users.filter(item => item.includes(state.filterList)),
        admins: state.admins.filter(item => item.includes(state.filterList))
    }),
    dispatch => ({
        onAddUser: (name) => {
            dispatch({ type: "ADD_USER", payload: name })
        },
        onRemoveUser: (name) => {
            dispatch({ type: "REMOVE_USER", payload: name })
        },
        onAddAdmin: (name) => {
            dispatch({ type: "ADD_ADMIN", payload: name })
        },
        onRemoveAdmin: (name) => {
            dispatch({ type: "REMOVE_ADMIN", payload: name })
        },
    })
)(Home);