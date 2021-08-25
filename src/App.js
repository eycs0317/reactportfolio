import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";


class App extends React.Component {
  state = {
    currentPage: "About"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === 'Contact') {
      return <ContactMe />;
    } else {
      return <Projects />
    }
  };

  render() {
    return (
      <div>
      <Header
        currentPage={this.state.currentPage}
        handlePageChange={this.handlePageChange}
      />
      {this.renderPage()}
      <Footer />
      </div>
    );
  }

}

export default App;
