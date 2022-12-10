const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfe1',

  exposes: {
    // './routes': './projects/mfe1/src/app/mfe1.routes.ts',
     './Module': './projects/mfe1/src/app/setup/setup.module.ts',
    //'./Component': './projects/mfe1/src/app/setup/setup.component.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
