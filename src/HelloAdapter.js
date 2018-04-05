import { toVue } from 'vue-svelte-adapter'
import Hello from './Hello.html'

export default toVue(Hello, {
  props: {
    message: String
  }
})
