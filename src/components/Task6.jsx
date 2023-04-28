// Задание:
//     Создайте компонент карточки для страницы с ценами, она должна принимать
//     тип, цену, текст для кнопки и children с описанием.
//     Добавьте на страницу 3 таких карточки с разными ценами.
// HTML:

export function Task6({type, price = "$"+100, content, children }) {
console.log(type, price, content)

  return (
    <div className="card mb-4 box-shadow">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">{(price === 0) ? type = "Free" : type  }</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">{price}
         <small className="text-muted">/ mo</small>
        </h1>
        <div className="mt-3 mb-4">{content}</div>
        <button
          type="button"
          className="btn btn-lg btn-block btn-outline-primary"
        >
        {(price === 0) ? children = "Sign up for free" : children + price}
        </button>
      </div>
    </div>
  );
}
// Task6.defaultProps={
//   price: "100$"
// }
