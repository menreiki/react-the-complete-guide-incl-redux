import React from 'react';
import Aux from '../../hoc/Auxiliary'

const layout = props => (
  // or React.Fragment
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>
      {props.children}
    </main>
  </Aux>
);

export default layout;