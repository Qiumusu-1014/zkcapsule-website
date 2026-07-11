import { cp, mkdir, readdir, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const publicDir = join(root, "public");

async function copyIfExists(source, destination) {
  if (!existsSync(source)) {
    return;
  }

  await mkdir(dirname(destination), { recursive: true });
  await cp(source, destination, { recursive: true });
}

await mkdir(publicDir, { recursive: true });

await rm(join(publicDir, "assets"), { recursive: true, force: true });
await rm(join(publicDir, "favicon.svg"), { force: true });
await rm(join(publicDir, "CNAME"), { force: true });

const rootEntries = await readdir(root, { withFileTypes: true });
for (const entry of rootEntries) {
  if (entry.isFile() && entry.name.endsWith(".html")) {
    await rm(join(publicDir, entry.name), { force: true });
    await copyIfExists(join(root, entry.name), join(publicDir, entry.name));
  }
}

await copyIfExists(join(root, "assets"), join(publicDir, "assets"));
await copyIfExists(join(root, "favicon.svg"), join(publicDir, "favicon.svg"));
await copyIfExists(join(root, "CNAME"), join(publicDir, "CNAME"));
