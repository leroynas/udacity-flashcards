import React from 'react';
import PropTypes from 'prop-types';

import Flex from '../Flex';
import Card from '../Card';

import AbsoluteWrapper from './AbsoluteWrapper';

function Cards({ cards, children }) {
  return (
    <Flex fill>
      <AbsoluteWrapper justifyContent="flex-start" noBottom>
        {cards > 0 && (
          <AbsoluteWrapper>
            {cards > 1 && (
              <AbsoluteWrapper>
                <Card width={80} fixedAspect shade="shade2" />
              </AbsoluteWrapper>
            )}

            <Card width={90} fixedAspect shade="shade1" />
          </AbsoluteWrapper>
        )}

        {children}
      </AbsoluteWrapper>
    </Flex>
  );
}

Cards.propTypes = {
  cards: PropTypes.number.isRequired,
  children: PropTypes.any,
};

export default Cards;
