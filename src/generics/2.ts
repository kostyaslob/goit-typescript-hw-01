type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

function compare<T extends "name" | "color", U extends "position" | "weight">
    (top: Pick<AllType, T> & { name: string; color: string }, bottom: Pick<AllType, U> & { position: number;  weight: number}): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}
