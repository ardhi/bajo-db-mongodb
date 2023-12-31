async function exists (schema) {
  const { getInfo } = this.bajoDb.helper
  const { instance } = await getInfo(schema)
  return !!(instance.db.listCollections({ name: schema.collName }).hasNext())
}

export default exists
