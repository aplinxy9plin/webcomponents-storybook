import {storiesOf} from '@storybook/polymer';
import {withKnobs} from '@storybook/addon-knobs/polymer';

import './button.html';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const el = document.createElement('button-default');
    el.name = "Test btn"
    return el;
  })
