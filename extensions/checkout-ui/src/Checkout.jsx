import React, { useState } from "react";
import {
  reactExtension,
  TextField,
  useApplyMetafieldsChange,
  useMetafield,
} from "@shopify/ui-extensions-react/checkout";

// Set the entry point for the extension
export default reactExtension("purchase.checkout.block.render", () => <App />);

function App() {
  // Define the metafield namespace and key
  const metafieldNamespace = "custom";
  const metafieldKey = "checkout";

  // Get a reference to the metafield
  const cutomField = useMetafield({
    namespace: metafieldNamespace,
    key: metafieldKey,
  });
  // Set a function to handle updating a metafield
  const applyMetafieldsChange = useApplyMetafieldsChange();

  return (
    <TextField
      type="text"
      required="true"
      label="Custom Filed"
      onChange={(value) => {
        // Apply the change to the metafield
        applyMetafieldsChange({
          type: "updateMetafield",
          namespace: metafieldNamespace,
          key: metafieldKey,
          valueType: "string",
          value,
        });
      }}
      value={cutomField?.value}
    />
  );
}
