import "../styles/main.css";
import { greet, version } from "@b4moss/example";

const out = document.querySelector<HTMLElement>("#greet-output");
const input = document.querySelector<HTMLInputElement>("#greet-name");
const button = document.querySelector<HTMLButtonElement>("#greet-run");
const versionEl = document.querySelector<HTMLElement>("#pkg-version");

if (versionEl) {
  versionEl.textContent = version;
}

function run() {
  if (!out) return;
  out.textContent = greet({
    name: input?.value,
    shout: Boolean(
      document.querySelector<HTMLInputElement>("#greet-shout")?.checked,
    ),
  });
}

button?.addEventListener("click", run);
run();
