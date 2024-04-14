import {db, User, Team, Player, PlayerAttributes} from 'astro:db'
const users = await db.select().from(User)
const teams = await db.select().from(Team)
const players = await db.select().from(Player)
const playersAttributes = await db.select().from(PlayerAttributes)

export const Users = [
  {
    id: '1',
    name: '',
    shield: '',
    team: '',
    currency: 999999999,
    hardCurrency: 99999,
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
    players: [
      {
        playerId: '1',
        isStarter: true,
      },
      {
        playerId: '2',
        isStarter: true,
      },
    ]
  },
  {
    id: '2',
    name: 'Aniquiladores FC',
    shield: '726173891.png',
    points: 0,
    wins: 0,
    plays: 0,
    players: []
  },
  {
    id: '3',
    name: 'El Barrio',
    shield: '916751113.png',
    points: 0,
    wins: 0,
    plays: 0,
    players: []
  },
  {
    id: '4',
    name: 'Jijantes FC',
    shield: '784325114.png',
    points: 0,
    wins: 0,
    plays: 0,
    players: []
  },
  {
    id: '5',
    name: 'Kunisports',
    shield: '469299352.png',
    points: 0,
    wins: 0,
    plays: 0,
    players: []
  },
  {
    id: '6',
    name: 'Los Troncos FC',
    shield: '183436923.png',
    points: 0,
    wins: 0,
    plays: 0,
    players: []
  },
  {
    id: '7',
    name: 'PIO FC',
    shield: '540564111.png',
    points: 0,
    wins: 0,
    plays: 0,
    players: []
  },
  {
    id: '8',
    name: 'Porcinos FC',
    shield: '560492363.png',
    points: 0,
    wins: 0,
    plays: 0,
    players: []
  },
  {
    id: '9',
    name: 'Rayo de Barcelona',
    shield: '799394206.png',
    points: 0,
    wins: 0,
    plays: 0,
    players: []
  },
  {
    id: '10',
    name: 'Saiyans FC',
    shield: '461216643.png',
    points: 0,
    wins: 0,
    plays: 0,
    players: []
  },
  {
    id: '11',
    name: 'Ultimate Móstoles',
    shield: '341755741.png',
    points: 0,
    wins: 0,
    plays: 0,
    players: []
  },
  {
    id: '12',
    name: 'xBuyer Team',
    shield: '44439489.png',
    points: 0,
    wins: 0,
    plays: 0,
    players: []
  },
]

export const Players = [
  {
    id: '1',
    name: 'Lluis Alsina',
    teamId: '1',
    dorsal: 25,
    position: 2,
    energy: 100,
    morale: 90,
    form: 80,
    isGoalkeeper: false, // Indica si el jugador es portero o no
    attributes: {
      speed: 75,
      physical: 73,
      shooting: 80,
      passing: 77,
      dribbling: 78,
      defense: 63,
    },
    attributesGoalkeeper: {
      reflexes: 0,
      diving: 0,
      handling: 0,
      positioning: 0,
      kicking: 0,
      aerialReach: 0,
    },
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
  {
    id: '2',
    name: 'Joan Canet',
    teamId: '1',
    dorsal: 7,
    position: 0,
    energy: 100,
    morale: 90,
    form: 80,
    isGoalkeeper: true, // Indica si el jugador es portero o no
    attributes: {
      speed: 0,
      physical: 0,
      shooting: 0,
      passing: 0,
      dribbling: 0,
      defense: 0,
    },
    attributesGoalkeeper: {
      reflexes: 70,
      diving: 72,
      handling: 76,
      positioning: 80,
      kicking: 72,
      aerialReach: 68,
    },
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
  {
    id: '3',
    name: 'Marc Granero',
    teamId: '1',
    dorsal: 23,
    position: 1,
    energy: 100,
    morale: 90,
    form: 80,
    isGoalkeeper: false, // Indica si el jugador es portero o no
    attributes: {
      speed: 82,
      physical: 78,
      shooting: 86,
      passing: 76,
      dribbling: 79,
      defense: 80,
    },
    attributesGoalkeeper: {
      reflexes: 0,
      diving: 0,
      handling: 0,
      positioning: 0,
      kicking: 0,
      aerialReach: 0,
    },
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
  {
    id: '4',
    name: 'Marcos Guerrero',
    teamId: '1',
    dorsal: 22,
    position: 1,
    energy: 100,
    morale: 90,
    form: 80,
    isGoalkeeper: false, // Indica si el jugador es portero o no
    attributes: {
      speed: 68,
      physical: 65,
      shooting: 67,
      passing: 62,
      dribbling: 64,
      defense: 67,
    },
    attributesGoalkeeper: {
      reflexes: 0,
      diving: 0,
      handling: 0,
      positioning: 0,
      kicking: 0,
      aerialReach: 0,
    },
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
  {
    id: '5',
    name: 'Raúl Ledo',
    teamId: '1',
    dorsal: 33,
    position: 1,
    energy: 100,
    morale: 90,
    form: 80,
    isGoalkeeper: false, // Indica si el jugador es portero o no
    attributes: {
      speed: 67,
      physical: 64,
      shooting: 68,
      passing: 64,
      dribbling: 64,
      defense: 70,
    },
    attributesGoalkeeper: {
      reflexes: 0,
      diving: 0,
      handling: 0,
      positioning: 0,
      kicking: 0,
      aerialReach: 0,
    },
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
  {
    id: '6',
    name: 'Marc Pluvins',
    teamId: '1',
    dorsal: 91,
    position: 2,
    energy: 100,
    morale: 90,
    form: 80,
    isGoalkeeper: false, // Indica si el jugador es portero o no
    attributes: {
      speed: 75,
      physical: 73,
      shooting: 78,
      passing: 70,
      dribbling: 75,
      defense: 78,
    },
    attributesGoalkeeper: {
      reflexes: 0,
      diving: 0,
      handling: 0,
      positioning: 0,
      kicking: 0,
      aerialReach: 0,
    },
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
  {
    id: '7',
    name: 'Albert Dalmau',
    teamId: '1',
    dorsal: 30,
    position: 1,
    energy: 100,
    morale: 90,
    form: 80,
    isGoalkeeper: false, // Indica si el jugador es portero o no
    attributes: {
      speed: 72,
      physical: 74,
      shooting: 74,
      passing: 68,
      dribbling: 70,
      defense: 76,
    },
    attributesGoalkeeper: {
      reflexes: 0,
      diving: 0,
      handling: 0,
      positioning: 0,
      kicking: 0,
      aerialReach: 0,
    },
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
  {
    id: '8',
    name: 'John de la Cruz',
    teamId: '1',
    dorsal: 8,
    position: 3,
    energy: 100,
    morale: 90,
    form: 80,
    isGoalkeeper: false, // Indica si el jugador es portero o no
    attributes: {
      speed: 75,
      physical: 70,
      shooting: 71,
      passing: 68,
      dribbling: 67,
      defense: 77,
    },
    attributesGoalkeeper: {
      reflexes: 0,
      diving: 0,
      handling: 0,
      positioning: 0,
      kicking: 0,
      aerialReach: 0,
    },
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
  {
    id: '9',
    name: 'Albert Ruiz',
    teamId: '1',
    dorsal: 9,
    position: 3,
    energy: 100,
    morale: 90,
    form: 80,
    isGoalkeeper: false, // Indica si el jugador es portero o no
    attributes: {
      speed: 75,
      physical: 72,
      shooting: 73,
      passing: 73,
      dribbling: 77,
      defense: 78,
    },
    attributesGoalkeeper: {
      reflexes: 0,
      diving: 0,
      handling: 0,
      positioning: 0,
      kicking: 0,
      aerialReach: 0,
    },
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
  {
    id: '10',
    name: 'Alberto Arnalot',
    teamId: '1',
    dorsal: 1,
    position: 0,
    energy: 100,
    morale: 90,
    form: 80,
    isGoalkeeper: false, // Indica si el jugador es portero o no
    attributes: {
      speed: 0,
      physical: 0,
      shooting: 0,
      passing: 0,
      dribbling: 0,
      defense: 0,
    },
    attributesGoalkeeper: {
      reflexes: 82,
      diving: 87,
      handling: 81,
      positioning: 72,
      kicking: 82,
      aerialReach: 80,
    },
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
  }
]

// Función para buscar un usuario por su ID
export function findUserById(userId) {
  return users.find(user => user.id === userId);
}

// Función para buscar un equipo por su ID
export function findTeamById(teamId) {
  return teams.find(team => team.id === teamId);
}

// Función para buscar un jugador por su ID
export function findPlayerById(playerId) {
  return players.find(player => player.id === playerId);
}

// Función para buscar jugadores de un equipo por su ID
export function findPlayersByTeamId(teamId) {
  return players.filter(player => player.team_id === teamId);
}

// Función para buscar los atributos de un jugador por su ID
export function findAttributesByPlayerId(playerId) {
  return playersAttributes.find(attribute => attribute.player_id === playerId);
}

// Función para formatear un numero en una moneda
export function formatNumber(amount, isCurrency = false) {
  if (isCurrency) {
    return amount.toLocaleString('es-ES', {
      style: 'currency',
      currency: 'EUR',
    });
  } else {
    return amount.toLocaleString('es-ES');
  }
}


// Calcular la media de un jugador
export function calculatePlayerAverage(playerId, includeDecimals = false) {
  const playerAttributes = findAttributesByPlayerId(playerId);

  if (!playerAttributes) {
    return null;
  }

  let attributeCount = 0;
  let totalAttributes = 0;

  // Función para sumar los atributos no nulos
  const sumNonZeroAttributes = (attributes) => {
    for (const key in attributes) {
      if (Object.hasOwnProperty.call(attributes, key) && key !== 'player_id' && attributes[key] !== 0) {
        totalAttributes += attributes[key];
        attributeCount++;
      }
    }
  };

  // Suma los atributos relevantes del jugador
  sumNonZeroAttributes(playerAttributes);

  // Calcula la media de los atributos del jugador
  let average = totalAttributes / attributeCount;

  // Redondea la media si includeDecimals es false
  if (!includeDecimals) {
    average = Math.round(average);
  }

  return average;
}

// Función para devolver el nombre de la posicion
export function getPositionName(position, abbreviated = false) {
  switch (position) {
    case 0:
      return abbreviated ? 'POR' : 'Portero';
    case 1:
      return abbreviated ? 'DEF' : 'Defensa';
    case 2:
      return abbreviated ? 'MC' : 'Medio';
    case 3:
      return abbreviated ? 'DL' : 'Delantero';
    default:
      return abbreviated ? 'OT' : 'Otro';
  }
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