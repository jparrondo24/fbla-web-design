import React from 'react';
import BlueSkyVideo from '../videos/blue-sky.mp4';
import Container from 'react-bootstrap/Container';

import '../stylesheets/home.css';

export default class Home extends React.Component {
  render() {
    return (
	  <div className="home">
	  	<Container fluid={true}>
	      <video id="landing-video" loop muted autoPlay={true} playsInline={true}>
		    <source src={BlueSkyVideo} type="video/mp4" />
			  Video not working
		  </video>
		  <h1>The rest of the site</h1>
	    </Container>
	    <Container className="home-body">
	      <h1>The rest of the site</h1>
	    </Container>
	  </div>
	);
  }
}
