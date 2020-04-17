import { swiss } from '@theme-ui/presets'

export default {
  ...swiss,
  styles: {
    ...swiss.styles,
  },
  colors: {
    text: '#000',
    background: '#fff',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
      },
    },
  },
}
