import { loadFilesSync } from "@graphql-tools/load-files"
import { mergeResolvers } from "@graphql-tools/merge"
import path from "path"

const resolverArray = loadFilesSync(path.join(__dirname, "."), {
  extensions: ["ts"],
  recursive: true,
})

export default mergeResolvers(resolverArray)