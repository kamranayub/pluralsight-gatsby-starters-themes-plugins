const path = require("path");
const util = require("util");
const writeFile = util.promisify(require("fs").writeFile);
const exec = util.promisify(require("child_process").exec);

exports.onPostBuild = async ({ graphql, reporter }) => {
  const { stdout: sha } = await exec("git rev-parse HEAD");
  const branch = process.env.BRANCH;
  
  const { data } = await graphql(`
    {
      siteBuildMetadata {
        buildTime
      }
    }
  `);

  const meta = {
    sha: sha?.trim(),
    branch,
    buildTime: data.siteBuildMetadata.buildTime,
  };

  await writeFile(
    path.join("./public", "meta.json"),
    JSON.stringify(meta, null, 2)
  );

  reporter.info("Wrote meta.json file with build metadata");
};
