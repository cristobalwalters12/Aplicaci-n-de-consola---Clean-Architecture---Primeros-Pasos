import fs from "fs";

let output: string = "";
const base = 5;

const headerBase = `
==================================
=======  TypeScript Starter ======
==================================
======= tabla del: ${base} =======
`;
for (let i = 1; i <= 10; i++) {
  output += `${base} x ${i} = ${base * i}\n`;
}
const outputMessage = headerBase + output;
fs.writeFileSync("output.txt", outputMessage);
