module.exports = {
    test: require.resolve("jquery"),
    loader: "expose-loader",
    options: {
        exposes: ["$", "jQuery"],
    },
};
