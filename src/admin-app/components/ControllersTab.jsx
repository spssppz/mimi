import React from 'react';
import CrudTable from './CrudTable';

function ControllersTab() {
  return (
    <CrudTable
      entity="controllers"
      fields={['name', 'model', 'description', 'image_url', 'status', 'created_at', 'updated_at']}
      title="Управление контроллерами"
      icon="C"
    />
  );
}

export default ControllersTab;
