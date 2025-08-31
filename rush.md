# Rush Configuration

This is the main configuration file for Rush. For full documentation, please see https://rushjs.io

## $schema

- Type: string
- Description: URL to the JSON schema for validation. NOTE: If you upgrade to a new major version of Rush, you should replace the "v5" path segment in the "$schema" field for all your Rush config files. This will ensure correct error-underlining and tab-completion for editors such as VS Code.
- Value: "https://developer.microsoft.com/json-schemas/rush/v5/rush.schema.json"

## rushVersion

- Type: string
- Description: This specifies the version of the Rush engine to be used in this repo. Rush's "version selector" feature ensures that the globally installed tool will behave like this release, regardless of which version is installed globally. The common/scripts/install-run-rush.js automation script also uses this version.
- Value: "5.158.1"

## pnpmVersion

- Type: string
- Description: The next field selects which package manager should be installed and determines its version. Rush installs its own local copy of the package manager to ensure that your build process is fully isolated from whatever tools are present in the local environment. Specify one of: "pnpmVersion", "npmVersion", or "yarnVersion". See the Rush documentation for details about these alternatives.
- Value: "8.15.8"

## nodeSupportedVersionRange

- Type: string
- Description: Older releases of the Node.js engine may be missing features required by your system. Other releases may have bugs. In particular, the "latest" version will not be a Long Term Support (LTS) version and is likely to have regressions. Specify a SemVer range to ensure developers use a Node.js version that is appropriate for your repo. LTS schedule: https://nodejs.org/en/about/releases/ LTS versions: https://nodejs.org/en/download/releases/
- Value: ">=18.20.3 <19.0.0 || >=20.14.0 <24.0.0"

## projectFolderMinDepth

- Type: integer
- Description: Large monorepos can become intimidating for newcomers if project folder paths don't follow a consistent and recognizable pattern. When the system allows nested folder trees, we've found that teams will often use subfolders to create islands that isolate their work from others ("shipping the org"). This hinders collaboration and code sharing. The Rush developers recommend a "category folder" model, where buildable project folders must always be exactly two levels below the repo root. The parent folder acts as the category. This provides a basic facility for grouping related projects (e.g. "apps", "libraries", "tools", "prototypes") while still encouraging teams to organize their projects into a unified taxonomy. Limiting to 2 levels seems very restrictive at first, but if you have 20 categories and 20 projects in each category, this scheme can easily accommodate hundreds of projects. In practice, you will find that the folder hierarchy needs to be rebalanced occasionally, but if that's painful, it's a warning sign that your development style may discourage refactoring. Reorganizing the categories should be an enlightening discussion that brings people together, and maybe also identifies poor coding practices (e.g. file references that reach into other project's folders without using Node.js module resolution). The defaults are projectFolderMinDepth=1 and projectFolderMaxDepth=2. To remove these restrictions, you could set projectFolderMinDepth=1 and set projectFolderMaxDepth to a large number.
- Value: 2

## projectFolderMaxDepth

- Type: integer
- Description: Maximum depth for project folders. See projectFolderMinDepth for full description.
- Value: 2

## gitPolicy

- Type: object
- Description: If you use Git as your version control system, this section has some additional optional features you can use.

### allowedEmailRegExps

- Type: array
- Description: Work at a big company? Tired of finding Git commits at work with unprofessional Git emails such as "beer-lover@my-college.edu"? Rush can validate people's Git email address before they get started. Define a list of regular expressions describing allowable e-mail patterns for Git commits. They are case-insensitive anchored JavaScript RegExps. Example: ".*@example\.com" IMPORTANT: Because these are regular expressions encoded as JSON string literals, RegExp escapes need two backslashes, and ordinary periods should be "\\.".
- Items: string

### sampleEmail

- Type: string
- Description: When Rush reports that the address is malformed, the notice can include an example of a recommended email. Make sure it conforms to one of the allowedEmailRegExps expressions.

### versionBumpCommitMessage

- Type: string
- Description: The commit message to use when committing changes during 'rush publish'. For example, if you want to prevent these commits from triggering a CI build, you might configure your system's trigger to look for a special string such as "[skip-ci]" in the commit message, and then customize Rush's message to contain that string.

### changeLogUpdateCommitMessage

- Type: string
- Description: The commit message to use when committing changes during 'rush version'. For example, if you want to prevent these commits from triggering a CI build, you might configure your system's trigger to look for a special string such as "[skip-ci]" in the commit message, and then customize Rush's message to contain that string.

### changefilesCommitMessage

- Type: string
- Description: The commit message to use when committing changefiles during 'rush change --commit'. If no commit message is set it will default to 'Rush change'

## repository

- Type: object
- Description: Repository settings.

### url

- Type: string
- Description: The URL of this Git repository, used by "rush change" to determine the base branch for your PR. The "rush change" command needs to determine which files are affected by your PR diff. If you merged or cherry-picked commits from the main branch into your PR branch, those commits should be excluded from this diff (since they belong to some other PR). In order to do that, Rush needs to know where to find the base branch for your PR. This information cannot be determined from Git alone, since the "pull request" feature is not a Git concept. Ideally Rush would use a vendor-specific protocol to query the information from GitHub, Azure DevOps, etc. But to keep things simple, "rush change" simply assumes that your PR is against the "main" branch of the Git remote indicated by the repository.url setting in rush.json. If you are working in a GitHub "fork" of the real repo, this setting will be different from the repository URL of your PR branch, and in this situation "rush change" will also automatically invoke "git fetch" to retrieve the latest activity for the remote main branch.

### defaultBranch

- Type: string
- Description: The default branch name. This tells "rush change" which remote branch to compare against. The default value is "main"
- Value: "main"

### defaultRemote

- Type: string
- Description: The default remote. This tells "rush change" which remote to compare against if the remote URL is not set or if a remote matching the provided remote URL is not found.
- Value: "origin"

## eventHooks

- Type: object
- Description: Event hooks are customized script actions that Rush executes when specific events occur

### preRushInstall

- Type: array
- Description: A list of shell commands to run before "rush install" or "rush update" starts installation
- Items: string

### postRushInstall

- Type: array
- Description: A list of shell commands to run after "rush install" or "rush update" finishes installation
- Items: string

### preRushBuild

- Type: array
- Description: A list of shell commands to run before "rush build" or "rush rebuild" starts building
- Items: string

### postRushBuild

- Type: array
- Description: A list of shell commands to run after "rush build" or "rush rebuild" finishes building
- Items: string

### preRushx

- Type: array
- Description: A list of shell commands to run before the "rushx" command starts
- Items: string

### postRushx

- Type: array
- Description: A list of shell commands to run after the "rushx" command finishes
- Items: string

## variants

- Type: array
- Description: Installation variants allow you to maintain a parallel set of configuration files that can be used to build the entire monorepo with an alternate set of dependencies. For example, suppose you upgrade all your projects to use a new release of an important framework, but during a transition period you intend to maintain compatibility with the old release. In this situation, you probably want your CI validation to build the entire repo twice: once with the old release, and once with the new release. Rush "installation variants" correspond to sets of config files located under this folder: common/config/rush/variants/<variant_name> The variant folder can contain an alternate common-versions.json file. Its "preferredVersions" field can be used to select older versions of dependencies (within a loose SemVer range specified in your package.json files). To install a variant, run "rush install --variant <variant_name>". For more details and instructions, see this article: https://rushjs.io/pages/advanced/installation_variants/
- Items: object

## projects

- Type: array
- Description: This is the inventory of projects to be managed by Rush. Rush does not automatically scan for projects using wildcards, for a few reasons: 1. Depth-first scans are expensive, particularly when tools need to repeatedly collect the list. 2. On a caching CI machine, scans can accidentally pick up files left behind from a previous build. 3. It's useful to have a centralized inventory of all projects and their important metadata.
- Items: object

### packageName

- Type: string
- Description: Name of the package.

### projectFolder

- Type: string
- Description: Path to the project folder.

### reviewCategory

- Type: string
- Description: Review category for the project.

### tags

- Type: array
- Description: Tags for the project.
- Items: string