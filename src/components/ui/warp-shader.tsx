"use client";

// Static re-export of the one shader we use. Dynamically importing the
// package itself would pull every shader it ships into the lazy chunk; going
// through this module lets the bundler tree-shake down to Warp alone.
export { Warp } from "@paper-design/shaders-react";
