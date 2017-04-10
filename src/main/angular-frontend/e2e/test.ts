describe('recipe application', function() {

    browser.get('http://localhost:3000/recipes');

    const recipePhoto = element(by.id('recipe-photo'));
    const recipeTitle = element(by.id('recipe-title'));
    const recipeName = element(by.id('recipe-name'));
    const recipeCategory = element(by.id('recipe-category'));
    const recipeIngredients = element(by.id('recipe-ingredients'));
    const recipeSteps = element(by.id('recipe-steps'));
    const headerTitle = element(by.id('header-title'));

    it('starts out displaying Recipe App Title', function () {
        expect(recipeTitle.isDisplayed()).toBe(true);
    });

    it('displays recipe photos', function () {
        expect(recipePhoto.isDisplayed()).toBe(true);
    });

    it('navigates to recipeDetails page', function () {
        browser.sleep(400);
        recipePhoto.click();
        browser.sleep(400);
        expect(recipeName.isDisplayed()).toBe(true);
    });

    it('the recipeDetails page displays the category', function () {
        expect(recipeCategory.isDisplayed()).toBe(true);
    });

    it('the recipeDetails page displays the ingredients', function () {
        expect(recipeIngredients.isDisplayed()).toBe(true);
    });

    it('the recipeDetails page displays the steps', function () {
        expect(recipeSteps.isDisplayed()).toBe(true);
    });

    it('navigates back to the recipeList', function () {
        headerTitle.click();
        browser.sleep(400);
        expect(recipeTitle.isDisplayed()).toBe(true);
    })
});