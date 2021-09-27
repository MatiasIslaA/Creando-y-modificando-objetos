function Consultorio(nombre, pacientes) {
  this.nombre = nombre;
  this.pacientes = pacientes || [];
}

Consultorio.prototype.agregar_paciente = function (paciente) {
  this.pacientes.push(paciente);
};

Consultorio.prototype.mostrar_pacientes = function () {
  for (var i = 0; i < this.pacientes.length; i++) {
    console.log(
      `Nombre: ${this.pacientes[
        i
      ].getNombre()} | Edad: ${this.pacientes[0].getEdad()} | Rut: ${this.pacientes[
        i
      ].getRut()} | Diagnóstico: ${this.pacientes[i].getDiagnostico()}`
    );
  }
};

function Paciente(nombre, edad, rut, diagnostico) {
  var _nombre = nombre;
  var _edad = edad;
  var _rut = rut;
  var _diagnostico = diagnostico;

  Object.defineProperty(this, "_getNombre", {
    get: function () {
      return _nombre;
    },
  });
  Object.defineProperty(this, "_setNombre", {
    set: function (nombre) {
      _nombre = nombre;
    },
  });

  Object.defineProperty(this, "_getEdad", {
    get: function () {
      return _edad;
    },
  });
  Object.defineProperty(this, "_setEdad", {
    set: function (edad) {
      _edad = edad;
    },
  });

  Object.defineProperty(this, "_getRut", {
    get: function () {
      return _rut;
    },
  });
  Object.defineProperty(this, "_setRut", {
    set: function (rut) {
      _rut = rut;
    },
  });

  Object.defineProperty(this, "_getDiagnostico", {
    get: function () {
      return _diagnostico;
    },
  });
  Object.defineProperty(this, "_setDiagnostico", {
    set: function (diagnostico) {
      _diagnostico = diagnostico;
    },
  });
}

Paciente.prototype.getNombre = function () {
  return this._getNombre;
};

Paciente.prototype.setNombre = function (nombre) {
  this._setNombre = nombre;
};

Paciente.prototype.getEdad = function () {
  return this._getEdad;
};

Paciente.prototype.setEdad = function (edad) {
  this._setEdad = edad;
};

Paciente.prototype.getRut = function () {
  return this._getRut;
};

Paciente.prototype.setRut = function (rut) {
  this._setRut = rut;
};

Paciente.prototype.getDiagnostico = function () {
  return this._getDiagnostico;
};

Paciente.prototype.setDiagnostico = function (diagnostico) {
  this._setDiagnostico = diagnostico;
};

var paciente1 = new Paciente("Carlos", "18", "19000000-2", "Estigamtismo");
var paciente2 = new Paciente("Maria", "20", "19400000-2", "Astigmatismo");
var paciente3 = new Paciente("Juan", "19", "18000000-2", "Miopia");
var consultorio1 = new Consultorio("Pacifico", [paciente1, paciente2]);

consultorio1.agregar_paciente(paciente3);

console.log(paciente1.getNombre());

console.log(consultorio1.mostrar_pacientes());
