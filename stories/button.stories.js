import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CallToAction from '../components/form/cta-button';
// import { withInfo } from '@storybook/addon-info';

storiesOf('Building Blocks | Button', module)
    // .addDecorator(withInfo({
    //     inline: true,
    // }))
    .add('Call to Action', () => (
        <CallToAction
            label="Submit"
            onClick={action('button-click')} />
    ));