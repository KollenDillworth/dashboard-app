'use client'
import styles from './page.module.css'
import CardComponent  from '../components/cardComponent'
import tableData from '../json/tableData.json'

export default function Home() {
  // const tableList = tableData.map(table => 
  //   <div key={table.id} className='row'>
  //     <div className='col-4'>
  //       <CardComponent name={table.name} status={table.status} number={table.number} description={table.description}></CardComponent>
  //     </div>
  //   </div>
  // ); 

  const filteredTable = tableData.filter((item) => 
    {
      if(item.id === "2" || item.id === "1"){
        return item;
      }
    }
  )

  const tableList = (
    <div className='row'>
      {
        filteredTable.map( table=> 
          <div className='col-3'>
            <CardComponent name={table.name} status={table.status} number={table.number} description={table.description}></CardComponent>
          </div>
        )
      }
    </div>
  )
  return (
    <main className={styles.main}>
     {tableList}
    </main>
  )
}
