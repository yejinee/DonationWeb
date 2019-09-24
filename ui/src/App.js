import React, { Component } from 'react';
import { Home, Signup, Login, Donation, Donation2,Partner,Donacard,Donacoin,
  Donadone,Groupintroduction,Camparegi,Campalist,Buy,Shoppingbasket,Mycampalist,Mydonahistory,
  Myinfo,Groupintroedit,Buydone,Coincharge,Coincharge2,Coincharge3 } from './pages';
import { Route, Switch, withRouter } from 'react-router-dom';
import ResponsiveContainer from '../src/pages/ResponsiveContainer';
import Footer from './pages/Footer';
class App extends Component {
  state = {
    Home : true
  }
  componentDidMount() {
     this.props.match.isExact === true ? this.setState({Home:true}) : 
     this.setState({Home:false});

}
componentDidUpdate(prevProps, prevState) {
    if(prevProps.match.isExact !== this.props.match.isExact){
     this.props.match.isExact === true ? this.setState({Home:true}) : 
     this.setState({Home:false});
    }
}
  render() {
    return (
      <>
        <ResponsiveContainer Home = {this.state.Home}/>
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/donation" component={Donation} />
          <Route path="/donation2" component={Donation2} />
          <Route path="/partner" component={Partner} />
          <Route path="/donacard" component={Donacard} />
          <Route path="/donacoin" component={Donacoin} />
          <Route path="/donadone" component={Donadone} />
          <Route path="/groupintroduction" component={Groupintroduction} />
          <Route path="/groupintroedit" component={Groupintroedit}/>
          <Route path="/camparegi" component={Camparegi} />
          <Route path="/campalist" component={Campalist} />
          <Route path="/buy" component={Buy} />
          <Route path="/shoppingbasket" component={Shoppingbasket} />
          <Route path="/mycampalist" component={Mycampalist} />
          <Route path="/mydonahistory" component={Mydonahistory} />
          <Route path="/mydonahistory" component={Mydonahistory} />
          <Route path="/myinfo" component={Myinfo} />
          <Route path="/coincharge" component={Coincharge} />
          <Route path="/coincharge2" component={Coincharge2} />
          <Route path="/coincharge3" component={Coincharge3} />
          <Route path="/buydone" component={Buydone} />


        </Switch>
        <Footer/>
      </>
    );
  }
}
export default withRouter(App);
