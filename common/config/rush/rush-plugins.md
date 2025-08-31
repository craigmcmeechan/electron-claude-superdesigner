# Rush Plugins Configuration

This configuration file manages Rush's plugin feature.

## $schema

- Type: string
- Description: URL to the JSON schema for validation
- Value: "https://developer.microsoft.com/json-schemas/rush/v5/rush-plugins.schema.json"

## plugins

- Type: array
- Description: Each item configures a plugin to be loaded by Rush.
- Items: object

### packageName

- Type: string
- Required: true
- Description: The name of the NPM package that provides the plugin.

### pluginName

- Type: string
- Required: true
- Description: The name of the plugin. This can be found in the "pluginName" field of the "rush-plugin-manifest.json" file in the NPM package folder.

### autoinstallerName

- Type: string
- Required: true
- Description: The name of a Rush autoinstaller that will be used for installation, which can be created using "rush init-autoinstaller". Add the plugin's NPM package to the package.json "dependencies" of your autoinstaller, then run "rush update-autoinstaller".