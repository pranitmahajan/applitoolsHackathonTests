## Applitools Hackathon Tests Automation

- This is complete optimise framework using BDD approach and effectively demoing use of applitools libs for visual AI tests, along with other functional actions.

### For traditional tests:
Framework is based on [WebDriverIO](http://webdriver.io/) and [Cucumber](https://cucumber.io/)
#### Traditional test step definations are under /tests/steps/traditionalTests

### For visual AI tests:
Same webdriverio and cucumber framework is used, with addition of [Applitools](https://applitools.com/),for visual assertions instead of functional assertions.
#### Visual AI test step definations are under /tests/steps/visualVITests

#### Requirements

-   node >= 10.15.x - [how to install Node](https://nodejs.org/en/download/)

#### Getting Started

Install the dependencies:

```
npm install
```

Run tests:

### To run traditional tests on version 1:

```
npm run v1-traditional-tests
```

### To run traditional tests on version 2:

```
npm run v2-traditional-tests
```

### To run visual AI tests on version 1:

```
npm run v1-visualAI-tests
```

### To run visual AI tests on version 2:

```
npm run v2-visualAI-tests
```

#### Reports

-   After run is complete, the cucumber html report will be opened in browser

## Framework details

**Uses BDD & Page Object Model**

-   Feature Files are added under /tests/features directory
-   Step Definations for features are added under /tests/steps directory
-   Page classes are added under /tests/pages directory
-   Data like element identifiers are added under /tests/data directory

#### Eslint and Prettier

-   Eslint and Prettier are used for maintaining common coding and styling standards
-   Husky is used to make sure before commit code format rules are intact

To check for any code standard violations:

```
npm run check-code
```

To auto fix the formatting of code:

```
npm run format-code
```
