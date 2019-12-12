import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThList, faGlobeAmericas, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';

import objectFitPollyfill from 'objectFitPolyfill';

import BlueSkyVideo from '../videos/blue-sky.mp4';
import PlaneLogo from '../plane-logo.png';
import '../stylesheets/home.css';

export default class Home extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      documentClassName: "not-loaded"
    }
  }
  
  componentWillMount() {
    this.setState({
      documentClassName: "loaded"
    });
	}

	render() {
    return (
			<div className={"home " + this.state.documentClassName}>
				<Container fluid>
					<video
						className="media"
						id="landing-video" 
						loop
						muted
						autoPlay={true}
						playsInline={true}
						data-object-fit="cover"
					>
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
							<h2>Always soaring higher</h2>
						</Col>
					</Row>
				</Container>
				<Container fluid className="home-body">
					<Row className="no-gutters">
						<Col
							sm={12}
							md={6}
						>
							<h1>Come Fly With Us</h1>
						</Col>
						<Col
							sm={12}
							md={6}
						>
							<p>With a variety of flights ready for your time, location, and destination, you won't have any trouble booking a flight with us.</p>
							<Link to="/flight-schedules"><Button variant="light">Browse our Flight Schedules  <FontAwesomeIcon icon={faThList}/></Button></Link>
						</Col>
					</Row>
					<Row className="no-gutters">
						<Col
							sm={{span: 12, order: 1}}
							md={{span: 6, order: 2}}
						>
							<h1>The Sky's the Limit</h1>
						</Col>
						<Col
							sm={{span: 12, order: 2}}
							md={{span: 6, order: 1}}
						>
							<p>Our High Flyers loyalty program makes it our pleasure to keep you reaching for the skies with us.</p>
							<Link to="/high-flyers"><Button variant="light">Discover High Flyers  <FontAwesomeIcon icon={faGlobeAmericas} /></Button></Link>
						</Col>
					</Row>
					<Row className="no-gutters">
						<Col
							sm={12}
							md={6}
						>
							<h1>We're Expanding our Crew</h1>
						</Col>
						<Col
							sm={12}
							md={6}
						>
							<p>Interested in a career with us among the clouds? </p>
							<Link to="/careers"><Button variant="light">See our Oppurtunities  <FontAwesomeIcon icon={faUser} /></Button></Link>
						</Col>
					</Row>
					<div className="home-footer">
						<Image 
							alt="Sky High Airlines Logo"
							src={PlaneLogo} 
							className="mx-auto d-block"
						/>
						<hr />
						<h3>Sky High Airlines</h3>
						<span>
							<a target="_blank" href="https://www.facebook.com/AmericanAirlines/">
								<FontAwesomeIcon icon={faFacebookF} />
							</a> &nbsp;
							<a target="_blank" href="https://twitter.com/AmericanAir">
								<FontAwesomeIcon icon={faTwitter} />
							</a> &nbsp;
							<a target="_blank" href="https://www.instagram.com/americanair/">
								<FontAwesomeIcon icon={faInstagram} />
							</a> &nbsp;
							<a target="_blank" href="https://www.linkedin.com/company/american-airlines/">
								<FontAwesomeIcon icon={faLinkedin} />
							</a>
						</span>
					</div>
				</Container>
			</div>
		);
  }
}
