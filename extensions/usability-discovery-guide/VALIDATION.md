# Manual Validation Plan

This document describes how to manually validate the Usability Discovery Guide extension prototype.

## Files Added

The prototype includes:

- `package.json`
- `extension.js`
- `GUIDE.md`
- `README.md`

## Validation Steps

1. Open the extension folder in VS Code.
2. Confirm that `package.json` declares a command contribution:
   - `usabilityDiscoveryGuide.openGuide`
3. Confirm that `package.json` declares a walkthrough contribution:
   - `usabilityDiscoveryGuide.walkthrough`
4. Confirm that `package.json` declares a configuration setting:
   - `usabilityDiscoveryGuide.showBeginnerTips`
5. Confirm that `extension.js` registers the command:
   - `usabilityDiscoveryGuide.openGuide`
6. Confirm that the command opens:
   - `GUIDE.md`

## Expected Behavior

When the command `Discovery Guide: Open Beginner Feature Discovery Guide` is executed, VS Code should open the beginner feature discovery guide.

## Architectural Validation

This improvement uses VS Code's existing extension contribution architecture. It adds a command, walkthrough, and setting without modifying the Workbench, Editor, Platform, or Base components.

This supports the Open-Closed Principle because the system is extended through contribution points rather than direct modification of core editor behavior.
