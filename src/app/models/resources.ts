
export interface Person{
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    homeworld: any;
    birth_year: string;
    gender: string;
    eye_color: string;
    vehicles: Vehicle[];
    films: Film[];
    species: Species[];
    starships: Starship[];
    created: Date;
    edited: Date
    url: string;
}

export interface Film{
    episode_id: number;
    title: string;
    release_date: Date;
    opening_crawl: string;
    producer: string;
    director: string;
    characters: [];
    planets: [];
    vehicles: [];
    species: [];
    starships: [];
    url: string;
    created: Date;
    edited: Date;
}

export interface Planet{
    name: string;
    population: string;
    diameter: string;
    surface_water: string;
    terrain: string;
    gravity: string;
    climate: string;
    rotation_period: string;
    orbital_period: string;
    residents: Person[];
    films: Film[];
    created: Date;
    edited: Date;
    url: string;
}

export interface Vehicle{
    name: string;
    model: string;
    vehicle_class: string;
    length: string;
    passengers: string;
    manufacturer: string;
    consumables: string;
    crew: string;
    max_atmosphering_speed: string;
    cost_in_credits: string;
    cargo_capacity: string;
    films: Film[];
    pilots: Person[];
    edited: Date;
    created: Date;
    url: string;
}

export interface Starship{
    name: string;
    manufacturer: string;
    passengers: string;
    consumables: string;
    crew: string;
    hyperdrive_rating: string;
    MGLT: string;
    max_atmosphering_speed: string;
    model: string;
    cost_in_credits: string;
    cargo_capacity: string;
    starship_class: string;
    length: string;
    pilots: Person[];
    films: Film[];
    edited: Date;
    created: Date;
    url: string;
}

export interface Species{
    name: string;
    average_height: string;
    eye_colors: string;
    classification: string;
    hair_colors: string;
    language: string;
    average_lifespan: string;
    designation: string;
    skin_colors: string;
    homeworld: any;
    films: Film[];
    people: Person[];
    url: string;
    created: Date;
    edited: Date;
}