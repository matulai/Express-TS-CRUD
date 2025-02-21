import Server from "@/app/server.js";

import "@/persistence/config/load-env.js";

new Server().start();
