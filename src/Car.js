import React from "react"

class Car extends React.Component{
  constructor (props){
    super(props)
    this.state = {color:"绿色"};
    this.buttonHandler = this.buttonHandler.bind(this)
  }

  componentDidMount(){
    console.log('车子确实又被渲染')
  }

  componentDidUpdate(){
    console.log("车子状态已更新")
  }

  buttonHandler(){
    this.setState({
      color:"白色"
    })
  }

  render(){
    return (
      <div>
        <h2>我是一台{this.props.brand}{this.state.color}的车子</h2>
        <button onClick={this.buttonHandler}>改变颜色</button>
      </div>
    )
  }
}

export default Car
