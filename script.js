let usuarios = {};

function crearUsuario(nombre, clave) {
  if (!usuarios[nombre]) {
    usuarios[nombre] = clave;
    return true;
  } else {
    return false;
  }
}

function eliminarUsuario(nombre) {
  if (usuarios[nombre]) {
    delete usuarios[nombre];
    return true;
  } else {
    return false;
  }
}

function validarCredenciales(nombre, clave) {
  if (usuarios[nombre] === clave) {
    return true;
  } else {
    return false;
  }
}

function mostrarUsuarios() {
  let listaUsuarios = "Usuarios registrados:\n";
  let nombresUsuarios = Object.keys(usuarios);

  if (nombresUsuarios.length === 0) {
    listaUsuarios += "No hay usuarios registrados.";
  } else {
    nombresUsuarios.forEach(function(nombre) {
      listaUsuarios += "- " + nombre + "\n";
    });
  }

  alert(listaUsuarios);
}

function mostrarMenuPrincipal() {
  let opcion = prompt("Seleccione una opción:\n1. Crear usuario\n2. Iniciar sesión\n3. Eliminar usuario\n4. Mostrar usuarios\n5. Salir");

  switch (opcion) {
    case "1":
      let nombreUsuario = prompt("Ingrese el nombre de usuario:");
      let claveUsuario = prompt("Ingrese la clave:");

      if (crearUsuario(nombreUsuario, claveUsuario)) {
        alert("Usuario creado exitosamente.");
      } else {
        alert("El usuario ya existe.");
      }

      mostrarMenuPrincipal();
      break;

    case "2":
      let nombreUsuarioIniciarSesion = prompt("Ingrese su nombre de usuario:");
      let claveUsuarioIniciarSesion = prompt("Ingrese su clave:");

      if (validarCredenciales(nombreUsuarioIniciarSesion, claveUsuarioIniciarSesion)) {
        alert("Inicio de sesión exitoso. ¡Bienvenido, " + nombreUsuarioIniciarSesion + "!");
        mostrarOpcionesUsuario(nombreUsuarioIniciarSesion);
      } else {
        alert("Inicio de sesión fallido. Verifique sus credenciales.");
        mostrarMenuPrincipal();
      }

      break;

    case "3":
      let nombreUsuarioEliminar = prompt("Ingrese el nombre de usuario a eliminar:");

      if (eliminarUsuario(nombreUsuarioEliminar)) {
        alert("Usuario eliminado exitosamente.");
      } else {
        alert("El usuario no existe.");
      }

      mostrarMenuPrincipal();
      break;

    case "4":
      mostrarUsuarios();
      mostrarMenuPrincipal();
      break;

    case "5":
      alert("Gracias por utilizar el sistema. ¡Hasta luego!");
      break;

    default:
      alert("Opción inválida.");
      mostrarMenuPrincipal();
      break;
  }
}

mostrarMenuPrincipal();
