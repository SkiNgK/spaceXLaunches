import React from 'react'
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import moment from 'moment'

import './index.css'

const customStyles = {
  rows: {
    style: {
      '&:hover': {
        backgroundColor: '#213D8B',
        color: 'white',
        transition: '.2s'
      },
    }
  },
};

export default function LaunchsTable({ launches }) {

  //datatable config
  const data = launches
  const columns = [
    {
      name: 'Missão',
      selector: 'mission_name',
      sortable: false,
      width: '25%',
    },
    {
      name: 'Foguete',
      selector: 'rocket.rocket_name',
      sortable: false,
      width: '15%',
    },
    {
      name: 'Local de lançamento',
      selector: 'launch_site.site_name',
      sortable: false,
      width: '20%',
    },
    {
      name: 'Conclusão',
      selector: 'launch_success',
      cell: row => {
        if (row.launch_success) {
          return <span className="success">Sucesso</span>
        } else {
          return <span className="failure">Fracasso</span>
        }
      },
      sortable: false,
      width: '20%',
    },
    {
      name: 'Data do lançamento',
      format: row => moment.utc(row.launch_date_utc).local().format('DD/MM/YYYY HH:mm:ss'),
      selector: 'launch_date_utc',
      sortable: true,
      width: '20%',
    },
  ];

  const tableData = {
    data,
    columns
  };

  return (
    <div className='LaunchsTable'>
      {
        launches &&
        <DataTableExtensions
          {...tableData}
          filterPlaceholder="Pesquisar lançamentos"
          print={false}
          export={false}
          exportHeaders={true}>
          <DataTable
            columns={columns}
            data={data}
            noDataComponent={
              <span>Nenhum versão registrada</span>
            }
            pagination={true}
            customStyles={customStyles}
          />
        </DataTableExtensions>
        // :
        // <div>
        //   Sem dados
        // </div>
      }
    </div>
  )
}
