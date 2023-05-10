module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['rv-web-nextjs'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname
  },
  ignorePatterns: [
    '.eslintrc.js',
    'codegen.ts',
    'tailwind.config.js',
    'postcss.config.js',
    'gql/**/*.ts',
    'next.config.js',
    'next-sitemap.config.js'
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
};
