# GOVUK Frontend Package

## About
The goal is to take the three main components to make a GOVUK frontend:

- [Frontend toolkit](https://github.com/alphagov/govuk_frontend_toolkit)
- [Elements](https://github.com/alphagov/govuk_elements)
- [Template](https://github.com/alphagov/govuk_template)

and allow developers to add thier own 'components', then compile that into a single css file along with the assets.

Both the Frontend toolkit and the elements are added as npm packages, the tempalate is added from a custom package as we wanted the raw sass files, see https://github.com/mec/govuk-template-sass.

All the GOVUK dependacies are copied from the packages in to the src/govuk folder. Custom components can be added to the src/custom/components folder and then imported into src/sass/gov-style.scss, these will then be compile and added to the main css.

Source maps are included to help development.

You will need to have an understanding of the three GOVUK project dependancies to extend this project.

## Install
Install the dependacies:

```
npm install
```

## Usage
Start development (Browsersync):

```
npm start
```
or 

Build assets and create the dist folder:

```
npm run build
```