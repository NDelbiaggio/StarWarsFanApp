
export interface Person{
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    homeworld: string;
    birth_year: string;
    url: string;
    gender: string;
    eye_color: string;
    vehicles: Vehicle[];
    films: Film[];
    species: Species[];
    starships: Starship[];
    created: Date;
    edited: Date
}

export interface Film{
    planets: Planet[];
    vehicles: Vehicle[];
    url: string;
    characters: Person[];
    title: string;
    opening_crawl: string;
    edited: Date;
    episode_id: number;
    species: Species[];
    release_date: Date;
    starships: Starship[];
    created: Date;
    producer: string;
    director: string;
}

export interface Planet{
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: Person[];
    films: Film[];
    created: Date;
    edited: Date;
    url: string;
}

export interface Vehicle{
    manufacturer: string;
    consumables: string;
    url: string;
    crew: string;
    created: Date;
    pilots: Person[];
    vehicle_class: string;
    edited: Date;
    max_atmosphering_speed: string;
    model: string;
    cost_in_credits: string;
    films: Film[];
    cargo_capacity: string;
    name: string;
    length: string;
    passengers: string;
}

export interface Starship{
    manufacturer: string;
    created: Date;
    name: string;
    consumables: string;
    url: string;
    crew: string;
    hyperdrive_rating: string;
    MGLT: string;
    pilots: Person[];
    edited: Date;
    max_atmosphering_speed: string;
    model: string;
    cost_in_credits: string;
    films: Film[];
    cargo_capacity: string;
    starship_class: string;
    length: string;
    passengers: string;
}

export interface Species{
    homeworld: string;
    average_height: string;
    url: string;
    eye_colors: string;
    classification: string;
    created: Date;
    hair_colors: string;
    language: string;
    average_lifespan: string;
    designation: string;
    edited: Date;
    skin_colors: string;
    films: Film[];
    people: Person[];
    name: string;
}