import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

function Accordiom( {description} ) {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Ver mais</Accordion.Header>
        <Accordion.Body>
          {description}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

Accordiom.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Accordiom;