const btnDepartamentos=document.getElementById('btn-departamentos'),
	  btnCerrarMenu=document.getElementById('btn-menu-cerrar')	,
	  grid=document.getElementById('grid'),
	  contenedorEnlacesNav = document.querySelector('#menu .contenedor-enlaces-nav'),
	  contenedorSubCategorias=document.querySelector('#grid .contenedor-subcategorias'),
	  /*saber si es un dispositivo movil resultado true o false*/
	  esDispositivoMovil=()=>window.innerWidth<=800;
btnDepartamentos.addEventListener('mouseover',()=>{
	/*si no es un dispositivo movil */
	if(!esDispositivoMovil()){
		grid.classList.add('activo');
	}
});
/*cuando saquemos el cursor se escondera el menu*/
grid.addEventListener('mouseleave',()=>{
	grid.classList.remove('activo');
});
document.querySelectorAll('#menu .categorias a').forEach((elemento)=>{
	/*console.log(elemento);*/
	elemento.addEventListener('mouseenter',(e)=>{
		/*se obtiene el atributo data de cada categoria*/
		//console.log(e.target.dataset.categoria);
		if(!esDispositivoMovil()){
		document.querySelectorAll('#menu .subcategoria').forEach((categoria)=>{
			//console.log(categoria.dataset.categoria);
			categoria.classList.remove('activo');
			/*Compara que en valor del atributo data sea el mismo y asi mostrar los elementos del submenu*/
			if(categoria.dataset.categoria==e.target.dataset.categoria){
				categoria.classList.add('activo');
			}
		});

		}
	});
});
/*EventListener para DispositivoMovil*/
document.querySelector('#btn-menu-barras').addEventListener('click', (e) => {
	e.preventDefault();
	if(contenedorEnlacesNav.classList.contains('activo')){
		contenedorEnlacesNav.classList.remove('activo');
		document.querySelector('body').style.overflow = 'visible';
	} else {
		contenedorEnlacesNav.classList.add('activo');
		document.querySelector('body').style.overflow = 'hidden';
	}
});

/*Ver departamentos version movil*/
btnDepartamentos.addEventListener('click',(e)=>{
	e.preventDefault();
	grid.classList.add('activo');
	btnCerrarMenu.classList.add('activo');
});
/*boton de regresar en el menu de categorias*/
document.querySelector('#grid .categorias .btn-regresar').addEventListener('click',(e)=>{
	e.preventDefault();
	grid.classList.remove('activo');
	btnCerrarMenu.classList.remove('activo');
});
document.querySelectorAll('#menu .categorias a').forEach((elemento)=>{
	elemento.addEventListener('click',(e)=>{
		if(esDispositivoMovil()){
			contenedorSubCategorias.classList.add('activo');
			document.querySelectorAll('#menu .subcategoria').forEach((categoria)=>{
				categoria.classList.remove('activo');
				if(categoria.dataset.categoria==e.target.dataset.categoria){
					categoria.classList.add('activo');
				}
			});
		}
	});
});
document.querySelectorAll('#grid .contenedor-subcategorias .btn-regresar').forEach((boton)=>{
	boton.addEventListener('click',(e)=>{
			e.preventDefault();
			contenedorSubCategorias.classList.remove('activo');
			
		});
});
btnCerrarMenu.addEventListener('click',(e)=>{
	e.preventDefault();
	document.querySelectorAll('#menu .activo').forEach((elemento)=>{
		elemento.classList.remove('activo');
	});
	document.querySelector('body').style.overflow="visible";
});