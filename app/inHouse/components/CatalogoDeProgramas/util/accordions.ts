interface accordion
{
    label:string,
    items:Array<string>
}

const accordions: Array<accordion> = [
  {
    label: "SISTEMAS INFORMATICOS",
    items: [
      "Sistema Integrado de Administracion Financiera - SIAF",
      "Sistema Integrado de Gestion Administrativa - SIGA",
      "Sistema Electronico de Contrataciones del Estado - SEACE",
      "Ofimatica para Servidores Publicos",
      "Herramientas Virtuales y TICS",
      "Proteccion de datos personales",
    ],
  },
  {
    label: "CONTRATACIONES DEL ESTADO E INVERSIÓN PÚBLICA",
    items: [
      "Gestion de las Contrataciones del Estado",
      "Gestion de Obras Publicas",
      "Sistema Nacional de Programacion Multianual y Gestion de Inversiones Invierte.pe",
      "Gestion de Proyectos de inversion en Salud",
      "Supervision y Liquidacion de Obras Publicas",
    ],
  },
  {
    label: "GESTION LOGISTICA GUBERNAMENTAL",
    items: [
      "Gestion Logistica y el Abastecimiento Publico",
      "Gestion y Control Patrimonial de Bienes Estatales",
      "Administracion de Almacenes",
      "Gestion de Bienes Patrimoniales",
    ],
  },
  {
    label: "FINANZAS PUBLICAS",
    items: [
      "Planeamiento estrategico",
      "Gestion presupuestaria y Financiera Gubernamental",
      "Presupuesto Publico por Resultados",
      "Gestion Financiera y Operaciones de Tesoreria",
      "Gestion de la Contabilidad Gubernamental",
      "Gestion Tributaria: Detracciones, Percepciones y Retenciones",
      "Tributacion Gubernamental",
    ],
  },
  {
    label: "GESTION DE RECURSOS HUMANOS Y SERVICIO CIVIL",
    items: [
      "Gestion de Recursos Humanos y Servicio Civil",
      "Indicadores de Gestion y Recursos Humanos",
      "Diseño de perfiles de puestos",
      "Gestion de Personal y Recursos Humanos en la Administracion Publica",
      "Gestion de Regimen de la Ley del Servicio Civil",
      "Planilla Electronica",
    ],
  },
  {
    label: "GESTION Y CONTROL",
    items: [
      "Gestion de Control Interno",
      "Control Previo y su Fiscalizacion en la Gestion Publica",
      "Delitos de Corrupcion en la Administracion Publica",
      "Procesos Administrativos Disciplinarios",
      "Auditoria de la calidad de Gestion de Salud",
    ],
  },
  {
    label: "DERECHO ADMINISTRATIVO",
    items: [
      "Derecho Administrativo",
      "Regimen del Procedimiento Administrativo General",
      "Procesos Administrativos y Delitos en la Gestion Publica",
      "Gestion del Fedatario Publico",
      "Derecho Penal en la Funcion Publica",
      "Transparencia y acceso a la informacion publica",
      "Transferencia del Gestion Gubernamental",
    ],
  },
  {
    label: "GESTION ADMINISTRATIVA Y DE COMPETENCIAS",
    items: [
      "Formulacion de los Documentos de Gestion: ROF - MOF - CAP - MAPROS",
      "Asistentes de Gerencia y Altas Direccion",
      "Redaccion Moderna y Elaboracion de Informes Tecnicos",
      "Gestion moderna de documentos y archivos",
      "Calidad en el Servicio y la Atencion al Cliente",
      "La secretaria en su Nuevo rol de Asistente de Gerencia",
      "Calidad de atencion al ciudadano",
      "Prevencion del hostigamiento y acoso sexual",
      "Manejo de habilidades blandas en le Trabajo",
    ],
  },
];

export default accordions