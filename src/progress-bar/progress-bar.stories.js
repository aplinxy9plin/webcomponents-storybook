import {storiesOf} from '@storybook/polymer';
import {withKnobs, number, boolean, color} from '@storybook/addon-knobs/polymer';

import './progress-bar.html';

const percentageRange = {
  range: true,
  min: 0,
  max: 100,
  step: 1,
};

storiesOf('Progress bar', module)
  .addDecorator(withKnobs)
  .add('default view', () => '<progress-bar value="50"></progress-bar>')
  .add('with Knobs!', () => {
    const el = document.createElement('progress-bar');
    el.value = number('Percentage', 50, percentageRange);
    el.reverse = boolean('Reversed', false);
    el.hidePercentage = boolean('Hide percentage', false);
    return el;
  })
