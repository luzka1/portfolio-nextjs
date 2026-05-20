import { drizzleDb } from ".";
import { projectsTable } from "./schemas";
import { projectsSeed } from "../seed/projects";

(async () => {
  try {
    await drizzleDb.delete(projectsTable);
    await drizzleDb.insert(projectsTable).values(projectsSeed);
    console.log(`${projectsSeed.length} posts foram salvos na base de dados!`);
  } catch (e) {
    console.log("Ocorreu um erro", e);
  }
})();
