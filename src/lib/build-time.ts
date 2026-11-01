// Values fixed at build time (prerendered and cached), so the site stays fully static.
export async function buildYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function buildDate() {
  "use cache";
  return new Date().toISOString();
}
