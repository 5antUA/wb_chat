use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn greeting(responce: String) -> String {
    String::from(format!("Vlad {}", responce))
}
