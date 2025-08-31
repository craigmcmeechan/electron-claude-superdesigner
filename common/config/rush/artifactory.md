# Artifactory Configuration

This configuration file manages Rush integration with JFrog Artifactory services. More documentation is available on the Rush website: https://rushjs.io

## $schema

- Type: string
- Description: URL to the JSON schema for validation
- Value: "https://developer.microsoft.com/json-schemas/rush/v5/artifactory.schema.json"

## packageRegistry

- Type: object
- Description: Configuration for the Artifactory NPM registry

### enabled

- Type: boolean
- Required: true
- Description: Set this to "true" to enable Rush to manage tokens for an Artifactory NPM registry. When enabled, "rush install" will automatically detect when the user's ~/.npmrc authentication token is missing or expired. And "rush setup" will prompt the user to renew their token. The default value is false.
- Value: false

### registryUrl

- Type: string
- Required: true
- Description: Specify the URL of your NPM registry. This is the same URL that appears in your .npmrc file. It should look something like this example: https://your-company.jfrog.io/your-project/api/npm/npm-private/

### userNpmrcLinesToAdd

- Type: array
- Description: A list of custom strings that "rush setup" should add to the user's ~/.npmrc file at the time when the token is updated. This could be used for example to configure the company registry to be used whenever NPM is invoked as a standalone command (but it's not needed for Rush operations like "rush add" and "rush install", which get their mappings from the monorepo's common/config/rush/.npmrc file). NOTE: The ~/.npmrc settings are global for the user account on a given machine, so be careful about adding settings that may interfere with other work outside the monorepo.
- Items: string

### artifactoryWebsiteUrl

- Type: string
- Required: true
- Description: Specifies the URL of the Artifactory control panel where the user can generate an API key. This URL is printed after the "visitWebsite" message. It should look something like this example: https://your-company.jfrog.io/ Specify an empty string to suppress this line entirely.

### credentialType

- Type: string
- Required: false
- Description: Specify the type of credential to save in the user's ~/.npmrc file. The default is "password", which means the user's API token will be traded in for an npm password specific to that registry. Optionally you can specify "authToken", which will save the user's API token as credentials instead.
- Possible values: "password", "authToken"

### messageOverrides

- Type: object
- Description: These settings allow the "rush setup" interactive prompts to be customized, for example with messages specific to your team or configuration. Specify an empty string to suppress that message entirely.

#### introduction

- Type: string
- Required: false
- Description: Overrides the message that normally says: "This monorepo consumes packages from an Artifactory private NPM registry."

#### obtainAnAccount

- Type: string
- Required: false
- Description: Overrides the message that normally says: "Please contact the repository maintainers for help with setting up an Artifactory user account."

#### visitWebsite

- Type: string
- Required: false
- Description: Overrides the message that normally says: "Please open this URL in your web browser:" The "artifactoryWebsiteUrl" string is printed after this message.

#### locateUserName

- Type: string
- Required: false
- Description: Overrides the message that normally says: "Your user name appears in the upper-right corner of the JFrog website."

#### locateApiKey

- Type: string
- Required: false
- Description: Overrides the message that normally says: "Click 'Edit Profile' on the JFrog website. Click the 'Generate API Key' button if you haven't already done so previously."

#### userNamePrompt

- Type: string
- Required: false
- Description: Overrides the message that normally prompts: "What is your Artifactory user name?"

#### apiKeyPrompt

- Type: string
- Required: false
- Description: Overrides the message that normally prompts: "What is your Artifactory API key?"