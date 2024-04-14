import { column, defineDb } from 'astro:db';

const User = {
  columns: {
    id: column.text({ primaryKey: true }),
    name: column.text(),
    email: column.text(),
    
    currency: column.number(),
    hardCurrency: column.number(),
  }
}

const Team = {
  columns: {
    id: column.text({ primaryKey: true }),
    name: column.text(),
    shield: column.text(),
    points: column.number(),
    wins: column.number(),
    plays: column.number(),

    user_id: column.text({ optional: true, references: () => User.columns.id }),
  }
}

const Player = {
  columns: {
    id: column.text({ primaryKey: true }),
    name: column.text(),

    position: column.number(),

    //wins: column.number(),
    //plays: column.number(),

    dorsal: column.number(),

    energy: column.number(),
    morale: column.number(),
    form: column.number(),

    isGoalkeeper: column.boolean(),

    //user_id: column.text({optional: true, references: () => User.columns.id}),
    team_id: column.text({optional: true, references: () => Team.columns.id}),
  }
}

const PlayerAttributes = {
  columns: {
    speed: column.number(),
    physical: column.number(),
    shooting: column.number(),
    passing: column.number(),
    dribbling: column.number(),
    defense: column.number(),
    reflexes: column.number(),
    diving: column.number(),
    handling: column.number(),
    positioning: column.number(),
    kicking: column.number(),
    aerialReach: column.number(),

    player_id: column.text({ references: () => Player.columns.id, primaryKey: true }),
  }
};

export default defineDb({
  tables: { User, Team, Player, PlayerAttributes }
})