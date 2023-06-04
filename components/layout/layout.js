const { Fragment } = require("react");

import MainNavigation from "../layout/main-navigation";
import Footer from "../layout/footer";

function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
