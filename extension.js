// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vsquote" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.vsquote', function () {
		let editor = vscode.window.activeTextEditor;
		let doc = editor.document;
		if (doc.languageId === "markdown" && !editor.selection.isEmpty) {
			let start = editor.selection.start;
			let end = editor.selection.end;
			let text = editor.document.getText(editor.selection);
			//if not add backquote for key words or remove it 
			if (text[0] !== '>') {
				text = '> ' + text ;
			} else {
				text = text.replace(/》/g, '> ');
			}
			vscode.window.activeTextEditor.edit(editBuilder => {
				editBuilder.replace(new vscode.Range(start, end), text);
			});
		} else if(doc.languageId === "markdown" && editor.selection.isEmpty){
			var nihao = "nihaoma";				
		}

	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated

function deactivate() {}
exports.deactivate = deactivate;