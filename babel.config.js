module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          "@": "./src", // 将 '@' 指向 './src' 目录
        },
      },
    ],
  ],
};
