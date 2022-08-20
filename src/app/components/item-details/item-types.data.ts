interface People {
  name: string;
  birth_year: string;
  gender: string;
  height: string;
  skin_color: string;
  hair_color: string;
  eye_color: string;
}
interface Planets {
  name: string;
  population: string;
  diameter: string;
  climate: string;
  terrain: string;
  gravity: string;
  orbital_period: string;
  rotation_period: string;
  surface_water: string;
}
interface Species {
  name: string;
  classification: string;
  language: string;
  average_lifespan: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
}
interface Starships {
  name: string;
  starship_class: string;
  model: string;
  manufacturer: string;
  MGLT: string;
  length: string;
  max_atmosphering_speed: string;
  hyperdrive_rating: string;
  cargo_capacity: string;
  passengers: string;
  crew: string;
  consumables: string;
  cost_in_credits: string;
}
interface Vehicles {
  name: string;
  vehicle_class: string;
  model: string;
  manufacturer: string;
  length: string;
  max_atmosphering_speed: string;
  cargo_capacity: string;
  passengers: string;
  crew: string;
  consumables: string;
  cost_in_credits: string;
}

export const dataObjectTypes: any = {
  people: ({
    name,
    birth_year,
    gender,
    height,
    skin_color,
    hair_color,
    eye_color,
  }: People): People =>
    <People>{
      name,
      birth_year,
      gender,
      height,
      skin_color,
      hair_color,
      eye_color,
    },
  planets: ({
    name,
    population,
    diameter,
    climate,
    terrain,
    gravity,
    orbital_period,
    rotation_period,
    surface_water,
  }: Planets): Planets =>
    <Planets>{
      name,
      population,
      diameter,
      climate,
      terrain,
      gravity,
      orbital_period,
      rotation_period,
      surface_water,
    },
  species: ({
    name,
    classification,
    language,
    average_lifespan,
    average_height,
    skin_colors,
    hair_colors,
    eye_colors,
  }: Species): Species =>
    <Species>{
      name,
      classification,
      language,
      average_lifespan,
      average_height,
      skin_colors,
      hair_colors,
      eye_colors,
    },
  starships: ({
    name,
    starship_class,
    model,
    manufacturer,
    MGLT,
    length,
    max_atmosphering_speed,
    hyperdrive_rating,
    cargo_capacity,
    passengers,
    crew,
    consumables,
    cost_in_credits,
  }: Starships): Starships =>
    <Starships>{
      name,
      starship_class,
      model,
      manufacturer,
      MGLT,
      length,
      max_atmosphering_speed,
      hyperdrive_rating,
      cargo_capacity,
      passengers,
      crew,
      consumables,
      cost_in_credits,
    },
  vehicles: ({
    name,
    vehicle_class,
    model,
    manufacturer,
    length,
    max_atmosphering_speed,
    cargo_capacity,
    passengers,
    crew,
    consumables,
    cost_in_credits,
  }: Vehicles): Vehicles =>
    <Vehicles>{
      name,
      vehicle_class,
      model,
      manufacturer,
      length,
      max_atmosphering_speed,
      cargo_capacity,
      passengers,
      crew,
      consumables,
      cost_in_credits,
    },
};
