// function returns a license badge based on which license is passed in
// if no license, return empty string

// switch (renderLicenseBadge(data.license)){
//   case 'Apache 2.0': `![Apache License](https://img.shields.io/badge/license-Apache-blue)](https://choosealicense.com/licenses/apache-2.0/)`;
//   return;

//   case 'MIT':`![MIT License](https://img.shields.io/badge/license-MIT-green)](https://choosealicense.com/licenses/mit/)`;
//   return;

//   case 'GNU GPLv3':`![GNU General Public License](https://img.shields.io/badge/license-GNU_GPL-red)]https://choosealicense.com/licenses/gpl-3.0/`;
//   return;

//   case 'No license':''
//     return;
// }

function renderLicenseBadge(license) {
  if (license === "Apache 2.0") {
    const apache = `[![Apache License](https://img.shields.io/badge/license-Apache-blue)](https://choosealicense.com/licenses/apache-2.0/)`;
    return apache;

  } else if (license === "MIT") {
    const mit = `[![MIT License](https://img.shields.io/badge/license-MIT-green)](https://choosealicense.com/licenses/mit/)`;
    return mit;

  } else if (license === "GNU GPLv3") {
    const gnu = `[![GNU General Public License](https://img.shields.io/badge/license-GNU_GPL-red)]https://choosealicense.com/licenses/gpl-3.0/`;
    return gnu;

  } else {
    const noLicense = `No License`;
    return noLicense;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## Contributing
  ${data.contribute}

  ## Tests
  ${data.test}

  ## Questions

  - Checkout my [GitHub profile](https://github.com/${data.github})

  - For any additional questions or feed back, please [send an email](mailto:${data.email}). 

  ## License
  ${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
