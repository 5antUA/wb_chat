import init, { greeting } from "../wb_rust/wasm_lib/pkg/wasm_lib.js";

// wasm run
async function run() {
    await init();
}

run();

let input = document.getElementById("text");
document.getElementById("left_btn").addEventListener("click", function () {
    input.textContent = greeting("pidar");
});
