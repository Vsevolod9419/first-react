// Задание:
//    Выведите значения из объекта
// Данные:
//    const customer = {
//      first_name: 'Bob',
//      last_name: 'Dylan'
//    };
// HTML:
//    <div>
//      <h1>My name is Bob</h1>
//      <h2>My last name is Dylan</h2>
//    </div>

export function Task2(){
	const customer = {
		     first_name: 'Bob',
		     last_name: 'Dylan'
		   }

	return(
		<div>
			 <h1>My name is {customer.first_name}</h1>
   		 <h2>My last name is {customer.last_name}</h2>
    </div>

	)
}