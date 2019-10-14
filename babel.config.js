module.exports = api => {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'babel-plugin-root-import',
        {
          root: __dirname,
          rootPathPrefix: '~/',
          rootPathSuffix: 'app',
        },
      ],
    ],
  };
};
