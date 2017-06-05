export class Recipe {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public image: string,
    public ingredients: Array<String>,
    public instructions: Array<String>
    ) { }
}

export class IngredientData {
  constructor(
    public id: number,
    public name: string
  ) { }
}