import React from 'react';
import './TodosLoading.css';

// https://skeletonreact.com/
// https://platzi.com/blog/ui-stack/
// https://platzi.com/blog/tutorial-como-crear-una-animacion-de-carga-de-contenido-tipo-facebook/

function TodosLoading() {
  return (
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-completeIcon"></span>
      <p className="LoadingTodo-text">Cargando TODOs...</p>
      <span className="LoadingTodo-deleteIcon"></span>
    </div>
  );
}

export { TodosLoading };