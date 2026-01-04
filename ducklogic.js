// ##########################################################|
//             ducklogic.js | a part of duckcrafts code      |
// ##########################################################|
// thank you to: pcprogrammer (hushedword) for making the script! :)
// ==============================================================================================
// this script has tooken effort to build. 
// if 1 caracter removed the script falls apart 
// ---------------------------------------------------------------------------------------------------------------------
//
// homemovie corp. 2026
//
//----------------------------------------------------------------------------------------------------------------------
//
//
//                   duckcraft 1.0.1 underdev
//                   duckengine
//
// ==========================================================================================================================================================
// Debug console
(function startDebugConsole() {
    console.clear(); // Clear previous logs for clarity
    console.log("%cDebug Console Started", "color: green; font-weight: bold; font-size: 14px;");

    // Example variables to inspect
    const appVersion = "1.0.1";
    const user = { name: "duckcraft", role: "Admin" };

    console.table({ appVersion, user });

    // Trigger a breakpoint so you can inspect variables in DevTools
    debugger; // Execution will pause here if DevTools is open

console.info ("duckcraft console v1.0.0")
})();

console.log ("duckcraft ducklogicengine started")
console.log ("duckcraft: [started] ducklogic started")
console.log ("debug: [info] ducklogicengine code: 0 [sucsessful]")
console.info ("started duckcraft engine sucsessfully")
const ducklogicruntime = "true";
// duckcraft engine
function ducklogicload(ducklogiruntime) {
// Complex math function example
// This one calculates: sqrt( (a^3 + b^2) / sin(c) )
function complexMath(a, b, c) {
    // Input validation
    if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
        throw new Error("All inputs must be numbers.");
    }
    if (Math.sin(c) === 0) {
        throw new Error("Division by zero in sin(c) is not allowed.");
    }

    // Perform the calculation
    const result = Math.sqrt((Math.pow(a, 3) + Math.pow(b, 2)) / Math.sin(c));

    return result;
}

try {
    // Example inputs
    const a = 5;
    const b = 3;
    const c = Math.PI / 4; // 45 degrees

    // Step 1: Calculate the complex math result
    const mathResult = complexMath(a, b, c);

    // Step 2: Convert to binary
    // For integers: use toString(2)
    // For floats: scale and round before converting
    let binaryForm;
    if (Number.isInteger(mathResult)) {
        binaryForm = mathResult.toString(2);
    } else {
        // Example: keep 8 decimal places, then convert
        const scaled = Math.round(mathResult * 256); // scale to preserve decimals
        binaryForm = scaled.toString(2);
    }

    // Step 3: Store in a variable
    const dcb = binaryForm;

} catch (err) {
    console.error("Error:", err.message);
}

}
// end of function
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------
console.info ("ducklogic load completed sucsessfully")

