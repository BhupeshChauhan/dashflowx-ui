import { addons } from '@storybook/manager-api';
import {create} from '@storybook/theming'

addons.setConfig({
    theme: create({
        base: 'dark',
        // Typography
        fontBase: '"Open Sans", sans-serif',
        fontCode: 'monospace',
      
        brandTitle: 'My custom Storybook',
        brandUrl: 'https://dashflowx-ui.vercel.app/',
        brandImage: '/DashflowLogoWhite.png',
        brandTarget: '_self'
      })
})