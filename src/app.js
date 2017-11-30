import React from 'react';
import {connect} from 'react-redux';

import {fetchRepos} from './actions';

export class App extends React.Component {
    componentDidMount() {
        //        this.props.dispatch(fetchRepos());
    }

    render() {
        if (this.props.loading) {
            return <div>Loading...</div>;
        } else if (this.props.error) {
            return <div>Error! {this.props.error}</div>;
        }

        const repos = this.props.repos.map((repo, index) => (
            <li key={index}>{repo}</li>
        ));
        return <ul>{repos}</ul>;
    }
}

export const mapStateToProps = (state, props) => ({
    repos: state.repos,
    loading: state.loading,
    error: state.error
});

export default connect(mapStateToProps)(App);
