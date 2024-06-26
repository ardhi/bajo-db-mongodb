async function count ({ schema, filter = {}, options = {} }) {
  const { getInfo } = this.bajoDb.helper
  const { instance } = getInfo(schema)
  const criteria = filter.query ?? {}
  const coll = instance.db.collection(schema.collName)
  const count = await coll.countDocuments(criteria)
  return { data: count }
}

export default count
