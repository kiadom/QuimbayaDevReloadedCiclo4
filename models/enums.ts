enum Enum_Rol{
    estudiante = "Estudiante",
    lider = "Lider",
    administrador = "Administrador"
}

enum Enum_EstadoUsuario {
    pendiente = 'Pendiente',
    autorizado = 'Autorizado',
    no_autorizado = 'No_Autorizado'
}

enum Enum_EstadoProyecto{
    activo = "Activo",
    inactivo = "Inactivo" 
}

enum Enum_FaseProyecto{
    iniciado = "Iniciado",
    en_desarrollo = "En_Desarrollo",
    terminado = "Terminado",
    nulo = ""
}

enum Enum_EstadoInscripcion{
    aceptada = "Aceptada",
    rechazada = "Rechazado",
    pendiente = "Pendiente" //adicioné este estado para que sea el inicial
}


enum Enum_TipoObjetivo{
    general = "General",
    especifico = "Especifico" ,
}

export { Enum_Rol, Enum_EstadoUsuario, Enum_EstadoProyecto, Enum_FaseProyecto, Enum_EstadoInscripcion, Enum_TipoObjetivo};