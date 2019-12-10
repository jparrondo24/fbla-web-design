import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

export default class HighFlyers extends React.Component {
  render() {
    return (
      <div className="high-flyers">
        <Container fluid>
          <div className="text-heading">
            <h1>High Flyers Loyalty Program <FontAwesomeIcon icon={faGlobeAmericas} /></h1>
            <h2>Fly higher and further for cheaper and better.</h2>
          </div>
          <div className="text-body">
            <h2>From Liftoff to Landing...</h2>
            <p>With our award winning-loyalty program, we make sure that you make the most from your decision to fly high with us.
              <br />
              You start earning our High Points and miles from the second you take off with us for the first time. Keep coming back for more of our amazing travel experiences and you can start earning enough points and miles for discounts, check-in and boarding perks, and even cash-back with any of our affiliated credit cards. Keep earning points to go from our basic Ground tier to the Trees, the Mountain, and eventually the premium Sky High tier as all of the rewards increase exponentially higher!
              <br />
              For more details on how our program would specifically benefit you, feel free to shoot us an email us at 
            </p>
          </div>
        </Container>
      </div>
    );
  }
}