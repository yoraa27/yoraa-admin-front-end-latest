module.exports = {
  extends: [
    'react-app',
    'react-app/jest'
  ],
  rules: {
    // Disable no-unused-vars warnings for development
    'no-unused-vars': 'warn',
    // Disable jsx-a11y/img-redundant-alt warnings
    'jsx-a11y/img-redundant-alt': 'warn',
    // You can add more rule customizations here
  }
};
