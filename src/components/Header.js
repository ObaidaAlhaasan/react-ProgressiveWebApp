import React, { PureComponent } from "react";
import CounterButton from './counterButton';
class Header extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return false;
  // }
  render() {

    return (
      <div>
        <h1 className="f1 logo tc">
          RoboFriends
        </h1>

        <CounterButton color={'red'} />

      </div>

    )
  }
}

export default Header;