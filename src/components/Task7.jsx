//Написать компонент Jumbotron
// Пример использования:
//    <Jumbotron
//        title="Custom jumbotron"
//        description="Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking."
//        buttonLabel="Example button"
//    />
// HTML:
//   <div class="container-fluid py-5">
//     <h1 class="display-5 fw-bold">Custom jumbotron</h1>
//     <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
//     <button class="btn btn-primary btn-lg" type="button">Example button</button>
//   </div>

export function Task7(){


	return(
		
  <div className="container-fluid py-5">
    <h1 className="display-5 fw-bold">Custom jumbotron</h1>
    <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
    <button className="btn btn-primary btn-lg" type="button">Example button</button>
  </div>
	)
}