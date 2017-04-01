/**
 * rollup-plugin-inject-template
 * @module
 */
import { createFilter } from 'rollup-pluginutils';
import injectTemplates from './inject-templates';

export default options => {
  if (!options) options = {
    exclude: "node_modules"
  }

  // merge include, exclude
  const filter = createFilter(options.include, options.exclude)

  return {

    name: 'injectTemplates',

    transform (code, id) {
      return filter(id)
        ? injectTemplates(id, code, options) : null
    }
  }
}
