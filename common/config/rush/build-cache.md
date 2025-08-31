# Build Cache Configuration

This configuration file manages Rush's build cache feature. More documentation is available on the Rush website: https://rushjs.io

## $schema

- Type: string
- Description: URL to the JSON schema for validation
- Value: "https://developer.microsoft.com/json-schemas/rush/v5/build-cache.schema.json"

## buildCacheEnabled

- Type: boolean
- Required: true
- Description: EXPERIMENTAL - Set this to true to enable the build cache feature. See https://rushjs.io/pages/maintainer/build_cache/ for details about this experimental feature.
- Value: false

## cacheProvider

- Type: string
- Required: true
- Description: Choose where project build outputs will be cached.
- Possible values: "local-only", "azure-blob-storage", "amazon-s3"
- Value: "local-only"

## cacheEntryNamePattern

- Type: string
- Required: false
- Description: Setting this property overrides the cache entry ID. If this property is set, it must contain a [hash] token. Other available tokens include:
  - [projectName] - Example: "@my-scope/my-project"
  - [projectName:normalize] - Example: "my-scope+my-project"
  - [phaseName] - Example: "_phase:test/api"
  - [phaseName:normalize] - Example: "_phase:test+api"
  - [phaseName:trimPrefix] - Example: "test/api"
  - [os] - Example: "win32"
  - [arch] - Example: "x64"

## cacheHashSalt

- Type: string
- Required: false
- Description: Salt to inject during calculation of the cache key. This can be used to invalidate the cache for all projects when the salt changes.

## azureBlobStorageConfiguration

- Type: object
- Description: Use this configuration with "cacheProvider"="azure-blob-storage"

### storageAccountName

- Type: string
- Required: true
- Description: The name of the Azure storage account to use for build cache.

### storageContainerName

- Type: string
- Required: true
- Description: The name of the container in the Azure storage account to use for build cache.

### azureEnvironment

- Type: string
- Required: false
- Description: The Azure environment the storage account exists in. Defaults to AzurePublicCloud.
- Possible values: "AzurePublicCloud", "AzureChina", "AzureGermany", "AzureGovernment"

### blobPrefix

- Type: string
- Required: false
- Description: An optional prefix for cache item blob names.

### isCacheWriteAllowed

- Type: boolean
- Required: false
- Description: If set to true, allow writing to the cache. Defaults to false.

### loginFlow

- Type: string
- Required: false
- Description: The Entra ID login flow to use. Defaults to 'AdoCodespacesAuth' on GitHub Codespaces, 'InteractiveBrowser' otherwise.

### readRequiresAuthentication

- Type: boolean
- Required: false
- Description: If set to true, reading the cache requires authentication. Defaults to false.

## amazonS3Configuration

- Type: object
- Description: Use this configuration with "cacheProvider"="amazon-s3"

### s3Bucket

- Type: string
- Required: true (unless s3Endpoint is specified)
- Description: The name of the bucket to use for build cache. Example: "my-bucket"

### s3Endpoint

- Type: string
- Required: true (unless s3Bucket is specified)
- Description: The Amazon S3 endpoint of the bucket to use for build cache. This should not include any path; use the s3Prefix to set the path. Examples: "my-bucket.s3.us-east-2.amazonaws.com" or "http://localhost:9000"

### s3Region

- Type: string
- Required: true
- Description: The Amazon S3 region of the bucket to use for build cache. Example: "us-east-1"

### s3Prefix

- Type: string
- Required: false
- Description: An optional prefix ("folder") for cache items. It should not start with "/".

### isCacheWriteAllowed

- Type: boolean
- Required: false
- Description: If set to true, allow writing to the cache. Defaults to false.

## httpConfiguration

- Type: object
- Description: Use this configuration with "cacheProvider"="http"

### url

- Type: string
- Required: true
- Description: The URL of the server that stores the caches. Example: "https://build-cacches.example.com/"

### uploadMethod

- Type: string
- Required: false
- Description: The HTTP method to use when writing to the cache (defaults to PUT). Should be one of PUT, POST, or PATCH. Example: "PUT"

### headers

- Type: object
- Required: false
- Description: HTTP headers to pass to the cache server. Example: { "X-HTTP-Company-Id": "109283" }

### tokenHandler

- Type: object
- Required: false
- Description: Shell command that prints the authorization token needed to communicate with the cache server, and exits with exit code 0. This command will be executed from the root of the monorepo. Example: { "exec": "node", "args": ["common/scripts/auth.js"] }

### cacheKeyPrefix

- Type: string
- Required: false
- Description: Prefix for cache keys. Example: "my-company-"

### isCacheWriteAllowed

- Type: boolean
- Required: false
- Description: If set to true, allow writing to the cache. Defaults to false.