import Echo from "laravel-echo";

const options = {
  broadcaster: "pusher",
  key: process.env.MIX_PUSHER_APP_KEY,
  cluster: process.env.MIX_PUSHER_APP_CLUSTER,
  forceTLS: false,
  wsHost: window.location.hostname,
  wsPort: 6001,
  wssPort: 6001,
  disableStats: true,
};

const echo = new Echo(options);

export default echo;
