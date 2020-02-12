import React from 'react'
import Child from '../Child/Child'
import newhope from './pictures/newhope.jpg'
import returnofthejedi from './pictures/returnofthejedi.jpg'
import phantommenace from './pictures/phantommenace.jpg'
import clonewars from './pictures/clonewars.jpeg'


class Lifecycle extends React.Component{
constructor(props){
    super()
    this.state={
        expression: "Greetings from constructor",
        render: true,
        update: "Unclicked",
        allExpressions: [],
        hasError: false,
        imgURL: newhope
    }
    console.log("constructor")
}

// static getDerivedStateFromProps(props, state) {
//     if(state.render === false){
//         return null
//     }
//     console.log("getDerivedStateFromProps")
//     return {
//         expression : props.expression,
//         imgURL: props.imgURL
//     }
// }

// callFromRender(){
//     this.setState({
//         expression: "It's me render",
//         imgURL: returnofthejedi,
//         render: false
//     })
// }

// componentDidMount() {
//     this.setState({
//         expression: "Components have mounted!",
//         imgURL: phantommenace
//     })
//     console.log("componentDidMount")
// }

// updateExpression(){
//     this.setState({
//         expression: "Updated the expression",
//         update: "clicked",
//         imgURL: clonewars
//     })
// }

// shouldComponentUpdate(){
//     console.log("shouldComponentUpdate")
//     return true;
// }

// getSnapshotBeforeUpdate(prevProps, prevState) {
//     console.log("getsnapshotbeforeupdate")
//     document.getElementById('previous').innerHTML = prevState.expression
//     return prevState;

// }

// componentDidUpdate(prevProps, prevState, snapshot){
//     this.state.allExpressions.push(snapshot.expression) 
// }

// static getDerivedStateFromError(error){
//     console.log("getDerivedStateFromError")
//     return {hasError: true}
// }

// componentDidCatch(error, info){
//     console.log(error)
// }

render(){
    {console.log("rendered")}
    // if(this.state.render){
    //     this.callFromRender();
    // }
    return (
        <div>
            <h1>{this.state.expression}</h1>
            <button onClick={() => {
                this.updateExpression()
            }
            }>Change Expression</button>
            <h1 id="previous">{this.state.lastExpression}</h1>
            <img src={this.state.imgURL} alt="pic" width='800' height='800'/>
            {
                // this.state.hasError ?<h1>Something has gone wrong</h1>:<Child /> 
            }
        </div>)
    }
}


export default Lifecycle