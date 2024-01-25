import React from "react";
import PropTypes from "prop-types";
import Navbar from "../Navbar/Navbar";
import TopBar from "../TopBar/TopBar";
import styled from "styled-components";
import Footer1 from "../Footer1/Footer1";
function Layout({ children }) {
  const Topbar = styled.div``;
  return (
    <div>
      <main>{children}</main>
      <Topbar>
        <TopBar/>
        </Topbar>
      <header>
        <Navbar/>
      </header>
      <footer><Footer1/></footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
