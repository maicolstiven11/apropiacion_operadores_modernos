// app3.js

import { registrarActividad } from "./modules/RegistrarActividad.js";

// Ejemplo correcto
registrarActividad({ nombre: "Reunión de equipo", fecha: "2025-12-10" });

// Ejemplo con error (falta fecha)
registrarActividad({ nombre: "Entrega de proyecto" });
