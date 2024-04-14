// https://astro.build/db/seed
import {db, User, Team, Player, PlayerAttributes} from 'astro:db';


export default async function seed() {
  await db.insert(User).values([
    {
      id: '1',
      name: 's2',
      email: 'gfdgefd',
      currency: 999999,
      hardCurrency: 9999,
    },
    {
      id: '2',
      name: 'Alex',
      email: 'tgfgdg',
      currency: 999,
      hardCurrency: 99,
    },
  ])

  await db.insert(Team).values([
    {
      id: '1',
      name: '1K FC',
      shield: '398917228.png',
      points: 0,
      wins: 0,
      plays: 0,
      user_id: '1'
    },
    {
      id: '2',
      name: 'Aniquiladores FC',
      shield: '726173891.png',
      points: 0,
      wins: 0,
      plays: 0,
      user_id: '2'
    },
    {
      id: '3',
      name: 'El Barrio',
      shield: '916751113.png',
      points: 0,
      wins: 0,
      plays: 0,
      user_id: null
    },
    {
      id: '4',
      name: 'Jijantes FC',
      shield: '784325114.png',
      points: 0,
      wins: 0,
      plays: 0,
      user_id: null
    },
    {
      id: '5',
      name: 'Kunisports',
      shield: '469299352.png',
      points: 0,
      wins: 0,
      plays: 0,
      user_id: null
    },
    {
      id: '6',
      name: 'Los Troncos FC',
      shield: '183436923.png',
      points: 0,
      wins: 0,
      plays: 0,
      user_id: null
    },
    {
      id: '7',
      name: 'PIO FC',
      shield: '540564111.png',
      points: 0,
      wins: 0,
      plays: 0,
      user_id: null
    },
    {
      id: '8',
      name: 'Porcinos FC',
      shield: '560492363.png',
      points: 0,
      wins: 0,
      plays: 0,
      user_id: null
    },
    {
      id: '9',
      name: 'Rayo de Barcelona',
      shield: '799394206.png',
      points: 0,
      wins: 0,
      plays: 0,
      user_id: null
    },
    {
      id: '10',
      name: 'Saiyans FC',
      shield: '461216643.png',
      points: 0,
      wins: 0,
      plays: 0,
      user_id: null
    },
    {
      id: '11',
      name: 'Ultimate Móstoles',
      shield: '341755741.png',
      points: 0,
      wins: 0,
      plays: 0,
      user_id: null
    },
    {
      id: '12',
      name: 'xBuyer Team',
      shield: '44439489.png',
      points: 0,
      wins: 0,
      plays: 0,  
      user_id: null
    },
  ])

  await db.insert(Player).values([
    {
      id: '1',
      name: 'Lluis Alsina',
      position: 2,
      dorsal: '25',
      energy: 100,
      morale: 100,
      form: 100,
      isGoalkeeper: false,
      team_id: '1',
    },
    {
      id: '2',
      name: 'Joan Canet',
      dorsal: 7,
      position: 0,
      energy: 100,
      morale: 90,
      form: 80,
      isGoalkeeper: true,
      team_id: '1',
    },
    {
      id: '3',
      name: 'Marc Granero',
      dorsal: 23,
      position: 1,
      energy: 100,
      morale: 90,
      form: 80,
      isGoalkeeper: false,
      team_id: '1',
    },
    {
      id: '4',
      name: 'Marcos Guerrero',
      dorsal: 22,
      position: 1,
      energy: 100,
      morale: 90,
      form: 80,
      isGoalkeeper: false,
      team_id: '1',
    },
    {
      id: '5',
      name: 'Raúl Ledo',
      dorsal: 33,
      position: 1,
      energy: 100,
      morale: 90,
      form: 80,
      isGoalkeeper: false,
      team_id: '1',
    },
    {
      id: '6',
      name: 'Marc Pluvins',
      dorsal: 91,
      position: 2,
      energy: 100,
      morale: 90,
      form: 80,
      isGoalkeeper: false,
      team_id: '1',
    },
    {
      id: '7',
      name: 'Albert Dalmau',
      dorsal: 30,
      position: 1,
      energy: 100,
      morale: 90,
      form: 80,
      isGoalkeeper: false,
      team_id: '1',
    },
    {
      id: '8',
      name: 'John de la Cruz',
      dorsal: 8,
      position: 3,
      energy: 100,
      morale: 90,
      form: 80,
      isGoalkeeper: false,
      team_id: '1',
    },
    {
      id: '9',
      name: 'Albert Ruiz',
      dorsal: 9,
      position: 3,
      energy: 100,
      morale: 90,
      form: 80,
      isGoalkeeper: false,
      team_id: '1',
    },
    {
      id: '10',
      name: 'Alberto Arnalot',
      dorsal: 1,
      position: 0,
      energy: 100,
      morale: 90,
      form: 80,
      isGoalkeeper: false,
      team_id: '1',
    }
  ])

  await db.insert(PlayerAttributes).values([
    {
      speed: 72,
      physical: 76,
      shooting: 74,
      passing: 73,
      dribbling: 79,
      defense: 78,
      reflexes: 0,
      diving: 0,
      handling: 0,
      positioning: 0,
      kicking: 0,
      aerialReach: 0,

      player_id: '1',
      },
  ])
}