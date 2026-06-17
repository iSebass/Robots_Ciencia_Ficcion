// Datos de calificaciones y retroalimentación humanizados para múltiples asignaturas
const COURSES_DATA = {
  "robots_ciencia_ficcion": {
    "name": "Robots, Ciencia y Ficción",
    "subtitle": "Universidad del Valle - Sede Tuluá",
    "activities": [
      {
        "id": "tribunal",
        "name": "Tribunal de Robótica",
        "weight": 0.2,
        "icon": "fa-scale-balanced",
        "colorClass": "text-tribunal",
        "rubrics": [
          {
            "name": "Comprensión de las Leyes",
            "weight": "20%"
          },
          {
            "name": "Análisis del Conflicto",
            "weight": "25%"
          },
          {
            "name": "Responsabilidad",
            "weight": "20%"
          },
          {
            "name": "Solución Propuesta",
            "weight": "20%"
          },
          {
            "name": "Normativa Real",
            "weight": "15%"
          }
        ],
        "description": "Debate y análisis ético sobre dilemas de las Leyes de Asimov aplicadas a la robótica industrial (médica, manufactura y transición social)."
      },
      {
        "id": "comic",
        "name": "Cómic con IA",
        "weight": 0.2,
        "icon": "fa-images",
        "colorClass": "text-comic",
        "rubrics": [
          {
            "name": "Narrativa y Guion",
            "weight": "25%"
          },
          {
            "name": "Uso de IA Generativa",
            "weight": "25%"
          },
          {
            "name": "Calidad Visual",
            "weight": "20%"
          },
          {
            "name": "Reflexión Crítica",
            "weight": "20%"
          },
          {
            "name": "Trabajo en Equipo",
            "weight": "10%"
          }
        ],
        "description": "Creación de una historia de ciencia ficción (6-8 paneles) utilizando modelos de lenguaje y generadores de imágenes, documentando prompts en una bitácora."
      },
      {
        "id": "cohete",
        "name": "Lanzamiento de Cohete",
        "weight": 0.2,
        "icon": "fa-rocket",
        "colorClass": "text-cohete",
        "rubrics": [
          {
            "name": "Desempeño Práctico",
            "weight": "100%"
          }
        ],
        "description": "Construcción y lanzamiento práctico del cohete de agua en muestra en vivo para verificar el vuelo satisfactorio."
      },
      {
        "id": "tragamonedas",
        "name": "Robot Tragamonedas",
        "weight": 0.2,
        "icon": "fa-gamepad",
        "colorClass": "text-tragamonedas",
        "rubrics": [
          {
            "name": "Desempeño Práctico",
            "weight": "100%"
          }
        ],
        "description": "Construcción y entrega del prototipo funcional del robot tragamonedas."
      },
      {
        "id": "tinkercad",
        "name": "Actividad Tinkercad",
        "weight": 0.2,
        "icon": "fa-microchip",
        "colorClass": "text-tinkercad",
        "rubrics": [
          {
            "name": "Desempeño Práctico",
            "weight": "100%"
          }
        ],
        "description": "Diseño, modelado y simulación de circuitos en la plataforma virtual Tinkercad."
      },
      {
        "id": "pagina_bot",
        "name": "Página Web + BOT",
        "weight": 0.2,
        "icon": "fa-robot",
        "colorClass": "text-pagina",
        "rubrics": [
          {
            "name": "Desempeño Práctico",
            "weight": "100%"
          }
        ],
        "description": "Desarrollo de una página web funcional con la integración de un chatbot."
      }
    ],
    "students": [
      {
        "codigo": "202500000",
        "nombre": "ESTUDIANTE DE PRUEBA (DEMO)",
        "correo": "estudiante.prueba@correounivalle.edu.co",
        "programa": "3743",
        "notas": {
          "tribunal": {
            "nota": 4.5,
            "retroalimentacion": "Excelente desempeño en el debate ético sobre las leyes de la robótica aplicadas a la industria médica."
          },
          "comic": {
            "nota": 4.2,
            "retroalimentacion": "Muy buena narrativa en el cómic de ciencia ficción. Se recomienda detallar más la bitácora de prompts en futuras entregas."
          },
          "cohete": {
            "nota": 5,
            "retroalimentacion": "El cohete de agua voló satisfactoriamente en la muestra práctica en vivo."
          },
          "tragamonedas": {
            "nota": 0,
            "retroalimentacion": "No se evidencia entrega de la actividad, de ser un error por favor comunicarse con el docente."
          },
          "tinkercad": {
            "nota": 4.8,
            "retroalimentacion": "Excelente simulación de circuitos en Tinkercad, mostrando una correcta interconexión y lógica de control."
          },
          "pagina_bot": {
            "nota": 0,
            "retroalimentacion": "No se evidencia entrega de la actividad. Reportar con el docente en caso de existir algun error."
          }
        }
      },
      {
        "codigo": "202569309",
        "nombre": "CASTILLO LONDOÑO JUAN DAVID",
        "correo": "juan.castillo.londono@correounivalle.edu.co",
        "programa": "2725",
        "notas": {
          "tribunal": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. Se presenta un informe exhaustivo con un análisis detallado para cada uno de los 5 casos. El equipo demuestra un dominio claro de la jerarquía de las leyes de Asimov, con una buena explicación sobre la responsabilidad compartida según el tipo de fallo. El plan de transición para los trabajadores es detallado e incluye fases de diagnóstico, capacitación y reubicación, en coherencia con las normas ISO."
          },
          "comic": {
            "nota": 2,
            "retroalimentacion": "Se evidencia la conformación del grupo y la entrega de una portada con nombres, acompañada de una imagen visual. Sin embargo, la actividad está muy incompleta: no se presenta el cómic estructurado de 6 a 8 paneles con su historia, se omitió la bitácora obligatoria de 8 prompts y no se incluye la reflexión de cierre sobre el impacto social."
          },
          "cohete": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
          },
          "tragamonedas": {
            "nota": 0,
            "retroalimentacion": "No se evidencia entrega de la actividad, de ser un error por favor comunicarse con el docente."
          },
          "tinkercad": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
          },
          "pagina_bot": {
            "nota": 0,
            "retroalimentacion": "No se evidencia entrega de la actividad. Reportar con el docente en caso de existir algun error."
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
            "nota": 4,
            "retroalimentacion": "Buen trabajo. Se presenta una narrativa muy bien lograda con un guion detallado de 6 páginas y paneles de cómic completos. La historia integra el tema de la IA de forma muy creativa. La nota se ve afectada debido a que la bitácora de prompts está incompleta, documentando solo la instrucción inicial del guion y omitiendo los prompts específicos para la generación de las imágenes."
          },
          "cohete": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
          },
          "tragamonedas": {
            "nota": 0,
            "retroalimentacion": "No se evidencia entrega de la actividad, de ser un error por favor comunicarse con el docente."
          },
          "tinkercad": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
          },
          "pagina_bot": {
            "nota": 5,
            "retroalimentacion": "Excelente pagina, cumple con la integracion del chatbot."
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
            "nota": 4,
            "retroalimentacion": "Buen trabajo. Se presenta una narrativa muy bien lograda con un guion detallado de 6 páginas y paneles de cómic completos. La historia integra el tema de la IA de forma muy creativa. La nota se ve afectada debido a que la bitácora de prompts está incompleta, documentando solo la instrucción inicial del guion y omitiendo los prompts específicos para la generación de las imágenes."
          },
          "cohete": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
          },
          "tragamonedas": {
            "nota": 0,
            "retroalimentacion": "No se evidencia entrega de la actividad, de ser un error por favor comunicarse con el docente."
          },
          "tinkercad": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
          },
          "pagina_bot": {
            "nota": 5,
            "retroalimentacion": "Excelente pagina, cumple con la integracion del chatbot."
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
            "nota": 5,
            "retroalimentacion": "Buen trabajo. El equipo realizó un análisis detallado de los casos del tribunal de robótica. Demuestran una buena comprensión de la jerarquía de las leyes de Asimov y una adecuada delimitación de responsabilidades. La vinculación con las normativas ISO 10218, ISO/TS 15066 y la regulación de IA (EU AI Act) es correcta. El plan de transición propuesto para los trabajadores aborda de forma estructurada los aspectos de reconversión laboral."
          },
          "comic": {
            "nota": 3.5,
            "retroalimentacion": "Buen trabajo. El cómic presenta una narrativa interesante y una calidad visual adecuada en sus 7 paneles, junto con una reflexión valiosa sobre el arte y la IA. Sin embargo, no se entregó la bitácora de prompts de 8 registros (4 de texto y 4 de imagen) y omitieron los nombres de los integrantes en el documento final, lo cual disminuye la calificación final."
          },
          "cohete": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
          },
          "tragamonedas": {
            "nota": 5,
            "retroalimentacion": "Excelente trabajo se evidencia impresion 3d y funcionalidad del prototipo."
          },
          "tinkercad": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
          },
          "pagina_bot": {
            "nota": 5,
            "retroalimentacion": "Excelente pagina, cumple con la integracion del chatbot."
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
            "nota": 5,
            "retroalimentacion": "Buen trabajo. Se presenta un informe exhaustivo con un análisis detallado para cada uno de los 5 casos. El equipo demuestra un dominio claro de la jerarquía de las leyes de Asimov, con una buena explicación sobre la responsabilidad compartida según el tipo de fallo. El plan de transición para los trabajadores es detallado e incluye fases de diagnóstico, capacitación y reubicación, en coherencia con las normas ISO."
          },
          "comic": {
            "nota": 2,
            "retroalimentacion": "Se evidencia la conformación del grupo y la entrega de una portada con nombres, acompañada de una imagen visual. Sin embargo, la actividad está muy incompleta: no se presenta el cómic estructurado de 6 a 8 paneles con su historia, se omitió la bitácora obligatoria de 8 prompts y no se incluye la reflexión de cierre sobre el impacto social."
          },
          "cohete": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
          },
          "tragamonedas": {
            "nota": 0,
            "retroalimentacion": "No se evidencia entrega de la actividad, de ser un error por favor comunicarse con el docente."
          },
          "tinkercad": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
          },
          "pagina_bot": {
            "nota": 0,
            "retroalimentacion": "No se evidencia entrega de la actividad. Reportar con el docente en caso de existir algun error."
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
            "nota": 0,
            "retroalimentacion": "No se encontró registro de entrega o participación en los grupos de la actividad. Si hiciste parte de algún equipo y no fuiste registrado en la portada, por favor comunícate con el docente para revisar el caso."
          },
          "comic": {
            "nota": 0,
            "retroalimentacion": "No se encontró registro de entrega o participación en los grupos de la actividad. Si hiciste parte de algún equipo y no fuiste registrado en la portada, por favor comunícate con el docente para revisar el caso."
          },
          "cohete": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
          },
          "tragamonedas": {
            "nota": 0,
            "retroalimentacion": "No se evidencia entrega de la actividad, de ser un error por favor comunicarse con el docente."
          },
          "tinkercad": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
          },
          "pagina_bot": {
            "nota": 5,
            "retroalimentacion": "Excelente pagina, cumple con la integracion del chatbot."
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
            "nota": 5,
            "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
          },
          "tragamonedas": {
            "nota": 3,
            "retroalimentacion": "Solo mostraron evidencia de la impresion 3D."
          },
          "tinkercad": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
          },
          "pagina_bot": {
            "nota": 5,
            "retroalimentacion": "Excelente pagina, cumple con la integracion del chatbot."
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
            "nota": 5,
            "retroalimentacion": "Buen trabajo. La entrega cumple perfectamente con la rúbrica de la actividad. Se definieron con claridad los roles de cada integrante, el cómic cuenta con una narrativa coherente y estructurada, la bitácora de prompts está completamente documentada (con herramientas y observaciones de cambio) y cierran con una reflexión crítica excelente sobre la tecnología. Felicitaciones."
          },
          "cohete": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
          },
          "tragamonedas": {
            "nota": 0,
            "retroalimentacion": "No se evidencia entrega de la actividad, de ser un error por favor comunicarse con el docente."
          },
          "tinkercad": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
          },
          "pagina_bot": {
            "nota": 5,
            "retroalimentacion": "Excelente pagina, cumple con la integracion del chatbot."
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
            "nota": 5,
            "retroalimentacion": "Buen trabajo. La entrega cumple perfectamente con la rúbrica de la actividad. Se definieron con claridad los roles de cada integrante, el cómic cuenta con una narrativa coherente y estructurada, la bitácora de prompts está completamente documentada (con herramientas y observaciones de cambio) y cierran con una reflexión crítica excelente sobre la tecnología. Felicitaciones."
          },
          "cohete": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
          },
          "tragamonedas": {
            "nota": 0,
            "retroalimentacion": "No se evidencia entrega de la actividad, de ser un error por favor comunicarse con el docente."
          },
          "tinkercad": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
          },
          "pagina_bot": {
            "nota": 0,
            "retroalimentacion": "No se evidencia entrega de la actividad. Reportar con el docente en caso de existir algun error."
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
            "nota": 5,
            "retroalimentacion": "Buen trabajo. Se presenta un informe exhaustivo con un análisis detallado para cada uno de los 5 casos. El equipo demuestra un dominio claro de la jerarquía de las leyes de Asimov, con una buena explicación sobre la responsabilidad compartida según el tipo de fallo. El plan de transición para los trabajadores es detallado e incluye fases de diagnóstico, capacitación y reubicación, en coherencia con las normas ISO."
          },
          "comic": {
            "nota": 2,
            "retroalimentacion": "Se evidencia la conformación del grupo y la entrega de una portada con nombres, acompañada de una imagen visual. Sin embargo, la actividad está muy incompleta: no se presenta el cómic estructurado de 6 a 8 paneles con su historia, se omitió la bitácora obligatoria de 8 prompts y no se incluye la reflexión de cierre sobre el impacto social."
          },
          "cohete": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
          },
          "tragamonedas": {
            "nota": 0,
            "retroalimentacion": "No se evidencia entrega de la actividad, de ser un error por favor comunicarse con el docente."
          },
          "tinkercad": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
          },
          "pagina_bot": {
            "nota": 0,
            "retroalimentacion": "No se evidencia entrega de la actividad. Reportar con el docente en caso de existir algun error."
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
            "nota": 2,
            "retroalimentacion": "Se evidencia la conformación del grupo y la entrega de una portada con nombres, acompañada de una imagen visual. Sin embargo, la actividad está muy incompleta: no se presenta el cómic estructurado de 6 a 8 paneles con su historia, se omitió la bitácora obligatoria de 8 prompts y no se incluye la reflexión de cierre sobre el impacto social."
          },
          "cohete": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
          },
          "tragamonedas": {
            "nota": 0,
            "retroalimentacion": "No se evidencia entrega de la actividad, de ser un error por favor comunicarse con el docente."
          },
          "tinkercad": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
          },
          "pagina_bot": {
            "nota": 0,
            "retroalimentacion": "No se evidencia entrega de la actividad. Reportar con el docente en caso de existir algun error."
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
            "nota": 2,
            "retroalimentacion": "Se evidencia la conformación del grupo y la entrega de una portada con nombres, acompañada de una propuesta visual. Sin embargo, el entregable está muy incompleto: no se presenta el cómic estructurado de 6 a 8 paneles con su historia, se omitió la bitácora obligatoria de 8 prompts y no se incluye la reflexión de cierre sobre el impacto de la IA."
          },
          "cohete": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
          },
          "tragamonedas": {
            "nota": 0,
            "retroalimentacion": "No se evidencia entrega de la actividad, de ser un error por favor comunicarse con el docente."
          },
          "tinkercad": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
          },
          "pagina_bot": {
            "nota": 5,
            "retroalimentacion": "Excelente pagina, cumple con la integracion del chatbot."
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
            "nota": 5,
            "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
          },
          "tragamonedas": {
            "nota": 3,
            "retroalimentacion": "Solo mostraron evidencia de la impresion 3D."
          },
          "tinkercad": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
          },
          "pagina_bot": {
            "nota": 5,
            "retroalimentacion": "Excelente pagina, cumple con la integracion del chatbot."
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
            "nota": 5,
            "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
          },
          "tragamonedas": {
            "nota": 3,
            "retroalimentacion": "Solo mostraron evidencia de la impresion 3D."
          },
          "tinkercad": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
          },
          "pagina_bot": {
            "nota": 5,
            "retroalimentacion": "Excelente pagina, cumple con la integracion del chatbot."
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
            "nota": 0,
            "retroalimentacion": "No se encontró registro de entrega o participación en los grupos de la actividad. Si hiciste parte de algún equipo y no fuiste registrado en la portada, por favor comunícate con el docente para revisar el caso."
          },
          "comic": {
            "nota": 0,
            "retroalimentacion": "No se encontró registro de entrega o participación en los grupos de la actividad. Si hiciste parte de algún equipo y no fuiste registrado en la portada, por favor comunícate con el docente para revisar el caso."
          },
          "cohete": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
          },
          "tragamonedas": {
            "nota": 0,
            "retroalimentacion": "No se evidencia entrega de la actividad, de ser un error por favor comunicarse con el docente."
          },
          "tinkercad": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
          },
          "pagina_bot": {
            "nota": 5,
            "retroalimentacion": "Excelente pagina, cumple con la integracion del chatbot."
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
            "nota": 0,
            "retroalimentacion": "No se encontró registro de entrega o participación en los grupos de la actividad. Si hiciste parte de algún equipo y no fuiste registrado en la portada, por favor comunícate con el docente para revisar el caso."
          },
          "comic": {
            "nota": 0,
            "retroalimentacion": "No se encontró registro de entrega o participación en los grupos de la actividad. Si hiciste parte de algún equipo y no fuiste registrado en la portada, por favor comunícate con el docente para revisar el caso."
          },
          "cohete": {
            "nota": 0,
            "retroalimentacion": "No se encontró registro de participación o entrega en el lanzamiento de cohete."
          },
          "tragamonedas": {
            "nota": 0,
            "retroalimentacion": "No se evidencia entrega de la actividad, de ser un error por favor comunicarse con el docente."
          },
          "tinkercad": {
            "nota": 0,
            "retroalimentacion": "No se encontró registro de participación o entrega en la actividad de Tinkercad."
          },
          "pagina_bot": {
            "nota": 0,
            "retroalimentacion": "No se evidencia entrega de la actividad. Reportar con el docente en caso de existir algun error."
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
            "nota": 5,
            "retroalimentacion": "Buen trabajo. El equipo realizó un análisis detallado de los casos del tribunal de robótica. Demuestran una buena comprensión de la jerarquía de las leyes de Asimov y una adecuada delimitación de responsabilidades. La vinculación con las normativas ISO 10218, ISO/TS 15066 y la regulación de IA (EU AI Act) es correcta. El plan de transición propuesto para los trabajadores aborda de forma estructurada los aspectos de reconversión laboral."
          },
          "comic": {
            "nota": 3.5,
            "retroalimentacion": "Buen trabajo. El cómic presenta una narrativa interesante y una calidad visual adecuada en sus 7 paneles, junto con una reflexión valiosa sobre el arte y la IA. Sin embargo, no se entregó la bitácora de prompts de 8 registros (4 de texto y 4 de imagen) y omitieron los nombres de los integrantes en el documento final, lo cual disminuye la calificación final."
          },
          "cohete": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
          },
          "tragamonedas": {
            "nota": 5,
            "retroalimentacion": "Excelente trabajo se evidencia impresion 3d y funcionalidad del prototipo."
          },
          "tinkercad": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
          },
          "pagina_bot": {
            "nota": 5,
            "retroalimentacion": "Excelente pagina, cumple con la integracion del chatbot."
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
            "nota": 5,
            "retroalimentacion": "Buen trabajo. La entrega cumple perfectamente con la rúbrica de la actividad. Se definieron con claridad los roles de cada integrante, el cómic cuenta con una narrativa coherente y estructurada, la bitácora de prompts está completamente documentada (con herramientas y observaciones de cambio) y cierran con una reflexión crítica excelente sobre la tecnología. Felicitaciones."
          },
          "cohete": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
          },
          "tragamonedas": {
            "nota": 0,
            "retroalimentacion": "No se evidencia entrega de la actividad, de ser un error por favor comunicarse con el docente."
          },
          "tinkercad": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
          },
          "pagina_bot": {
            "nota": 0,
            "retroalimentacion": "No se evidencia entrega de la actividad. Reportar con el docente en caso de existir algun error."
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
            "nota": 5,
            "retroalimentacion": "Buen trabajo. Se presenta un informe exhaustivo con un análisis detallado para cada uno de los 5 casos. El equipo demuestra un dominio claro de la jerarquía de las leyes de Asimov, con una buena explicación sobre la responsabilidad compartida según el tipo de fallo. El plan de transición para los trabajadores es detallado e incluye fases de diagnóstico, capacitación y reubicación, en coherencia con las normas ISO."
          },
          "comic": {
            "nota": 2,
            "retroalimentacion": "Se evidencia la conformación del grupo y la entrega de una portada con nombres, acompañada de una imagen visual. Sin embargo, la actividad está muy incompleta: no se presenta el cómic estructurado de 6 a 8 paneles con su historia, se omitió la bitácora obligatoria de 8 prompts y no se incluye la reflexión de cierre sobre el impacto social."
          },
          "cohete": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
          },
          "tragamonedas": {
            "nota": 0,
            "retroalimentacion": "No se evidencia entrega de la actividad, de ser un error por favor comunicarse con el docente."
          },
          "tinkercad": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
          },
          "pagina_bot": {
            "nota": 0,
            "retroalimentacion": "No se evidencia entrega de la actividad. Reportar con el docente en caso de existir algun error."
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
            "nota": 4,
            "retroalimentacion": "Buen trabajo. Se presenta una narrativa muy bien lograda con un guion detallado de 6 páginas y paneles de cómic completos. La historia integra el tema de la IA de forma muy creativa. La nota se ve afectada debido a que la bitácora de prompts está incompleta, documentando solo la instrucción inicial del guion y omitiendo los prompts específicos para la generación de las imágenes."
          },
          "cohete": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
          },
          "tragamonedas": {
            "nota": 0,
            "retroalimentacion": "No se evidencia entrega de la actividad, de ser un error por favor comunicarse con el docente."
          },
          "tinkercad": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
          },
          "pagina_bot": {
            "nota": 5,
            "retroalimentacion": "Excelente pagina, cumple con la integracion del chatbot."
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
            "nota": 5,
            "retroalimentacion": "Buen trabajo. La entrega cumple perfectamente con la rúbrica de la actividad. Se definieron con claridad los roles de cada integrante, el cómic cuenta con una narrativa coherente y estructurada, la bitácora de prompts está completamente documentada (con herramientas y observaciones de cambio) y cierran con una reflexión crítica excelente sobre la tecnología. Felicitaciones."
          },
          "cohete": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
          },
          "tragamonedas": {
            "nota": 0,
            "retroalimentacion": "No se evidencia entrega de la actividad, de ser un error por favor comunicarse con el docente."
          },
          "tinkercad": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
          },
          "pagina_bot": {
            "nota": 5,
            "retroalimentacion": "Excelente pagina, cumple con la integracion del chatbot."
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
            "nota": 2,
            "retroalimentacion": "Se evidencia la conformación del grupo y la entrega de una portada con nombres, acompañada de una propuesta visual. Sin embargo, el entregable está muy incompleto: no se presenta el cómic estructurado de 6 a 8 paneles con su historia, se omitió la bitácora obligatoria de 8 prompts y no se incluye la reflexión de cierre sobre el impacto de la IA."
          },
          "cohete": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
          },
          "tragamonedas": {
            "nota": 0,
            "retroalimentacion": "No se evidencia entrega de la actividad, de ser un error por favor comunicarse con el docente."
          },
          "tinkercad": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
          },
          "pagina_bot": {
            "nota": 5,
            "retroalimentacion": "Excelente pagina, cumple con la integracion del chatbot."
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
            "nota": 2,
            "retroalimentacion": "Se evidencia la conformación del grupo y la entrega de una portada con nombres, acompañada de una propuesta visual. Sin embargo, el entregable está muy incompleto: no se presenta el cómic estructurado de 6 a 8 paneles con su historia, se omitió la bitácora obligatoria de 8 prompts y no se incluye la reflexión de cierre sobre el impacto de la IA."
          },
          "cohete": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
          },
          "tragamonedas": {
            "nota": 0,
            "retroalimentacion": "No se evidencia entrega de la actividad, de ser un error por favor comunicarse con el docente."
          },
          "tinkercad": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
          },
          "pagina_bot": {
            "nota": 5,
            "retroalimentacion": "Excelente pagina, cumple con la integracion del chatbot."
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
            "nota": 5,
            "retroalimentacion": "Buen trabajo. El equipo realizó un análisis detallado de los casos del tribunal de robótica. Demuestran una buena comprensión de la jerarquía de las leyes de Asimov y una adecuada delimitación de responsabilidades. La vinculación con las normativas ISO 10218, ISO/TS 15066 y la regulación de IA (EU AI Act) es correcta. El plan de transición propuesto para los trabajadores aborda de forma estructurada los aspectos de reconversión laboral."
          },
          "comic": {
            "nota": 3.5,
            "retroalimentacion": "Buen trabajo. El cómic presenta una narrativa interesante y una calidad visual adecuada en sus 7 paneles, junto con una reflexión valiosa sobre el arte y la IA. Sin embargo, no se entregó la bitácora de prompts de 8 registros (4 de texto y 4 de imagen) y omitieron los nombres de los integrantes en el documento final, lo cual disminuye la calificación final."
          },
          "cohete": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
          },
          "tragamonedas": {
            "nota": 5,
            "retroalimentacion": "Excelente trabajo se evidencia impresion 3d y funcionalidad del prototipo."
          },
          "tinkercad": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
          },
          "pagina_bot": {
            "nota": 5,
            "retroalimentacion": "Excelente pagina, cumple con la integracion del chatbot."
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
            "nota": 5,
            "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
          },
          "tragamonedas": {
            "nota": 3,
            "retroalimentacion": "Solo mostraron evidencia de la impresion 3D."
          },
          "tinkercad": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
          },
          "pagina_bot": {
            "nota": 5,
            "retroalimentacion": "Excelente pagina, cumple con la integracion del chatbot."
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
            "nota": 4,
            "retroalimentacion": "Buen trabajo. Se presenta una narrativa muy bien lograda con un guion detallado de 6 páginas y paneles de cómic completos. La historia integra el tema de la IA de forma muy creativa. La nota se ve afectada debido a que la bitácora de prompts está incompleta, documentando solo la instrucción inicial del guion y omitiendo los prompts específicos para la generación de las imágenes."
          },
          "cohete": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
          },
          "tragamonedas": {
            "nota": 0,
            "retroalimentacion": "No se evidencia entrega de la actividad, de ser un error por favor comunicarse con el docente."
          },
          "tinkercad": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
          },
          "pagina_bot": {
            "nota": 5,
            "retroalimentacion": "Excelente pagina, cumple con la integracion del chatbot."
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
            "nota": 5,
            "retroalimentacion": "Buen trabajo. El equipo realizó un análisis detallado de los casos del tribunal de robótica. Demuestran una buena comprensión de la jerarquía de las leyes de Asimov y una adecuada delimitación de responsabilidades. La vinculación con las normativas ISO 10218, ISO/TS 15066 y la regulación de IA (EU AI Act) es correcta. El plan de transición propuesto para los trabajadores aborda de forma estructurada los aspectos de reconversión laboral."
          },
          "comic": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. Presentan un informe de alta calidad y muy bien estructurado. Cumplen de forma sobresaliente con todos los aspectos solicitados: definición de roles, narrativa coherente en torno al campo y el robot, una bitácora de prompts completa y detallada para texto e imagen, y una frase de cierre con una reflexión crítica muy madura. Felicitaciones."
          },
          "cohete": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
          },
          "tragamonedas": {
            "nota": 5,
            "retroalimentacion": "Excelente trabajo se evidencia impresion 3d y funcionalidad del prototipo."
          },
          "tinkercad": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
          },
          "pagina_bot": {
            "nota": 5,
            "retroalimentacion": "Excelente pagina, cumple con la integracion del chatbot."
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
            "nota": 5,
            "retroalimentacion": "Buen trabajo. El equipo realizó un análisis detallado de los casos del tribunal de robótica. Demuestran una buena comprensión de la jerarquía de las leyes de Asimov y una adecuada delimitación de responsabilidades. La vinculación con las normativas ISO 10218, ISO/TS 15066 y la regulación de IA (EU AI Act) es correcta. El plan de transición propuesto para los trabajadores aborda de forma estructurada los aspectos de reconversión laboral."
          },
          "comic": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. Presentan un informe de alta calidad y muy bien estructurado. Cumplen de forma sobresaliente con todos los aspectos solicitados: definición de roles, narrativa coherente en torno al campo y el robot, una bitácora de prompts completa y detallada para texto e imagen, y una frase de cierre con una reflexión crítica muy madura. Felicitaciones."
          },
          "cohete": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. El cohete vuela satisfactoriamente en una muestra en vivo. Felicidades por el trabajo."
          },
          "tragamonedas": {
            "nota": 5,
            "retroalimentacion": "Excelente trabajo se evidencia impresion 3d y funcionalidad del prototipo."
          },
          "tinkercad": {
            "nota": 5,
            "retroalimentacion": "Buen trabajo. Se evidencia trabajo en clase. Felicidades por el trabajo."
          },
          "pagina_bot": {
            "nota": 5,
            "retroalimentacion": "Excelente pagina, cumple con la integracion del chatbot."
          }
        }
      }
    ]
  },
  "sistemas_embebidos": {
    "name": "Sistemas Embebidos",
    "subtitle": "Universidad del Valle - Sede Tuluá",
    "activities": [
      {
        "id": "lab1",
        "name": "Laboratorio 1",
        "weight": 0.25,
        "icon": "fa-microchip",
        "colorClass": "text-tinkercad",
        "rubrics": [
          {
            "name": "Esquema y Conexiones",
            "weight": "30%"
          },
          {
            "name": "Código y Lógica",
            "weight": "40%"
          },
          {
            "name": "Funcionamiento Práctico",
            "weight": "30%"
          }
        ],
        "description": "Desarrollo y simulación del primer laboratorio de periféricos de entrada y salida."
      },
      {
        "id": "lab2",
        "name": "Laboratorio 2",
        "weight": 0.25,
        "icon": "fa-clock",
        "colorClass": "text-tribunal",
        "rubrics": [
          {
            "name": "Uso de Temporizadores",
            "weight": "40%"
          },
          {
            "name": "Precisión de Medidas",
            "weight": "30%"
          },
          {
            "name": "Informe Técnico",
            "weight": "30%"
          }
        ],
        "description": "Laboratorio práctico sobre contadores y temporizadores (Timers)."
      },
      {
        "id": "proyecto",
        "name": "Proyecto Final",
        "weight": 0.5,
        "icon": "fa-robot",
        "colorClass": "text-comic",
        "rubrics": [
          {
            "name": "Diseño de Hardware",
            "weight": "30%"
          },
          {
            "name": "Firmware y Código",
            "weight": "40%"
          },
          {
            "name": "Sustentación",
            "weight": "30%"
          }
        ],
        "description": "Proyecto final integrador de sistemas embebidos de alto rendimiento."
      }
    ],
    "students": [
      {
        "codigo": "202500000",
        "nombre": "ESTUDIANTE DE PRUEBA (DEMO EMBEBIDOS)",
        "correo": "estudiante.prueba.embebidos@correounivalle.edu.co",
        "programa": "3743",
        "notas": {
          "lab1": {
            "nota": 4.8,
            "retroalimentacion": "Excelente implementación del circuito de leds y pulsadores. Código bien comentado."
          },
          "lab2": {
            "nota": 4.5,
            "retroalimentacion": "Buena precisión en el frecuencímetro. Se recomienda optimizar el uso de interrupciones."
          },
          "proyecto": {
            "nota": 5,
            "retroalimentacion": "Proyecto final sobresaliente. Excelente sustentación y diseño del firmware."
          }
        }
      }
    ]
  }
};
