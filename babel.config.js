module.exports = function(api) {
  api.cache(true);
  return {
    // Include React and TypeScript presets so both JSX and `type` imports
    // in node_modules (like expo's registerRootComponent.tsx) are handled.
    presets: ['babel-preset-expo', '@babel/preset-react', '@babel/preset-typescript'],
  };
};
