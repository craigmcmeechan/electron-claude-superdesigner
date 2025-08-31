# Custom Tips Configuration

This configuration file allows repo maintainers to configure extra details to be printed alongside certain Rush messages. More documentation is available on the Rush website: https://rushjs.io

## $schema

- Type: string
- Description: URL to the JSON schema for validation
- Value: "https://developer.microsoft.com/json-schemas/rush/v5/custom-tips.schema.json"

## customTips

- Type: array
- Description: Custom tips allow you to annotate Rush's console messages with advice tailored for your specific monorepo.
- Items: object

### tipId

- Type: string
- Required: true
- Description: An identifier indicating a message that may be printed by Rush. If that message is printed, then this custom tip will be shown. The list of available tip identifiers can be found on this page: https://rushjs.io/pages/maintainer/custom_tips/

### message

- Type: string
- Required: true
- Description: The message text to be displayed for this tip.