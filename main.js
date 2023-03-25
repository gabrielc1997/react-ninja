// // Nullish Coalescing Operator

// // const idade = 0;

// // 0, '', false, undefined, null => falsy || valores nao validos

// // document.body.innerText = 'Sua idade é: ' + (idade ?? 'Não informado');


// // Objetos

// // const user = {
// //     name: 'Diego',
// //     nickname: 'Schell',
// //     idade: 27,
// //     address: {
// //         street: 'Rua teste',
// //         Numero: '176'
// //     },
// // };

// // document.body.innerText = ('name' in user);
// // document.body.innerText = Object.keys(user);
// // document.body.innerText = Object.values(user);
// // document.body.innerText = JSON.stringify(Object.values(user));
// // document.body.innerText = JSON.stringify(Object.entries(user));


// // // Desestruturação
// // const { address, idade: age, nickname = 'Fernandes' } = user

// // document.body.innerText = JSON.stringify({address, age, nickname});



// // function mostraIdade({idade}){
// //     return idade;
// // }


// // REST OPERATOR
// // Operador rest, retorna o resto do objeto como no exemplo

// // const {name, ...rest} = user;

// // const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // const [first, second, ...rest] = array;
// // const [first, ,third, ...rest] = array;

// // document.body.innerText = JSON.stringify({first, third, rest});


// // Short Syntax

// // const name = 'Diego';
// // const age = 27;

// // const user = {
// //     name,
// //     age,
// // };

// // document.body.innerText = JSON.stringify(user);

// // Optional Chaining    

// const user = {
//     name: 'Diego',
//     nickname: 'Schell',
//     age: 27,
//     address: {
//         street: 'Rua teste',
//         Numero: '176',
//         zip: {
//             code: 89160000,
//             city: 'Rio do Sul'
//         },
//         // getaddress (){
//         //     return 'ok'
//         // }
        
//     },
// };

// const key = 'name';
// document.body.innerText = user[key];
// // document.body.innerText = user.address?.getaddress?.() ?? 'Não informado';


