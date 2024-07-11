declare type Direction = "row" | "column"

declare interface TileData {
    direction?: Direction,
    children?: TileData[]
}