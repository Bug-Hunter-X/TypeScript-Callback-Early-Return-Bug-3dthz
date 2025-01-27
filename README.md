# TypeScript Callback Early Return Bug

This repository demonstrates an uncommon bug in TypeScript involving early returns within callbacks used in loops.  The `printNumbersWithCallback` function showcases the unexpected behavior where an early return within the callback function does not break the loop prematurely, leading to unexpected output.

The bug is subtle and stems from the way callbacks are handled within loops.  The early return only exits the callback, not the loop itself.  This contrasts with how a `return` statement would behave within the main function.

The solution offers a corrected approach to ensure expected behavior.