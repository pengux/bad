#bad

Twitter **B**ootstrap **A**dmin/**D**ashboard template

[Click here for demo](http://pengux.github.io/bad/dist/)

A highly customisable template built using the following components/technologies:

- [Twitter Bootstrap 3](http://getbootstrap.com/)
- [SASS](http://sass-lang.com/)
- [Web Starter Kit](https://developers.google.com/web/starter-kit/) (For the build system)
- [Attribute Modules for CSS](http://amcss.github.io/)

## Installation

```bash
git clone https://github.com/pengux/bad.git
cd bad
npm install
bower install
```

## Development

To start a development server and open up the template in your browser, run:
```bash
gulp serve
```

Whenever you make changes in the code, the page will reload in the browser automatically (thanks to [browsersync](http://www.browsersync.io/))

## Build

To build the project to dist/ folder, run:
```bash
gulp
```

## Customisation

To customise the template, edit the following files:

- `app/styles/_variables.scss` - Modifications of the variables should be enough to create a different theme)
- `app/styles/main.scss` - Changes to layout may need to be applied here)
- `app/styles/components/*` - Modify these files to your liking if you need to
