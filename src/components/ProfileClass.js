import React from 'react';

class Profile extends React.Component{

    constructor(props){
        super(props);
        // create State
        // this.state = {
        //     count: 0,
        //     count2: 0,
        // };
        this.state = {
            userInfo: {
            name: "dummy name",
            location: "dummy location",
            },
        };
        console.log("child - constructor "+ this.props.name); 
    }

    async componentDidMount()  {
        // best place to mae an api call
        const data = await fetch("https://api.github.com/users/KhushiDhongadi25");
        const json = await data.json();
        this.setState({
            userInfo: json,
        })

        console.log("child - componentDidMount "+this.props.name); 
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.count == prevState.count ||
            this.state.count == prevState.count
    ) {
        // code
    }
        console.log("component did update");
    }

    componentWillUnmount(){
        console.log("component will unmount");
    }

    render() {
        console.log("child - render "+this.props.name); 
        return (
            <div>
            <h1>profile class component</h1>
            {/* <h2>name: {this.props.name}</h2>
            <h3>count: {this.state.count2} </h3> */}
            <img className='menuImg' src={this.state.userInfo.avatar_url}></img>
            <h2>Name: {this.state.userInfo.login}</h2>
            <h3>Id: {this.state.userInfo.id} </h3>
            <button onClick={()=> {
                // we do not mutate state directly
                // we will never do this.state = something
                this.setState({
                    count2: 1,
                });
            }}
            >
                setCount
            </button>
            </div>
    );
    }
}

export default Profile;


// -----RENDER PHASE--------
// parent - constructor
// parent - render
//    first child - constructor
//    first child - render
//    second child - constructor
//    second child - render

// ------COMMIT PHASE---------
// DOM UPDATED FOR CHILDREN

//    first child - componentDidMount
//    second child - componentDidMount
// parent - componentDidMount