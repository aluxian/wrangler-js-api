import test from "ava";

import * as wrangler from "./index";

test("add", (t) => {
  wrangler.dev({}, ["--help"]);
});
