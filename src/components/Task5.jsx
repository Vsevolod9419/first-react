// Задание: 
//     Создайте карточку для поста в блог. Она должна принимать картинку, 
//     alt для картинки, описание поста, время для прочтения
// HTML:
//через пропс


export function Task5({...obj}){
	// console.log(obj)
	//const {img, alt, title, time} = obj

	return(
    <div className="card mb-4 box-shadow">
      <img className="card-img-top" src={obj.img} alt={obj.alt} style={{height: "225px", width:"225px", display: "block"}}/>
      <div className="card-body">
        <p className="card-text">{obj.title}</p>
        <div className="d-flex justify-content-between align-items-center">
          <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
          <small className="text-muted">{obj.time}</small>
        </div>
      </div>
    </div>
	)
}
