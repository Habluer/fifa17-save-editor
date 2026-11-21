const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
  { ignores: ['node_modules/', 'dist/'] },
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.cjs'],
    languageOptions: { ecmaVersion: 2024, sourceType: 'commonjs', globals: { ...globals.node } }
  },
  {
    // Código da página: roda no navegador do Electron, sem Node.
    files: ['renderer.js', 'attributes.js'],
    languageOptions: { globals: { ...globals.browser, module: 'readonly' } }
  },
  {
    files: ['test/**/*.js'],
    rules: { 'no-empty': ['error', { allowEmptyCatch: true }] }
  }
];
