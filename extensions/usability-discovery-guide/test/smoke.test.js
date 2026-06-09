const assert = require('assert');
const fs = require('fs');
const path = require('path');

const extensionDir = path.resolve(__dirname, '..');

const packageJsonPath = path.join(extensionDir, 'package.json');
const extensionJsPath = path.join(extensionDir, 'extension.js');
const guidePath = path.join(extensionDir, 'GUIDE.md');
const readmePath = path.join(extensionDir, 'README.md');

assert.ok(fs.existsSync(packageJsonPath), 'package.json should exist');
assert.ok(fs.existsSync(extensionJsPath), 'extension.js should exist');
assert.ok(fs.existsSync(guidePath), 'GUIDE.md should exist');
assert.ok(fs.existsSync(readmePath), 'README.md should exist');

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

assert.strictEqual(
    packageJson.name,
    'usability-discovery-guide',
    'Extension name should match the usability discovery guide prototype'
);

assert.strictEqual(
    packageJson.main,
    './extension.js',
    'Extension entry point should be extension.js'
);

assert.ok(
    packageJson.activationEvents.includes('onCommand:usabilityDiscoveryGuide.openGuide'),
    'Extension should activate when the discovery guide command is executed'
);

const commands = packageJson.contributes.commands || [];
assert.ok(
    commands.some(command => command.command === 'usabilityDiscoveryGuide.openGuide'),
    'package.json should contribute the open guide command'
);

const configurationProperties = packageJson.contributes.configuration.properties || {};
assert.ok(
    configurationProperties['usabilityDiscoveryGuide.showBeginnerTips'],
    'package.json should contribute the beginner tips configuration setting'
);

const walkthroughs = packageJson.contributes.walkthroughs || [];
assert.ok(
    walkthroughs.some(walkthrough => walkthrough.id === 'usabilityDiscoveryGuide.walkthrough'),
    'package.json should contribute a feature discovery walkthrough'
);

const extensionSource = fs.readFileSync(extensionJsPath, 'utf8');

assert.ok(
    extensionSource.includes('vscode.commands.registerCommand'),
    'extension.js should register a VS Code command'
);

assert.ok(
    extensionSource.includes('usabilityDiscoveryGuide.openGuide'),
    'extension.js should register the usability discovery guide command'
);

assert.ok(
    extensionSource.includes('GUIDE.md'),
    'extension.js should open GUIDE.md'
);

const guideText = fs.readFileSync(guidePath, 'utf8');

assert.ok(
    guideText.includes('Command Palette'),
    'GUIDE.md should explain the Command Palette'
);

assert.ok(
    guideText.includes('Settings UI'),
    'GUIDE.md should explain the Settings UI'
);

assert.ok(
    guideText.includes('Extensions View'),
    'GUIDE.md should explain the Extensions View'
);

assert.ok(
    guideText.includes('Open-Closed Principle'),
    'GUIDE.md should connect the improvement to the Open-Closed Principle'
);

console.log('Smoke test passed: usability discovery guide extension structure is valid.');
