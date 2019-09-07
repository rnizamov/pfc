import React from 'react';
import { ThemeContext } from '../context/themecontext';

class Mouse extends React.Component {
    constructor(props) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = { x: 0, y: 0 };
    }
  
    static contextType = ThemeContext;

    handleMouseMove(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }
  
    render() {
        let context = this.context;
        return (
            <div 
                style={{ 
                    height: '500px', 
                    backgroundColor: context.theme.background,
                    color: context.theme.foreground
                }} 
                onMouseMove={this.handleMouseMove}
            >
                {this.props.render(this.state)}
            </div>
      );
    }
  }
  
class MouseRenderProp extends React.Component {
    render() {
        const data = this.props.data;
        return (
            <p>{data.x}, {data.y}</p>
        );
    }
}

class MouseTracker extends React.Component {

    render() {
        return (
            <Mouse render={state => ( 
                <MouseRenderProp 
                    data={state}
                /> 
            )}/>
        );
    }
}

export {MouseTracker};