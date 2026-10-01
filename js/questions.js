// Respuestas correctas para el Quiz - 30 Preguntas
const correctAnswers = {
          // Preguntas 1-8: Recorrido y Operaciones con Matrices (Ciclos FOR)
          q1: ["matriz", "fila", "end", "print"],        // 1. Recorrido por Valor con FOR
          q2: ["range", "i", "j", "+="],                 // 2. Suma Total de Elementos por Índices
          q3: ["False", "==", "break", "encontrado"],    // 3. Búsqueda con FOR y Bandera
          q4: ["len", "i", "*=", "matriz"],              // 4. Modificación In-Place por Factor
          q5: ["fila", "%", "+=", "else"],               // 5. Conteo de Pares e Impares
          q6: ["0", ">", "maximo", "j"],                 // 6. Valor Máximo y Coordenadas
          q7: ["len", "range", "+=", "i"],               // 7. Suma de Diagonal Principal
          q8: ["0", "fila", "+=", "append"],             // 8. Suma por Filas Individuales

          // Preguntas 9-15: Búsqueda, Filtrado y Operaciones con Matrices (Ciclos WHILE)
          q9: ["while", "0", "<", "+="],                 // 9. Recorrido con WHILE Anidados
          q10: ["False", "valor_buscado", "break", "encontrado"], // 10. Búsqueda con WHILE y Parada
          q11: ["0", ">", "+=", "1"],                    // 11. Suma Condicional con WHILE (> 50)
          q12: ["matriz", "fila", "append", "lista_plana"], // 12. Aplanar Matriz a 1D (Flattening)
          q13: ["range", "<", "0", "matriz"],            // 13. Reemplazo de Negativos In-Place
          q14: ["len", "columnas", "i", "append"],       // 14. Matriz Transpuesta
          q15: ["0", "%", "+=", "1"],                    // 15. Conteo de Múltiplos de 3 con WHILE

          // Preguntas 16-30: Creación y Manipulación de Matrices (26 puntos)
          q16: ["range", "columnas", "append", "matriz"],   // 16. Matriz con Valores Constantes
          q17: ["range", "==", "else", "append"],           // 17. Matriz Identidad con Condicional
          q18: ["1", "range", "+=", "fila"],                // 18. Matriz Secuencial Acumulativa
          q19: ["range", "*", "append", "tabla"],           // 19. Matriz Tabla de Multiplicar
          q20: ["<", "0", "append", "+="],                  // 20. Matriz con Ciclos WHILE Anidados
          q21: ["range", "idx", "1", "matriz"],             // 21. Matriz desde Lista Plana (1D a 2D)
          q22: ["len", "==", "i", "append"],                // 22. Matriz Diagonal con Lista de Valores
          q23: ["range", "<=", "else", "fila"],             // 23. Matriz Triangular Superior
          q24: ["range", "+", "%", "append"],               // 24. Matriz con Patrón de Ajedrez
          q25: ["range", "columnas", "append", "+="],       // 25. Matriz con Números Pares Consecutivos
          q26: ["range", "<", "append", "matriz"],          // 26. Matriz con Entrada y Filtrado Negativos
          q27: ["range", "range", "append", "fila"],        // 27. Matriz con Coordenadas Formateadas
          q28: ["range", "**", "append", "matriz"],         // 28. Matriz con Potencias Matemáticas
          q29: ["while", "<", "append", "+="],              // 29. Matriz WHILE con Suma de Índices
          q30: ["range", "columnas", "append", "append"]    // 30. Matriz FOR con Entrada de Usuario
        };
        
        // Valores de puntos para cada pregunta (Total: 50 puntos)
        const pointValues = {
          // Preguntas 1-8: Recorrido y Operaciones con Matrices (Ciclos FOR) (12 puntos)
          q1: 1, q2: 2, q3: 2, q4: 2,
          q5: 1, q6: 1, q7: 1, q8: 2,
          // Preguntas 9-15: Búsqueda, Filtrado y Operaciones con Matrices (Ciclos WHILE) (12 puntos)
          q9: 2, q10: 2, q11: 2, q12: 1, q13: 1, q14: 2, q15: 2,
          // Preguntas 16-30: Creación y Manipulación de Matrices (26 puntos)
          q16: 2, q17: 2, q18: 2, q19: 2, q20: 2,
          q21: 2, q22: 2, q23: 2, q24: 2,
          q25: 1, q26: 2, q27: 1, q28: 2, q29: 1, q30: 1
        };