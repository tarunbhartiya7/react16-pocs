import React, { Component } from 'react';

export default class FetchRandomUser extends Component {
    state = {
        loading: true,
        people: []
    };

    async componentDidMount() {
        const url = "https://api.randomuser.me/?results=5";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ people: data.results, loading: false });
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.people.length) {
            return <div>didn't get a person</div>;
        }

        return (
            <div className="container">
                {this.state.people.map(person => (
                    <div key={person.login.uuid}>
                        <div>{person.name.title}</div>
                        <div>{person.name.first}</div>
                        <div>{person.name.last}</div>
                        <img alt={`profile of ${person.login.uuid}`} src={person.picture.large} />
                    </div>
                ))}
            </div>
        )
    }
}
