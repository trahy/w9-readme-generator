const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// array of questions for user input
inquirer
  .prompt([
    {
        type: 'input',
        message: 'Enter a project title',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a description',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter instructions for installation',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Enter instructions for usage',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'List any accreditations',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'Enter guidelines for contributers',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'Enter instructions for testing',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Choose a license',
        choices: ['Apache 2.0', 'MIT', 'GNU GPLv3', 'No license'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Enter your GitHub username',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter your email address',
        name: 'email',
    },

  ])
  .then((data) => {
    const readmeContent = generateMarkdown(data);
    fs.writeFile('./output/README.md', readmeContent, (err) =>
    err ? console.error(err) : console.log('The README file has been successfully created!')
    );
  });