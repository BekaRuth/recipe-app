export class Recipe {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public image: string,
    public category: string,
    public addedBy: string,
    public pieBakeOff: Boolean,
    public chiliCookOff: Boolean,
    public ingredients: Array<String>,
    public instructions: Array<String>
    ) { }
}
