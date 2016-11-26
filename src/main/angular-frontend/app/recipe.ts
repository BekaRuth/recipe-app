export class Recipe {
  constructor(
    public id: number,
    public name: string,
    public category: string,
    public photo: string,
    public ingredients: string,
    public steps: string) { }
}
