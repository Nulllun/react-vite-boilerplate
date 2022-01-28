module.exports = {
  "src/**/*.{ts,tsx}": [
    "yarn lint"
  ],
  "src/**/*.json": [
    "prettier --write"
  ]
}