module.exports = {
    resolve: {
      fallback: {
        "stream": require.resolve("stream-browserify"),
        "buffer": require.resolve("buffer/"),
        "assert": require.resolve("assert/")
      }
    }
  };
  