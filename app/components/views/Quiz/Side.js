import React from 'react';
import PropTypes from 'prop-types';

import Card from '../../ui/Card';
import Heading from '../../ui/Heading';

function Side({ title, ButtonComponent }) {
  return (
    <Card fixedAspect justifyContent="center">
      <Heading size="small" spacing="xsmall" textAlign="center">
        {title}
      </Heading>

      <ButtonComponent />
    </Card>
  );
}

Side.propTypes = {
  title: PropTypes.string.isRequired,
  ButtonComponent: PropTypes.elementType,
};

export default Side;
