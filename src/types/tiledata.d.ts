declare type Direction = "row" | "column"

declare interface TileData {
    horizontal?: boolean,
    children?: TileData[]
}