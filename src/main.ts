import "@/persistence/config/load-env.js";
import "@/persistence/dataSource.js";
import "reflect-metadata";

import Server from "@/app/server.js";

new Server().start();
