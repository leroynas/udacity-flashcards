import React from 'react';
import PropTypes from 'prop-types';

import Card from '../../ui/Card';
import Text from '../../ui/Text';
import Input from '../../ui/Input';

function Side({ title, value, setValue, ButtonComponent }) {
  return (
    <Card fixedAspect justifyContent="center">
      <Text size="small" spacing="xsmall">
        {title}
      </Text>

      <Input
        center
        multiline
        fontFamily="secondary"
        size="large"
        placeholder={title}
        value={value}
        onChangeText={text => setValue(text)}
      />

      <ButtonComponent />
    </Card>
  );
}

Side.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
  setValue: PropTypes.func.isRequired,
  ButtonComponent: PropTypes.elementType,
};

export default Side;
