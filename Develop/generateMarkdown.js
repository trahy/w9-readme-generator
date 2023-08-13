// function returns a license badge based on which license is passed in
// if no license, return empty string
function renderLicenseBadge(license) {
  switch (license){
    case 'Apache 2.0':
    return `[![Apache License](https://img.shields.io/badge/license-Apache-blue)](https://choosealicense.com/licenses/apache-2.0/)`;
    
    case 'MIT':
    return `[![MIT License](https://img.shields.io/badge/license-MIT-green)](https://choosealicense.com/licenses/mit/)`;
    
    case 'GNU GPLv3':
    return `[![GNU General Public License](https://img.shields.io/badge/license-GNU_GPL-red)](https://choosealicense.com/licenses/gpl-3.0/)`;
    
    case 'No license':
    return ``;
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

 Checkout my [GitHub profile](https://github.com/${data.github})

 For additional questions or feedback, please [send an email](mailto:${data.email}). 

  ## License
  ${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
