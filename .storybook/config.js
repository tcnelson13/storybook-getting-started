import { addParameters, configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import crfTheme from './crfTheme';

import '../bootstrap-reboot.min.css';
import '../bootstrap.css';
import '../bootstrap-grid.css';
import '../main.css';

addParameters({
    options: {
        theme: crfTheme
    }
})

addDecorator(withInfo({
    inline: true
}));

addDecorator(withKnobs);

// configure(loadStories, module);