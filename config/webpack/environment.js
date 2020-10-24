const { environment } = require("@rails/webpacker");
const webpack = require("webpack");

const datatables = require("./loaders/datatables");
const jquery = require("./loaders/jquery");
const styles = require("./loaders/styles");

environment.loaders.append("datatables", datatables);
environment.loaders.append("expose", jquery);
environment.loaders.append("styles", styles);

environment.plugins.append(
    "ProviderPlugin",
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
    })
);

module.exports = environment;
