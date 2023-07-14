let miHeader = `

<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
  <div class="img"><img src="img/Logo_Medipack.png" alt="Medipack" width="300px"></div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="index.html">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Clientes</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">Historia</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="medicamentos.html">Medicamentos</a></li>
            <li><a class="dropdown-item" href="#">Rehabilitación</a></li>
            <li><a class="dropdown-item" href="#">Cardiología Intervencionista</a></li>
          </ul>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="carrito1.html">Carrito</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


`
document.querySelector("header").innerHTML = miHeader;