const vscode = require('vscode');
const path = require('path');

function activate(context) {
    const disposable = vscode.commands.registerCommand(
        'usabilityDiscoveryGuide.openGuide',
        async function () {
            const guidePath = vscode.Uri.file(
                path.join(context.extensionPath, 'GUIDE.md')
            );

            const document = await vscode.workspace.openTextDocument(guidePath);
            await vscode.window.showTextDocument(document);
        }
    );

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
