import { wrapFunctional } from './utils'

export { default as Logo } from '../../frontend/components/Logo.vue'

export const LazyLogo = import('../../frontend/components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
