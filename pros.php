<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    var_dump($_POST);
    // Obtener los datos del formulario
    $nombre = $_POST['nombre'];
    $fecha = $_POST['fecha'];

    // Configuración de la base de datos desde las variables de entorno
    $db_host = $_ENV['DB_HOST'];
    $db_nombre = $_ENV['DB_NAME'];
    $db_usuario = $_ENV['DB_USER'];
    $db_password = $_ENV['DB_PASSWORD'];
    $db_puerto = $_ENV['DB_PORT'];

    // Conexión a la base de datos
    $conexion = mysqli_connect($db_host, $db_usuario, $db_password, $db_nombre, $db_puerto);

    if (!$conexion) {
        die("Error al conectar a la base de datos: " . mysqli_connect_error());
    }

    // Escapar datos antes de usarlos en la consulta
    $nombre = mysqli_real_escape_string($conexion, $nombre);
    $fecha = mysqli_real_escape_string($conexion, $fecha);

    // Crear la consulta SQL
    $query = "INSERT INTO test (nombre, fecha) VALUES ('$nombre', '$fecha')";

    // Ejecutar la consulta
    $resultado = mysqli_query($conexion, $query);

    if ($resultado) {
        echo "Datos almacenados en la base de datos.";
    } else {
        echo "Error al almacenar los datos: " . mysqli_error($conexion);
    }

    // Cerrar la conexión
    mysqli_close($conexion);
}
?>