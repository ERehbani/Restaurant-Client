"use client";
import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { analytics, app, db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

function NewPlate() {
  // validacion y leer los datos del formulario
  const formik = useFormik({
    initialValues: {
      nombre: "",
      precio: "",
      categoria: "",
      imagen: "",
      descripcion: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .min(3, "Los Platillos deben tener al menos 3 caracteres")
        .required("El nombre es obligatorio"),
      precio: Yup.number()
        .min(1, "Debes agregar un precio")
        .required("El precio es obligatorio"),
      categoria: Yup.string().required("La categoría es obligatoria"),
      descripcion: Yup.string()
        .min(10, "La descripcion debe ser mas larga")
        .required("La descripcion es obligatoria"),
    }),
    onSubmit: async (datos) => {
      try {
        await addDoc(collection(db, "plates"), {
          datos,
        });
      } catch (error) {}
    },
  });

  return (
    <div>
      <h1>Nuevo Platillo</h1>
      <div className="flex justify-center mt-10">
        <div className=" max-w-3xl w-full">
          <form action="" onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="nombre"
                className="block text-gray-700 text-sm font-bold mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                placeholder="Nombre del Platillo"
                value={formik.values.nombre}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[0.5px] focus:shadow-outline"
              />
            </div>

            {formik.touched.nombre && formik.errors.nombre ? (
              <div
                className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5"
                role="alert">
                <p className="font-bold">Error: </p>
                <p>{formik.errors.nombre}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                htmlFor="Precio"
                className="block text-gray-700 text-sm font-bold mb-2">
                Precio
              </label>
              <input
                type="number"
                id="precio"
                placeholder="$20"
                min="0"
                value={formik.values.precio}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[0.5px] focus:shadow-outline"
              />
            </div>

            {formik.touched.precio && formik.errors.precio ? (
              <div
                className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5"
                role="alert">
                <p className="font-bold">Error: </p>
                <p>{formik.errors.precio}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                htmlFor="Categoria"
                className="block text-gray-700 text-sm font-bold mb-2">
                Categoria
              </label>
              <select
                name="categoria"
                id="categoria"
                value={formik.values.categoria}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[0.5px] focus:shadow-outline">
                <option value="">-- Seleccione --</option>
                <option value="desayuno">Desayuno</option>
                <option value="comida">Comida</option>
                <option value="cena">Cena</option>
                <option value="bebida">Bebidas</option>
                <option value="postre">Postre</option>
                <option value="ensalada">Ensaladas</option>
              </select>
            </div>

            {formik.touched.categoria && formik.errors.categoria ? (
              <div
                className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5"
                role="alert">
                <p className="font-bold">Error: </p>
                <p>{formik.errors.categoria}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                htmlFor="imagen"
                className="block text-gray-700 text-sm font-bold mb-2">
                Imagen
              </label>
              <input
                type="file"
                id="imagen"
                value={formik.values.imagen}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[0.5px] focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="descripcion"
                className="block text-gray-700 text-sm font-bold mb-2">
                Descripcion
              </label>
              <textarea
                id="descripcion"
                placeholder="Descripcion del Platillo"
                value={formik.values.descripcion}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[0.5px] focus:shadow-outline h-40"></textarea>
            </div>
            {formik.touched.descripcion && formik.errors.descripcion ? (
              <div
                className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5"
                role="alert">
                <p className="font-bold">Error: </p>
                <p>{formik.errors.descripcion}</p>
              </div>
            ) : null}

            <input
              type="submit"
              className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-semibold"
              value="Agregar Platillo"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewPlate;
