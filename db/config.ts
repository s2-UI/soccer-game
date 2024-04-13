import { column, defineDb } from 'astro:db';

const Teams = {
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    shield: column.text(),
    points: column.number(),
    wins: column.number(),
    plays: column.number(),
  }
}

export default defineDb({
  tables: { Teams },
})