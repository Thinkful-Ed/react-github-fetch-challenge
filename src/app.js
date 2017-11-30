import React from 'react';
import {connect} from 'react-redux';

import {fetchRepos} from './actions';

export class App extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchRepos());
    }

    render() {
        if (this.props.loading) {
            return <div>Loading...</div>;
        } else if (this.props.error) {
            return <div>Error! {this.props.error}</div>;
        }

        const repoNames = this.props.repoNames.map((name, index) => (
            <li key={index}>{name}</li>
        ));
        return <ul>{repoNames}</ul>;
    }
}

export const mapStateToProps = (state, props) => ({
    repoNames: state.repos.map(repo => repo.name),
    loading: state.loading,
    error: state.error
});

export default connect(mapStateToProps)(App);
