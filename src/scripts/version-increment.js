// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs");

// Function to increment version number
function incrementVersion(version, component) {
    const parts = version.split(".");
    let major = parseInt(parts[0]);
    let minor = parseInt(parts[1]);
    let patch = parseInt(parts[2]);

    switch (component) {
        case "major":
            major++;
            minor = 0;
            patch = 0;
            break;
        case "minor":
            minor++;
            patch = 0;
            break;
        case "patch":
            patch++;
            break;
        default:
            console.log("Invalid version component.");
            process.exit(1);
    }

    return `${major}.${minor}.${patch}`;
}

// Read package.json
const packageData = fs.readFileSync("package.json", "utf8");
const packageJson = JSON.parse(packageData);

// Increment version in package.json
const incrementedPackageVersion = incrementVersion(packageJson.version, "patch");
packageJson.version = incrementedPackageVersion;

// Write updated package.json
fs.writeFileSync("package.json", JSON.stringify(packageJson, null, 4));

// Read app.config.js
const appConfigData = fs.readFileSync("app.config.js", "utf8");

// Increment version, build number, and version code in app.config.js
const currentVersion = appConfigData.match(/version: "([^"]+)"/)[1];
const incrementedVersion = incrementVersion(currentVersion, "patch");

const currentBuildNumber = appConfigData.match(/buildNumber: "([^"]+)"/)[1];
const incrementedBuildNumber = parseInt(currentBuildNumber) + 1;

const currentVersionCode = appConfigData.match(/versionCode: (\d+)/)[1];
const incrementedVersionCode = parseInt(currentVersionCode) + 1;

// Update app.config.js
const updatedAppConfigData = appConfigData
    // prettier-ignore
    .replace(`version: "${currentVersion}"`, `version: "${incrementedVersion}"`)
    .replace(`buildNumber: "${currentBuildNumber}"`, `buildNumber: "${incrementedBuildNumber}"`)
    .replace(`versionCode: ${currentVersionCode}`, `versionCode: ${incrementedVersionCode}`);

fs.writeFileSync("app.config.js", updatedAppConfigData);

console.log("Version incremented successfully!");
