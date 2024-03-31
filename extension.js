const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

function activate(context) {
    console.log('Congratulations, your extension "letscode" is now active!');

    let disposable = vscode.commands.registerCommand('letscode.chooseOption', function () {
        vscode.window.showQuickPick(['ReactJs', 'ExpressJs', 'ExpressTs']).then(option => {
            if (option) {
                createTemplate(option, context.extensionPath);
            }
        });
    });

    context.subscriptions.push(disposable);
}

function createTemplate(option, extensionPath) {
    const workspaceFolder = vscode.workspace.workspaceFolders ? vscode.workspace.workspaceFolders[0].uri.fsPath : undefined;

    if (!workspaceFolder) {
        vscode.window.showErrorMessage('No workspace folder found.');
        return;
    }

    const templatePath = path.join(extensionPath, option);

    if (!fs.existsSync(templatePath)) {
        vscode.window.showErrorMessage(`Template folder "${option}" not found.`);
        return;
    }

    copyTemplate(templatePath, workspaceFolder);
}

function copyTemplate(source, destination) {
    // Membuat folder tujuan jika belum ada
    if (!fs.existsSync(destination)) {
        fs.mkdirSync(destination);
    }

    // Membaca isi folder sumber
    const files = fs.readdirSync(source);

    files.forEach(file => {
        const sourcePath = path.join(source, file);
        const destPath = path.join(destination, file);

        if (fs.lstatSync(sourcePath).isDirectory()) {
            // Jika itu adalah folder, salin rekursif
            copyTemplate(sourcePath, destPath);
        } else {
            // Jika itu adalah file, salin
            fs.copyFileSync(sourcePath, destPath);
        }
    });

    vscode.window.showInformationMessage('Template copied successfully!');
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
