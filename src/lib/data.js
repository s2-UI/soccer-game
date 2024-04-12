export const Users = [
  {
    id: '1',
    name: '',
    shield: '',
    team: '',
  },
]

export const Teams = [
  {
    id: '1',
    name: '1K FC',
    shield: '398917228.png',
    points: 0,
    wins: 0,
    plays: 0,
    playerIds: ['1', '2']
  },
  {
    id: '2',
    name: 'Aniquiladores FC',
    shield: '726173891.png',
    points: 0,
    wins: 0,
    plays: 0,
    playerIds: []
  },
  {
    id: '3',
    name: 'El Barrio',
    shield: '916751113.png',
    points: 0,
    wins: 0,
    plays: 0,
    playerIds: []
  },
  {
    id: '4',
    name: 'Jijantes FC',
    shield: '784325114.png',
    points: 0,
    wins: 0,
    plays: 0,
    playerIds: []
  },
  {
    id: '5',
    name: 'Kunisports',
    shield: '469299352.png',
    points: 0,
    wins: 0,
    plays: 0,
    playerIds: []
  },
  {
    id: '6',
    name: 'Los Troncos FC',
    shield: '183436923.png',
    points: 0,
    wins: 0,
    plays: 0,
    playerIds: []
  },
  {
    id: '7',
    name: 'PIO FC',
    shield: '540564111.png',
    points: 0,
    wins: 0,
    plays: 0,
    playerIds: []
  },
  {
    id: '8',
    name: 'Porcinos FC',
    shield: '560492363.png',
    points: 0,
    wins: 0,
    plays: 0,
    playerIds: []
  },
  {
    id: '9',
    name: 'Rayo de Barcelona',
    shield: '799394206.png',
    points: 0,
    wins: 0,
    plays: 0,
    playerIds: []
  },
  {
    id: '10',
    name: 'Saiyans FC',
    shield: '461216643.png',
    points: 0,
    wins: 0,
    plays: 0,
    playerIds: []
  },
  {
    id: '11',
    name: 'Ultimate Móstoles',
    shield: '341755741.png',
    points: 0,
    wins: 0,
    plays: 0,
    playerIds: []
  },
  {
    id: '12',
    name: 'xBuyer Team',
    shield: '44439489.png',
    points: 0,
    wins: 0,
    plays: 0,
    playerIds: []
  },
]

export const Players = [
  {
    id: '1',
    name: 'Lluis Alsina',
    teamId: '1',

    dorsal: 25,

    position: 'Midfielder',

    energy: 100,
    morale: 90,
    form: 80,

    physical: 73,
    duels: 75,
    shooting: 80,
    defense: 63,
    passing: 77,
    skills: 81,

    globalStats: {
      gamesPlayed: 9,
      goals: 9,
      assists: 6,
      yellowCards: 2,
      redCards: 0,
    },

    teamStats: {
      gamesPlayed: 9,
      goals: 9,
      assists: 6,
      yellowCards: 1,
      redCards: 0,
    }
  },
]

// Función para buscar un usuario por su ID
export function findUserById(userId) {
  return Users.find(user => user.id === userId);
}

// Función para buscar un equipo por su ID
export function findTeamById(teamId) {
  return Teams.find(team => team.id === teamId);
}

// Función para buscar un jugador por su ID
export function findPlayerById(playerId) {
  return Players.find(player => player.id === playerId);
}

// Función para simular los partidos
function simulateMatches(teams) {
  const totalTeams = teams.length
  // Iterar sobre cada equipo
  for (let i = 0; i < totalTeams; i++) {
    // Iterar sobre los equipos restantes para jugar contra ellos
    for (let j = i + 1; j < totalTeams; j++) {
      // Simular los 2 partidos entre los equipos
      for (let k = 0; k < 2; k++) {
        // Simular el resultado del partido (ganado, empatado, perdido)
        const result = Math.floor(Math.random() * 3) // 0: Empate, 1: Ganado, 2: Perdido

        // Incrementar el número de partidos jugados para ambos equipos
        teams[i].plays++
        teams[j].plays++

        // Actualizar los puntos y las victorias según el resultado
        if (result === 0) {
          // Empate
          teams[i].points += 1
          teams[j].points += 1
        } else if (result === 1) {
          // Equipo i gana
          teams[i].points += 3
          teams[i].wins++
        } else {
          // Equipo j gana
          teams[j].points += 3
          teams[j].wins++
        }
      }
    }
  }
}

simulateMatches(Teams)