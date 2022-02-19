import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import Pusher from "pusher-js";
import React from "react";
import { render } from "react-dom";

const app = document.getElementById("app");
window.Pusher = Pusher;

InertiaProgress.init({
  // The delay after which the progress bar will
  // appear during navigation, in milliseconds.
  delay: 0,

  // The color of the progress bar.
  color: "#2977f5",

  // Whether to include the default NProgress styles.
  includeCSS: true,

  // Whether the NProgress spinner will be shown.
  showSpinner: false,
});

createInertiaApp({
  resolve: (name) =>
    import(`./pages/${name}.tsx`).then((module) => module.default),
  setup({ el, App, props }) {
    render(<App {...props} />, el);
  },
});
