module.exports = {
  root: true,
  extends: "airbnb/base",
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    'max-len': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
