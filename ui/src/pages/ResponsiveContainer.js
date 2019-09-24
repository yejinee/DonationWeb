import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';
import React,{Component} from 'react';
import { withRouter } from 'react-router-dom';

class ResponsiveContainer extends Component {
    render(){
        const {children, Home} = this.props;
        return(
            <div>
            <DesktopContainer Home = {Home}>{children}</DesktopContainer>
            <MobileContainer  Home = {Home}>{children}</MobileContainer>
          </div>
        )
    }
}
export default withRouter(ResponsiveContainer);