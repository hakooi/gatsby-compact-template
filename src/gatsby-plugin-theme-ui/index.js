import { tailwind } from '@theme-ui/presets'

export default {
  ...tailwind,
  styles: {
    ...tailwind.styles,
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
