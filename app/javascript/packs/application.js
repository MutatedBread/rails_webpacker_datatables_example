require("@rails/ujs").start();
require("turbolinks").start();
require("@rails/activestorage").start();
require("channels");

import dt from "datatables.net";

document.addEventListener("turbolinks:load", () => {
    dt(window, $);
});
