import pack from 'package-json'

if (process.argv.length === 2) {
  throw new Error("Please pass a package")
}

try {
  await pack(process.argv[2])
  console.log("Package exists")
} catch {
  console.log("Package does not exist")
}
