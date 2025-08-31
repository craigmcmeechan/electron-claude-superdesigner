# Subspaces Configuration

This configuration file manages the experimental "subspaces" feature for Rush, which allows multiple PNPM lockfiles to be used in a single Rush workspace. For full documentation, please see https://rushjs.io

## $schema

- Type: string
- Description: URL to the JSON schema for validation
- Value: "https://developer.microsoft.com/json-schemas/rush/v5/subspaces.schema.json"

## subspacesEnabled

- Type: boolean
- Description: Set this flag to "true" to enable usage of subspaces.
- Value: false

## splitWorkspaceCompatibility

- Type: boolean
- Description: (DEPRECATED) This is a temporary workaround for migrating from an earlier prototype of this feature: https://github.com/microsoft/rushstack/pull/3481. It allows subspaces with only one project to store their config files in the project folder.
- Value: false

## preventSelectingAllSubspaces

- Type: boolean
- Description: When a command such as "rush update" is invoked without the "--subspace" or "--to" parameters, Rush will install all subspaces. In a huge monorepo with numerous subspaces, this would be extremely slow. Set "preventSelectingAllSubspaces" to true to avoid this mistake by always requiring selection parameters for commands such as "rush update".
- Value: false

## subspaceNames

- Type: array
- Description: The list of subspace names, which should be lowercase alphanumeric words separated by hyphens, for example "my-subspace". The corresponding config files will have paths such as "common/config/subspaces/my-subspace/package-lock.yaml".
- Items: string