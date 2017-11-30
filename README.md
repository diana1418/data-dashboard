# Data Dashboard

* **Track:** _Common Core_
* **Curso:** _Creando tu primer sitio web interactivo_
* **Unidad:** _Producto final_

## Flujo de trabajo

1. Se realizó un [**fork**](https://gist.github.com/ivandevp/1de47ae69a5e139a6622d78c882e1f74)
   de este repositorio.

2. Luego una de nosotras **clonó** el fork y la otra persona sólo clonó para trabajar colaborativamente.
 
3. Se deplegó el archivo en la rama GH-PAGES.

4. Al finalizar el producto se enviará un Pull Request a este repositorio.

## Funcionalidad del Proyecto

1. Se muestra una pantalla donde se visualiza un proyecto estilo **Dashboard** que al seleccionar los valores mediante `select` obtiene la data de:

* El total de estudiantes presentes por sede y generación.
* El porcentaje de deserción de estudiantes.
* La cantidad de estudiantes que superan la meta de puntos en promedio de todos los sprints cursados. La meta de puntos es 70% del total de puntos en HSE y en tech.
* El porcentaje que representa el dato anterior en relación al total de estudiantes.
* El Net Promoter Score (NPS) promedio de los sprints cursados. El NPS se calcula en base a la encuesta que las estudiantes responden al respecto de la recomendación que darían de Laboratoria, bajo la siguiente fórmula:

`[Promoters] = [Respuestas 9 o 10] / [Total respuestas] * 100`
`[Passive] = [Respuestas 7 u 8] / [Total respuestas] * 100`
`[Detractors] = [Respuestas entre 1 y 6] / [Total respuestas] * 100`

`[NPS] = [Promoters] - [Detractors]`

* La cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos técnicos en promedio y por sprint.
* La cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos de HSE en promedio y por sprint.
* El porcentaje de estudiantes satisfechas con la experiencia de Laboratoria.
* La puntuación promedio de l@s profesores.
* La puntuación promedio de l@s jedi masters.


## Autoras

* Diana Huamanchay
* Molly Siesquén