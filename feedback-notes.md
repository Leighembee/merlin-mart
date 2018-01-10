## Merge conflicts

Try to avoid unnecessary merge conflicts: e.g. making lots of little files.

But merge conflicts are "good"—they tell you something needs compromising.

## Github-ish stuff

- Leigh: setup git on your machine to [configure your email correctly](https://help.github.com/articles/setting-your-commit-email-address-in-git/)  (your git email should match any email address associated with your github account)
- Standardize commit message style, e.g. [this one](https://seesparkbox.com/foundry/semantic_commit_messages)
- Awesome job splitting up issues into small things
- Try out pull requests [see here for more](https://learn.fullstackacademy.com/workshop/54b3de126adfdb0b0027d52f/content/54b3de6f6adfdb0b0027d559/text). They can be good for keeping track of reasoning behind changes, comments, feedback

## Models

- Category as a table/model (would be many<=>many with Product) with join table
  - association would look like `Product.belongsToMany(Category, {through: 'product_category'});`
  - then you could do `product.addCategory(someCategoryId)`
  - `Product.findById(someId, {include: [Category]})` to eager load / JOIN
- It makes sense to have a table, if users can update it, the data in it is dynamic and user-driven
- If categories can be totally defined by the developers, you don't necessarily need a table / model
- Product & Order should have a many<=>many relationship. The join table can be explicit, allowing you to add columns to it (see below)

```js
const Order = db.define('order', ...);
const Product = db.define('product', ...);
const OrderProduct = db.define('order_product', {
  quantity: Sequelize.INTEGER,
  priceAtPurchase: Sequelize.INTEGER,
});
Order.belongsToMany(Product, {through: OrderProduct});
```

## Code hygeine

- Getting used to keeping dead code out, consistent styling etc is important
- Use comments to document code, not squirrel it away for later

## Testing

- Each person write 1-2 tests of each kind (route, model, react, redux), for practice
- I recommend as you go (in general), for this project, make it a separate issue / PR