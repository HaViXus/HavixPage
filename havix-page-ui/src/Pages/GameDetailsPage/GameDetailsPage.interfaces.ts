export interface GameData {
	name: string;
    available: boolean;
    description: string;
    controls: string;
    fullDescription: string;
    requirements: string;
    aspectRatio: string;
}

export interface GameMovieData {
    id: string;
    game: string;
    url: string;
}
