// Lists every TODO left in content, components and config. Run: npm run todos
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const roots = ["src/content", "src/components", "src/config", "src/lib"];
const hits = [];

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full);
    else if (/\.(ts|tsx)$/.test(name)) {
      readFileSync(full, "utf8")
        .split(/\r?\n/)
        .forEach((line, i) => {
          if (line.includes("TODO")) hits.push(`${relative(process.cwd(), full)}:${i + 1}  ${line.trim()}`);
        });
    }
  }
}

roots.forEach(walk);
console.log(hits.length ? hits.join("\n") : "No TODOs left.");
console.log(`\n${hits.length} TODO(s) found.`);
