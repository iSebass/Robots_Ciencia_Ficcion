// Datos de calificaciones y retroalimentación humanizados para 5 actividades
const STUDENT_DATA = [
  {
    "codigo": "202569309",
    "nombre": "CASTILLO LONDOÑO JUAN DAVID",
    "correo": "juan.castillo.londono@correounivalle.edu.co",
    "programa": "2725",
    "notas": {
      "tribunal": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se presenta un informe exhaustivo con un análisis detallado para cada uno de los 5 casos. El equipo demuestra un dominio claro de la jerarquía de las leyes de Asimov, con una buena explicación sobre la responsabilidad compartida según el tipo de fallo. El plan de transición para los trabajadores es detallado e incluye fases de diagnóstico, capacitación y reubicación, en coherencia con las normas ISO."
      },
      "comic": {
        "nota": 2.0,
        "retroalimentacion": "Se evidencia la conformación del grupo y la entrega de una portada con nombres, acompañada de una imagen visual. Sin embargo, la actividad está muy incompleta: no se presenta el cómic estructurado de 6 a 8 paneles con su historia, se omitió la bitácora obligatoria de 8 prompts y no se incluye la reflexión de cierre sobre el impacto social."
      },
      "cohete": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
      },
      "tragamonedas": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se realizó la entrega de un prototipo funcional. Felicidades por el trabajo."
      },
      "tinkercad": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
      }
    }
  },
  {
    "codigo": "202559772",
    "nombre": "CASTRO CARDENAS SEBASTIAN",
    "correo": "sebastian.castro.cardenas@correounivalle.edu.co",
    "programa": "3743",
    "notas": {
      "tribunal": {
        "nota": 4.5,
        "retroalimentacion": "Buen trabajo. El grupo identifica correctamente los conflictos éticos y normativos de los casos. No obstante, las respuestas y el análisis de los escenarios son breves. Pudo profundizarse más en los detalles del protocolo de seguridad del caso quirúrgico y en la fundamentación de las normas técnicas de cobots. El plan de transición es válido, pero se presenta de forma muy general."
      },
      "comic": {
        "nota": 4.0,
        "retroalimentacion": "Buen trabajo. Se presenta una narrativa muy bien lograda con un guion detallado de 6 páginas y paneles de cómic completos. La historia integra el tema de la IA de forma muy creativa. La nota se ve afectada debido a que la bitácora de prompts está incompleta, documentando solo la instrucción inicial del guion y omitiendo los prompts específicos para la generación de las imágenes."
      },
      "cohete": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
      },
      "tragamonedas": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se realizó la entrega de un prototipo funcional. Felicidades por el trabajo."
      },
      "tinkercad": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
      }
    }
  },
  {
    "codigo": "202559832",
    "nombre": "CATAÑO HERNANDEZ JUAN STEVAN",
    "correo": "juan.stevan.catano@correounivalle.edu.co",
    "programa": "3743",
    "notas": {
      "tribunal": {
        "nota": 4.5,
        "retroalimentacion": "Buen trabajo. El grupo identifica correctamente los conflictos éticos y normativos de los casos. No obstante, las respuestas y el análisis de los escenarios son breves. Pudo profundizarse más en los detalles del protocolo de seguridad del caso quirúrgico y en la fundamentación de las normas técnicas de cobots. El plan de transición es válido, pero se presenta de forma muy general."
      },
      "comic": {
        "nota": 4.0,
        "retroalimentacion": "Buen trabajo. Se presenta una narrativa muy bien lograda con un guion detallado de 6 páginas y paneles de cómic completos. La historia integra el tema de la IA de forma muy creativa. La nota se ve afectada debido a que la bitácora de prompts está incompleta, documentando solo la instrucción inicial del guion y omitiendo los prompts específicos para la generación de las imágenes."
      },
      "cohete": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
      },
      "tragamonedas": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se realizó la entrega de un prototipo funcional. Felicidades por el trabajo."
      },
      "tinkercad": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
      }
    }
  },
  {
    "codigo": "202259582",
    "nombre": "COCUY ALVAREZ SANTIAGO",
    "correo": "santiago.cocuy@correounivalle.edu.co",
    "programa": "3841",
    "notas": {
      "tribunal": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. El equipo realizó un análisis detallado de los casos del tribunal de robótica. Demuestran una buena comprensión de la jerarquía de las leyes de Asimov y una adecuada delimitación de responsabilidades. La vinculación con las normativas ISO 10218, ISO/TS 15066 y la regulación de IA (EU AI Act) es correcta. El plan de transición propuesto para los trabajadores aborda de forma estructurada los aspectos de reconversión laboral."
      },
      "comic": {
        "nota": 3.5,
        "retroalimentacion": "Buen trabajo. El cómic presenta una narrativa interesante y una calidad visual adecuada en sus 7 paneles, junto con una reflexión valiosa sobre el arte y la IA. Sin embargo, no se entregó la bitácora de prompts de 8 registros (4 de texto y 4 de imagen) y omitieron los nombres de los integrantes en el documento final, lo cual disminuye la calificación final."
      },
      "cohete": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
      },
      "tragamonedas": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se realizó la entrega de un prototipo funcional. Felicidades por el trabajo."
      },
      "tinkercad": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
      }
    }
  },
  {
    "codigo": "202569506",
    "nombre": "CUARAN GARCIA XIMENA",
    "correo": "ximena.cuaran@correounivalle.edu.co",
    "programa": "2725",
    "notas": {
      "tribunal": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se presenta un informe exhaustivo con un análisis detallado para cada uno de los 5 casos. El equipo demuestra un dominio claro de la jerarquía de las leyes de Asimov, con una buena explicación sobre la responsabilidad compartida según el tipo de fallo. El plan de transición para los trabajadores es detallado e incluye fases de diagnóstico, capacitación y reubicación, en coherencia con las normas ISO."
      },
      "comic": {
        "nota": 2.0,
        "retroalimentacion": "Se evidencia la conformación del grupo y la entrega de una portada con nombres, acompañada de una imagen visual. Sin embargo, la actividad está muy incompleta: no se presenta el cómic estructurado de 6 a 8 paneles con su historia, se omitió la bitácora obligatoria de 8 prompts y no se incluye la reflexión de cierre sobre el impacto social."
      },
      "cohete": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
      },
      "tragamonedas": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se realizó la entrega de un prototipo funcional. Felicidades por el trabajo."
      },
      "tinkercad": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
      }
    }
  },
  {
    "codigo": "202569102",
    "nombre": "FERNANDEZ RODRIGUEZ ANYELO VIANY",
    "correo": "anyelo.fernandez@correounivalle.edu.co",
    "programa": "2725",
    "notas": {
      "tribunal": {
        "nota": 0.0,
        "retroalimentacion": "No se encontró registro de entrega o participación en los grupos de la actividad. Si hiciste parte de algún equipo y no fuiste registrado en la portada, por favor comunícate con el docente para revisar el caso."
      },
      "comic": {
        "nota": 0.0,
        "retroalimentacion": "No se encontró registro de entrega o participación en los grupos de la actividad. Si hiciste parte de algún equipo y no fuiste registrado en la portada, por favor comunícate con el docente para revisar el caso."
      },
      "cohete": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
      },
      "tragamonedas": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se realizó la entrega de un prototipo funcional. Felicidades por el trabajo."
      },
      "tinkercad": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
      }
    }
  },
  {
    "codigo": "202359598",
    "nombre": "GARCIA LOPEZ ANGIE MARCELA",
    "correo": "angie.garcia.lopez@correounivalle.edu.co",
    "programa": "3841",
    "notas": {
      "tribunal": {
        "nota": 4.7,
        "retroalimentacion": "Buen trabajo. El análisis de los casos quirúrgico e industrial está bien estructurado y justifica adecuadamente la primacía de la Ley 1. El equipo define de forma clara las responsabilidades de cada actor. El plan de transición para el personal de la empresa textil es viable, aunque se beneficiaría de un mayor detalle en cuanto a los recursos económicos. Se evidencia una buena conexión con la normativa internacional vigente."
      },
      "comic": {
        "nota": 3.8,
        "retroalimentacion": "Buen trabajo. El equipo desarrolló un guion extenso de 25 escenas basado en el tema de la ciudad inteligente y definió correctamente los roles. No obstante, no se incluyó la frase reflexiva de cierre en el documento y la bitácora de prompts está muy incompleta, documentando únicamente dos instrucciones generales en lugar de los 8 prompts mínimos requeridos."
      },
      "cohete": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
      },
      "tragamonedas": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se realizó la entrega de un prototipo funcional. Felicidades por el trabajo."
      },
      "tinkercad": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
      }
    }
  },
  {
    "codigo": "202569440",
    "nombre": "GOMEZ RODRIGUEZ HANNER ESTIVEN",
    "correo": "hanner.gomez@correounivalle.edu.co",
    "programa": "2725",
    "notas": {
      "tribunal": {
        "nota": 4.8,
        "retroalimentacion": "Buen trabajo. La tarjeta de exploración individual define de manera clara los conceptos de robótica y cobots. El análisis de los casos es correcto, argumentando adecuadamente los conflictos de leyes y responsabilidades. El plan de transición aborda el diagnóstico y el apoyo a los trabajadores de forma estructurada. Pudo complementarse con mayor detalle técnico en el protocolo de seguridad del caso quirúrgico."
      },
      "comic": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. La entrega cumple perfectamente con la rúbrica de la actividad. Se definieron con claridad los roles de cada integrante, el cómic cuenta con una narrativa coherente y estructurada, la bitácora de prompts está completamente documentada (con herramientas y observaciones de cambio) y cierran con una reflexión crítica excelente sobre la tecnología. Felicitaciones."
      },
      "cohete": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
      },
      "tragamonedas": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se realizó la entrega de un prototipo funcional. Felicidades por el trabajo."
      },
      "tinkercad": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
      }
    }
  },
  {
    "codigo": "202569180",
    "nombre": "GONZALEZ POSADA LAURA TERESA",
    "correo": "laura.teresa.gonzalez@correounivalle.edu.co",
    "programa": "2725",
    "notas": {
      "tribunal": {
        "nota": 4.8,
        "retroalimentacion": "Buen trabajo. La tarjeta de exploración individual define de manera clara los conceptos de robótica y cobots. El análisis de los casos es correcto, argumentando adecuadamente los conflictos de leyes y responsabilidades. El plan de transición aborda el diagnóstico y el apoyo a los trabajadores de forma estructurada. Pudo complementarse con mayor detalle técnico en el protocolo de seguridad del caso quirúrgico."
      },
      "comic": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. La entrega cumple perfectamente con la rúbrica de la actividad. Se definieron con claridad los roles de cada integrante, el cómic cuenta con una narrativa coherente y estructurada, la bitácora de prompts está completamente documentada (con herramientas y observaciones de cambio) y cierran con una reflexión crítica excelente sobre la tecnología. Felicitaciones."
      },
      "cohete": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
      },
      "tragamonedas": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se realizó la entrega de un prototipo funcional. Felicidades por el trabajo."
      },
      "tinkercad": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
      }
    }
  },
  {
    "codigo": "202569329",
    "nombre": "GUTIERREZ RIVAS ALVARO JAVIER",
    "correo": "gutierrez.alvaro@correounivalle.edu.co",
    "programa": "2725",
    "notas": {
      "tribunal": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se presenta un informe exhaustivo con un análisis detallado para cada uno de los 5 casos. El equipo demuestra un dominio claro de la jerarquía de las leyes de Asimov, con una buena explicación sobre la responsabilidad compartida según el tipo de fallo. El plan de transición para los trabajadores es detallado e incluye fases de diagnóstico, capacitación y reubicación, en coherencia con las normas ISO."
      },
      "comic": {
        "nota": 2.0,
        "retroalimentacion": "Se evidencia la conformación del grupo y la entrega de una portada con nombres, acompañada de una imagen visual. Sin embargo, la actividad está muy incompleta: no se presenta el cómic estructurado de 6 a 8 paneles con su historia, se omitió la bitácora obligatoria de 8 prompts y no se incluye la reflexión de cierre sobre el impacto social."
      },
      "cohete": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
      },
      "tragamonedas": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se realizó la entrega de un prototipo funcional. Felicidades por el trabajo."
      },
      "tinkercad": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
      }
    }
  },
  {
    "codigo": "202569433",
    "nombre": "HURTADO CAICEDO HAROLD",
    "correo": "harold.hurtado@correounivalle.edu.co",
    "programa": "2725",
    "notas": {
      "tribunal": {
        "nota": 4.8,
        "retroalimentacion": "Buen trabajo. La tarjeta de exploración individual define de manera clara los conceptos de robótica y cobots. El análisis de los casos es correcto, argumentando adecuadamente los conflictos de leyes y responsabilidades. El plan de transición aborda el diagnóstico y el apoyo a los trabajadores de forma estructurada. Pudo complementarse con mayor detalle técnico en el protocolo de seguridad del caso quirúrgico."
      },
      "comic": {
        "nota": 2.0,
        "retroalimentacion": "Se evidencia la conformación del grupo y la entrega de una portada con nombres, acompañada de una imagen visual. Sin embargo, la actividad está muy incompleta: no se presenta el cómic estructurado de 6 a 8 paneles con su historia, se omitió la bitácora obligatoria de 8 prompts y no se incluye la reflexión de cierre sobre el impacto social."
      },
      "cohete": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
      },
      "tragamonedas": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se realizó la entrega de un prototipo funcional. Felicidades por el trabajo."
      },
      "tinkercad": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
      }
    }
  },
  {
    "codigo": "202559887",
    "nombre": "ISAZA VELEZ JHON KENNEDY",
    "correo": "jhon.kennedy.isaza@correounivalle.edu.co",
    "programa": "3743",
    "notas": {
      "tribunal": {
        "nota": 4.9,
        "retroalimentacion": "Buen trabajo. Presentan un informe sólido con un enfoque ético profesional bien logrado. Es positivo el uso de códigos éticos de ingeniería reales (como IEEE y ACOFI) para definir las responsabilidades en cada escenario. El plan de transición por etapas está bien estructurado y plantea fases coherentes de capacitación y reubicación."
      },
      "comic": {
        "nota": 2.0,
        "retroalimentacion": "Se evidencia la conformación del grupo y la entrega de una portada con nombres, acompañada de una propuesta visual. Sin embargo, el entregable está muy incompleto: no se presenta el cómic estructurado de 6 a 8 paneles con su historia, se omitió la bitácora obligatoria de 8 prompts y no se incluye la reflexión de cierre sobre el impacto de la IA."
      },
      "cohete": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
      },
      "tragamonedas": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se realizó la entrega de un prototipo funcional. Felicidades por el trabajo."
      },
      "tinkercad": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
      }
    }
  },
  {
    "codigo": "202359588",
    "nombre": "JIMENEZ DIAZ VALENTINA",
    "correo": "valentina.jimenez.diaz@correounivalle.edu.co",
    "programa": "3841",
    "notas": {
      "tribunal": {
        "nota": 4.7,
        "retroalimentacion": "Buen trabajo. El análisis de los casos quirúrgico e industrial está bien estructurado y justifica adecuadamente la primacía de la Ley 1. El equipo define de forma clara las responsabilidades de cada actor. El plan de transición para el personal de la empresa textil es viable, aunque se beneficiaría de un mayor detalle en cuanto a los recursos económicos. Se evidencia una buena conexión con la normativa internacional vigente."
      },
      "comic": {
        "nota": 3.8,
        "retroalimentacion": "Buen trabajo. El equipo desarrolló un guion extenso de 25 escenas basado en el tema de la ciudad inteligente y definió correctamente los roles. No obstante, no se incluyó la frase reflexiva de cierre en el documento y la bitácora de prompts está muy incompleta, documentando únicamente dos instrucciones generales en lugar de los 8 prompts mínimos requeridos."
      },
      "cohete": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
      },
      "tragamonedas": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se realizó la entrega de un prototipo funcional. Felicidades por el trabajo."
      },
      "tinkercad": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
      }
    }
  },
  {
    "codigo": "202359444",
    "nombre": "LEDESMA SANTANA NIKOL DAHYANA",
    "correo": "nikol.ledesma@correounivalle.edu.co",
    "programa": "3841",
    "notas": {
      "tribunal": {
        "nota": 4.7,
        "retroalimentacion": "Buen trabajo. El análisis de los casos quirúrgico e industrial está bien estructurado y justifica adecuadamente la primacía de la Ley 1. El equipo define de forma clara las responsabilidades de cada actor. El plan de transición para el personal de la empresa textil es viable, aunque se beneficiaría de un mayor detalle en cuanto a los recursos económicos. Se evidencia una buena conexión con la normativa internacional vigente."
      },
      "comic": {
        "nota": 3.8,
        "retroalimentacion": "Buen trabajo. El equipo desarrolló un guion extenso de 25 escenas basado en el tema de la ciudad inteligente y definió correctamente los roles. No obstante, no se incluyó la frase reflexiva de cierre en el documento y la bitácora de prompts está muy incompleta, documentando únicamente dos instrucciones generales en lugar de los 8 prompts mínimos requeridos."
      },
      "cohete": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
      },
      "tragamonedas": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se realizó la entrega de un prototipo funcional. Felicidades por el trabajo."
      },
      "tinkercad": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
      }
    }
  },
  {
    "codigo": "202569323",
    "nombre": "LOAIZA RAMIREZ URLEY FERNANDO",
    "correo": "urley.loaiza@correounivalle.edu.co",
    "programa": "2725",
    "notas": {
      "tribunal": {
        "nota": 0.0,
        "retroalimentacion": "No se encontró registro de entrega o participación en los grupos de la actividad. Si hiciste parte de algún equipo y no fuiste registrado en la portada, por favor comunícate con el docente para revisar el caso."
      },
      "comic": {
        "nota": 0.0,
        "retroalimentacion": "No se encontró registro de entrega o participación en los grupos de la actividad. Si hiciste parte de algún equipo y no fuiste registrado en la portada, por favor comunícate con el docente para revisar el caso."
      },
      "cohete": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
      },
      "tragamonedas": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se realizó la entrega de un prototipo funcional. Felicidades por el trabajo."
      },
      "tinkercad": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
      }
    }
  },
  {
    "codigo": "202259545",
    "nombre": "NARVAEZ CAÑAS ANDRES EDUARDO",
    "correo": "andres.canas@correounivalle.edu.co",
    "programa": "3743",
    "notas": {
      "tribunal": {
        "nota": 0.0,
        "retroalimentacion": "No se encontró registro de entrega o participación en los grupos de la actividad. Si hiciste parte de algún equipo y no fuiste registrado en la portada, por favor comunícate con el docente para revisar el caso."
      },
      "comic": {
        "nota": 0.0,
        "retroalimentacion": "No se encontró registro de entrega o participación en los grupos de la actividad. Si hiciste parte de algún equipo y no fuiste registrado en la portada, por favor comunícate con el docente para revisar el caso."
      },
      "cohete": {
        "nota": 0.0,
        "retroalimentacion": "No se encontró registro de participación o entrega en el lanzamiento de cohete."
      },
      "tragamonedas": {
        "nota": 0.0,
        "retroalimentacion": "No se encontró registro de participación o entrega en la actividad del robot tragamonedas."
      },
      "tinkercad": {
        "nota": 0.0,
        "retroalimentacion": "No se encontró registro de participación o entrega en la actividad de Tinkercad."
      }
    }
  },
  {
    "codigo": "202259321",
    "nombre": "NIETO VALENCIA JHON EDINSON",
    "correo": "nieto.jhon@correounivalle.edu.co",
    "programa": "3841",
    "notas": {
      "tribunal": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. El equipo realizó un análisis detallado de los casos del tribunal de robótica. Demuestran una buena comprensión de la jerarquía de las leyes de Asimov y una adecuada delimitación de responsabilidades. La vinculación con las normativas ISO 10218, ISO/TS 15066 y la regulación de IA (EU AI Act) es correcta. El plan de transición propuesto para los trabajadores aborda de forma estructurada los aspectos de reconversión laboral."
      },
      "comic": {
        "nota": 3.5,
        "retroalimentacion": "Buen trabajo. El cómic presenta una narrativa interesante y una calidad visual adecuada en sus 7 paneles, junto con una reflexión valiosa sobre el arte y la IA. Sin embargo, no se entregó la bitácora de prompts de 8 registros (4 de texto y 4 de imagen) y omitieron los nombres de los integrantes en el documento final, lo cual disminuye la calificación final."
      },
      "cohete": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
      },
      "tragamonedas": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se realizó la entrega de un prototipo funcional. Felicidades por el trabajo."
      },
      "tinkercad": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
      }
    }
  },
  {
    "codigo": "202569426",
    "nombre": "ORTEGA SERRANO JUAN FELIPE",
    "correo": "juan.ortega.serrano@correounivalle.edu.co",
    "programa": "2725",
    "notas": {
      "tribunal": {
        "nota": 4.8,
        "retroalimentacion": "Buen trabajo. La tarjeta de exploración individual define de manera clara los conceptos de robótica y cobots. El análisis de los casos es correcto, argumentando adecuadamente los conflictos de leyes y responsabilidades. El plan de transición aborda el diagnóstico y el apoyo a los trabajadores de forma estructurada. Pudo complementarse con mayor detalle técnico en el protocolo de seguridad del caso quirúrgico."
      },
      "comic": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. La entrega cumple perfectamente con la rúbrica de la actividad. Se definieron con claridad los roles de cada integrante, el cómic cuenta con una narrativa coherente y estructurada, la bitácora de prompts está completamente documentada (con herramientas y observaciones de cambio) y cierran con una reflexión crítica excelente sobre la tecnología. Felicitaciones."
      },
      "cohete": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
      },
      "tragamonedas": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se realizó la entrega de un prototipo funcional. Felicidades por el trabajo."
      },
      "tinkercad": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
      }
    }
  },
  {
    "codigo": "202569293",
    "nombre": "ORTIZ MENDOZA JOSE OSVALDO",
    "correo": "jose.osvaldo.ortiz@correounivalle.edu.co",
    "programa": "2725",
    "notas": {
      "tribunal": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se presenta un informe exhaustivo con un análisis detallado para cada uno de los 5 casos. El equipo demuestra un dominio claro de la jerarquía de las leyes de Asimov, con una buena explicación sobre la responsabilidad compartida según el tipo de fallo. El plan de transición para los trabajadores es detallado e incluye fases de diagnóstico, capacitación y reubicación, en coherencia con las normas ISO."
      },
      "comic": {
        "nota": 2.0,
        "retroalimentacion": "Se evidencia la conformación del grupo y la entrega de una portada con nombres, acompañada de una imagen visual. Sin embargo, la actividad está muy incompleta: no se presenta el cómic estructurado de 6 a 8 paneles con su historia, se omitió la bitácora obligatoria de 8 prompts y no se incluye la reflexión de cierre sobre el impacto social."
      },
      "cohete": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
      },
      "tragamonedas": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se realizó la entrega de un prototipo funcional. Felicidades por el trabajo."
      },
      "tinkercad": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
      }
    }
  },
  {
    "codigo": "202559767",
    "nombre": "ORTIZ ZABALA MANUEL ALEJANDRO",
    "correo": "manuel.zabala@correounivalle.edu.co",
    "programa": "3743",
    "notas": {
      "tribunal": {
        "nota": 4.5,
        "retroalimentacion": "Buen trabajo. El grupo identifica correctamente los conflictos éticos y normativos de los casos. No obstante, las respuestas y el análisis de los escenarios son breves. Pudo profundizarse más en los detalles del protocolo de seguridad del caso quirúrgico y en la fundamentación de las normas técnicas de cobots. El plan de transición es válido, pero se presenta de forma muy general."
      },
      "comic": {
        "nota": 4.0,
        "retroalimentacion": "Buen trabajo. Se presenta una narrativa muy bien lograda con un guion detallado de 6 páginas y paneles de cómic completos. La historia integra el tema de la IA de forma muy creativa. La nota se ve afectada debido a que la bitácora de prompts está incompleta, documentando solo la instrucción inicial del guion y omitiendo los prompts específicos para la generación de las imágenes."
      },
      "cohete": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
      },
      "tragamonedas": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se realizó la entrega de un prototipo funcional. Felicidades por el trabajo."
      },
      "tinkercad": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
      }
    }
  },
  {
    "codigo": "202569346",
    "nombre": "OSORIO BEDOYA JULIAN ALBERTO",
    "correo": "julian.osorio.bedoya@correounivalle.edu.co",
    "programa": "2725",
    "notas": {
      "tribunal": {
        "nota": 4.8,
        "retroalimentacion": "Buen trabajo. La tarjeta de exploración individual define de manera clara los conceptos de robótica y cobots. El análisis de los casos es correcto, argumentando adecuadamente los conflictos de leyes y responsabilidades. El plan de transición aborda el diagnóstico y el apoyo a los trabajadores de forma estructurada. Pudo complementarse con mayor detalle técnico en el protocolo de seguridad del caso quirúrgico."
      },
      "comic": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. La entrega cumple perfectamente con la rúbrica de la actividad. Se definieron con claridad los roles de cada integrante, el cómic cuenta con una narrativa coherente y estructurada, la bitácora de prompts está completamente documentada (con herramientas y observaciones de cambio) y cierran con una reflexión crítica excelente sobre la tecnología. Felicitaciones."
      },
      "cohete": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
      },
      "tragamonedas": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se realizó la entrega de un prototipo funcional. Felicidades por el trabajo."
      },
      "tinkercad": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
      }
    }
  },
  {
    "codigo": "202569269",
    "nombre": "OSORIO LOAIZA JUAN JOSE",
    "correo": "juan.osorio.loaiza@correounivalle.edu.co",
    "programa": "2725",
    "notas": {
      "tribunal": {
        "nota": 4.9,
        "retroalimentacion": "Buen trabajo. Presentan un informe sólido con un enfoque ético profesional bien logrado. Es positivo el uso de códigos éticos de ingeniería reales (como IEEE y ACOFI) para definir las responsabilidades en cada escenario. El plan de transición por etapas está bien estructurado y plantea fases coherentes de capacitación y reubicación."
      },
      "comic": {
        "nota": 2.0,
        "retroalimentacion": "Se evidencia la conformación del grupo y la entrega de una portada con nombres, acompañada de una propuesta visual. Sin embargo, el entregable está muy incompleto: no se presenta el cómic estructurado de 6 a 8 paneles con su historia, se omitió la bitácora obligatoria de 8 prompts y no se incluye la reflexión de cierre sobre el impacto de la IA."
      },
      "cohete": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
      },
      "tragamonedas": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se realizó la entrega de un prototipo funcional. Felicidades por el trabajo."
      },
      "tinkercad": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
      }
    }
  },
  {
    "codigo": "202559770",
    "nombre": "PEREA RIOS ANDRES DAVID",
    "correo": "andres.david.perea@correounivalle.edu.co",
    "programa": "3743",
    "notas": {
      "tribunal": {
        "nota": 4.9,
        "retroalimentacion": "Buen trabajo. Presentan un informe sólido con un enfoque ético profesional bien logrado. Es positivo el uso de códigos éticos de ingeniería reales (como IEEE y ACOFI) para definir las responsabilidades en cada escenario. El plan de transición por etapas está bien estructurado y plantea fases coherentes de capacitación y reubicación."
      },
      "comic": {
        "nota": 2.0,
        "retroalimentacion": "Se evidencia la conformación del grupo y la entrega de una portada con nombres, acompañada de una propuesta visual. Sin embargo, el entregable está muy incompleto: no se presenta el cómic estructurado de 6 a 8 paneles con su historia, se omitió la bitácora obligatoria de 8 prompts y no se incluye la reflexión de cierre sobre el impacto de la IA."
      },
      "cohete": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
      },
      "tragamonedas": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se realizó la entrega de un prototipo funcional. Felicidades por el trabajo."
      },
      "tinkercad": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
      }
    }
  },
  {
    "codigo": "202259596",
    "nombre": "QUINTERO VICUÑA SEBASTIAN",
    "correo": "sebastian.vicuna@correounivalle.edu.co",
    "programa": "3841",
    "notas": {
      "tribunal": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. El equipo realizó un análisis detallado de los casos del tribunal de robótica. Demuestran una buena comprensión de la jerarquía de las leyes de Asimov y una adecuada delimitación de responsabilidades. La vinculación con las normativas ISO 10218, ISO/TS 15066 y la regulación de IA (EU AI Act) es correcta. El plan de transición propuesto para los trabajadores aborda de forma estructurada los aspectos de reconversión laboral."
      },
      "comic": {
        "nota": 3.5,
        "retroalimentacion": "Buen trabajo. El cómic presenta una narrativa interesante y una calidad visual adecuada en sus 7 paneles, junto con una reflexión valiosa sobre el arte y la IA. Sin embargo, no se entregó la bitácora de prompts de 8 registros (4 de texto y 4 de imagen) y omitieron los nombres de los integrantes en el documento final, lo cual disminuye la calificación final."
      },
      "cohete": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
      },
      "tragamonedas": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se realizó la entrega de un prototipo funcional. Felicidades por el trabajo."
      },
      "tinkercad": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
      }
    }
  },
  {
    "codigo": "202359643",
    "nombre": "SOTO MONTOYA JUAN FELIPE",
    "correo": "juan.felipe.soto@correounivalle.edu.co",
    "programa": "3841",
    "notas": {
      "tribunal": {
        "nota": 4.7,
        "retroalimentacion": "Buen trabajo. El análisis de los casos quirúrgico e industrial está bien estructurado y justifica adecuadamente la primacía de la Ley 1. El equipo define de forma clara las responsabilidades de cada actor. El plan de transición para el personal de la empresa textil es viable, aunque se beneficiaría de un mayor detalle en cuanto a los recursos económicos. Se evidencia una buena conexión con la normativa internacional vigente."
      },
      "comic": {
        "nota": 3.8,
        "retroalimentacion": "Buen trabajo. El equipo desarrolló un guion extenso de 25 escenas basado en el tema de la ciudad inteligente y definió correctamente los roles. No obstante, no se incluyó la frase reflexiva de cierre en el documento y la bitácora de prompts está muy incompleta, documentando únicamente dos instrucciones generales en lugar de los 8 prompts mínimos requeridos."
      },
      "cohete": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
      },
      "tragamonedas": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se realizó la entrega de un prototipo funcional. Felicidades por el trabajo."
      },
      "tinkercad": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
      }
    }
  },
  {
    "codigo": "202559961",
    "nombre": "VASQUEZ SEGURA JUAN MANUEL",
    "correo": "juan.manuel.vasquez@correounivalle.edu.co",
    "programa": "3743",
    "notas": {
      "tribunal": {
        "nota": 4.5,
        "retroalimentacion": "Buen trabajo. El grupo identifica correctamente los conflictos éticos y normativos de los casos. No obstante, las respuestas y el análisis de los escenarios son breves. Pudo profundizarse más en los detalles del protocolo de seguridad del caso quirúrgico y en la fundamentación de las normas técnicas de cobots. El plan de transición es válido, pero se presenta de forma muy general."
      },
      "comic": {
        "nota": 4.0,
        "retroalimentacion": "Buen trabajo. Se presenta una narrativa muy bien lograda con un guion detallado de 6 páginas y paneles de cómic completos. La historia integra el tema de la IA de forma muy creativa. La nota se ve afectada debido a que la bitácora de prompts está incompleta, documentando solo la instrucción inicial del guion y omitiendo los prompts específicos para la generación de las imágenes."
      },
      "cohete": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
      },
      "tragamonedas": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se realizó la entrega de un prototipo funcional. Felicidades por el trabajo."
      },
      "tinkercad": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
      }
    }
  },
  {
    "codigo": "202380574",
    "nombre": "VELASQUEZ MANZANO RAMIRO",
    "correo": "ramiro.velasquez@correounivalle.edu.co",
    "programa": "3643",
    "notas": {
      "tribunal": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. El equipo realizó un análisis detallado de los casos del tribunal de robótica. Demuestran una buena comprensión de la jerarquía de las leyes de Asimov y una adecuada delimitación de responsabilidades. La vinculación con las normativas ISO 10218, ISO/TS 15066 y la regulación de IA (EU AI Act) es correcta. El plan de transición propuesto para los trabajadores aborda de forma estructurada los aspectos de reconversión laboral."
      },
      "comic": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Presentan un informe de alta calidad y muy bien estructurado. Cumplen de forma sobresaliente con todos los aspectos solicitados: definición de roles, narrativa coherente en torno al campo y el robot, una bitácora de prompts completa y detallada para texto e imagen, y una frase de cierre con una reflexión crítica muy madura. Felicitaciones."
      },
      "cohete": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
      },
      "tragamonedas": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se realizó la entrega de un prototipo funcional. Felicidades por el trabajo."
      },
      "tinkercad": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
      }
    }
  },
  {
    "codigo": "202559731",
    "nombre": "ZAMORA SANCHEZ KEVIN ALEXANDER",
    "correo": "zamora.kevin@correounivalle.edu.co",
    "programa": "2724",
    "notas": {
      "tribunal": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. El equipo realizó un análisis detallado de los casos del tribunal de robótica. Demuestran una buena comprensión de la jerarquía de las leyes de Asimov y una adecuada delimitación de responsabilidades. La vinculación con las normativas ISO 10218, ISO/TS 15066 y la regulación de IA (EU AI Act) es correcta. El plan de transición propuesto para los trabajadores aborda de forma estructurada los aspectos de reconversión laboral."
      },
      "comic": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Presentan un informe de alta calidad y muy bien estructurado. Cumplen de forma sobresaliente con todos los aspectos solicitados: definición de roles, narrativa coherente en torno al campo y el robot, una bitácora de prompts completa y detallada para texto e imagen, y una frase de cierre con una reflexión crítica muy madura. Felicitaciones."
      },
      "cohete": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
      },
      "tragamonedas": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se realizó la entrega de un prototipo funcional. Felicidades por el trabajo."
      },
      "tinkercad": {
        "nota": 5.0,
        "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
      }
    }
  }
];
