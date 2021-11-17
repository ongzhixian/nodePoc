# nvm (Node Version Manager)

There might come a time where you might need different version of Node.js runtime than
the current version that you are using 
(for example, to test a previous project that uses Node 8.x).

This might be due to breaking changes between different versions of Node.js
(which is more common that you think).

The tedious way to go about it is to re-install the version of Node.js that you need.
The other way is to use nvm (Node Version Manager).

The original nvm is available only for Linux and MacOS.
But someone has developed a equivalent for Windows.

See: https://github.com/coreybutler/nvm-windows/releases

## Usage

`nvm ls`

List the different versions of Node.js that are installed and managed by nvm.

`nvm ls available`

List all the different versions of Node.js that are available to install.

`nvm install lts`

Installs the LTS version of Node.js.

`nvm install latest`

Installs latest patched version of Node.js.

`nvm install <version>`

Installs the specific version of Node.js.

`nvm use <version>`

Set to use the specific version of Node.js.
`<version>` can be replaced with 'lts' and 'latest' 
to use the respective version.

## Alternative version managers

While windows-nvm is currently the most popular version manager for node, 
there are alternatives to consider:

1.  nvs (Node Version Switcher) is a cross-platform nvm alternative 
    with the ability to integrate with VS Code.
    See: https://github.com/jasongin/nvs

2.  Volta is a new version manager from the LinkedIn team that claims 
    improved speed and cross-platform support.
    See: https://github.com/volta-cli/volta#installing-volta

## Reference

https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows
