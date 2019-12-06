import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import BlueSkyVideo from '../videos/blue-sky.mp4';
import PlaneLogo from '../plane-logo.png';
import '../stylesheets/home.css';

export default class Home extends React.Component {
  render() {
    return (
	  <div className="home">
	  	<Container fluid>
	      <video id="landing-video" loop muted autoPlay={true} playsInline={true}>
		    <source src={BlueSkyVideo} type="video/mp4" />
			  Video not working
		  </video>
				<Row className="align-items-center" id="landing-video-overlay">
					<Col
						xs={{span: 8, offset: 2, order: 2}}
						md={{span: 5, offset: 1, order: 1}}
						lg={{span: 4, offset: 2}}
					>
						<Image className="fade-and-zoom-in mx-auto d-block" id="landing-logo" src={PlaneLogo} alt="Sky High Airlines Logo" fluid />
					</Col>
					<Col className="fade-in text-center"
						xs={{span: 8, offset: 2, order: 1}}
						md={{span: 5, offset: 0, order: 2}}
						lg={4}
					>
						<h1>Sky High Airlines</h1>
						<h2>Always reaching higher</h2>
					</Col>
				</Row>
	    </Container>
	    <Container className="home-body">
	      <Row>
					<Col>
						<h1>Come Fly With Us</h1>
					</Col>
					<Col>
						<p>With a variety of flights ready for your time, location, and destination, you won't have any trouble booking a flight with us.</p>
						<Button>Browse our Flight Schedules</Button>
					</Col>
				</Row>
				<Row>
					<Col>
						<h1>The Sky's the Limit</h1>
					</Col>
					<Col>
						<p>Our High Flyers loyalty program makes it our pleasure to keep you reaching for the skies with us.</p>
						<Button>Browse our Flight Schedules</Button>
					</Col>
				</Row>
				<Row>
					<Col>
						<h1>We're Expanding our Crew</h1>
					</Col>
					<Col>
						<p>Interested in a career with us among the clouds? </p>
						<Button>Browse our Flight Schedules</Button>
					</Col>
				</Row>
	    </Container>
	  </div>
	);
  }
}
