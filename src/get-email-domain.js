const { NotImplementedError } = require('../extensions/index.js');

console.log(getEmailDomain('prettyandsimple@example.com'));

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let emailArray = email.split('');
  let domain = '';

  for (let i = 0; i < emailArray.length; i++) {
    if (emailArray[i].charCodeAt(0) === 64) {
      domain = emailArray.slice(i + 1);
    }
  }

  return domain.join('');
}

module.exports = {
  getEmailDomain
};
