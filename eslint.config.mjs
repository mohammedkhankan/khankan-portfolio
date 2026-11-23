import next from "eslint-config-next";

const config = [...next, { ignores: ["out/**", ".next/**", "assets-src/**"] }];
export default config;
