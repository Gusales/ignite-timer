import 'styled-components'
import { defaultTheme } from '../styles/theme/default'

type ThemeType = keyof typeof defaultTheme

declare module 'styled-component' {
  export interface DefaultTheme extends ThemeType {}
}
