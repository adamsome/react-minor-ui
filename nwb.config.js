module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactMinorUI',
      externals: {
        react: 'React'
      }
    }
  }
}
