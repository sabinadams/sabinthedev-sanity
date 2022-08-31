// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import speaking_event from "./speaking-event";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([speaking_event]),
});
