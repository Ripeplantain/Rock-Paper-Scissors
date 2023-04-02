export interface Formatter {
    reset(): string
}

export interface Game {
    choice: String[];
    start(): void;
    logic(): void;
}