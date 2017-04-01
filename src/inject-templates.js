'use strict';
import injectSync from 'inject-template';
export default (id, code, options) => {
  return injectSync({path: id, content: code});
}
