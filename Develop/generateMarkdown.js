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

// function that returns the license section of README
// if no license, return empty string
function renderLicenseSection(license) {
  switch (license){
    case 'Apache 2.0':
    return `This project is covered under the **Apache License**. To find out more about the license, please visit the following [LINK](https://choosealicense.com/licenses/apache-2.0/).`;
    
    case 'MIT':
    return `This project is covered under the **MIT License**. To find out more about the license, please visit the following [LINK](https://choosealicense.com/licenses/mit/).`;
    
    case 'GNU GPLv3':
    return `This project is covered under the **GNU General Public License**. To find out more about the license, please visit the following [LINK](https://choosealicense.com/licenses/gpl-3.0/).`;
    
    case 'No license':
    return `This project is not covered under any license.`;
  }
};

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
