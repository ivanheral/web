module.exports = {
  './*.(js|json)': ['prettier --write'],
  'src/**/*.(ts|tsx)': ['eslint --fix', 'prettier --write'],
  'src/**/*.(md|json)': ['prettier --write'],
}
